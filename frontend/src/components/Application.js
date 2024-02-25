import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import ApplySuccess from './ApplySuccess';
import ApplyBtn from '../static/Images/ApplyBtn.png';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
const Modal = styled.div`
    display:grid;
    grid-template-rows:3fr 17fr;
    z-index: 1000; /* 다른 요소들 위에 상단바가 오도록 설정 */
    width: 37vw;
    height: 30vh;
    position: absolute;
    top: 30%;
    left: 30%;
    background-color:white;
    border-radius: 10px;
`

const Top=styled.div`
    border-radius:10px 10px 0px 0px; 
    background-color:rgba(148, 182, 239, 0.2);
    display:flex;
    justify-content: space-between;
    align-items:center;
    font-weight:bold;
    padding: 0px 10px;
`


const Body=styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    border-radius: 0px 0px 10px 10px; 

`
const RegisterBtn=styled.button`
    color:white;
    margin: 5% 0% 10% 0%;
    width: 70%;
    height:15%;
    border-style:none;
    font-weight:bold;
    background-color:#2519B2;
    border-radius: 3px;
    text-align:center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
`

const Portfolio=styled.div`
    display:flex;
    flex-direction:column;
    width: 90%;
    height: 70%;
    margin-top: 2vw;
    font-size:1.3vw;
    line-height: 3vw;
    font-weight:bold;
`
const Text=styled.textarea`
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    background-color: rgba(217, 217, 217, 0.2);
    width: 99%;
    height: 60%;
    border-style: none;

`
const Application=({postId, userId, title ,isOpen, closeModal})=>{
    const navigate=useNavigate();
    const [modalSize, setModalSize] = useState({ width: '37vw', height: '30vh' });
    const [isEndModalOpen, setIsEndModalOpen]=useState(false);
    const [portfolioLink, setPortfolioLink] = useState('');
    
    const openEndModal=()=>{
        setIsEndModalOpen(true);
    }
    const closeEndModal=()=>{
        setIsEndModalOpen(false);
    }
    const updateModalSize = () => {
        // 화면 너비의 37%를 기준으로 세로 크기 계산 (4:3 비율 유지를 위해)
        const width = window.innerWidth * 0.37;
        const height = (width / 4) * 3;
        setModalSize({ width: `${width}px`, height: `${height}px` });
    };

    const gotoNext=()=>{
        openEndModal();
    }

    // 지원동기 상태관리
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };
    /****************지원서 제출 로직 구현***********************/
    const submitApplication = async() =>{

        const access_token=localStorage.getItem('access');
        if(!access_token){
            alert('로그인이 필요한 서비스입니다.');
            navigate('/pages/Login');
        }

        try{
            const response=await axios.post(`/api/post/${postId}/${userId}/apply`,{
                motivation:text,
                portfoliolink:""/*...*/
            },{
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${access_token}`
                }
            });

            if(response.data.check){
                /*추후 모달창으로 변경 필요 -> handleClick1() 함수 여기에 넣기*/
                alert("지원 완료되었습니다.");/*추후 openEndModal()로 변경 필요*/
            }else{
                alert("서버 응답 실패: 지원서 제출에 실패했습니다.");
            }
        }catch(error){
            console.error("지원서 제출 API 오류: ", error);
            alert("API 오류: 지원서 제출에 실패했습니다.")
        }
    }

    const handleRegisterclick = async() =>{
        await submitApplication();
        //성공하면 모달 열기
    }
     /************************************************************/
    
    
     useEffect(() => {
        window.addEventListener('resize', updateModalSize);
        updateModalSize(); // 컴포넌트 마운트 시 초기 크기 설정

        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
            window.removeEventListener('resize', updateModalSize);
        };
    }, []);

        return (
        <Modal style={{ display: isOpen?"grid":"none", width: modalSize.width, height: modalSize.height,  }}>
            <ApplySuccess isOpen={isEndModalOpen} closeEndModal={closeEndModal} closeModal={closeModal}/>
            <Top>
                <span style={{fontSize:"1.2vw"}}>{title}  지원</span>
            </Top>
            <Body>
                <Portfolio>
                <div style={{ justifyContent: "space-evenly"}}>
                    <span style={{marginRight: "2vw"}}>포트폴리오</span>                    
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    <label for="fileInput">
                        <img src={ApplyBtn} alt="upload file" style={{ width: "12vw", height:"2.5vw"}} />
                    </label>
                </div>
                <div>지원 동기 및 본인 소개</div>
                <Text
                placeholder="지원 동기를 작성해주세요."
                value={text}
                onChange={handleChange}
                />
                </Portfolio>
                <RegisterBtn onClick={gotoNext}>
                    지원하기
                </RegisterBtn>
            </Body>
        </Modal>
    )
}

export default Application;

