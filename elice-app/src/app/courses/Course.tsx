import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import CourseCard from './CourseCard'

const Course = ({ courseCount } : { courseCount: number }) => {
  return (
    <Wrapper>
      <CountDiv>전체 {courseCount}개</CountDiv>
      <Divider />
      <CourseDiv>
        <CourseCard />
        <CourseCard />
      </CourseDiv>
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
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: repeat(auto-fill, minmax(296px, 1fr));
  grid-gap: 16px;
  margin-top: 16px;
`

export default Course
