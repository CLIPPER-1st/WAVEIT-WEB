import React, {useState} from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import MatchBox from '../components/MatchBox';
import '../css/Matching.css';
import SettingFilter from '../components/SettingFilter';
const Wrapper=styled.div`
    min-height:100%;
    background-color:rgb(253, 252, 252);
`
const MatchContainer=styled.div`
    width: 100%;
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
justify-self:center;/*타이틀 수평 가운데 정렬*/
`

const TitleBox=styled.div`
    width: 50%;
    display: flex;
    align-items:center;
    margin: 0vw 0vw 0vw 40vw;
`

const FilterBtn=styled.div`
    background-color:#FF6868; 
    padding: 0.5vw;
    font-weight: bold;
    border-radius: 3px;
    width: 8vw;
    height: 1.7vw; 
    text-align:center;
    font-size: 1.2vw;
    margin-left: auto;/*버튼 오른쪽정렬*/
    `


const Matching=()=>{
     //모달창 열고닫기
     const [isModalOpen, setIsModalOpen]=useState(false);

     const modalOpen = () =>{
         setIsModalOpen(true);
     }
     const modalClose = () =>{
         setIsModalOpen(false);
     }

     
    return (
        <Wrapper>
            <NavBar />
            <SearchBox>
                <TitleBox>
                    <Title>매칭 모집</Title>
                    <FilterBtn onClick={modalOpen}>필터 조정</FilterBtn>
                    </TitleBox>
                    <Input type="text" />
            </SearchBox>
            <SettingFilter isModalOpen={isModalOpen} modalClose={modalClose}/>
            <MatchContainer>
            <MatchBox title={"Wave-It: 개발자 매칭 서비스"} field={"웹개발"} recruit={"PM: 1, FE 2, BE 2"}></MatchBox>
                <MatchBox title={"Data Analysis"} field={"데이터분석"} recruit={"Data-Analysis& Monitoring 1, PM: 1, FE 2, BE 2"}></MatchBox>
                <MatchBox title={"Hello1"} field={"앱개발"} recruit={"PM: 1, FE 1, BE 1"}></MatchBox>
                <MatchBox title={"Hello2"} field={"앱개발"} recruit={"PM: 1, FE 1, BE 1"}></MatchBox>
                <MatchBox title={"Wave-It: 개발자 매칭 서비스"} field={"웹개발"} recruit={"PM: 1, FE 2, BE 2"}></MatchBox>
                <MatchBox title={"Data Analysis"} field={"데이터분석"} recruit={"Data-Analysis& Monitoring 1, PM: 1, FE 2, BE 2"}></MatchBox>
                <MatchBox title={"Hello1"} field={"앱개발"} recruit={"PM: 1, FE 1, BE 1"}></MatchBox>
                <MatchBox title={"Hello2"} field={"앱개발"} recruit={"PM: 1, FE 1, BE 1"}></MatchBox>
            </MatchContainer>
        </Wrapper>
        
    )
}
   

export default Matching;