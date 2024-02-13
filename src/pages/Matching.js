import React, {useState} from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import MatchBox from '../components/MatchBox';
import '../css/Matching.css';
import SettingFilter from '../components/SettingFilter';
import List from '../json/MatchList.json';
const Wrapper=styled.div`
    min-height:100%;
    min-width:100%;
    background-color:rgb(253, 252, 252);
`
const MatchContainer=styled.div`
    min-width: 100%;
    display:grid;
    grid-template-columns:repeat(2,1fr);
    place-items: center;
`
const SearchBox=styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`
const Input=styled.input`
    background-color: #D9D9D9;
    margin: 3vw;
    border-style: none;
    border-radius: 6px;
    width: 30vw;
    height: 3vw;
    color: white;
    padding: 0px 10px;
`
const Title=styled.span`
margin: 5vw 0vw 2vw 0vw;
font-size: 2vw;
font-weight: bold;
justify-self:center;/*타이틀 수평 가운데 정렬*/
`

const TitleBox=styled.div`
    width: 50%;
    display: flex;
    align-items:center;
    margin: 0vw 0vw 0vw 40vw;
`

const FilterBtn=styled.div`
    cursor:pointer;
    background-color:#FF6868; 
    padding: 0.5vw;
    font-weight: bold;
    border-radius: 3px;
    width: 8vw;
    height: 1.7vw; 
    text-align:center;
    font-size: 1.2vw;
    margin-left: auto;/*버튼 오른쪽정렬*/
    `


const Matching=()=>{
     //모달창 열고닫기
     const [isModalOpen, setIsModalOpen]=useState(false);
    //필터 적용을 위한 state(프로젝트 분야)
     const [selectedField, setSelectedField] = useState('');
     const [selectedRecruit, setSelectedRecruit] = useState('');
     //전체보기 사용시
     const [showAll, setShowAll] = useState(true);
     const handleApplyFilter=(field, recruit)=>{
        setSelectedField(field);
        setSelectedRecruit(recruit);
     }
     const modalOpen = () =>{
         setIsModalOpen(true);
     }
     const modalClose = () =>{
         setIsModalOpen(false);
     }

     //필터링된 리스트
     const filteredList=showAll? List: List.filter(item=>{
        const fieldIncludes=item.field.includes(selectedField);
        const recruitIncludes=item.recruit.toLowerCase().includes(selectedRecruit.toLowerCase());
        return fieldIncludes&&recruitIncludes;
    })

    const ViewAll=styled.span`
        background-color:#94B6EF;
        border-radius:2px;
        padding: 0.5vw 1vw;
        font-size:1.2vw;
        font-weight: bold;
        margin: 0% 0% 0% 81%;
        cursor:pointer;
    `

    const handleClickViewAll=()=>{
        setShowAll(true);
        setSelectedField('');
        setSelectedRecruit('');
    }
    return (
        <Wrapper>
            <NavBar />
            <SearchBox>
                <TitleBox>
                    <Title>매칭 모집</Title>
                    <FilterBtn onClick={modalOpen}>필터 조정</FilterBtn>
                    </TitleBox>
                    <ViewAll onClick={handleClickViewAll}>전체 보기</ViewAll>
                    <Input type="text" />
            </SearchBox>
            <SettingFilter 
                isModalOpen={isModalOpen} 
                modalClose={modalClose}
                onApply={handleApplyFilter}//콜백함수
                setShowAll={setShowAll}
            />
            <MatchContainer>
               { 
                    filteredList.map(({title, field, recruit})=>{
                
                    //console.log(title+","+field+","+recruit);
                    
                    return <MatchBox title={title} field={field} recruit={recruit}/>
                })
                }
            </MatchContainer>
        </Wrapper>
        
    )
}
   

export default Matching;