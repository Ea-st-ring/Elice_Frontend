import Link from 'next/link'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

interface Props {
  countPerPage: number
  offset: number
  courseCount: number
  handlePageChange: (page: number) => void
}

export default function Pagination({
  offset,
  countPerPage,
  courseCount,
  handlePageChange,
}: Props) {
  const totalPages = Math.ceil(courseCount / countPerPage) // 전체 페이지 수
  // page는 1부터 시작, pageCount는 앞 뒤 최대 4개씩
  const [start, setStart] = useState(1)
  const [prev, setPrev] = useState(0)
  const [next, setNext] = useState(0)
  const [pageCount, setPageCount] = useState(9)

  useEffect(() => {
    setStart(Math.floor(offset / countPerPage) + 1)
    if (totalPages <= 5) {
      setPageCount(totalPages)
      setPrev(start - 1)
      setNext(totalPages - start)
    } else if (start < 5) {
      setPageCount(start + 4)
      setPrev(start - 1)
      setNext(totalPages - start >= 4 ? 4 : totalPages - start)
    } else {
      setPrev(4)
      setNext(totalPages - start >= 4 ? 4 : totalPages - start)
    }
  }, [start, offset])

  if (totalPages === 0) {
    return <></>
  }

  return (
    <Wrapper>
      <Arrow $isactive={start === 1 ? 'false' : 'true'}>
        <span
          onClick={() => {
            handlePageChange(start - 1)
          }}
        >
          ◀
        </span>
      </Arrow>
      {/* <NavBox> */}
        {prev < 4 &&
          Array.from({ length: 4 - prev }).map((_, index) => (
            <EmptyBox key={index}></EmptyBox>
          ))}
        {Array.from({ length: prev }, (_, i) => i + start - prev).map(
          (page) => (
            <Box
              key={page}
              onClick={() => handlePageChange(page)}
              $isactive="false"
            >
              {page}
            </Box>
          ),
        )}
        <Box $isactive="true">{start}</Box>
        {Array.from({ length: next }, (_, i) => i + start + 1).map((page) => (
          <Box
            key={page}
            onClick={() => handlePageChange(page)}
            $isactive="false"
          >
            {page}
          </Box>
        ))}
        {next < 4 &&
          Array.from({ length: 4 - next }).map((_, index) => (
            <EmptyBox key={index}></EmptyBox>
          ))}
      {/* </NavBox> */}
      <Arrow $isactive={start === totalPages ? 'false' : 'true'}>
        <span
          onClick={() => {
            handlePageChange(start + 1)
          }}
        >
          ▶
        </span>
      </Arrow>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  color: #888;
  font-size: 14px;
  a {
    margin: 0 5px;
    cursor: pointer;
    width: 25px;
    border-radius: 30px;
    border: solid 1px rgba(0, 0, 0, 0);
    text-align: center;
  }

  li {
    position: relative;
    cursor: pointer;
    margin: 0 10px;
  }
`

const Arrow = styled.div<{ $isactive: string }>`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.$isactive === 'true' ? '#222' : '#ccc')};
  cursor: ${(props) => (props.$isactive === 'true' ? 'pointer' : 'default')};
`

const EmptyBox = styled.div`
  width: 24px;
  height: 24px;
  & + div {
    margin-left: 6px;
  }
`

const NavBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 270px;
`

const Box = styled.div<{ $isactive: string }>`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.$isactive === 'true' ? '#524FA1' : 'transparent'};
  color: ${(props) => (props.$isactive === 'true' ? '#fff' : '#999')};
  cursor: pointer;
  & + & {
    margin-left: 6px;
  }
`
