import React from 'react'
import styled from 'styled-components'

const Filter = () => {
  return (
    <Wrapper>
      <FilterDiv>
        <FilterName>유형</FilterName>
        <FilterContent>
        <div>
          <button>
            <span>과목</span>
          </button>
        </div>
        <div>
          <button>
            <span>챌린지</span>
          </button>
        </div>
        </FilterContent>
      </FilterDiv>
      <FilterDiv>
        <FilterName>진행 방식</FilterName>
      </FilterDiv>
      <FilterDiv>
        <FilterName>분야</FilterName>
      </FilterDiv>
      <FilterDiv>
        <FilterName>난이도</FilterName>
      </FilterDiv>
      <FilterDiv>
        <FilterName>언어</FilterName>
      </FilterDiv>
      <FilterDiv>
        <FilterName>가격</FilterName>
      </FilterDiv>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

const FilterDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  min-height: 48px;
  background-color: #fff;
  color: #5e5f61;
  margin: 0;
  border: 1px solid rgb(221, 221, 221);
  & + & {
    border-top: none;
  }
  div {
    margin-top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button {
    background-color: rgb(240, 241, 243);
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0.25rem 0.75rem;
    min-width: 1.875rem;
    height: 1.875rem;
    border-radius: 1.875rem;
    font-size: 0.875rem;
    margin: 0.5rem;
    color: rgb(94, 95, 97);
    transition: all 150ms ease-in-out;
    &:hover {
      background-color: rgb(207, 207, 207);
      color: #141414;
    }
  }
  span {
  }
`

const FilterName = styled.div`
  min-width: 6rem;
  padding: 0.875rem 1rem;
  background-color: rgb(249, 250, 252);
  border-right: 1px solid rgb(240, 240, 240);
  font-size: 0.75rem;
  font-weight: 700;
  display: flex;
  justify-content: flex-start !important;
`

const FilterContent = styled.div`
  padding: 0px 0.5rem;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-align: center;
  align-items: center;
`

export default Filter
