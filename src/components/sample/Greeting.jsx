import React from 'react'

/**
 * 
 * 사용자의 이름을 입력받아서 인사 문구와 함께 메시지를 보여주는 컴포넌트
 */

const Greeting = ({ name = "??", onButtonClick }) => {
  // logic
  // my data
  // PascalCase: MyData
  // camelCase: myData
  // snake-case: my-data

  // let userName = "chutzrit"
  // state반환값: 첫번재 - 데이터, 두번째 - 함수

  const handleClick = () => {
    // 데이터 수정
    // userName = userName.toUpperCase()
    // console.log("🚀 ~ userName:", userName)
    onButtonClick(name)

  }

  // view
  return (
    <div>
      <p>{name}님! 반갑습니다!</p>
      <p>오늘도 좋은하루 되세요😀</p>
      <button type='button' className='border border-white' onClick={handleClick}>대문자로 수정</button>
    </div>
  )
}

export default Greeting