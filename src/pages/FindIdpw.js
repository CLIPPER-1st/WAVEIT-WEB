import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

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

const SelectWrap = styled.div`
  width : 75%;
  margin-left: 100px;
  margin-top: 80px;
  text-align: center;
  display: flex;
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

/*인증번호 확인 버튼*/
const CheckButton = styled.button`
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
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
`

function FindIdpw() {

  const [isConfirmed, setIsConfirmed] = useState(false);

  const [name, setName] = useState(''); //이름
  const [email, setEmail] = useState(''); // 이메일
  const [id, setId] = useState(''); // 아이디
  const [authNumber, setAuthNumber] = useState(''); // 인증번호

  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);

  const handleFindId = () => {
    setIsConfirmed(false);
  };
  
  const handleFindPw = () => {
    setIsConfirmed(true);
  };

    return (
      <Page>
      
      <TitleWrap>아이디 비밀번호 찾기</TitleWrap>
      <SelectWrap>
      <div
        style={{
          borderBottom: hover1 ? '1px solid blue' :'1px solid black',
          width: '500px',
          marginRight: '20px',
          color: hover1 ? 'blue' : 'black',
          fontWeight: hover1 ? 'bold' : 'normal'
        }}
        onMouseEnter={() => setHover1(true)} 
        onMouseLeave={() => setHover1(false)} 
        onClick={handleFindId}
      >
        아이디 찾기
      </div>
      <div
        style={{
          borderBottom: hover2 ? '1px solid blue' :'1px solid black',
          width: '500px',
          color: hover2 ? 'blue' : 'black',
          fontWeight: hover2 ? 'bold' : 'normal'
          
        }}
        onMouseEnter={() => setHover2(true)} 
        onMouseLeave={() => setHover2(false)} 
        onClick={handleFindPw}
      >
        비밀번호 찾기
      </div>
    </SelectWrap>

      <ContentWrap>

      {!isConfirmed ?(
        <>
          <InputTitle>이름</InputTitle>
          <InputWrap>
            <InputField
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputWrap>
          
        <InputTitle><br/>이메일</InputTitle>
          <InputWrap>
            <InputField
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputWrap>
          <CheckButton>
            아이디 찾기
          </CheckButton>
          </>
      )
      :
      (
        <>
           <InputTitle>아이디</InputTitle>
          <InputWrap>
            <InputField
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </InputWrap>
          
        <InputTitle><br/>인증번호</InputTitle>
          <InputWrap>
            <InputField
              type="password"
              value={authNumber}
              onChange={(e) => setAuthNumber(e.target.value)}
            />
          </InputWrap>
          <CheckButton>
            인증번호 확인
          </CheckButton>
        </>
      )
      }
      </ContentWrap>
      </Page>
    );
  }

export default FindIdpw;