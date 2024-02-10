import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/MyPage.css';

const Wrapper=styled.div`
  background-color:white;
`
// 상단 네브바
const Navbar = styled.div`
  background-color:white;
  display:grid;
  display: flex;
  justify-content: right; /* 메뉴 항목을 양 끝으로 정렬 */
  
  width: 100%;
  padding: 10px 20px; 
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
  z-index: 1000; /* 다른 요소들 위에 상단바가 오도록 설정 */
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  display:flex;
  justify-content:center;
  align-items:center; 
`

const NavbarItem=styled.a`
  text-decoration-line:none;
  font-weight:bold;
  color: black;
`
const NavbarItems = styled.div`
  display: flex;
  gap: 30px; /* 항목들 사이의 간격 */
  margin-left: auto; /* 항목들을 오른쪽으로 이동 */
  margin-right : 50px;
`;

const BtnLink = styled(Link)`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin: 50px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-weight: bold;
  border-radius: 50px;
  background-color:#94B6EF;
  width: 250px;
  height: 50px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
  text-decoration: none;
  color: white;
`

export default function MyPage(){
    return(
        <div className="my-page">
        <Wrapper>
            <Navbar>
            <Title>마이페이지</Title>
            <NavbarItems>
                <NavbarItem href="/dummy2">매칭 모집</NavbarItem>
                <NavbarItem href="/pages/postingpage">매칭 등록</NavbarItem>
            </NavbarItems>
            </Navbar>
            <BtnLink to="/pages/postingpage">모집 글 작성하러가기</BtnLink>
        </Wrapper>
        </div>
    );
}