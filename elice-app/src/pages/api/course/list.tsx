import { connectDB } from '@/util/db'
import OrgCourseListResponses from '@/type/typings'

export default async function List(request: any, response: any) {
  if (request.method == 'GET') {
    const db = (await connectDB).db('elice')
    const query = JSON.parse(request.query.filter_conditions)
    if (query.$and[0].title == '') {
      delete query.$and[0].title
    }
    if (query.$and[1].$or.length == 0) {
      delete query.$and[1].$or
    }

    const offset = parseInt(request.query.offset)
    const countPerPage = parseInt(request.query.countPerPage)

    const result = await db
      .collection('course')
      .find(query)
      .limit(countPerPage)
      .skip(offset)
      .toArray()
    const courseCount = await db.collection('course').countDocuments(query)
    var course = result.map((course) => {
      return {
        id: course._id.toString(),
        title: course.title,
        enrollType: course.enroll_type,
        isFree: course.is_free,
        shortDescription: course.short_description,
        logoFileUrl: course.logo_file_url,
      }
    })

    const data = {
      courseCount: courseCount as OrgCourseListResponses['courseCount'],
      courses: course as OrgCourseListResponses['courses'],
    } as OrgCourseListResponses
    return response.status(200).json(data)
  }
}
