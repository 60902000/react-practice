import React from 'react';
import styled from 'styled-components';

const TimeButton = () => {
    return (
        <div style={{display:'flex', flexDirection:'row', width:'calc(100% 150px)',padding:'0 100px'}}>
           <ButtonWrapper>
            <Button1>{'시간별'}</Button1>
            <Button2>{'일간'}</Button2>
            <Button3>{'월간'}</Button3>
           </ButtonWrapper>
        </div>

    );
};

export default TimeButton;

const ButtonWrapper = styled.div`
    height: 100vh;
    background-color: none;
    display: flex;
`;

const Button1 = styled.button`
    width: 59px;
    height: 34px;
    text-align: center;
    border: 1px solid #d7dbec;
    border-radius: 4px;
    background-color: #ffffff;
    font-family: 'Nanum Gothic', sans-serif;
    font-size: 13px;
    font-weight: bold;
    // line-height: 34px;
    color: #000000;
    cursor: pointer;
    
    &:active {
        background-color: #0058FF;
        color: #ffffff;
    }
    
  
`;

const Button2 = styled.button` 
    width: 46px;
    height: 34px;
    text-align: center;
    border: 1px solid #d7dbec;
    border-radius: 4px;
    background-color: #ffffff;
    font-family: 'Nanum Gothic', sans-serif;
    font-size: 13px;
    font-weight: bold;
    color: #000000;
    cursor: pointer;
    
     &:active {
        background-color: #0058FF;
        color: #ffffff;
    }
    
  
`;

const Button3 = styled.button` 
    width: 46px;
    height: 34px;
    text-align: center;
    border: 1px solid #d7dbec;
    border-radius: 4px;
    background-color: #ffffff;
    font-family: 'Nanum Gothic', sans-serif;
    font-size: 13px;
    font-weight: bold;
    color: #000000;
    cursor: pointer;
    
    
     &:active {
        background-color: #0058FF;
        color: #ffffff;
    }
    
  
`;

