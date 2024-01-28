import OrgCourseListResponses from '@/type/typings'
import axios from 'axios'

export default async function List(request: any, response: any) {
  try {
    if (request.method !== 'GET') {
      throw new Error('Invalid HTTP method. Expected GET.')
    }

    if (!request.query.offset || !request.query.countPerPage) {
      throw new Error(
        'Invalid Parameter, Valid Parameter: offset, countPerPage',
      )
    }

    const query = JSON.parse(request.query.filter_conditions)

    if (query.$and[0].title === '') {
      delete query.$and[0].title
    }

    if (query.$and[1].$or.length === 0) {
      delete query.$and[1].$or
    }

    const offset = parseInt(request.query.offset)
    const countPerPage = parseInt(request.query.countPerPage)
    let courseCount = 0
    const result = await axios
      .get(
        `${process.env.API_URL}/academy/course/list/?offset=${offset}&count=${countPerPage}&filter_conditions=${JSON.stringify(query)}`,
      )
      .then((res) => {
        let arr = [] as OrgCourseListResponses['courses']
        for (let i of res.data.courses) {
          arr.push(i)
        }
        courseCount = res.data.course_count
        return arr
      })
      .catch((err) => {
        console.log(err)
      })

    const course = result?.map((course) => {
      return {
        id: course.id.toString(),
        title: course.title,
        enrollType: course.enroll_type,
        isFree: course.is_free,
        shortDescription: course.short_description,
        logoFileUrl: course.logo_file_url,
      }
    })

    const data = {
      courseCount: courseCount,
      courses: course as OrgCourseListResponses['courses'],
    } as OrgCourseListResponses

    return response.status(200).json(data)
  } catch (error) {
    console.error('Error in List function:', error)
    return response.status(500).json({ error: (error as string).toString() })
  }
}
