export default interface OrgCourseListResponses {
  courseCount: number;
  courses: {
    id: string;
    title: string;
    shortDescription: string;
    logoFileUrl: null | string;
    enrollType: number;
    isFree: boolean;
  }[];
}