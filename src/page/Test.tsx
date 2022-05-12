import React from 'react';
import styled from "styled-components";



const Test = () => {
    return (
        <TestWrapper>
            <TestItems style={{backgroundColor:'#0058ff'}}>{'level 0'}</TestItems>
            <TestItems>{'level 1'}</TestItems>
            <TestItems>{'level 2'}</TestItems>
            <TestItems>{'level 3'}</TestItems>
            <TestItems>{'level 4'}</TestItems>
            <TestItems>{'level 5'}</TestItems>
        </TestWrapper>
    );
};

export default Test;

const TestWrapper = styled.div`
    height: 100vh;
    background-color: #ccc;
    display: flex;
`;

const TestItems = styled.div`
    width: 211px;
    height: 15px;
    font-size: 12px;
    background-color: #d7dbec;
    color: #f5f6fa;
    text-align: center;
`;


