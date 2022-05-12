import React from 'react';
import styled from "styled-components";
import background from '../image/background.png';
import logo from '../image/logo_blue.svg'

const AdminTest = () => {

    return (
        <BaseComponent background={background}>
            <AdminLoginBox>
                <img src={logo} alt="" style={{alignSelf:'center'}} width={250}/>
                <div style={{display:'flex', flexDirection:'column', width:'calc(100% - 120px)',padding:'0 60px'}}>
                    <div>{'관리자 로그인'}</div>
                    <LoginInput type="text" placeholder={'아이디를 입력해 주세요.'}/>
                    <LoginInput type="password" placeholder={'비밀번호를 입력해 주세요.'}/>
                    <LoginButton>{'로그인'}</LoginButton>
                </div>
            </AdminLoginBox>
        </BaseComponent>
    );
};

export default AdminTest;

interface StyleProps {
    background: string
}

const BaseComponent = styled.div<StyleProps>`
   width: 100%;
   height: 100vh;
   display: flex;
   background-image: url("${ props => props.background}");
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;
   
`

const AdminLoginBox = styled.div`
   width: 400px;
   height: 500px;
   border: 1px solid #e0e0e0;
   border-radius: 10px;
   background-color: #ffffff;
   margin: 0 auto;
   display: flex;
   flex-direction: column;   
   justify-content: space-around;
   align-self: center;
   
   &>div>div:nth-child(1){
      margin: 5px 0;
      font-size: 14px;
      font-family: SUIT-Medium;
   }
`

const LoginInput = styled.input`
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ababab;
  border-radius: 5px;
   font-family: SUIT-Medium;
  &::placeholder {
    color: #bdbdbd;
  }
`
const LoginButton = styled.div`
   width: 100%;
   background-color: blue;
   text-align: center;
   padding: 8px 0;
   margin: 5px 0;
   font-family: SUIT-Regular;
   border-radius: 5px;
   color: #fff;
   transition: all 0.2s;
      cursor: pointer;
   user-select: none;
   
   &:active{
      transform: translateX(1px) translateY(1px);
      box-shadow: 1px 1px 5px black inset;
      background-color: wheat;
   }
`