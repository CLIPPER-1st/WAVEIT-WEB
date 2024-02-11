import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';


const Page = styled.div`
  position: fixed;
  top: 20px;
  bottom: 0;
  width: 100%;
  box-shadow: 2px 2px 2px 2px gray;
  max-width: 800px;
  padding: 0px 20px;
  max-height : 800px;
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
  border-radius: 8px;
  padding: 20px;
  margin-top: 30px;
  margin-left: 100px;
  margin-right: 100px;
  background-color: white;
  border: 1px solid #e2e0e0;

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

/*다음 버튼*/
const BottomButton = styled.button`
  position: fixed;
  width: 600px;
  height: 60px;
  border: none;
  font-size: 20px;
  font-weight: bold;
  background-color: #000080;
  color: white;
  cursor: pointer;
  text-align: center;
  top: 87%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export default function Login() {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [pwcheck, setPwCheck] = useState('');
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
    const handleIDChange = (e) => {
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
    const handlePwChange = (e) => {
      setPw(e.target.value);
      const regex =
        /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
      if (regex.test(e.target.value)) {
        setPwValid(true);
      } else {
        setPwValid(false);
      }
    };

    const handlePwCheckChange = (event) => {
        setPwCheck(event.target.value);
    };

    return (
      <Page>
        <TitleWrap>회원가입</TitleWrap>
        <div style = {{marginLeft : "100px", marginTop : "10px"}}>
        가입 할 아이디와 비밀번호를 입력해주세요.
        </div>
        <ContentWrap>
          <InputTitle>아이디</InputTitle>
          <InputWrap>
            <InputField
              type="text"
              value={id}
              onChange={handleIDChange}
            />
          </InputWrap>
          
          <InputTitle><br/>비밀번호</InputTitle>
          <InputWrap>
            <InputField
              type="password"
              value={pw}
              onChange={handlePwChange}
            />
          </InputWrap>

          <InputTitle><br/>비밀번호 확인</InputTitle>
          <InputWrap>
            <InputField
              type="pwcheck"
              value={pwcheck}
              onChange={handlePwCheckChange}
            />
          </InputWrap>

          <ErrorMessageWrap>
            {!pwValid && pw.length > 0 && (
              <div style={{ marginLeft: "100px" }}>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            )}
          </ErrorMessageWrap>
        </ContentWrap>
        <Link to ={'/pages/SignFinal'}>
        <BottomButton>다음</BottomButton></Link>
      </Page>

    );
}