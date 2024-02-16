import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';


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
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [showImage, setShowImage] = useState(false);

    const [idValid, setIdValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);
    
  
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
        <ContentWrap>
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
          <Link to = {'/pages/Sign'}>
            <ButtonSign>회원가입</ButtonSign>
          </Link>
        </div>
        <div>
          <BottomButton>로그인</BottomButton>
          <div>
          <LoginText>
            소셜 계정으로 로그인
          </LoginText>
          <LoginLogo>
            <img src="data:image/png;base64,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" alt="카카오톡 로고" />
          </LoginLogo>
          </div>
        </div>
      </Page>

    );
}