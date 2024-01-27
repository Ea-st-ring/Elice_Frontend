import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import CourseCard from './CourseCard'
import Pagination from './Pagination'
import OrgCourseListResponses from '@/type/typings'
import Loading from './Loading'
import NoResult from './NoResult'

interface Props {
  countPerPage: number
  offset: number
  handlePageChange: (page: number) => void
  loading: boolean
  current: number
  setCurrent: (page: number) => void
}

const Course: React.FC<Props & OrgCourseListResponses> = ({
  countPerPage,
  offset,
  handlePageChange,
  courseCount,
  courses,
  loading,
  current,
  setCurrent,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    ref.current?.scrollIntoView()
  }, [current])

  if (loading) {
    return <Loading />
  }

  return (
    <Wrapper ref={ref}>
      {courseCount === 0 ? (
        <NoResult />
      ) : (
        <>
          <CountDiv>전체 {courseCount}개</CountDiv>
          <Divider />
          <CourseDiv>
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </CourseDiv>
          <Pagination
            countPerPage={countPerPage}
            offset={offset}
            handlePageChange={handlePageChange}
            courseCount={courseCount}
            current={current}
            setCurrent={setCurrent}
          />
        </>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 16px;
`

const CountDiv = styled.div`
  width: 100%;
  padding: 0.75rem 0;
  font-size: 0.75rem;
  color: #222;
  font-weight: 700;
`

const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid rgb(221, 221, 221);
`

const CourseDiv = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: repeat(auto-fill, minmax(296px, 1fr));
  grid-gap: 16px !important;
  place-items: center;
  margin-top: 16px;
`

export default React.memo(Course)
