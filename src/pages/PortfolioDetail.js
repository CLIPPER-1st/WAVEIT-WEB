import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import NavBar from '../components/NavBar';

// import recoil
import { useRecoilState, useRecoilValue} from "recoil";
import { PortfolioState } from "../recoil/recoil";

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
    width: 65vw;
    height: 38vw;
    background-color:#D9D9D9;
    box-sizing: border-box;
    padding: 2vw;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    //border-radius: 3px;
`

const Title=styled.div`
    margin: 3%;
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
const Btn=styled.button`
    width: 20vw;
    height: 5vw;;
    background-color:rgba(148, 182, 239, 0.8); 
    border-radius: 6px;
    border-style:none;
    font-size:1.3vw;
    font-weight:bold;
    display: block;
    margin: 10px auto;
`
const Input=styled.input`
    width: 60%;
    margin-left: 1rem;
    margin-bottom: 0.8rem;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 0.5rem;
    font-size: 1rem;
`
const Row=styled.div`
    display : flex;
    align-items: center;
`
const Label=styled.label`
    width : 110px;
    margin-bottom : 20px;
    font-weight:bold;
`

const PortfolioDetail = () => {
    const [portfolioData, setPortfolioData] = useRecoilState(PortfolioState);
    const { portfolioname } = useParams();
    const itemIndex = portfolioData.findIndex(item => item.portfolioname === portfolioname);
    const [item, setItem] = useState(portfolioData[itemIndex]);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleSave = () => {
        setIsEditing(false);
        let updatedPortfolioData = [...portfolioData];
        updatedPortfolioData[itemIndex] = item;
        setPortfolioData(updatedPortfolioData);
    
        fetch('/api/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item), 
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('네트워크 응답이 정상적이지 않습니다.');
            }
            // Handle success
        })
        .catch(error => {
            console.error('fetch 작업에 문제가 있습니다:', error);
            // Handle error
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem(prevItem => ({ ...prevItem, [name]: value }));
    }

    
    return (
        <Container>
            <NavBar 
                isLoggedIn={true}
                menuItems={[
                    {href:"/pages/Matching", text:"매칭 모집"},
                    {href:"/pages/postingpage", text:"매칭 등록"}
                ]}
            /> 
            <Title>{item.portfolioname}</Title>
            <GrayBox>
                {isEditing ? (
                    <>
                    <Row><Label>이름 : </Label>
                        <Input type="text" name="name" value={item.name} onChange={handleChange} /></Row>
                    <Row><Label>대학 및 전공 : </Label>    
                        <Input type="text" name="universityAndMajor" value={item.universityAndMajor} onChange={handleChange} /></Row>
                    <Row><Label>연락처 : </Label>
                        <Input type="text" name="contact" value={item.contact} onChange={handleChange} /></Row>
                    <Label>사용가능언어 : </Label>    
                        {['Java', 'Python', 'C', 'JS'].map((language) => (
                            <div key={language} style={{ marginRight: '0.5rem', display: 'flex'}}>
                                <h3 style={{ marginRight: '0.5rem', marginLeft:'10rem', width:'5rem'}}>{language}</h3>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    {['상', '중', '하'].map((level) => (
                                        <label 
                                        key={level} 
                                        style={{ marginRight: '0.5rem', display: 'flex', alignItems: 'center'}}>
                                            <input
                                                type="radio"
                                                name={language}
                                                value={level}
                                                checked={item[language] === level}
                                                onChange={handleChange}
                                            />
                                            {level}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}<br/>
                    <Label>프로젝트 경력 : </Label>   
                        <Input type="text" name="projectExperience" value={item.projectExperience} onChange={handleChange} />
                        <Btn onClick={handleSave}>저장하기</Btn>
                    </>
                ) : (
                    <>
                        <div style={{ lineHeight: "4vw", fontSize: "1.5vw" }}>
                            <b>이름 : </b> {item.name}</div>
                        <div style={{ lineHeight: "4vw", fontSize: "1.5vw" }}>
                            <b>대학 및 전공 : </b> {item.universityAndMajor}</div>
                        <div style={{ lineHeight: "4vw", fontSize: "1.5vw" }}>
                            <b>연락처 : </b> {item.contact}</div>
                        <div style={{ lineHeight: "4vw", fontSize: "1.5vw" }}>
                            <b>사용가능언어 : </b>
                            <FieldBtn>Java-{item.Java}</FieldBtn>
                            <FieldBtn>Python-{item.Python}</FieldBtn>
                            <FieldBtn>C언어-{item.C}</FieldBtn>
                            <FieldBtn>JS-{item.JS}</FieldBtn>
                        </div>
                        <div style={{ lineHeight: "4vw", fontSize: "1.5vw" }}>
                            <b>프로젝트 경력 : </b> {item.projectExperience}</div>
                        <br />
                        <Btn onClick={handleEdit}>포트폴리오 수정하기</Btn>
                    </>
                )}
            </GrayBox>
        </Container>
    )
}

export default PortfolioDetail;