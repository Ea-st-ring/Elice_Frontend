import { useState, useEffect} from 'react'
import styled from 'styled-components'

interface Props {
  countPerPage: number
  offset: number
  courseCount: number
  handlePageChange: (page: number) => void
  current: number,
  setCurrent: (page: number) => void
}

export default function Pagination({
  offset,
  countPerPage,
  courseCount,
  handlePageChange,
  current,
  setCurrent,
}: Props) {
  const totalPages = Math.ceil(courseCount / countPerPage)
  const [prev, setPrev] = useState(0)
  const [next, setNext] = useState(0)
  // 빈 Box를 만들기 위한 prev, next 상태
  const [pageCount, setPageCount] = useState(9)

  useEffect(() => {
    setCurrent(Math.floor(offset / countPerPage) + 1)
    if (totalPages <= 5) {
      setPageCount(totalPages)
      setPrev(current - 1)
      setNext(totalPages - current)
    } else if (current < 5) {
      setPageCount(current + 4)
      setPrev(current - 1)
      setNext(totalPages - current >= 4 ? 4 : totalPages - current)
    } else {
      setPrev(4)
      setNext(totalPages - current >= 4 ? 4 : totalPages - current)
    }
  }, [current, handlePageChange])

  if (totalPages === 0) {
    return <></>
  }
    

  return (
    <Wrapper>
      <Arrow $isactive={current === 1 ? 'false' : 'true'}>
        <span
          onClick={() => {
            handlePageChange(current - 1)
          }}
        >
          ◀
        </span>
      </Arrow>
        {prev < 4 &&
          Array.from({ length: 4 - prev }).map((_, index) => (
            <EmptyBox key={index}></EmptyBox>
          ))}
        {Array.from({ length: prev }, (_, i) => i + current - prev).map(
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
        <Box $isactive="true">{current}</Box>
        {Array.from({ length: next }, (_, i) => i + current + 1).map((page) => (
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
      <Arrow $isactive={current === totalPages ? 'false' : 'true'}>
        <span
          onClick={() => {
            handlePageChange(current + 1)
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
