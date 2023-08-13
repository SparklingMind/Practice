import * as React from 'react';
import './App.css';
import {useState} from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자코트추천','강남우동맛집','파이썬독학']);/* 실제는 서버에서 가져온 데이터지만 임시로 */
  let [따봉, 따봉변경] = useState(0);

  return (
    <div className="App">
      {/* jsx문법: class가 아니라 className */}
        <div className="black-nav">
          <h4>ReactBlog</h4>
          {/* jsx 문법: style = {{이름:'값'}}  object로 넣어야 함.*/}
        </div>
        <button onClick = {()=>{
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}>가나다순정렬</button>
        <div className='list'>
          <h4>{글제목[0]} <span onClick={()=>따봉변경(따봉+1)}>😍</span> {따봉} </h4>
          {/* 변수를 jsx에 꽂아 넣고 싶을 때는 중괄호{}
          =>데이터바인딩. 서버에서 가져와서 html에 적용  */}
          <p>8월 11일 발행</p>
        </div>
        <div className='list'>
          <h4>{글제목[1]}</h4>
          <p>8월 11일 발행</p>
        </div>
        <div className='list'>
          <h4>{글제목[2]}</h4>
          <p>8월 11일 발행</p>
        </div>
        <button onClick={()=>{
          let copy = [...글제목];
          copy[0] = '여자코트추천';
          글제목변경(copy);
          }}>첫 문단 변경</button>
        <Modal />
        
    </div>
    
  );
}

function Modal(){
  return (
    <>
    <div className = 'Modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  )
}

export default App;
