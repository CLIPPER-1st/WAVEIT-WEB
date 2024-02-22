import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import List from '../json/MatchList.json';

// import recoil
import { useRecoilState, useRecoilValue} from "recoil";
import { RecruitState } from "../recoil/recoil";

const Container=styled.div`
    min-width:100%;
    min-height:100%;
    background-color:rgb(253, 252, 252);
    display:flex;
    flex-direction: column;
    //justify-content:center;
    align-items:center;
`
const GrayBox=styled.div`
    width: 55vw;
    height: 50vw;
    background-color:#D9D9D9;
    box-sizing: border-box;
    padding: 2vw;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    //border-radius: 3px;
`

const Title=styled.div`
    margin: 5%;
    font-size: 2vw;
    font-weight:bold;
`

const FieldBtn=styled.button`
    background-color:rgba(148, 182, 239, 0.8);
    border-radius:6px;
    border-style:none;
    font-weight:bold;
    width: auto;
    height:3vw;
    font-size: 1.2vw;
    margin: 0px 3px;
`
const BtnBox=styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
    justify-content: space-evenly;
    background-color: white;
`

const Btn=styled.button`
    margin: 1vw;
    width: 20vw;
    height: 5vw;;
    background-color:#D9D9D9; 
    border-radius: 6px;
    border-style:none;
    font-size:1.3vw;
    font-weight:bold;
`
const ButtonContainer = styled.div`
    display: flex;
`;

const MyPageDetail=()=>{

    const recruitData = useRecoilValue(RecruitState);

    //url 파라미터에서 id값 가져오기
    const {id}=useParams();
    //id값과 일치하는 List 가져오기
    //url에서 가져오는 params는 string 타입이므로, 타입변환 필요.
    const item=recruitData.find(item=>String(item.id)===id);
    return (
        <Container>
            <NavBar 
                isLoggedIn={true}
                menuItems={[
                    {href:"/pages/Matching", text:"매칭 모집"},
                    {href:"/pages/postingpage", text:"매칭 등록"}
                ]}
            />
            <Title>{item.title}</Title>
            <GrayBox>
                <div style={{lineHeight:"4vw",  fontSize:"1.5vw"}}><b>프로젝트 분야 </b> 
  
                    <FieldBtn>{item.field}</FieldBtn> 

                </div>
                
                <div style={{lineHeight:"4vw", fontSize:"1.5vw"}}><b>모집 파트 </b> {item.recruit}</div>
                <div style={{lineHeight:"4vw",  fontSize:"1.5vw"}}><b>모집자 프로필 </b> {item.profile}</div>
                <div style={{lineHeight:"4vw",  fontSize:"1.5vw"}}><b>연락 보내기  </b>{item.contact}</div>
                <div style={{lineHeight:"3vw",  fontSize:"1.5vw"}}><b>프로젝트 설명글 </b>{item.content}</div>
                <br/><BtnBox>
                    
                    <div>지원 동기 글 내용</div>
                    
                    <ButtonContainer>
                        <Btn>지원 유저 프로필</Btn>
                        <Btn>포트폴리오</Btn>
                    </ButtonContainer>
                </BtnBox>
            </GrayBox>
            
        </Container>
    )

}

export default MyPageDetail;