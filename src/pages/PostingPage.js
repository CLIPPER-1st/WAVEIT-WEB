import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '../css/PostingPage.css';
import NavBar from '../components/NavBar.js';
// import component
import RegisterPosting from '../components/RegisterPosting.js';

// import recoil
import { useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import { MatchDataState, RecruitState } from "../recoil/recoil";
import { useNavigate } from 'react-router-dom';

const Wrapper=styled.div` 
height: 100%;
  background-color:rgb(253, 252, 252);
  
`

const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
  left: 50%;
  display:flex;
  justify-content:center;
  align-items:center; 
  min-width: 100%;
  margin-top: 2vw;
`

const Label = styled.label`
  font-weight: bold;
  width : 150px;
`

const InputField = styled.input`
  padding: 8px;
  border-style:none;
  background-color:#D9D9D9;
  border-radius:3px;
  width: 400px;
  float: left;
  margin-right : auto;

  &:focus {
    border-color: black;  
    outline: none;  
  }
`;

const Select = styled.select`
  width: 415px;
  border-style:none;
  background-color:#D9D9D9;
  border-radius:3px;
  height : 30px;
  margin-right : auto;
`

const Row = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-left: 50px;
  margin-top: 50px;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

const Textarea = styled.textarea`
  width: 600px;  
  height:200px;
  border-style:none;
  background-color:#D9D9D9;
  border-radius:3px;
  padding : 20px 20px;
  margin-right : auto;

  &:focus {
    border-color: black;  
    outline: none;  
  }
`;

const HomeStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Btn = styled.button`
  font-weight: bold;
  border-radius: 50px;
  background-color:#94B6EF;
  font-size:1.2vw;
  width: 250px;
  height: 50px;
  color: white;
  border : none;
`

export default function PostingPage(){

    const [project, setProject] = useState({
        name: '',
        field: '',
        part: '',
        email: '',
        description: '',
      });

    const handleChange = (e) => {
    setProject({
        ...project,
        [e.target.name]: e.target.value,
    });
    };

    
    const [isModalOpen, setIsModalOpen]=useState(false);
    const navigate = useNavigate();
    const storedUserId = localStorage.getItem("userId");
    const [isLoggedIn, setIsLoggedIn] = useState(!!storedUserId);

    const openDialog = () => {
        setIsModalOpen(true);
    }

    const closeModal=()=>{
        setIsModalOpen(false);
    }



    

    useEffect(() => {
        if (!isLoggedIn) {
            alert("로그인 후 이용할 수 있는 서비스입니다.");
            navigate("/pages/login");
        }
    }, [isLoggedIn, navigate]); // 의존성 배열에 isLoggedIn과 navigate를 추가

    return (
        <div className="posting-page">
        <Wrapper>
            <NavBar 
              isLoggedIn={isLoggedIn}
              menuItems={[
                {href:"/pages/Matching", text:"매칭 모집"}
              ]}
            />
            <Title as="div">매칭 등록</Title>
            <div style={{margin:"5%"}}>
            <Row>
            <Label>
            프로젝트 이름 :</Label>
            <InputField type="text" name="name" onChange={handleChange} />
            <br/></Row>
            <Row>
            <Label>
            프로젝트 분야 :</Label>
            <Select name="field" onChange={handleChange}>
                <option value="">------ 선택하세요 ------</option>
                <option value="앱 개발">APP</option>
                <option value="웹 개발">WEB</option>
                <option value="데이터 분석">데이터 분석</option>
                <option value="게임 개발">게임 개발</option>
                <option value="기타">기타</option>
            </Select>
            <br/></Row>
            <Row>
            <Label>
            모집 파트 :</Label>
            <Select name="part" onChange={handleChange}>
                <option value="">------ 선택하세요 ------</option>
                <option value="프론트엔드">FRONT</option>
                <option value="백엔드">BACK</option>
                <option value="디자이너">디자이너</option>
                <option value="PM">PM</option>
                <option value="AI 개발자">AI 개발자</option>
                <option value="데이터 분석">데이터 분석</option>
                <option value="게임 개발자">게임 개발자</option>
            </Select>
            <br/></Row>
            <Row>
            <Label>
            연락처(이메일) :</Label>
            <InputField type="email" name="email" onChange={handleChange} />
            <br/></Row>
            <Row>
            <Label>
            모집 설명 :</Label>
            <Textarea 
            name="description" 
            onChange={handleChange} 
            placeholder="프로젝트에 대한 설명, 사용 프레임워크 등 설명해주세요."
            />
            <br/></Row>
            </div>
                
            <HomeStyles>
            <Btn onClick = {openDialog}>등록하기</Btn>
            </HomeStyles>
            <RegisterPosting isOpen={isModalOpen} closeModal={closeModal}/>
        </Wrapper>
        </div>
    );
}