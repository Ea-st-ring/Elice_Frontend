import Image from 'next/image'
import React from 'react'

const NoResult = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '400px',
      }}
    >
      <p style={{ color: '#5b5b5b' }}>검색 결과가 없습니다.</p>
      <Image
        src="/images/no_result.svg"
        alt="no_result"
        width={80}
        height={80}
      />
    </div>
  )
}
export default NoResult
