import React, { useEffect, useState } from 'react';
import { Link , useNavigate} from "react-router-dom";
import styled from 'styled-components';
import Kakao from '../static/Images/kakao.png';
import API from '../api/axios';

const Page = styled.div`
margin-top:100px;
  border-style:none;
  border-radius:10px;
  position: fixed;
  top: 20px;
  bottom: 0;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0,0,0,0.3);
  max-width: 700px;
  padding: 0px 20px;
  max-height : 700px;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: white;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const TitleWrap = styled.div`
  margin-top: 100px;
  font-size: 30px;
  font-weight: bold;
  color: #262626;
  margin-left: 100px;
`

const ContentWrap = styled.div`
  margin-top: 50px;
`

const InputTitle = styled.div`
  font-size: 20px;
  font-weight: 1000;
  color: #262626;
  margin-left: 100px;
`

const InputWrap = styled.div`
  display: flex;
  border-style:none;
  border-bottom: 1.4px solid #D9D9D9; 
  padding: 20px;
  margin-left: 100px;
  margin-right: 100px;
  background-color: white;


  &:hover{
    border-bottom: 1px solid #000080;
  }
`

const InputField = styled.input`
  width: 100%;
  outline: none;
  border: none;
  height: 17px;
  font-size: 14px;
  font-weight: 400;
`

const ErrorMessageWrap = styled.div`
  margin-top: 8px;
  color: #ef0000;
  font-size: 12px;
`

/*아이디 비밀번호 찾기 버튼*/
const ButtonId =styled.button`
  position: fixed;
  border: none; 
  font-size: 18px;
  margin-top: 30px;
  margin-left: 180px;
  background-color: white;

  &:hover{  
    font-weight: bold;
  }
`

/*구분선*/
const ButtonDivider = styled.div`
  position: fixed;
  font-size: 18px;
  margin-top: 30px;
  margin-left: 370px;
`

/*회원가입 버튼*/
const ButtonSign = styled.button`
  position: fixed;
  border: none; 
  font-size: 18px; 
  margin-top: 30px;
  margin-left: 380px;
  background-color: white;
  
  &:hover{  
    font-weight: bold;
  }
`

/*로그인 버튼*/
const BottomButton = styled.button`
  position: fixed;
  width: 500px;
  height: 60px;
  border: none;
  font-size: 20px;
  font-weight: bold;
  background-color: #2519B2;
  border-radius:3px;
  color: white;
  cursor: pointer;
  text-align: center;
  top: 71%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const LoginText = styled.div`
  position: fixed;
  font-size: 18px;
  margin-top: 180px;
  margin-left: 265px;
  font-weight: bold;
`
const LoginLogo = styled.div`
  position: fixed;
  margin-top: 220px;
  margin-left: 320px;
`


export default function Login() {

    const navigate=useNavigate();
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [showImage, setShowImage] = useState(false);

    const [idValid, setIdValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    //로그인 전, 후 페이지 전환에 사용
    const [isLoggedIn, setIsLoggedIn]=useState(false);

    //API 명세(endpoint: api/user/login)
    const handleLogin=async(event)=>{
      event.preventDefault();
      //서버로 로그인 요청할 때, input 태그에 입력받은 id, pw를 보낼 것임.
      const userData = {
        loginId: id,
        password: pw
      };

      /*********************************************************************/

      //서버로 로그인 요청 request 보내기(id, pw 전송)
      API.post('/accounts/token/', userData)
      .then((response)=>{
        if(response.status === 200 || response.status === 201){
          console.log("Login Success!: ", response.data);
        }
      })
    }
  /*********************************************************************/
  
    useEffect(() => {
      if(idValid && pwValid) {
        setNotAllow(false);
        return;
      }
      setNotAllow(true);
    }, [idValid, pwValid]);

    // 영문자로 시작하는 영문자 또는 숫자 6~20자 
    const handleID = (e) => {
      setId(e.target.value);
      const regex =
        /^[a-z]+[a-z0-9]{5,19}$/g;
      if (regex.test(e.target.value)) {
        setIdValid(true);
      } else {
        setIdValid(false);
      }
    };

    // 영문, 숫자, 특수문자 포함 8자 이상
    const handlePw = (e) => {
      setPw(e.target.value);
      const regex =
        /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
      if (regex.test(e.target.value)) {
        setPwValid(true);
      } else {
        setPwValid(false);
      }
    };

    return (
      <Page>
        <TitleWrap>
          waveit의 시작
        </TitleWrap>
        <ContentWrap as="form" onSubmit={handleLogin}>
          <InputTitle>아이디</InputTitle>
          <InputWrap>
            <InputField
              type="text"
              value={id}
              onChange={handleID}
            />
          </InputWrap>
          
          <InputTitle><br/>비밀번호</InputTitle>
          <InputWrap>
            <InputField
              type="password"
              value={pw}
              onChange={handlePw}
            />
          </InputWrap>

          <ErrorMessageWrap>
            {!pwValid && pw.length > 0 && (
              <div style={{ marginLeft: "100px" }}>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            )}
          </ErrorMessageWrap>
        </ContentWrap>

        <div>
          <Link to ={'/pages/FindIdpw'}>
            <ButtonId>아이디 비밀번호 찾기</ButtonId></Link>
          <ButtonDivider>|</ButtonDivider>
          <Link to = {'/pages/SignNext'}>
            <ButtonSign>회원가입</ButtonSign>
          </Link>
        </div>
        <div>
          <BottomButton type="submit">로그인</BottomButton>
          <div>
          <LoginText>
            소셜 계정으로 로그인
          </LoginText>
          <LoginLogo>
            <img src={Kakao} alt="카카오톡 로고" />
          </LoginLogo>
          </div>
        </div>
      </Page>

    );
}