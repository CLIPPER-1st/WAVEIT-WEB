
import styles from '../css/Sign.module.css';
import React, { useEffect, useState } from 'react';
// import { useNavigate } from "react-router-dom";

function Sign() {

  const [email, setEmail] = useState(''); 
  const [cernumber, setCernumber] = useState(''); 

    return (
      <div className = 'page' >
      
        <div className="titleWrap">
          회원가입
        </div>
        <div style = {{marginLeft : "100px", marginTop : "10px"}}>
        가입을 위해 이메일 인증을 진행해주세요.
        </div>
        
        <div className="contentWrap">
          <div className="inputTitle">이메일</div>

          <div style={{ display: 'flex', alignItems: 'center'}}>
            <div className={styles.inputWrap} >
                <input
                className="input"
                type="email"
                value={email}
                />
                
            </div>
            <button className={styles.requestButton}> 인증요청 </button>
          </div>
          
          <div style={{ marginTop: "26px" }} className="inputTitle">
            인증번호
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className={styles.inputWrap}>
                <input
                className="input"
                type="password"
                value={cernumber}
                />
            </div>
            <button className={styles.confirmButton}> 확인 </button>
          </div>
        </div>

        <button className="bottomButton">
            다음
          </button>
      </div>

    );
  }

export default Sign;