import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import List from '../json/MatchList.json';

// import recoil
import { useRecoilState, useRecoilValue} from "recoil";
import { PortfolioState } from "../recoil/recoil";

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


const PortfolioDetail=()=>{

    const portfolioData = useRecoilValue(PortfolioState);

    //url 파라미터에서 id값 가져오기
    const {id}=useParams();
    //id값과 일치하는 List 가져오기
    //url에서 가져오는 params는 string 타입이므로, 타입변환 필요.
    const item=portfolioData.find(item=>String(item.id)===id);
    return (
        <Container>
            <NavBar />
            <Title>{item.title}</Title>
            <GrayBox>
                
                <div style={{lineHeight:"4vw", fontSize:"1.5vw"}}><b>포트폴리오 이름 </b> {item.name}</div>
                
                <br/>
            </GrayBox>
            
        </Container>
    )

}

export default PortfolioDetail;