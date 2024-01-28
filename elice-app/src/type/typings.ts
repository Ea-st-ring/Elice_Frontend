export default interface OrgCourseListResponses {
  courseCount: number
  courses: {
    id: string
    title: string
    short_description: string
    logo_file_url: null | string
    enroll_type: number
    is_free: boolean
  }[]
}
