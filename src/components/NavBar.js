import React from 'react';
import styled from 'styled-components';
//상단 네브바
const Navbar = styled.div`
  background-color:#ffffff;
  display:grid;
  width: 100%;
  display: flex;
  justify-content: right; /* 메뉴 항목을 양 끝으로 정렬 */
  padding: 10px 20px; 
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
  z-index: 1000; /* 다른 요소들 위에 상단바가 오도록 설정 */
`;

const NavbarItem=styled.a`
  text-decoration-line:none;
  font-weight:bold;
  color: black;
  margin: 0px 50px 0px 0px;
`


const NavBar =()=>{
    return(
    <Navbar>
        <NavbarItem href="/pages/postingpage">매칭 등록</NavbarItem>
        <NavbarItem href="/pages/mypage">마이페이지</NavbarItem>
    </Navbar>

    )
}

export default NavBar;