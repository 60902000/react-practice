import React from 'react';
import styled from 'styled-components';
import CoLogo from "../image/coLogo.png";

const CoperationLogo = () => {
    return (
        <div>
            <CoperationInfo>
                <img src={CoLogo} alt=""  />
                <CoName>{'(주)대한상사'}</CoName>
            </CoperationInfo>
        </div>
    );
};

export default CoperationLogo;

const CoperationInfo = styled.div`
    display:flex;
    align-items: center;
    margin: 15px; 58px; 0px; 20px;
    width: 200px;
    height: 40px;
    background-color: #ffffff;
`;

const CoName = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    with:98px;
    height: 19px;
    font-family: 'Nanum Gothic', sans-serif;
    font-weight: 800;
    font-size: 18px;
    color: #0058ff;

`;