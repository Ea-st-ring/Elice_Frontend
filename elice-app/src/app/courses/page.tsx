'use client'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Search from './Search'
import Filter from './Filter'
import Course from './Course'
import axios from 'axios'

const Page = () => {
  const [courses, setCourses] = useState([])
  const [currentCourses, setCurrentCourses] = useState([])
  const [courseCount, setCourseCount] = useState(0)
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(true)
  const countPerPage = 20
  const fetchData = async () => {
    await axios.get('/api/course/list').then((res) => {
      // 쿼리에 따라 처리 필요
      setCourseCount(res.data.courseCount)
      setCourses(res.data.courses)
      console.log(res.data.courses)
      setCurrentCourses(res.data.courses.slice(offset, offset + countPerPage))
      setLoading(false)
    })
  }
  useEffect(() => {
    fetchData()
  }, [offset])
  const handlePageChange = (page: number) => {
    if (page < 1 || page > Math.ceil(courseCount / countPerPage)) {
      return
    }

    setOffset((page - 1) * countPerPage)
  }

  return (
    <Container>
      <SearchHeader>
        <Search />
        <Filter />
      </SearchHeader>
      <Course
        courseCount={courseCount}
        courses={currentCourses}
        countPerPage={countPerPage}
        offset={offset}
        handlePageChange={handlePageChange}
        loading={loading}
      ></Course>
    </Container>
  )
}

const Container = styled.div`
  width: 1280px;
  height: fit-content;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f1f3;
  border-radius: 10px;
  font-family: 'Pretendard';
  @media screen and (max-width: 1280px) {
    width: 100vw;
  }
`

const SearchHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export default Page
