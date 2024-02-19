import styled from 'styled-components';
import React,{useState} from 'react';
import { Link, Component, useNavigate } from 'react-router-dom';
import '../css/MyPage.css';

// import recoil
import { useRecoilState, useRecoilValue} from "recoil";
import { PortfolioState } from "../recoil/recoil";
import axios from 'axios';

const Page = styled.div`
  position: absolute; // 절대 위치 지정
  top: 50%; 
  left: 50%; // 좌우 중앙에 위치
  transform: translate(-50%, -50%); // 위치 조정
  margin-top:50px;
  border-style:none;
  width: 800px;
  height: 600px;
  background-color: #D9D9D9;
  display: flex;
  flex-direction: column;
  padding: 50px 30px;
  justify-content:center;
`

const Wrapper=styled.div`
  background-color:white;
`
// 상단 네브바
const Navbar = styled.div`
  background-color:white;
  display:grid;
  display: flex;
  justify-content: space-between; /* 가운데 정렬과 오른쪽 정렬을 동시에 설정 */
  align-items: center;

  width: 100%;
  padding: 10px 20px; 
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
  z-index: 1000; /* 다른 요소들 위에 상단바가 오도록 설정 */
`

const Title = styled.div`
  font-weight: bold;
  text-align: center; 
  margin-top: 50px;
`

const NavbarItem=styled.a`

  margin-right: 20px;
  text-decoration-line:none;
  font-weight:bold;
  color: black;
`
const NavbarItems = styled.div`
  display: flex;
  align-items: center;
  gap: 30px; /* 항목들 사이의 간격 */
  margin-left: auto; /* 항목들을 오른쪽으로 이동 */
  margin-right : 50px;
`

const Label = styled.label`
  margin-right: 0.5rem;
  width: 150px;
`;

const Row = styled.div`

  display: flex;
  margin-bottom: 20px;

  display: flex;
  align-items: center;
`

const InputField = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: ${(props) => props.inputWidth};
  
  &:focus {
    border-color: black;  
    outline: none;  
  }
`
const HomeStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Btn = styled.button`
  margin-top : 80px;
  font-weight: bold;
  border-radius: 50px;
  background-color:#94B6EF;
  width: 250px;
  height: 50px;
  color: white;
  border : none;
`

const Textarea  = styled.textarea`
  width: 500px;
  height: 80px
`

const ApplyBtn = styled.button`
    color:white;
    margin: 5% 0% 0% 17%;
    width: 500px;
    min-height:30px;
    border-style:none;
    font-weight:bold;
    background-color:#94B6EF;
    border-radius: 3px;
    text-align:center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
`



export default function WritePortfolio(){
    const [state, setPortfolioState] = useRecoilState(PortfolioState);

    
    const navigate=useNavigate();
    const handleChange = (e) => {
        setPortfolioState({ ...state, [e.target.name]: e.target.value });
    };

    /*********************************************************************/
    /*임시*/
    const userId=1;
    const portfolioLink='/dummy';
    /*마이페이지 - 내 포트폴리오 저장 로직 수행*/
    const savePortfolioLink=async(userId, portfolioLink)=>{
      try{
        const access_token=localStorage.getItem('access');
        const response=await axios.post('api/user/portfolio',
        {
          userId:userId,
          link:portfolioLink,
        }, {
          headers:{
          Authorization: `Bearer ${access_token}`,
        },
      });
        console.log('Porfolio link 저장: ', response.data);
        navigate('/pages/mypage');
        alert("포트폴리오 저장에 성공하였습니다.");

      } catch (error) {
        console.error('Portfolio link 저장 오류: ', error.response ? error.response.data : error);
        alert("포트폴리오 저장에 실패하였습니다.");
       
      }
    };

    /*********************************************************************/

    return(
        <div className="my-page">
        <Wrapper>
            <Navbar>
            <NavbarItems>
                <NavbarItem href="/pages/Matching">매칭 모집</NavbarItem>
                <NavbarItem href="/pages/postingpage">매칭 등록</NavbarItem>
            </NavbarItems>
            </Navbar>
            
            <Title>포트폴리오 작성</Title>
            <Page as="form">
                <Row>
                    <Label>이름 :</Label>
                    <InputField
                     type="text" 
                     name="name" 
                     value={state.name} 
                     onChange={handleChange}/>
                </Row>
                <Row>
                    <Label>대학 및 전공 :</Label>
                    <InputField
                     type="text" 
                     name="universityAndMajor" 
                     value={state.universityAndMajor} 
                     onChange={handleChange} 
                     style={{width : '500px'}}/>
                </Row>
                <Row>
                    <Label>연락처 :</Label>
                    <InputField
                     type="text" 
                     name="contact" 
                     value={state.contact} 
                     onChange={handleChange}
                     style={{width : '500px'}}
                     placeholder="ex) 이메일을 입력해주세요"/>
                </Row>
                
                <Row>
                    <Label>사용 가능 언어 :</Label>
                    {['Java', 'Python', 'C', 'JS'].map((language) => (
                        <div key={language} style={{ marginRight: '0.5rem' }}>
                            <h3 style={{ marginRight: '0.5rem' }}>{language}</h3>
                            {['상', '중', '하'].map((level) => (
                                <label 
                                key={level} 
                                style={{ marginRight: '0.5rem', display: 'flex', alignItems: 'center'}}>
                                    <InputField
                                        type="radio"
                                        name={language}
                                        value={level}
                                        checked={state[language] === level}
                                        onChange={handleChange}
                                    />
                                    {level}
                                </label>
                            ))}
                        </div>
                    ))}
                </Row>
                <Row>
                    <Label>프로젝트 경력 :</Label>
                    <Textarea 
                    name="projectExperience"
                    value={state.projectExperience} 
                    onChange={handleChange}
                    placeholder="ex) 프로젝트 경력을 입력해주세요" />
                </Row>
                <Row>
                    <Label>기타 :</Label>
                    <Textarea 
                    name="etc" 
                    value={state.etc} 
                    onChange={handleChange} />
                </Row>

                <ApplyBtn onClick={()=>savePortfolioLink(userId, portfolioLink)}>저장하기</ApplyBtn>

            </Page>

        </Wrapper>
        </div>
    );
    
} 

    