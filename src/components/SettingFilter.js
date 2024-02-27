import React,{useState} from 'react';
import styled from 'styled-components';
import { RecruitState } from '../recoil/recoil';

const Container=styled.div`
    position:absolute;
    top: 10vw;
    width: 34.9vw;
    height: 28.8vw;
    background-color: #2519B2;
    z-index: 10000;
    margin: 5vw 32vw;
    display:grid;
    grid-template-rows:2fr 5fr 7fr 7fr;
    padding: 2vw;
    color:white;
    font-size: 1.8vw;
    font-weight:bold;

`
const XBtn = styled.span`
    font-size: 2vw;
    justify-self: end;
    cursor:pointer;
`
const ApplyBtn=styled.button`
    font-size: 1.5vw;
    border-radius:6px;
    //color:white;
    font-weight:bold;
    border-style:none;
    background-color:#d9d9d9;
    width: 60%;
    justify-self:center;
`
const Select = ({ options, onChange }) => {
    return (
      <select 
        onChange={onChange}
        style={{ height: "2.5vw", width: "18vw", borderRadius: "2px", backgroundColor: "#D9D9D9", fontWeight: "bold" }}>
        {options.map((option, index) =>
          option ? <option key={index} value={option.value}>{option.label}</option> : null
        )}
      </select>
    )
  }
  

const SettingFilter=({isModalOpen, modalClose, onApply, setShowAll})=>{
    const [selectedField, setSelectedField] = useState('');
    const [selectedRecruit, setSelectedRecruit] = useState('');

    // 변경 핸들러 
    const handleFieldChange = (event) => {
        setSelectedField(event.target.value);
        console.log("selectedField: ",selectedField);
    };

    const handleRecruitChange = (event) => {
        setSelectedRecruit(event.target.value);
        console.log("recruitField: ",selectedRecruit);
    };

    // "적용하기" 클릭 핸들러
    const handleApplyClick = () => {
        setShowAll(false);
        onApply(selectedField, selectedRecruit); // 부모 컴포넌트로 선택된 값을 전달
        console.log("field: "+ selectedField+", recruit: "+selectedRecruit);
        modalClose(); // 모달 닫기
    };
    return (
        <Container style={{display:isModalOpen?"grid":"none"}}>
            <XBtn onClick={modalClose}>X</XBtn>
            <span style={{justifySelf: "center"}}>필터 설정</span>
        
            {/*category*/}
            <div style={{display:"grid", gridTemplateColumns:"1.2fr 1.5fr"}}>
                <span style={{fontSize: "1.5vw", margin:"0vw 2vw 0vw 0vw"}}>프로젝트 분야</span>
                <Select options={[
                { value: 'APP', label: 'APP' },
                { value: 'WEB', label: 'WEB' },
                { value: '데이터 분석', label: '데이터 분석' },
                { value: '게임개발', label: '게임개발' },
                { value: '기타', label: '기타' },
                ]} 
                onChange={handleFieldChange} 
                />

            </div>
            {/*part*/}
            <div style={{display:"grid", gridTemplateColumns:"1.2fr 1.5fr"}}>
                <span style={{fontSize: "1.5vw", margin:"0vw 2vw 0vw 0vw"}}>모집 분야</span>
                <Select options={[
                { value: 'FRONT', label: 'FRONT' },
                { value: 'BACK', label: 'BACK' },
                { value: '디자이너', label: '디자이너' },
                { value: 'PM', label: 'PM' },
                { value: 'AI 개발자', label: 'AI 개발자' },
                { value: '데이터 분석', label: '데이터 분석' },
                { value: '게임 개발자', label: '게임 개발자' },
                ]} 
                onChange={handleRecruitChange} 
                />
            </div>
            <ApplyBtn onClick={handleApplyClick}>적용하기</ApplyBtn>
        </Container>

    )
}
export default SettingFilter;