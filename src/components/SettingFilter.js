import React from 'react';
import styled from 'styled-components';

const Container=styled.div`
    position:absolute;
    top: 10vw;
    width: 34.9vw;
    height: 28.8vw;
    background-color: #2519B2;
    z-index: 10000;
    margin: 5vw 32vw;
    display:grid;
    grid-template-rows:2fr 5fr 7fr 7fr;
    padding: 2vw;
    color:white;
    font-size: 1.8vw;
    font-weight:bold;

`
const XBtn = styled.span`
    font-size: 2vw;
    justify-self: end;
`

const Select=({op1,op2,op3})=>{
    return (
        <select style={{height: "2.5vw", width: "18vw", borderRadius:"2px", backgroundColor:"#D9D9D9", fontWeight:"bold"}}>
            <option value="op1">{op1}</option>
            <option value="op2">{op2}</option>
            <option value="op3">{op3}</option>
        </select>
    )
}
const SettingFilter=({isModalOpen, modalClose})=>{
    return (
        <Container style={{display:isModalOpen?"grid":"none"}}>
            <XBtn onClick={modalClose}>X</XBtn>
            <span style={{justifySelf: "center"}}>필터 설정</span>
            <div style={{display:"grid", gridTemplateColumns:"1.2fr 1.5fr"}}>
                <span style={{fontSize: "1.5vw", margin:"0vw 2vw 0vw 0vw"}}>프로젝트 분야</span>
                <Select op1={"프로젝트1"} op2={"프로젝트2"} op3={"프로젝트3"}/>
            </div>
            <div style={{display:"grid", gridTemplateColumns:"1.2fr 1.5fr"}}>
                <span style={{fontSize: "1.5vw", margin:"0vw 2vw 0vw 0vw"}}>모집 분야</span>
                <Select op1={"모집분야1"} op2={"모집분야2"} op3={"모집분야3"}/>
            </div>
        </Container>

    )
}
export default SettingFilter;