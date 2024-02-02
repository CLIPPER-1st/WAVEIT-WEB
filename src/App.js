import styled from "styled-components";
import './App.css';
import chevronsDown from "./static/Images/chevrons-down.png";
const Wrapper=styled.div`

  display:grid;
  grid-template-rows:1fr 17fr;
  height:100vh;
`

const Container=styled.div`
  flex-direction: column;
  background-color: #94B6EF;
  min-height: 100%;
  display:flex;
  justify-content:center;
  tent: center;
  align-items:center;
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
  width: 160px; 
`

function App() {
  return (
    <Wrapper>
      <Navbar>
        <NavbarItem href="/dummy">매칭 모집</NavbarItem>
        <NavbarItem href="/dummy">매칭 등록</NavbarItem>
        <NavbarItem href="/dummy">마이페이지</NavbarItem>
      </Navbar>
    <Container>
      <Title color={"black"} fontsize={"20px"}>
        나에게 맞는 프로젝트<br/>
        내가 원하는 팀원을 만나는 곳
      </Title>
      <br/>
      <Title color={"#2519B2"} fontsize={"25px"}>wave-it</Title>
      <Btn>만나러가기</Btn>
      <Image src={chevronsDown} alt="scroll-arrow" />
    </Container>
    
    </Wrapper>
  );
}

export default App;
