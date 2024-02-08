import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import FindID from '../components/FindID';
import ErrorID from '../components/ErrorID';
import SendNum from '../components/SendNum';
import ErrorEmail from '../components/ErrorrEmail';
import ErrorNum from '../components/ErrorNum';
import SignSuccess from '../components/SignSuccess';
const Container = styled.div`
    margin: 5% 0% 0% 0%;
    //height: 100vw;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
const BtnBox=styled.div`
text-align:center;
line-height: 5vw;
font-weight:bold;
line-decoration:none;
`

const Dummy=()=>{
    //모달창 관리 status

    //아이디 찾기
    const [isModalOpen, setIsModalOpen]=useState(false);
    //아이디 오류
    const [isModalOpen2, setIsModalOpen2]=useState(false);
    //인증번호 발송
    const [isModalOpen3, setIsModalOpen3]=useState(false);
    //이메일 오류
    const [isModalOpen4, setIsModalOpen4]=useState(false);
    //인증번호 오류
    const [isModalOpen5, setIsModalOpen5]=useState(false);
    //회원가입 완료
    const [isModalOpen6, setIsModalOpen6]=useState(false);
    const openModal=()=>{
        setIsModalOpen(true);
    }

    const closeModal=()=>{
        setIsModalOpen(false);
    }

    const openModal2=()=>{
        setIsModalOpen2(true);
    }

    const closeModal2=()=>{
        setIsModalOpen2(false);
    }

    const openModal3=()=>{
        setIsModalOpen3(true);
    }

    const closeModal3=()=>{
        setIsModalOpen3(false);
    }

    const openModal4=()=>{
        setIsModalOpen4(true);
    }

    const closeModal4=()=>{
        setIsModalOpen4(false);
    }

    const openModal5=()=>{
        setIsModalOpen5(true);
    }

    const closeModal5=()=>{
        setIsModalOpen5(false);
    }

    const openModal6=()=>{
        setIsModalOpen6(true);
    }

    const closeModal6=()=>{
        setIsModalOpen6(false);
    }



    return (
        <Container>
        <div style={{alignSelf:"left"}}><Link to="/">뒤로가기</Link></div>
        <br /><div>구현 페이지 테스트를 위한 임시페이지 입니다.</div>
        <hr /> <hr />
        <BtnBox>

            <div><Link to="/pages/Login">로그인 페이지</Link></div>
            <div><Link to="/pages/Sign">회원가입 페이지</Link></div>
            <div><Link to="/pages/FindIdpw">아이디/패스워드 찾기 페이지</Link></div>
            <div><Link to="/pages/Login">회원가입 페이지</Link></div>
            <button  onClick={openModal}>아이디 안내 모달창</button>
            <button  onClick={openModal2}>아이디 오류 모달창</button>
            <button  onClick={openModal3}>인증번호 발송 모달창</button><br />
            <button  onClick={openModal4}>이메일 오류 모달창</button>
            <button  onClick={openModal5}>인증번호 오류 모달창</button>
            <button  onClick={openModal6}>회원가입 완료 모달창</button>
            <FindID isOpen={isModalOpen} closeModal={closeModal}/>
            <ErrorID isOpen={isModalOpen2} closeModal={closeModal2}/>
            <SendNum isOpen={isModalOpen4} closeModal={closeModal4}/>
            <ErrorEmail isOpen={isModalOpen3} closeModal={closeModal3}/>
            <ErrorNum isOpen={isModalOpen5} closeModal={closeModal5}/>
            <SignSuccess isOpen={isModalOpen6} closeModal={closeModal6} />
        </BtnBox>
        </Container>
    )

}

export default Dummy;