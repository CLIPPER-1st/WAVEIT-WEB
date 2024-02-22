import styled from "styled-components";
import '../css/Startpage.css';
import chevronsDown from "../static/Images/chevrons-down.png";
import Dummy1 from "../static/Images/dummy1.png";
import React, {useState,useEffect, useRef} from "react";
import '../css/Start.css';
//import FindID from "../components/FindID";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const Wrapper=styled.div`
  display:grid;
  grid-template-rows:1fr 17fr;
  height:100vh;
  background-color: #94B6EF;
`

const Container=styled.div`
display:flex;
flex-direction: column;
background-color: #94B6EF;
min-width: 100%;
justify-content:center;
align-items:center;
margin: 10% 0% 0%;
`

const Title=styled.span`
  font-weight:bold;
  font-size: ${(props)=>props.fontsize};
  color: ${(props)=>props.color};
  text-align: center; 
`
const Btn=styled.div`
  margin: 50px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-weight: bold;
  border-radius: 50px;
  background-color:#F4F2EF;
  width: 186px;
  height: 51px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
  color:black;
`
//상단 네브바
const Navbar = styled.div`
  background-color:#94B6EF;
  display:grid;
  width: 100%;
  display: flex;
  justify-content: right; /* 메뉴 항목을 양 끝으로 정렬 */
  padding: 10px 20px; 
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
  z-index: 1000; /* 다른 요소들 위에 상단바가 오도록 설정 */
`;

const NavbarItem=styled.a`
  text-decoration-line:none;
  font-weight:bold;
  color: black;
  margin: 0px 50px 0px 0px;
`
const Image=styled.img`
  margin: 60px;
  width: ${props=>props.width || '160px'}; 
  min-height: 100px;
`

const Description = styled.div`
  max-width: 260px;
  & span:first-of-type {
    font-weight: bold;
    line-height: 70px;
    font-size: 20px;
  }
`;

const DesciptBox=styled.div`
  min-height: 500px;
  display:flex;
  justify-content: space-evenly;
  align-items:center;
`

function Startpage() {
  const [isLoggedIn, setIsLoggedIn]=useState(true);
  const content1Ref=useRef(null);
  
  const onArrowClick=()=>{
    content1Ref.current?.scrollIntoView({behavior:'smooth'});
  }


  return (
    <Wrapper>
  
      <NavBar
        isLoggedIn={isLoggedIn}
        menuItems={[
        {
            href: "/pages/dummy", text:"임시페이지" 
          },
          {
            href: "/pages/Matching", text:"매칭 모집" 
          },
          {
            href: "/pages/postingpage", text:"매칭 등록" 
          },
        ]}
      ></NavBar>
    <Container>
      {/* <Link to ={'/pages/Login'}>
      <button>로그인하기</button>
      </Link> */}
      <Title color={"black"} fontsize={"20px"}>
        나에게 맞는 프로젝트<br/>
        내가 원하는 팀원을 만나는 곳
      </Title>
      <br/>
      <Title color={"#2519B2"} fontsize={"25px"}>wave-it</Title>
      <Link to="/pages/matching" style={{ textDecoration: 'none' }}><Btn as="div">만나러가기</Btn></Link>
      <Image src={chevronsDown} alt="scroll-arrow" onClick={onArrowClick}/>
    </Container>s
    <DesciptBox>
      <Description>
        <span>나에게 맞는 프로젝트</span><br />
        <span>원하는 조건으로 필터링하여 나에게 맞는 프로젝트만</span>
      </Description>
      <Image src={Dummy1} width="350px"/>
    </DesciptBox>
    <DesciptBox>
      <Description  ref={content1Ref}>
        <span>내가 원하는 팀원과</span><br />
        <span>모집하고자 하는 분야와 인원, 
              그리고 어떤 분위기를 추구하는지
              매칭 등록을 통하여 원하는 팀원과 프로젝트를 시작할 수 있습니다.</span>
      </Description>
      <Image src={Dummy1} width="350px" />
    </DesciptBox>
    <DesciptBox>
      <Description>
        <span>매칭 점수</span><br />
        <span>과거 팀원의 후기와 인증된 경력으로 팀원의 실력을 확인할 수 있습니다.</span>
      </Description>
      <Image src={Dummy1} width="350px" />
    </DesciptBox>
    </Wrapper>
  );
}

export default Startpage;
