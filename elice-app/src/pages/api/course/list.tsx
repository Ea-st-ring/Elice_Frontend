import { connectDB } from '@/util/db'
import OrgCourseListResponses from '@/type/typings'

export default async function List(request: any, response: any) {
  if (request.method == 'GET') {
    const db = (await connectDB).db('elice')
    let result = await db.collection('course').find().toArray()

    let course = result.map((course) => {
      return {
        id: course._id,
        title: course.title,
        description: course.description,
        enrollType: course.enroll_type,
        isFree: course.is_free,
        shortDescription: course.short_description,
        logoFileUrl: course.logo_file_url,
      }
    })
    // 조건에 맞지 않는 데이터 제거
    course = course.filter((course) => {
      return (
        course.logoFileUrl != null &&
        course.enrollType != 5 &&
        course.enrollType != 1 &&
        course.shortDescription != null
      )
    })
    // 중복 데이터 제거
    course = course.filter((course, index, self) => {
      return (
        index ===
        self.findIndex((t) => {
          return t.title === course.title
        })
      )
    })
    let courseCount = course.length
    result = { courseCount: courseCount, courses: course } as unknown as OrgCourseListResponses

    return response.status(200).json(result)
  }
}
