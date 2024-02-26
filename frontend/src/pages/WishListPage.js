import styled from 'styled-components';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../css/MyPage.css';

// import recoil
import { useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import { LikeState } from "../recoil/recoil";
// import component
import MatchBox from '../components/MatchBox';
import NavBar from '../components/NavBar';
import MypageNavbar from '../components/MypageNavbar';

// import axios
import axios from "../api/axios";
import { fetchLikeProject } from "../api/apiFunction";

const Wrapper=styled.div`
  background-color:white;
`

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

export default function WishListPage(){

    const setLikeData = useSetRecoilState(LikeState); // Recoil 상태 설정 함수
    const LikeData = useRecoilValue(LikeState);

    useEffect(() => {
        const fetchLikeData = async () => {
          try {
            const response = await fetchLikeProject(); // 사용자 데이터를 가져오는 API 경로
            setLikeData(response); // 가져온 데이터를 Recoil 상태에 설정
          } catch (error) {
            console.error("Failed to fetch user data:", error);
          }
        };
    
        fetchLikeData();
      }, [setLikeData]); // 의존성 배열에 setLikeData 추가

        return(
            <div className="my-page">
            <Wrapper>
            <NavBar 
                isLoggedIn={true}
                menuItems={[
                    {href:"/pages/Matching", text:"매칭 모집"},
                    {href:"/pages/postingpage", text:"매칭 등록"}
                ]}
            /> 
            <MypageNavbar /> 
   
                <Content>
                    <Title>마이페이지 - 내가 찜한 프로젝트</Title>
                    
                    <ContentItem>

                    <MatchContainer>
                    {                     
                        LikeData.length > 0 ? 
                        LikeData.map(({title, category, part, id}) => (
                       //WishListDetail 페이지로 이동
                       <Link to={`/pages/wishlistdetail/${id}`} style={{textDecoration:'none', color:'black'}}>
                        <MatchBox key={title} title={title} category={category} part={part}/>
                        </Link>
                    )) : 
                    <NoMatch>
                    <div style={{fontSize:"2vw", fontWeight:"bold", margin:"5vw 0vw 0vw 0vw"}}>해당 검색 결과가 없습니다.</div>
                    내가 찜한 프로젝트가 없습니다
                    </NoMatch>
                    }
                    </MatchContainer>
                    </ContentItem>
                    
                </Content>

            </Wrapper>
            </div>
        );
    }
    
