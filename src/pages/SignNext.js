import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
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
  font-size: 20px;
  font-weight: 1000;
  color: #262626;
  margin-left: 100px;
`

const InputWrap = styled.div`
  display: flex;
  width: 350px;
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
  //font-size:40px;
  width: 100%;
  min-height:100%;
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
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
`


/*확인 버튼*/
const ConfirmButton =styled.button`
  width : 100px;
  height: 50px;
  background-color: ${prop=>prop.bgcolor};
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

export default function Signnext() {
    const navigate=  useNavigate();
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [pwcheck, setPwCheck] = useState('');
    const [showImage, setShowImage] = useState(false);

    const [idValid, setIdValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    const [idDuplicate, setIdDuplicate] = useState(true);

    
  
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

    /************************************************************/
    //존재하는 아이디인지 확인
    //endpoint: api/user/checkduplicate
    const checkIdDuplicate = async(id) =>{
      //서버 요청으로 아이디 중복 검사 로직을 요청
     
        try{
          const response=await axios.post('/api/user/checkduplicate', {loginId: id});
          /*추후 수정 필요*/
          if(response.data === "사용 가능한 아이디입니다." && id!=""){
            setIdValid(true);
            alert(response.data);
          }
          else{
            alert("사용할 수 없는 아이디입니다.");
          }
        }catch(error){
          console.log("아이디 중복 검사 오류: ",error);
          /**중복된 아이디 치니까 왜 409 Error가 나지?
           * 이따 다시 확인 필요
           */
          alert("사용할 수 없는 아이디입니다.");
        }
    }


    const checkPasswordSame =(pwcheck) =>{
      if(pw==="" || pwcheck===""){
        alert("비밀번호 입력란이 비어있습니다.");
      }
      else if(pw===pwcheck){
        alert("비밀번호 일치 확인 완료되었습니다. 다음을 눌러주세요.");
        setPwValid(true);
      }else{
        alert("비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
        setPw("");
      }
    }
    const BottomBtn = () => {
      //빈 입력란 있는지?
      if (id !== "" && pw !== "" && pwcheck !== "") {
        // 아이디, 비번 유효성
        if (!idValid && !pwValid) {
          alert("아이디 중복 및 비밀번호 일치 확인을 해주세요.");
        } else if (!idValid) {
          alert("아이디 중복 확인을 해주세요.");
        } else if (!pwValid) {
          alert("비밀번호 일치 확인을 해주세요.");
        } else {
          // 검증 통과할때만, 다음 페이지로 이동
          navigate("/pages/SignFinal", { state: { id, pw } });
        }
      } else {
        alert("비어있는 입력란이 있습니다.");
      }
    };
    
    /************************************************************/

    return (
      <Page>
        <TitleWrap>회원가입</TitleWrap>
        <div style = {{marginLeft : "100px", marginTop : "10px"}}>
        가입 할 아이디와 비밀번호를 입력해주세요.
        </div>
        <ContentWrap>
          <InputTitle>아이디</InputTitle>
          <div style={{display:"flex"}}>
          <InputWrap>
            <InputField
              type="text"
              value={id}
              onChange={handleIDChange}
            />
          </InputWrap>
          <ConfirmButton bgcolor={"#94B6EF"} onClick={()=>checkIdDuplicate(id)}>확인</ConfirmButton>
          </div>
          <InputTitle><br/>비밀번호</InputTitle>

          <div style={{display:"flex", margin:"0px"}}>
          <InputWrap>
            <InputField
              type="password"
              value={pw}
              onChange={handlePwChange}
            />
          </InputWrap>
          <ConfirmButton bgcolor={"#D9D9D9"} onClick={()=>checkPasswordSame(pwcheck)}>확인</ConfirmButton>
          </div>
          <InputTitle><br/>비밀번호 확인</InputTitle>
          
          <InputWrap>
            <InputField
              type="password"
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
        
        <BottomButton onClick={BottomBtn}>다음</BottomButton>
      </Page>

    );
}