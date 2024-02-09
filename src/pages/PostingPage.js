import React, { useState } from 'react';
import styled from 'styled-components';
import '../css/PostingPage.css';
import RegisterPosting from '../components/RegisterPosting.js';

const Wrapper=styled.div`
  background-color:white;
`
// 상단 네브바
const Navbar = styled.div`
  background-color:white;
  display:grid;
  display: flex;
  justify-content: right; /* 메뉴 항목을 양 끝으로 정렬 */
  
  width: 100%;
  padding: 10px 20px; 
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
  z-index: 1000; /* 다른 요소들 위에 상단바가 오도록 설정 */
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
`

const NavbarItem=styled.a`
  text-decoration-line:none;
  font-weight:bold;
  color: black;
`
const NavbarItems = styled.div`
  display: flex;
  gap: 50px; /* 항목들 사이의 간격 */
  margin-left: auto; /* 항목들을 오른쪽으로 이동 */
  margin-right : 80px;
`;

const Label = styled.label`
  font-weight: bold;
  width : 150px;
`

const InputField = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 400px;
  float: left;
  margin-right : auto;

  &:focus {
    border-color: black;  
    outline: none;  
  }
`;

const Select = styled.select`
  width: 400px;
  border-radius: 4px;
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
  width: 1000px;  
  height: 150px;  // 높이를 200픽셀로 설정
  border: 1px solid #ccc;
  border-radius: 4px;
  padding : 20px 20px;
  margin-right : auto;

  &:focus {
    border-color: black;  
    outline: none;  
  }
`;

const Btn = styled.button`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin: 50px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-weight: bold;
  border-radius: 50px;
  background-color:#94B6EF;
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

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log(project);
    };

    const [isModalOpen, setIsModalOpen]=useState(false);

    const openDialog = () => {
        setIsModalOpen(true);
    }

    const closeModal=()=>{
        setIsModalOpen(false);
    }

    return (
        <div className="posting-page">
        <Wrapper>
            <Navbar>
            <Title>매칭 등록</Title>
            <NavbarItems>
                <NavbarItem href="/dummy2">매칭 모집</NavbarItem>
                <NavbarItem href="/pages/mypage">마이페이지</NavbarItem>
            </NavbarItems>
            </Navbar>

            <form onSubmit={handleSubmit}>
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
                    <option value="앱 개발">앱 개발</option>
                    <option value="웹 개발">웹 개발</option>
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
                    <option value="프론트엔드">프론트엔드</option>
                    <option value="백엔드">백엔드</option>
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
                
            </form>

            <Btn onClick = {openDialog}>등록하기</Btn>
            <RegisterPosting isOpen={isModalOpen} closeModal={closeModal}/>
        </Wrapper>
        </div>
    );
}