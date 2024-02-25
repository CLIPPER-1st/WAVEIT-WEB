import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom';
const Modal = styled.div`
    display:grid;
    grid-template-rows:3fr 17fr;
    z-index: 1000; /* 다른 요소들 위에 상단바가 오도록 설정 */
    width: 37vw;
    height: 30vh;
    position: absolute;
    top: 40%;
    left: 30%;
    background-color:white;
    border-radius: 10px;
`

const Top=styled.div`
    border-radius:10px 10px 0px 0px; 
    background-color:rgba(255, 104, 104, 0.2);
    display:flex;
    justify-content: space-between;
    align-items:center;
    font-weight:bold;
    padding: 0px 10px;
`

const CloseBtn=styled.button`
    color: #737373;
    font-weight:bold;
    border-style:none;
    margin: 0% 2% 0% 0%;
    background-color:transparent;
   `

const Body=styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    border-radius: 0px 0px 10px 10px; 

`
const RegisterBtn=styled.button`
    color:white;
    margin: 5% 0% 10% 0%;
    width: 70%;
    height:15%;
    border-style:none;
    font-weight:bold;
    background-color:#2519B2;
    border-radius: 3px;
    text-align:center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
`
const ErrorNum=({isOpen, closeModal})=>{
    const [modalSize, setModalSize] = useState({ width: '37vw', height: '30vh' });

    const updateModalSize = () => {
        // 화면 너비의 37%를 기준으로 세로 크기 계산 (4:3 비율 유지를 위해)
        const width = window.innerWidth * 0.37;
        const height = (width / 4) * 3;
        setModalSize({ width: `${width}px`, height: `${height}px` });
    };


    useEffect(() => {
        window.addEventListener('resize', updateModalSize);
        updateModalSize(); // 컴포넌트 마운트 시 초기 크기 설정

        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
            window.removeEventListener('resize', updateModalSize);
        };
    }, []);

        return (
        <Modal style={{ display: isOpen?"grid":"none", width: modalSize.width, height: modalSize.height,  }}>
            <Top>
                <span>인증번호 확인</span>
                <CloseBtn onClick={closeModal}>x</CloseBtn>
            </Top>
            <Body>
                <div style={{textAlign:"center"}}>
                    인증번호가 일치하지 않습니다.
                </div>
                <RegisterBtn>
                <Link to="/dummy" style={{color:"white", textDecoration:"none"}}>
                    인증번호 재전송
                </Link>
                </RegisterBtn>
            </Body>
        </Modal>
    )
}

export default ErrorNum;

