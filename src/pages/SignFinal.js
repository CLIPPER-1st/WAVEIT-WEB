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

const Check = styled.div`
  margin-left:100px;
  font-size: 20px;
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
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    const [age, setAge] = useState("");
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleNicknameChange = (event) => {
      setNickname(event.target.value);
    };

    const handleAgeChange = (event) => {
        setAge(event.target.value);
      };

    return (
      <Page>
        <TitleWrap>회원가입</TitleWrap>
        <div style = {{marginLeft : "100px", marginTop : "10px"}}>
        가입을 위해 이름과 닉네임을 입력해주세요.
        </div>
        <ContentWrap>
          <InputTitle>이름</InputTitle>
          <InputWrap>
            <InputField
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </InputWrap>
          
          <InputTitle><br/>닉네임</InputTitle>
          <InputWrap>
            <InputField
              type="text"
              id="nickname"
              value={nickname}
              onChange={handleNicknameChange}
            />
          </InputWrap><br/>

          <Check>
          <input 
            type="radio" 
            id="age"
            value={age} 
            onChange={handleAgeChange} /> 만 14세 이상입니다.</Check>
          

        </ContentWrap>
        <BottomButton>완료</BottomButton>
      </Page>

    );
}