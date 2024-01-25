import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const Search = () => {
  return (
    <Wrapper>
      <IconDiv>
        <Image
          src="/images/search.svg"
          alt="search--icon"
          width={16}
          height={16}
        />
      </IconDiv>
      <Input placeholder="배우고 싶은 언어, 기술을 검색해 보세요" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 48px;
  align-items: center;
  border: 1px solid rgb(201, 202, 204);
  border-radius: 4px;
  background-color: rgb(255, 255, 255);
  &:focus-within {
    border-color: rgb(82, 79, 161);
  }
  margin-bottom: 16px;
`

const IconDiv = styled.div`
  background-color: #fff;
  width: 46px;
  height: 100%;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin: 0 16px;
  }
`

const Input = styled.input`
  width: 100%;
  height: 22px;
  padding: 12px 0;
  font-size: 16px;
  font-family: 'Pretendard';
  margin: 0 16px;
  border: none;
  outline: none;
  &::placeholder {
    color: gray;
  }
`

export default Search
