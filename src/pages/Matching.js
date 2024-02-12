import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import MatchBox from '../components/MatchBox';
const Wrapper=styled.div`
    height:100%;
    background-color:#ffffff;
`
const MatchContainer=styled.div`
    width: 100%;
    display:grid;
    grid-template-columns:repeat(2,1fr);
`


const Matching=()=>{
    return (
        <Wrapper>
            <NavBar />
            <MatchContainer>
             <MatchBox title={"임시프로젝트1"} field={"데이터분석"} recruit={"PM: 1, FE 2, BE 2"}></MatchBox>
            </MatchContainer>
        </Wrapper>
        
    )
}
   

export default Matching;