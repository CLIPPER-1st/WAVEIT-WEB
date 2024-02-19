import styled from 'styled-components';
import React from 'react';
import { Link, Component } from 'react-router-dom';
import '../css/MyPage.css';

const Page = styled.div`
  position: absolute; // 절대 위치 지정
  top: 50%; // 상하 중앙에 위치
  left: 50%; // 좌우 중앙에 위치
  transform: translate(-50%, -50%); // 위치 조정
  margin-top:50px;
  border-style:none;
  width: 800px;
  height: 400px;
  background-color: #D9D9D9;
  display: flex;
  flex-direction: column;
  padding: 50px 30px;
`;

const Wrapper=styled.div`
  background-color:white;
`
// 상단 네브바
const Navbar = styled.div`
  background-color:white;
  display:grid;
  display: flex;
  justify-content: space-between; /* 가운데 정렬과 오른쪽 정렬을 동시에 설정 */
  align-items: center;

  width: 100%;
  padding: 10px 20px; 
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
  z-index: 1000; /* 다른 요소들 위에 상단바가 오도록 설정 */
`;

const Title = styled.div`
  font-weight: bold;
  text-align: center; 
  margin-top: 50px;
`;


const NavbarItem=styled.a`

  margin-right: 20px;
  text-decoration-line:none;
  font-weight:bold;
  color: black;
`
const NavbarItems = styled.div`
  display: flex;
  align-items: center;
  gap: 30px; /* 항목들 사이의 간격 */
  margin-left: auto; /* 항목들을 오른쪽으로 이동 */
  margin-right : 50px;
`;

const Label = styled.label`
  margin-bottom: 30px; 
`;


const Content = styled.div`
`

const ContentTitle = styled.div`
  margin-left : 100px;
  margin-top : 50px;
  font-weight:bold;
`

const ContentItem = styled.div`
  margin-left : 100px;
  margin-top : 50px;
`

export default function EditPortfolio(){
        return(
            <Wrapper>
                <Navbar>
                
                
                <NavbarItems>
                    <NavbarItem href="/pages/Matching">매칭 모집</NavbarItem>
                    <NavbarItem href="/pages/postingpage">매칭 등록</NavbarItem>
                </NavbarItems>
                </Navbar>
                
                <Title>포트폴리오</Title>
                <Page>
                    <Label>이름 :</Label>
                    <Label>대학 및 전공 :</Label>
                    <Label>연락처 :</Label>
                    <Label>사용 가능 언어 :</Label>
                    <Label>프로젝트 경력 :</Label>
                </Page>
                <Content>
                    
                    <ContentItem>
                    
                    </ContentItem>
                    
                </Content>
           
            </Wrapper>
        );
    }
    