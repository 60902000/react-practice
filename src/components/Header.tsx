import React from 'react';
import styled from 'styled-components';
import chevron from "../image/chevron-left.png";
import avartar from "../image/Users - Avatar Photo (2 states).png";
import bell from "../image/ic-bell.svg";


const Header = () => {
    return (

            <HeaderComponent>
                <Date> {'2022.04.28 목요일 19:07'} </Date>
                <div>
                 <BellIcon/>
                    <div></div>
                </div>
                <div className={'profileInfo'}>
                    <img src={avartar} alt="" />
                    <UserName> {'양아무개'} </UserName>
                    <img className={'arrowButton'} src={chevron} alt="" width={24} height={24}  />
                </div>
            </HeaderComponent>

    );
};

export default Header;

const HeaderComponent = styled.header`
    
    display:flex;
    justify-content:flex-end;
    background-color: #fff;
    width: 1350px;
    height: 68px;
    box-shadow: 0px 1px 4px #15223214;
    align-items:center;
    
    .profileInfo{
        display:flex;
        align-items:center;
        margin-right:44px;
        .arrowButton{
            transform: rotate(270deg);
        }
    }
`;

const UserName =styled.div`
      display: flex;
      font-family: 'Nanum Gothic', sans-serif;
      font-size: 14px;
      font-weight: bold;
      text-align: center;
      margin: 0 4px 0 12px;
`;


const Date= styled.div`
    display: flex;
   
    font-size: 14px;
    color: #171725;
    text-align: center;
    font-family: 'Nanum Gothic', sans-serif;
    font-weight: bold;
`;

const BellIcon = styled.div`
    width: 24px;
    height: 24px;
    margin: 0 40px 0 36px;
    position: relative;
    background-image: url(${bell});
    
    &::before{
    text-align: center;
    color   #fff;
        content: '2';
        font-size: 12px;
        width: 16px;
        height: 16px;
        background-color: red;
        border-radius: 50%;
        position: absolute;
        top: -4px;
        right: -4px;
    }
`;
