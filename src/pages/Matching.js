
import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import styled from 'styled-components';
import MatchBox from '../components/MatchBox';
import '../css/Matching.css';
import SettingFilter from '../components/SettingFilter';

//import List from '../json/MatchList.json';
//import axios from '../api/axios';
//import styled from 'styled-components';
import axios from 'axios';
import MypageNavbar from '../components/MypageNavbar';
import NavBar from '../components/NavBar';
const Wrapper=styled.div`
    min-height:100%;
    min-width:100%;
    background-color:rgb(253, 252, 252);
`
const MatchContainer=styled.div`
    min-width: 100%;
    display:grid;
    grid-template-columns:repeat(2,1fr);
    place-items: center;
`
const SearchBox=styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`
const Input=styled.input`
    background-color: #D9D9D9;
    margin: 3vw;
    border-style: none;
    border-radius: 6px;
    width: 30vw;
    height: 3vw;
    color: white;
    padding: 0px 10px;
`
const Title=styled.span`
margin: 5vw 0vw 2vw 0vw;
font-size: 2vw;
font-weight: bold;
width:15vw;
justify-self:center;/*타이틀 수평 가운데 정렬*/
`

const TitleBox=styled.div`
    width: 50%;
    display: flex;
    align-items:center;
    margin: 0vw 0vw 0vw 40vw;
`
const BtnBox=styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
`
const FilterBtn=styled.div`
    cursor:pointer;
    background-color:#FF6868; 
    padding: 0.5vw;
    font-weight: bold;
    border-radius: 3px;
    width: 8vw;
    height: 1.7vw; 
    text-align:center;
    font-size: 1.2vw;
    margin-right:5%;
    margin-left:20vw;
    `
const NoMatch=styled.div`
    width: 100vw;
    height: 10vw;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
const ViewAll=styled.span`
        background-color:#94B6EF;
        border-radius:2px;
        padding: 0.5vw 1vw;
        font-size:1.2vw;
        font-weight: bold;
        cursor:pointer;
`

const RecommendBtn=styled.div`
    width: 20vw;
    color:white;
    font-weight:bold;
    margin:15vw;
    background-color:#94B6EF;
    border-radius:50px;
    padding:1vw 2vw;
    text-align:center;
    font-size:2vw;
`


const Matching=()=>{

    const [info, setInfo] = useState([]);

   
    const storedUserId = localStorage.getItem("userId");
    const [isLoggedIn, setIsLoggedIn]=useState(storedUserId);


    

    //모달창 열고닫기
    const [isModalOpen, setIsModalOpen]=useState(false);

    //필터 적용을 위한 state(프로젝트 분야 & 모집 분야)
     const [selectedField, setSelectedField] = useState('');
     const [selectedRecruit, setSelectedRecruit] = useState('');
     
    //전체보기 사용시
     const [showAll, setShowAll] = useState(true);

   
    const fetchPostData = async () => {
        try {
          const response = await fetch('/api/post', {
            method: 'GET', // fetch의 기본 메서드는 GET이므로, 명시적으로 선언하지 않아도 됩니다.
            headers: {
              'Content-Type': 'application/json',
              // JWT 적용이 필요 없으면 Authorization 헤더를 생략하거나 주석 처리합니다.
              // 'Authorization': 'Bearer any_test_token_value'
            }
          });
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`); // 응답 상태가 "OK"가 아니라면 오류를 던집니다.
          }
          const data = await response.json(); // 응답 데이터를 JSON으로 파싱합니다.
          setInfo(data.information);
          console.log("response: ", data.information);
        } catch (error) {
          console.log("API 오류: ", error);
        }
      }
      

    useEffect(()=>{
        fetchPostData();
    },[]);
   
     const handleApplyFilter=(field, recruit)=>{
        setSelectedField(field);
        setSelectedRecruit(recruit);
     }
     const modalOpen = () =>{
         setIsModalOpen(true);
     }
     const modalClose = () =>{
         setIsModalOpen(false);
     }

     //필터링된 리스트
     //API 연동시 List -> info로 교체
     const filteredList=showAll? info: info.filter(item=>{
        const fieldIncludes=item.category?.toLowerCase().includes(selectedField.toLowerCase());
        const recruitIncludes=item.part?.toLowerCase().includes(selectedRecruit.toLowerCase());
        return fieldIncludes&&recruitIncludes;
    })

   

    const handleClickViewAll=()=>{
        setShowAll(true);
        setSelectedField('');
        setSelectedRecruit('');
    }



    return (
        <Wrapper>
            <NavBar 
            isLoggedIn={isLoggedIn}
            menuItems={[
                {href:"/pages/postingpage", text:"매칭 등록"},
            ]}

            />
            <SearchBox>
                <TitleBox>
                    <Title>매칭 모집</Title>
                    <BtnBox>
                    <FilterBtn onClick={modalOpen}>필터 조정</FilterBtn>
                    <ViewAll onClick={handleClickViewAll}>전체 보기</ViewAll>
                    </BtnBox>
                </TitleBox>
                {
                    showAll?<div >전체 검색 결과입니다.</div>
                    :<div>"{selectedField}", "{selectedRecruit}" 필터 검색 결과입니다.</div>
                }
                <Input type="text" />
            </SearchBox>
            <SettingFilter 
                isModalOpen={isModalOpen} 
                modalClose={modalClose}
                onApply={handleApplyFilter}//콜백함수
                setShowAll={setShowAll}
            />
            <MatchContainer>
               {                   
                    filteredList.length > 0 ? 
                    filteredList.map((item) => (
                       //Detail 페이지로 이동
                       <Link to={`/pages/detail/${item.postId}`} style={{textDecoration:'none', color:'black'}}>
                        <MatchBox key={item.postId} title={item.title} field={item.category} recruit={item.part}/>
                        </Link>
                    )) : 
                    
                <NoMatch>
                    <div style={{fontSize:"2vw", fontWeight:"bold", margin:"5vw 0vw 0vw 0vw"}}>해당 검색 결과가 없습니다.</div>
                </NoMatch>
                }
            </MatchContainer>
        </Wrapper>
        
    )
}
   

export default Matching;