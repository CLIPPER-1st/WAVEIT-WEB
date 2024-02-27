import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Modal = styled.div`
    display: grid;
    grid-template-rows: 3fr 17fr;
    z-index: 1000;
    width: 30vw;
    height: 30vh;
    position: absolute;
    top: 25%;
    left: 30%;
    background-color: white;
    border-radius: 10px;
`

const Top = styled.div`
    border-radius: 10px 10px 0px 0px; 
    background-color: rgba(148, 182, 239, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    padding: 0px 10px;
`

const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* 수정됨 */
    align-items: center;
    border-radius: 0px 0px 10px 10px; 
    height: 100%; /* 추가됨 */
`

const MessageContainer = styled.div` /* 추가됨 */
    box-sizing: border-box;
    padding: 100px 0px 0px 0px;
    text-align: center;
    flex-grow: 1; /* 내용을 위로 밀어주고 버튼을 아래로 */
`

const RegisterBtn = styled.button`
    color: white;
    margin: 5% 0% 10% 0%;
    width: 70%;
    height: 15%;
    border-style: none;
    font-weight: bold;
    background-color: #2519B2;
    border-radius: 3px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
`

const SendNum = ({ isOpen, closeModal }) => {
    const [modalSize, setModalSize] = useState({ width: '37vw', height: '30vh' });

    const updateModalSize = () => {
        const width = window.innerWidth * 0.37;
        const height = (width / 4) * 3;
        setModalSize({ width: `${width}px`, height: `${height}px` });
    };

    useEffect(() => {
        window.addEventListener('resize', updateModalSize);
        updateModalSize();

        return () => {
            window.removeEventListener('resize', updateModalSize);
        };
    }, []);

    return (
        <Modal style={{ display: isOpen ? "grid" : "none", width: modalSize.width, height: modalSize.height }}>
            <Top>
                <span>등록 완료</span>
            </Top>
            <Body>
                <MessageContainer>
                    매칭 모집글 등록이 완료되었습니다.
                </MessageContainer>
                <RegisterBtn onClick={closeModal}>
                    확인
                </RegisterBtn>
            </Body>
        </Modal>
    )
}

export default SendNum;
