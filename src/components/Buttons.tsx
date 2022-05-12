import React, {useState} from 'react'
import styled from 'styled-components';


interface Props {
    text: string;
    buttonType: string;


}


const Buttons: React.FunctionComponent<Props> = ({text,buttonType}) => {

    const createButtons = (text:string,buttonType: string) => {

        switch (buttonType) {
            case 'Button1':
                return (
                    <Button1 style={{display:'flex'}}>{text}</Button1>
                )
            case 'Button2':
                return (
                    <Button2 style={{display:'flex'}}>{text}</Button2>
                )
            case 'OffButton':
                return (
                    <OffButton style={{display:'flex'}}>{text}</OffButton>
                )
            case 'OnButton':
                return (
                    <OnButton style={{display:'flex'}}>{text}</OnButton>
                )
            case 'PressInfoButton1':
                return (
                    <PressInfoButton1 style={{display:'flex'}}>{text}</PressInfoButton1>
                )

            case 'PressInfoButton2':
                return (
                    <PressInfoButton2 style={{display:'flex'}}>{text}</PressInfoButton2>
                )
        }
    }


    return (
        <React.Fragment>
            {createButtons(text,buttonType)}
        </React.Fragment>
    );
};

export default Buttons;


const Button1 = styled.div`
    width: 87px;
    height: 35px;
    color: #131523;
    background-color: #ffffff;
    font-size: 13px;
    font-weight: bold;
    border-radius: 4px;
    border: 1px solid #d7dbec;
    align-items: center;
    justify-content: center;
    
    &:active {
        background-color: #0058ff;
        color: #ffffff;
    }
`;


const Button2 = styled.div`
    width: 59px;
    height: 34px;
    color: #131523;
    background-color: #ffffff;
    font-size: 13px;
    font-weight: bold;
    border-radius: 4px;
    border: 1px solid #d7dbec;
    align-items: center;
    justify-content: center;
    
    
    &:active {
        background-color: #0058ff;
        color: #ffffff;
    }
`;

const OffButton = styled.div`
   display: flex;
   width: 47px;
   height: 34px;
   border-radius: 4px;
   border: 1px solid #d7dbec;
   background-color:#fff;
   align-items: center;
   justify-content: center;
   font-size: 13px;
   
   font-family:'Muli', sans-serif;
   font-weight: bold;
          
          &:active {
              background-color: #049C6F;
              color: #ffffff;
    }
`;


const OnButton = styled.div`
   width:42px;
   height:34px;
   border-radius: 4px;
   border: 1px solid #d7dbec;
   background-color:#fff;
   align-items: center;
   justify-content: center;
   font-size: 13px;
   font-family:'Muli', sans-serif;
   font-weight: bold;
          
          &:active {
              background-color: #049C6F;
              color: #ffffff;
    }
`;


const PressInfoButton1 = styled.div`
    
   width: 90px;
   height: 34px;
   border-radius: 4px;
   border: 1px solid #d7dbec;
   background-color:#fff;
   display: flex;
   
   justify-content: center;
   font-size: 14px;
   letter-Spacing:1.5px;  
           
          
          &:active {
              background-color: #049C6F;
              color: #ffffff;
    }
`;


const PressInfoButton2 = styled.div`
   width: 90px;
   height: 34px;
   border-radius: 4px;
   border: 1px solid #d7dbec;
   background-color:#fff;
   display: flex;
   
   justify-content: center;
   font-size: 14px;
   letter-Spacing: 1.0px;
   
          &:active {
              background-color: #049C6F;
              color: #ffffff;
    }
`;



