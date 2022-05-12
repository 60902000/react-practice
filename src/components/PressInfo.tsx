import React from 'react';
import styled from 'styled-components';
import Buttons from "./Buttons";
import MainTitle from "./MainTitle";
import {Button} from "@material-ui/core";

const PressInfo = () => {
    return (
        <div>
            <PressInfoBox>
                <PressImage></PressImage>
                <div style={{display:'flex',marginTop:'5px'}}>
                <PressInfoIndex>
                    <div style={{lineHeight: '2.7'}}>
                    <div> 설비종류 </div>
                    <div> 설비명 </div>
                    <div> CODE </div>
                    <div> 위치 </div>
                    </div>
                    <div style={{display:'grid',gridRowGap:'28px',marginTop:'12px'}}>
                    <div> 설비 ON/OFF </div>
                    <div> 실시간 전력(kW) </div>
                    <div> 알람로그 </div>
                    </div>
                </PressInfoIndex>
                   <PressInfoContens>
                   <div> 프레스 </div>
                   <div> 프레스 400ton-1 </div>
                   <div> PRESS-013-1111-276 </div>
                   <div> 프레스동 </div>

                   <PressInfoButtonWrap>
                       <div style={{display:'flex'}}>
                           <Buttons text="OFF" buttonType={'OffButton'}/>
                           <Buttons text="ON" buttonType={'OnButton'}/>
                       </div>
                       <div style={{display:'flex',marginTop:'8px'}}>
                           <Buttons text={'3.8'} buttonType={'PressInfoButton1'}/>
                       </div>
                       <div style={{display:'flex',marginTop:'8px'}}>
                           <Buttons text={'로그보기'} buttonType={'PressInfoButton2'}/>
                       </div>

                   </PressInfoButtonWrap>
                   </PressInfoContens>


                </div>
            </PressInfoBox>
        </div>
    );
};

export default PressInfo;



const PressInfoBox = styled.div`
    
  
   
   width: 249px;
   height: 386px;
   border-radius: 6px;
   box-shadow: 0px 1px 4px #15223214;
   background-color: #f5f6fa;
   position: absolute;
   top: 88px;
   right: 31px;
   

`;

const PressImage = styled.div`
    
   
   margin-top: 16px;
   margin-left: 16px;
   width: 222px;
   height: 101px;
   border-radius: 6px;
   background-color: #000;
`;


const PressInfoIndex = styled.div`
  
   margin-left: 16px;
   width: 222px;
   height: 101px;
   border-radius: 6px;
   text-align: left;
   font-size: 12px;
   font-weight: 700;
   font-family: 'Nanum Gothic', sans-serif;
   
   color: #000;
`;

const PressInfoContens = styled.div`
   
   justify-content: flex-start;
   margin-right: 11px;
   width: 222px;
   flex-direction: column;
   font-size: 12px;
   font-weight: 600;
   font-family: 'Nanum Gothic', sans-serif;
   color: #000;
   text-align:right;
   line-height: 2.7;
   white-space: nowrap;
  
`;

const PressInfoButtonWrap = styled.div`
   margin-left: 30px;
   width:90px;
   
   background-color: none;
   display: flex;
   flex-direction: column;
    
  `;
