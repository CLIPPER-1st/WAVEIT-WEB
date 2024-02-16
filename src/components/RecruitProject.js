import React, { component } from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 400px;
  height: 180px;
  background-color: #D9D9D9;
`

const Title = styled.div`
  font-weight: bold;
  margin-left : 10px;
`
const Content = styled.div`
  margin-top : 20px;
  margin-left : 10px;
`

const HomeStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Btn = styled.button`
  margin-top : 20px;
  font-weight: bold;
  border-radius: 50px;
  background-color:#5045CC;
  width: 160px;
  height: 20px;
  color: white;
  border : none;
`
//components > MatchBox 컴포넌트에 json파일 내용
//읽어오도록 만들어놔서 나중에 API 연동할 때 갖다 쓰시면 편할거에요!

const RecruitProject = (props) => {
    return(
        <Wrapper>
        <br/>
        <Title>모집 프로젝트 title</Title>
        <Content>프로젝트 분야 : </Content>
        <Content>모집 파트 : </Content>
        <HomeStyles>
        <Btn>지원서 보러가기</Btn>
        </HomeStyles>
        </Wrapper>
    );
}

export default RecruitProject;