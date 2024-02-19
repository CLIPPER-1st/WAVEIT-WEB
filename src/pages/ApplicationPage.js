import styled from 'styled-components';
import React from 'react';
import { Link, Component } from 'react-router-dom';
import '../css/MyPage.css';
import MatchBox from '../components/MatchBox';
import { useRecoilState, useRecoilValue} from "recoil";
import { ApplicationState } from "../recoil/recoil";

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

const HomeStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Btn = styled.button`
  margin-top : 80px;
  font-weight: bold;
  border-radius: 50px;
  background-color:#94B6EF;
  width: 250px;
  height: 50px;
  color: white;
  border : none;
`
const MatchContainer=styled.div`
    min-width: 100%;
    display:grid;
    grid-template-columns:repeat(2,1fr);
    place-items: center;
`
const NoMatch=styled.div`
    width: 100vw;
    height: 70vw;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

export default function ApplicationPage(){

    const ApplicationData = useRecoilValue(ApplicationState);
        return(
            <div className="my-page">
            <Wrapper>
                <Navbar>
                <Title>마이페이지</Title>
                <NavbarItems>
                    <NavbarItem href="/pages/Matching">매칭 모집</NavbarItem>
                    <NavbarItem href="/pages/postingpage">매칭 등록</NavbarItem>
                </NavbarItems>
                </Navbar>
    
                <Content>
                    <ContentTitle>내가 지원한 프로젝트</ContentTitle>
                    
                    <ContentItem>

                    <MatchContainer>
                    {                     
                        ApplicationData.length > 0 ? 
                        ApplicationData.map(({title, field, recruit, id}) => (
                       //ApplicationDetail 페이지로 이동
                       <Link to={`/pages/applicationdetail/${id}`} style={{textDecoration:'none', color:'black'}}>
                        <MatchBox key={title} title={title} field={field} recruit={recruit}/>
                        </Link>
                    )) : 
                    <NoMatch>
                    <div style={{fontSize:"2vw", fontWeight:"bold", margin:"5vw 0vw 0vw 0vw"}}>해당 검색 결과가 없습니다.</div>
                    내가 지원한 프로젝트가 없습니다
                    </NoMatch>
                    }
                    </MatchContainer>
                    </ContentItem>
                    
                </Content>

            </Wrapper>
            </div>
        );
    }
    
