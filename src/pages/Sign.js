import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
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
const InputTitle = styled.div`
  font-size: 20px;
  font-weight: 1000;
  color: #262626;
  margin-left: 100px;
`
const InputWrap = styled.div`
  display: flex;
  width: 380px;
  border-style:none;
  border-bottom: 1.4px solid #D9D9D9; 
  padding: 20px;
  margin-left: 100px;
  background-color: white;
  &: hover{
    border-bottom: 1.4px solid #737373; 
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
const ContentWrap = styled.div`
  margin-top: 50px;
`

/*인증요청 버튼*/
const RequestButton = styled.button`
  width : 100px;
  height: 50px;
  background-color: #94B6EF;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
  color: white;
  border-radius: 6px;
  border-style:none;
  font-size: 16px;
  margin-top: 30px;
  margin-left: 20px;

`

/*확인 버튼*/
const ConfirmButton =styled.button`
  width : 100px;
  height: 50px;
  background-color: #D9D9D9;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
  font-weight:bold;
  font-size:16px;
  border-radius:6px;
  border-style:none;
  color: white;
  color: white;
  margin-top: 30px;
  margin-left: 20px;
`

/*다음 버튼*/
const BottomButton = styled.button`
  position: fixed;
  width: 600px;
  height: 60px;
  border: none;
  font-size: 20px;
  font-weight: bold;
  background-color: #2519B2;
  border-radius:3px;
  color: white;
  cursor: pointer;
  text-align: center;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
`


function Sign() {

  const [email, setEmail] = useState(''); 
  const [cernumber, setCernumber] = useState(''); 
  
  const handleEmailChange = (event) =>{
    setEmail(event.target.value);
  }

  const handleCernumberChange = (event) =>{
    setCernumber(event.target.value);
  }
  /***********이메일 인증번호 발송 요청 & 확인*********************************/
  //endpoint: api/user/email-verify

  const requestEmailVerification = async(email) => {
    try{
      const response = await axios.post('/user/email-verify', {email});
      alert('발송된 인증번호를 이메일에서 확인해주세요.');
    }catch(error){
      alert('인증번호 요청에 실패했습니다.');
      console.log('이메일 인증 오류: ',error.response? error.response.data:error);
    }
  }

  //endpoint: api/user/email-verify/{verify_code}
  /* ??????????????url 통해서 verify_code 전송하면 verified 필드 설정해서 응답 준다고 가정   */ 
  const verifyEmailCode = async(email, cernumber) =>{
   try{
    const response = await axios.get(`api/user/email-verify/${cernumber}`);
    if(response.data.verified){
      alert("이메일 인증 성공! 다음을 눌러주세요.");
    }else{
      alert("올바른 인증번호가 아닙니다. 다시 시도해주세요.");
      setCernumber('');
    }
   }catch(error){
      alert("이메일 인증 오류가 발생했습니다. 다시 시도하세요.");
      setCernumber('');
      console.error('이메일 인증 검증 오류: ', error.response ? error.response.data : error);
   }
  }
  /**************************************************************/

    return (
      <Page>
      
        <TitleWrap>회원가입</TitleWrap>
        <div style = {{marginLeft : "100px", marginTop : "10px", color:"#737373"}}>
        가입을 위해 이메일 인증을 진행해주세요.
        </div>
        
        <ContentWrap>
          <InputTitle>이메일</InputTitle>

          <div style={{ display: 'flex', alignItems: 'center'}}>
            <InputWrap>
                <InputField
                type="email"
                value={email}
                onChange={handleEmailChange}
                />
                
            </InputWrap>
            <RequestButton onClick={()=>requestEmailVerification(email)}> 인증요청 </RequestButton>
          </div>
          
          <InputTitle><br/>인증번호</InputTitle>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <InputWrap>
                <InputField
                type="password"
                value={cernumber}
                onChange={handleCernumberChange}
                />
            </InputWrap>
            <ConfirmButton onClick={()=>verifyEmailCode(email, cernumber)}> 확인 </ConfirmButton>
          </div>
        </ContentWrap>
        <Link to ={'/pages/SignNext'}>
        <BottomButton>다음</BottomButton></Link>
      </Page>

    );
  }

export default Sign;