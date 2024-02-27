
import React, {useState, useEffect} from 'react';
import {useParams, useNavigate, Link} from 'react-router-dom';
import styled from 'styled-components';
import List from '../json/MatchList.json'
import WishList from "../components/WishList";
import Application from "../components/Application";
import NavBar from "../components/NavBar";
import axios from 'axios';
import ProfileList from '../json/ProfileList.json';
// import recoil
import { useRecoilState } from 'recoil';
import { LikeState, ApplicationState} from '../recoil/recoil';

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
    height: 32vw;
    background-color:#D9D9D9;
    box-sizing: border-box;
    padding: 2vw;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    //border-radius: 3px;
    margin-top:50px;
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
    width: 100%;
    justify-content: space-evenly;
`
const Btn=styled.button`
    margin: 1vw;
    width: 10vw;
    height: 4vw;
    background-color:#F0F4FF; 
    border-radius: 6px;
    border-style:none;
    font-size:1.3vw;
    font-weight:bold;
`

const ProfileBox=styled.div`
    background-color:#F0F4FF;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    border-radius: 5px;
    width: 50%;
    //height:30%;
    text-align:center;
    //ailgn-items:center;
    margin:0px 0px 0px 20px;
    padding:15px 0px 0px 0px;
    font-size: 25px;
    color:#4a4e69;
    font-weight:bold;
`

/*
플젝 분야
모집 파트
모집자 프로필
연락 보내기
프로젝트 설명글
*/

const Profile=()=>{
    const navigate=useNavigate();

    //url 파라미터에서 id값 가져오기
    const {postId}=useParams();
    useEffect(() => {
        console.log("postId: ", postId);
      }, [postId]);
      
    console.log("postId: ",postId);

      const storedUserId=localStorage.getItem("userId");
      const [isLoggedIn, setIsLoggedIn]=useState(storedUserId);
    return (
        <Container>
            <NavBar 
                isLoggedIn={isLoggedIn}
                menuItems={[
                    {href:"/pages/Matching", text:"매칭 모집"},
                    {href:"/pages/postingpage", text:"매칭 등록"},
                ]}
            />
            
         
            <GrayBox>
            <div style={{display:"flex"}}>
            <div style={{lineHeight:"4vw", fontSize:"1.5vw"}}><b>이름 </b>{ProfileList.name}</div>
            <img src={ProfileList.profileImg} style={{borderRadius:"10px", margin: "10px 10px 10px 600px", width:"100px", height:"100px"}} />
            </div>
                <div style={{lineHeight:"4vw",  fontSize:"1.5vw"}}><b>기술 스택 </b> 
                
                {ProfileList.stack.map((f, index) => (
                    <FieldBtn key={index}>{f}</FieldBtn> // 고유 key 추가
                ))}
                
                </div>
                
                
                <div style={{lineHeight:"4vw",  fontSize:"1.5vw"}}><b>컨택 이메일  </b>{ProfileList.contact}</div>
                <div style={{lineHeight:"3vw",  fontSize:"1.5vw"}}><b>소개글 </b>{ProfileList.introduce}</div>
                <BtnBox>
                    
                <Btn onClick={() => navigate(-1)}>돌아가기</Btn>

                </BtnBox>
            </GrayBox>
        </Container>
    )
}

export default Profile;