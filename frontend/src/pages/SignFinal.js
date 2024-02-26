import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
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

const ContentWrap = styled.div`
  margin-top: 50px;
`

const InputTitle = styled.div`
  font-size: 18px;
  font-weight: 1000;
  color: #262626;
  margin-left: 100px;
`

const InputWrap = styled.div`
display: flex;
width: 470px;
border-style:none;
border-bottom: 1.4px solid #D9D9D9; 
padding: 5px;
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

const Check = styled.div`
  margin-left:100px;
  font-size: 20px;
`

/*다음 버튼*/
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
top: 85%;
left: 50%;
transform: translate(-50%, -50%);
`

export default function Signup() {

    const navigate=useNavigate();
    const location = useLocation();
    /*useLocation 훅을 사용해 상태 전달받기*/
    const {id, pw} = location.state || {};
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [age,setAge]=useState(false);
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handlePhoneChange = (event) => {
      setPhone(event.target.value);
    };

    const handleEmailChange = (event) =>{
      setEmail(event.target.value);
    }

    const handleAgeChange = (event) => {
        setAge(event.target.checked);
    };

    /*완료 버튼*/
    const BottomBtn =() =>{
      if(name!="" && phone!="" && email!="" && age){
        successSignup({id, pw, name, phone, email});
       
      } else{
        if(!age){
          alert("만 14세 이상만 가입 가능합니다.");
        }else{
          alert("비어있는 입력란이 있습니다.");
        }
        
      }
    }
    const successSignup = async ({id, pw, name, phone, email}) => {
      const signupData = {
        "loginId": id,
        "password": pw,
        "name": name,
        "phone": phone,
        "email": email,
        "introduce": "Hello"
      };
    
      console.log("signupData: ", signupData);
      
      try {
        const response = await axios.post('/api/user/signup', signupData);
        if(response.data === "redirect:/login"){
          alert("회원가입이 완료되었습니다!");
          navigate("/pages/login");
        } else {
          alert("회원가입에 실패했습니다.");
        }
      } catch (error) {
        console.log("회원가입 오류: ", error);
        alert("API 오류발생: 회원가입에 실패하였습니다.");
      }
    }
    

    return (
      <Page>
        <TitleWrap>회원가입</TitleWrap>
        <div style = {{marginLeft : "100px", marginTop : "10px"}}>
        가입을 위해 이름과 전화번호, 이메일을 입력해주세요.
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
          <InputTitle><br/>전화번호</InputTitle>
          <InputWrap>
            <InputField
              type="text"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
            />
          </InputWrap><br/>
          <InputTitle><br/>이메일</InputTitle>
          <InputWrap>
            <InputField
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </InputWrap><br/>

          <Check>
          <input 
            type="radio" 
            id="age"
            value={age} 
            onChange={handleAgeChange} /> 만 14세 이상입니다.</Check>
          

        </ContentWrap>
        <BottomButton onClick={BottomBtn}>완료</BottomButton>
      </Page>

    );
}
