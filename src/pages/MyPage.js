import styled from 'styled-components';
import React from 'react';

const Wrapper=styled.div`
  background-color:#94B6EF;
`
// 상단 네브바
const Navbar = styled.div`
  background-color:#94B6EF;
  display: flex;
  justify-content: space-between; /* 주요 항목들을 분리 */
  width: 100%;
  padding: 10px 20px; 
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
  z-index: 1000; /* 다른 요소들 위에 상단바가 오도록 설정 */
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
`

const NavbarItem=styled.a`
  text-decoration-line:none;
  font-weight:bold;
  color: black;
`
const NavbarItems = styled.div`
  display: flex;
  gap: 50px; /* 항목들 사이의 간격 */
  margin-left: auto; /* 항목들을 오른쪽으로 이동 */
  margin-right : 100px;
`;

const Btn = styled.div`
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
  background-color:#F4F2EF;
  width: 250px;
  height: 50px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
`

export default function MyPage(){
    return(
        <Wrapper>
            <Navbar>
            <div style={{ width: '50%' }}></div>
            <Title>마이페이지</Title>
            <NavbarItems>
                <NavbarItem href="/dummy2">매칭 모집</NavbarItem>
                <NavbarItem href="/dummy3">매칭 등록</NavbarItem>
            </NavbarItems>
            </Navbar>
            <Btn>모집 글 작성하러가기</Btn>
        </Wrapper>
       
    );
}