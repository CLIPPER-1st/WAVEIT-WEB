import styled from 'styled-components';
import React, { useEffect, useState } from "react";
import { Link, Component } from 'react-router-dom';
import '../css/MyPage.css';
import NavBar from '../components/NavBar';
// import component
import PortfolioMatchBox from '../components/PortfolioMatchBox';
import MypageNavbar from '../components/MypageNavbar';

// import recoil
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { PortfolioState } from "../recoil/recoil";

// import axios
import axios from 'axios';
import API from '../api/axios.js';

const Wrapper=styled.div`
  background-color:white;
`

const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
  //position: fixed;
  left: 50%;
  //transform: translateX(-50%);
  display:flex;
  justify-content:center;
  align-items:center; 
  min-width: 100%;
  margin-top: 2vw;
`

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

export default function Portfolio() {

    // useRecoilState 훅을 사용하여 PortfolioState를 가져오고 업데이트
    const portfolioData = useRecoilValue(PortfolioState);
    const setPortfolioData = useSetRecoilState(PortfolioState); // Recoil 상태 설정 함수

    useEffect(() => {
        const fetchPortfolioData = async () => {
          try {
            // 사용자 데이터를 가져오는 API
            const response = await axios.get('/api/portfolio/user/{userId}');
            const fetchedPortfolioData = response.data;
            // 가져온 데이터로 Recoil 상태를 업데이트
            setPortfolioData(fetchedPortfolioData);
          } catch (error) {
            console.error("Failed to fetch user data:", error);
          }
        };
    
        fetchPortfolioData();
      }, [setPortfolioData]); // 의존성 배열에 setPortfolioData 추가

    // 서버에서 userId에 해당하는 포트폴리오 링크 가져오기
    const getPortfolioLink = async (userId) => {
      try {
        const response = await axios.get(`api/portfolio/user/${userId}`);

        // 서버 응답에서 포트폴리오 링크 추출
        const portfolioLink = response.data.link; 
        console.log('포트폴리오 링크:', portfolioLink);

        // Recoil 상태에 저장
        setPortfolioData({ ...portfolioData, link: portfolioLink });
      } catch (error) {
        console.error('포트폴리오 링크 가져오기 오류:', error.response ? error.response.data : error);
      }
    };

    // localStorage에서 내 userId 가져온 후 getPortfolioLink 실행
    const userId = localStorage.getItem('userId');
    getPortfolioLink(userId);

      return(
            <div className="my-page">
            <Wrapper>
              <NavBar 
                isLoggenIn={true}
                menuItems={[
                  {href:"/pages/Matching", text:"매칭 모집"},
                  {href:"/pages/postingpage", text:"매칭 등록"}
                ]}
              />
              <MypageNavbar />
                <Title>마이페이지 - 내가 작성한 포트폴리오</Title>

                <Content>
                    <ContentItem>
                        <MatchContainer>
                        {                     
                        portfolioData.length > 0 ? 
                        portfolioData.map(({portfolioname}) => (
                        //PortfolioDetail 페이지로 이동
                        <Link to={`/pages/portfoliodetail/${portfolioname}`} style={{textDecoration:'none', color:'black'}}>
                            <PortfolioMatchBox key={portfolioname} name={portfolioname} />
                            </Link>
                        )) : 
                        <NoMatch>
                        <div style={{fontSize:"2vw", fontWeight:"bold", margin:"5vw 0vw 0vw 0vw"}}>해당 검색 결과가 없습니다.</div>
                        내가 작성한 포트폴리오가 없습니다.
                        </NoMatch>
                        }
                        </MatchContainer>
                    </ContentItem>             
                </Content>               
            </Wrapper>
            </div>
        );
        
    }
    