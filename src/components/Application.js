import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import ApplyBtn from '../static/Images/ApplyBtn.png';
const Modal = styled.div`
    display:grid;
    grid-template-rows:3fr 17fr;
    z-index: 1000; /* 다른 요소들 위에 상단바가 오도록 설정 */
    width: 37vw;
    height: 30vh;
    position: absolute;
    top: 30%;
    left: 30%;
    background-color:white;
    border-radius: 10px;
`

const Top=styled.div`
    border-radius:10px 10px 0px 0px; 
    background-color:rgba(148, 182, 239, 0.2);
    display:flex;
    justify-content: space-between;
    align-items:center;
    font-weight:bold;
    padding: 0px 10px;
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

const Portfolio=styled.div`
    display:flex;
    flex-direction:column;
    width: 90%;
    height: 70%;
    //background-color:pink;
    margin-top: 2vw;
    font-size:1.3vw;
    line-height: 3vw;
    font-weight:bold;
`
const Text=styled.textarea`
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    background-color: rgba(217, 217, 217, 0.2);
    width: 99%;
    height: 60%;
    border-style: none;

`
const Application=({title ,isOpen, closeModal})=>{
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
                <span style={{fontSize:"1.2vw"}}>{title}  지원</span>
            </Top>
            <Body>
                <Portfolio>
                <div style={{ justifyContent: "space-evenly"}}>
                    <span style={{marginRight: "2vw"}}>포트폴리오</span>                    
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    <label for="fileInput">
                        <img src={ApplyBtn} alt="upload file" style={{ width: "13vw", height:"2.5vw"}} />
                    </label>
                </div>
                <div>지원 동기 및 본인 소개</div>
                <Text placeholder="지원 동기를 작성해주세요."></Text>
                </Portfolio>
                <RegisterBtn onClick={closeModal}>
                    지원하기
                </RegisterBtn>
            </Body>
        </Modal>
    )
}

export default Application;

