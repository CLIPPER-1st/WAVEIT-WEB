import React from 'react';
import styled from 'styled-components';
import Logo from '../static/Images/waveit_logo.png';
// 상단 네브바
const Navbar = styled.div`
  background-color:${props=>props.bgcolor};
  display:grid;
  display: flex;
  justify-content:${props=>props.justifyContent}; /* 가운데 정렬과 오른쪽 정렬을 동시에 설정 */
  align-items: center;

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
  margin: 0;
`

const NavbarItem=styled.a`
    min-width: 4vw;
  margin-right: 20px;
  text-decoration-line:none;
  font-weight:bold;
  color: black;
`
const NavbarItems = styled.div`
  display: flex;
  align-items: center;
  gap: 30px; /* 항목들 사이의 간격 */
  margin-left: ${props=>props.margin}; /* 항목들을 오른쪽으로 이동 */
  margin-right : 50px;
`;

const MypageNavbar =()=>{
    return (
        <Navbar bgcolor={"rgba(148, 182, 239, 0.2)"} justifyContent={"space-evenly"}>
        
        <NavbarItems>
        <NavbarItem href="/pages/mypage">내가 모집중인 프로젝트</NavbarItem>
            <NavbarItem href="/pages/wishlistpage">내가 찜한 프로젝트</NavbarItem>
            <NavbarItem href="/pages/ApplicationPage">내가 지원한 프로젝트</NavbarItem>
            <NavbarItem href="/pages/portfolio">내가 작성한 포트폴리오</NavbarItem>
            <NavbarItem href="/pages/WritePortfolio">포트폴리오 작성하기</NavbarItem>
        </NavbarItems>
      </Navbar>
    )

}

export default MypageNavbar;