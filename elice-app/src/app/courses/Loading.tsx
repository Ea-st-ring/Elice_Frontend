import React from 'react'
import styled from 'styled-components'

const Loading = () => {
  return (
    <>
    <CountDiv>Loading. . .</CountDiv>
      <Divider />
      <CourseDiv>
        <Wrapper></Wrapper>
        <Wrapper></Wrapper>
        <Wrapper></Wrapper>
        <Wrapper></Wrapper>
        <Wrapper></Wrapper>
        <Wrapper></Wrapper>
        <Wrapper></Wrapper>
        <Wrapper></Wrapper>
      </CourseDiv>
    </>
  )
}

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

const CountDiv = styled.div`
  width: 100%;
  padding: 0.75rem 0;
  font-size: 0.75rem;
  color: #222;
  font-weight: 700;
  margin-top: 16px;
`

const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid rgb(221, 221, 221);
  margin-bottom: 16px;
`

const Wrapper = styled.div`
  width: 296px;
  height: 338px;
  border-radius: 8px;
  background-color: #fff;
  flex-direction: column;
  animation: light 900ms infinite;
  @keyframes light {
    0% {
      background-color: #fff;
    }
    50% {
      background-color: #efefef;
    }
    100% {
      background-color: #fff;
    }
  }
`

export default Loading
