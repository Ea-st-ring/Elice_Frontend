'use client'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Search from './Search'
import Filter from './Filter'
import Course from './Course'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'

const Page = () => {
  const [courses, setCourses] = useState([])
  const [courseCount, setCourseCount] = useState(0)
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(true)
  const [current, setCurrent] = useState(1)
  const countPerPage = 20
  const params = useSearchParams()
  const keyword = params.get('keyword')
  const price = params.getAll('price')
  const handlePageChange = (page: number) => {
    setOffset((page - 1) * countPerPage)
    setLoading(true)
    
    if (page < 1 || page > Math.ceil(courseCount / countPerPage)) {
      return
    }
    
  }


  const filter_conditions = JSON.stringify({
    $and: [
      { title: keyword ? { $regex: `${keyword}` } : '' },
      {
        $or: [
          price.includes('무료') ? { enroll_type: 0, is_free: true } : null,
          price.includes('유료') ? { enroll_type: 0, is_free: false } : null,
          price.includes('구독') ? { enroll_type: 4 } : null,
        ].filter((condition) => condition !== null),
      },
    ],
  })

  const fetchData = async () => {
    await axios
      .get('/api/course/list', {
        params: {
          filter_conditions,
          offset: offset,
          countPerPage: countPerPage,
        },
      })
      .then((res) => {
        setCourseCount(res.data.courseCount)
        setCourses(res.data.courses)
        setLoading(false)
      })
  }
  useEffect(() => {
    setLoading(true)
    fetchData()
  }, [params, offset])

  return (
    <Container>
      <SearchHeader>
        <Search handlePageChange={handlePageChange} />
        <Filter handlePageChange={handlePageChange} />
      </SearchHeader>
      <Course
        courseCount={courseCount}
        courses={courses}
        countPerPage={countPerPage}
        offset={offset}
        handlePageChange={handlePageChange}
        loading={loading}
        current={current}
        setCurrent={setCurrent}
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
