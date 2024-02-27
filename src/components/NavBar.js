import React from 'react';
import styled from 'styled-components';
import Logo from '../static/Images/waveit_logo.png';
import {Link, useNavigate} from 'react-router-dom';
//상단 네브바
const Navbar = styled.div`
  background-color:transparent;
  display:flex;
  width: 97vw;
  justify-content: space-between; /* 메뉴 항목을 양 끝으로 정렬 */
  padding: 10px 20px; 
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
  z-index: 1000; /* 다른 요소들 위에 상단바가 오도록 설정 */
  padding-left: 3%;
`;

const NavbarItem=styled.a`
  text-decoration-line:none;
  font-weight:bold;
  color: black;
  margin: 0px 50px 0px 0px;
`
const MenuItems = styled.div`
  display: flex;
  align-items: center;
`;
const NavBar = ({isLoggedIn, menuItems}) =>{
  const navigate=useNavigate();
  /*로그인 여부에 따라 마이페이지 or 로그인하기로 갈리도록*/
  let Items =[
    ...menuItems,
    isLoggedIn? {href: "/pages/mypage", text:"마이페이지"}:{href:"/pages/Login", text:"로그인하기"}
  ]

  const handleLogout =()=>{
    localStorage.setItem("userId","");  
    navigate("/");


  }

  if(isLoggedIn){
    Items=[
      ...Items, {onClick:handleLogout, text:"로그아웃"}
    ]
  }


  return (
    <Navbar>
      <div>
      <Link to="/">
      <img src={Logo} alt="wave-it 로고" style={{height:"35px"}}/>
      </Link>
      </div>
      <MenuItems>
      {
        Items.map((item, index)=>(
          item.onClick ?
            <NavbarItem key={index} onClick={item.onClick} style={{cursor: 'pointer'}}>{item.text}</NavbarItem> :
            <NavbarItem key={index} href={item.href}>{item.text}</NavbarItem>
        ))
      }
      </MenuItems>
    </Navbar>
  )
}

export default NavBar;