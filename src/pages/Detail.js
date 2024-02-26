import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import List from '../json/MatchList.json'
import WishList from "../components/WishList";
import Application from "../components/Application";
import NavBar from "../components/NavBar";
import axios from 'axios';
// import recoil
import { useRecoilState } from 'recoil';
import { LikeState, ApplicationState} from '../recoil/recoil';

const Container=styled.div`
    min-width:100%;
    min-height:100%;
    background-color:rgb(253, 252, 252);
    display:flex;
    flex-direction: column;
    //justify-content:center;
    align-items:center;
`
const GrayBox=styled.div`
    width: 55vw;
    height: 30vw;
    background-color:#D9D9D9;
    box-sizing: border-box;
    padding: 2vw;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    //border-radius: 3px;
`

const Title=styled.div`
    margin: 5%;
    font-size: 2vw;
    font-weight:bold;
`

const FieldBtn=styled.button`
    background-color:rgba(148, 182, 239, 0.8);
    border-radius:6px;
    border-style:none;
    font-weight:bold;
    width: auto;
    height:3vw;
    font-size: 1.2vw;
    margin: 0px 3px;
`
const BtnBox=styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
`
const Btn=styled.button`
    margin: 1vw;
    width: 10vw;
    height: 4vw;
    background-color:#F0F4FF; 
    border-radius: 6px;
    border-style:none;
    font-size:1.3vw;
    font-weight:bold;
`

/*
플젝 분야
모집 파트
모집자 프로필
연락 보내기
프로젝트 설명글
*/

const Detail=()=>{
    const navigate=useNavigate();

    //url 파라미터에서 id값 가져오기
    const {id}=useParams();

    //id값과 일치하는 List 가져오기
    //url에서 가져오는 params는 string 타입이므로, 타입변환 필요.

    /*API 연동시 fetchMatchDetailInfo함수에서 세팅한 detail state로 사용*/
    const item=List.find(item=>String(item.id)===id);
    const [isLoggedIn, setIsLoggedIn]=useState(true);
    const [isModalOpen, setIsModalOpen]=useState(false);
    const [isApplicationModalOpen, setIsApplicationModalOpen]=useState(false);
    
    const [likes, setLikeState] = useRecoilState(LikeState);
    const [application, setApplicationState] = useRecoilState(ApplicationState);

    const [detail, setDetail] = useState(null);

    const userId=localStorage.getItem("userId");
    /*isLoggedIn이 false인 경우*/
    const gotoLogin =() =>{
        alert("로그인이 필요한 서비스입니다.");
        navigate("/pages/Login");
    }

    /*찜하기 누르면 찜목록(likes)에 추가 -> API 연동시 detail*/
    const handleLike = () => {
        setLikeState([...likes, detail]);
    };

    const handleApplication = () => {
        setApplicationState([...application, item]);
    };

    
    const handleClick1 = () => {
        isLoggedIn?openModal():gotoLogin();
    };

    const handleClick2 = () => {
        
        isLoggedIn?openApplicationModal():gotoLogin();
    };


    //찜하기 모달창
    const openModal=()=>{
        handleLike();
        setIsModalOpen(true);
    }
    const closeModal=()=>{
        setIsModalOpen(false);
    }

    //지원하기 모달창
    const openApplicationModal=()=>{
        handleApplication();
        setIsApplicationModalOpen(true);
    }
    const closeApplicationModal=()=>{
        setIsApplicationModalOpen(false);
    }

    /***********API 연동 시 사용할 찜하기 로직 구현 함수*********************/
    const addLikeList = async() =>{
        if(!isLoggedIn){
            gotoLogin();
            return;
        }

        const access_token=localStorage.getItem('access');
        if(!access_token){
            alert('로그인이 필요한 서비스입니다.');
            navigate('/pages/Login');
        }

        let response;
        try{
            response=await axios.patch(`/api/post/${id}/like`,{},{
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${access_token}`
                }
            });

            if(response.data.check){
                /*추후 모달창으로 변경 필요 -> handleClick1() 함수 여기에 넣기*/
                alert("찜하기에 성공했니다.");
                handleLike();
            }else{
                alert("응답 실패: 찜하기 실패했습니다.");
                console.log("찜하기 실패: ", response.data);
            }
        }catch(error){
            console.error("찜하기 API 오류: ", error);
            alert("API 오류: 찜하기에 실패했습니다.")
        }
    }
    /**********************************************************************/
       //matchInfo 가져오기
       const fetchMatchDetailInfo = async() =>{
        const access_token = localStorage.getItem('access');
        try{
            const response = await axios.get(`/api/post/${id}`,{
                headers:{
                    Authorization: `Bearer ${access_token}`,
                },
            });
            setDetail(response.data);
        }catch(e){
            console.log('API 오류: ', e);
        }
    };
    /*id값 변경될 때마다 요청이 이루어지도록 - 의존성 배열에 id 추가*/
    useEffect(()=>{
        fetchMatchDetailInfo();
    }, [id]);
    /*title, category,  */
    return (
        <Container>
            <NavBar 
                isLoggedIn={isLoggedIn}
                menuItems={[
                    {href:"/pages/Matching", text:"매칭 모집"},
                ]}
            />
            <Title>{item.title}</Title>
            <GrayBox>
                <div style={{lineHeight:"4vw",  fontSize:"1.5vw"}}><b>프로젝트 분야 </b> 
                {item.field.map((f, index) => (
                    <FieldBtn key={index}>{f}</FieldBtn> // 고유 key 추가
                ))}
                </div>
                <div style={{lineHeight:"4vw", fontSize:"1.5vw"}}><b>모집 파트 </b> {item.recruit}</div>
                <div style={{lineHeight:"4vw",  fontSize:"1.5vw"}}><b>모집자 프로필 </b> {item.profile}</div>
                <div style={{lineHeight:"4vw",  fontSize:"1.5vw"}}><b>연락 보내기  </b>{item.contact}</div>
                <div style={{lineHeight:"3vw",  fontSize:"1.5vw"}}><b>프로젝트 설명글 </b>{item.content}</div>
                <BtnBox>
                    <Btn onClick={handleClick1}>찜하기</Btn>
                    <Btn onClick={handleClick2}>지원하기</Btn>
                </BtnBox>
            </GrayBox>
            <WishList isOpen={isModalOpen} closeModal={closeModal}/>
            <Application postId={id} userId={userId} title={item.title} isOpen={isApplicationModalOpen} closeModal={closeApplicationModal} />
        </Container>
    )
}

export default Detail;