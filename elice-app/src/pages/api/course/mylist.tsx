import { connectDB } from '@/util/db'
import OrgCourseListResponses from '@/type/typings'

export default async function List(request: any, response: any) {
  try {
    if (request.method !== 'GET') {
      throw new Error('Invalid HTTP method. Expected GET.')
    }

    const db = (await connectDB).db('elice')
    const query = JSON.parse(request.query.filter_conditions)

    if (query.$and[0].title === '') {
      delete query.$and[0].title
    }

    if (query.$and[1].$or.length === 0) {
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

    const course = result.map((course) => {
      return {
        id: course._id.toString(),
        title: course.title,
        enroll_type: course.enroll_type,
        is_free: course.is_free,
        short_description: course.short_description,
        logo_file_url: course.logo_file_url,
      }
    })

    const data = {
      courseCount: courseCount as OrgCourseListResponses['courseCount'],
      courses: course as OrgCourseListResponses['courses'],
    }

    return response.status(200).json(data)
  } catch (error) {
    console.error('Error in List function:', error)
    return response.status(500).json({ error: 'Internal Server Error' })
  }
}
