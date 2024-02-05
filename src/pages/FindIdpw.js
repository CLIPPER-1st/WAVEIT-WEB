
import styles from '../css/FindIdpw.module.css';
import React, { useEffect, useState } from 'react';
// import { useNavigate } from "react-router-dom";


function FindIdpw() {

  const [isConfirmed, setIsConfirmed] = useState(false);

  const [name, setName] = useState(''); //이름
  const [email, setEmail] = useState(''); // 이메일
  const [id, setId] = useState(''); // 아이디
  const [authNumber, setAuthNumber] = useState(''); // 인증번호

  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);

  const handleFindId = () => {
    setIsConfirmed(false);
  };
  
  const handleFindPw = () => {
    setIsConfirmed(true);
  };

    return (
      <div className = 'page' >
      
        <div className="titleWrap">
          아이디 비밀번호 찾기
        </div>
        <div className={styles.selectWrap} style={{ display: 'flex' }}>
      <div
        style={{
          borderBottom: hover1 ? '1px solid blue' :'1px solid black',
          width: '500px',
          marginRight: '20px',
          color: hover1 ? 'blue' : 'black',
          fontWeight: hover1 ? 'bold' : 'normal'
        }}
        onMouseEnter={() => setHover1(true)} 
        onMouseLeave={() => setHover1(false)} 
        onClick={handleFindId}
      >
        아이디 찾기
      </div>
      <div
        style={{
          borderBottom: hover2 ? '1px solid blue' :'1px solid black',
          width: '500px',
          color: hover2 ? 'blue' : 'black',
          fontWeight: hover2 ? 'bold' : 'normal'
          
        }}
        onMouseEnter={() => setHover2(true)} 
        onMouseLeave={() => setHover2(false)} 
        onClick={handleFindPw}
      >
        비밀번호 찾기
      </div>
    </div>

      <div className="contentWrap">

      {!isConfirmed ?(
        <>
          <div className="inputTitle">이름</div>
          <div className="inputWrap">
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
        <div style={{ marginTop: "26px" }} className="inputTitle">
            이메일</div>
          <div className="inputWrap">
            <input
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          </>
      )
      :
      (
        <>
           <div className="inputTitle">아이디</div>
          <div className="inputWrap">
            <input
              className="input"
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          
        <div style={{ marginTop: "26px" }} className="inputTitle">
            인증번호</div>
          <div className="inputWrap">
            <input
              className="input"
              type="password"
              value={authNumber}
              onChange={(e) => setAuthNumber(e.target.value)}
            />
          </div>
        </>
      )
      }


      </div>



        <button className={styles.checkButton}>
            인증번호 확인
          </button>


      </div>


    );
  }

export default FindIdpw;