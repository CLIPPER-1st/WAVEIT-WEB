import React from 'react';
import styled from 'styled-components';


const Matchbox = styled.div`
    margin: 5vw;
    padding: 1vw;
    background-color:#D9D9D9;
    width: 24vw;
    height: 8vw;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
`

const MatchContent=styled.span`
    &:first-child{
        font-weight:bold;
        font-size: 1.2vw;
    }
    font-size: 1.2vw;
`

const FieldBtn=styled.button`
    background-color:rgba(148, 182, 239, 0.8);
    border-radius:6px;
    border-style:none;
    font-weight:bold;
    width: auto;
    height:2vw;
    font-size: 1.2vw;
    margin: 0px 3px;
`



const MatchBox=({title,field, recruit})=>{
    const fieldsArray = Array.isArray(field) ? field : [field];
    return (
        <Matchbox>
            <MatchContent>{title}</MatchContent>
            <hr style={{fontSize:"3px"}}/>
            <MatchContent>
                프로젝트 분야: 
                {fieldsArray.map((f, index) => (
                    <FieldBtn key={index}>{f}</FieldBtn> // 고유 key 추가
                ))}
            </MatchContent>
            <MatchContent>모집 파트: {recruit}</MatchContent>
        </Matchbox>
        
    )
}


export default MatchBox;