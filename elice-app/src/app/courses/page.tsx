'use client'
import React from 'react'
import styled from 'styled-components'
import Search from './Search'
import Filter from './Filter'
import Course from './Course'
import axios from 'axios'

const Page = () => {
  const [courseList, setCourseList] = React.useState([])
  const [courseCount, setCourseCount] = React.useState(0)

  return (
    <Container>
      <SearchHeader>
        <Search />
        <Filter />
      </SearchHeader>
      <Course courseCount={courseCount}></Course>
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
`

const SearchHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export default Page
