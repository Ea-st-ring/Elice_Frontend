import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import OrgCourseListResponses from '@/type/typings'

const CourseCard = () => {
  return (
    <Wrapper>
      <Content>
        <Label>프로그래밍 기초</Label>
        <Title>Docker</Title>
        <Description>
          Docker란 무엇인지 알아보고, 직접 사용해보며 Devops에 한 발짝 더
          다가가보세요. 재미있지 않을 수 없습니다.
        </Description>
        <IconDiv>
          <IconText>
            <div>
              <Image
                src="images/chart.svg"
                alt="nextjs"
                width={24}
                height={24}
              />
              난이도 : 미설정
            </div>
            <div>
              <Image src="images/pc.svg" alt="nextjs" width={24} height={24} />
              수업 : 온라인
            </div>
            <div>
              <Image
                src="images/calendar.svg"
                alt="nextjs"
                width={24}
                height={24}
              />
              기간 : 무제한
            </div>
          </IconText>
          <Logo>
            <Image src="images/logo.svg" alt="nextjs" width={52} height={52} />
          </Logo>
        </IconDiv>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 296px;
  height: 338px;
  border-radius: 8px;
  background-color: #fff;
  flex-direction: column;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }
`

const Content = styled.div`
  padding: 28px 24px;
`

const Label = styled.div`
  color: #524fa1;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 4px;
`

const Title = styled.div`
  color: #222;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.6;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  min-height: 58px;
`

const Description = styled.div`
  /* 말줄임 */
  font-size: 14px;
  color: #5e5f61;
  line-height: 1.6;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-top: 16px;
`

const IconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 28px;
`

const IconText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: #7d7e80;
  div {
    display: flex;
    align-items: center;
    width: 105px;
    img {
      margin-right: 8px;
    }
  }
  div + div {
    margin-top: 8px;
  }
  justify-content: space-between;
  font-size: 12px;
  color: #5e5f61;
  margin-top: 16px;
`

const Logo = styled.div`
  width: 52px;
  height: 52px;
  margin-top: 16px;
`

export default CourseCard
