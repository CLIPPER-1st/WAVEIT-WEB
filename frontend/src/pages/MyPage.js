import styled from 'styled-components';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../css/MyPage.css';
import MatchBox from '../components/MatchBox';
import List from '../json/MatchList.json';
import MypageNavBar from '../components/MypageNavbar';

// import recoil
import { useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import { RecruitState } from "../recoil/recoil";

// import component
import MypageNavbar from '../components/MypageNavbar';
import NavBar from '../components/NavBar';

// import axios
import axios from 'axios';
import API from '../api/axios.js';

const Wrapper=styled.div`
  background-color:white;
`

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  //position: fixed;
  left: 50%;
  transform: translateX(-50%);
  display:flex;
  justify-content:center;
  align-items:center; 
  margin: 0% 0% 0% 50%;
`

const Content = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
`

const ContentTitle = styled.div`
  text-align:center;
  margin-top:2vw;
  font-size:22px;
  font-weight:bold;
`

const ContentItem = styled.div`
  margin-left : 100px;
  margin-top : 0px;
`
const Btn = styled.button`
  margin: 2vw;
  font-weight: bold;
  border-radius: 50px;
  background-color:#94B6EF;
  width: 200px;
  height: 50px;
  color: white;
  border : none;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top:20px;
`;

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

export default function MyPage(){
  const recruitData = useRecoilValue(RecruitState);
  const setRecruitData = useSetRecoilState(RecruitState);

   // 서버에서 데이터를 가져와 Recoil 상태를 업데이트
   useEffect(() => {
    const fetchData = async () => {
      try {
        // 사용자 데이터를 가져오는 API 경로로 변경
        const response = await axios.get('api/post/user/{userId}'); 
        const fetchedRecruitData = response.data; 
        // 가져온 데이터로 Recoil 상태를 업데이트
        setRecruitData(fetchedRecruitData); 
      } catch (error) {
        console.error('데이터 가져오기 오류:', error);
      }
    };

    fetchData();
  }, [setRecruitData]);

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
            <MypageNavBar /> 
   
                <Content>
                    <ContentTitle>마이페이지 - 내가 모집중인 프로젝트</ContentTitle>
                    <ButtonContainer>
                      <Btn><Link to="/pages/postingpage" style={{textDecoration:"none", color:"white"}}>모집 글 작성하러가기</Link></Btn>
                    </ButtonContainer>
                    <ContentItem>
                    
                    <MatchContainer>
                    {                     
                    recruitData.length > 0 ? 
                    recruitData.map(({title, category, part, id}) => (
                       //MyPageDetail 페이지로 이동
                       <Link to={`/pages/mypagedetail/${id}`} style={{textDecoration:'none', color:'black'}}>
                        <MatchBox key={title} title={title} category={category} part={part}/>
                        </Link>
                    )) : 
                    <NoMatch>
                    <div style={{fontSize:"2vw", fontWeight:"bold", margin:"5vw 0vw 0vw 0vw"}}>해당 검색 결과가 없습니다.</div>
                    내가 모집중인 프로젝트가 없습니다
                    </NoMatch>
                    }
                    </MatchContainer>
                    </ContentItem>
                </Content>
            </Wrapper>
            </div>
        );
    }
    
