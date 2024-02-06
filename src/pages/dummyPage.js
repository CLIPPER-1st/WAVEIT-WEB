import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
const Container = styled.div`
    height: 100vw;
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
color:white;
`

const Dummy=()=>{
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
        </BtnBox>
        </Container>
    )

}

export default Dummy;