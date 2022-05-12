import React from 'react';
import styled from 'styled-components';
import PressInfo from "./PressInfo";

import MainTitle from "./MainTitle";
import Circle from "./Circle";
import Buttons from "./Buttons";

const RealTimeEnergy = () => {
    return (
        <div>
            <RealTimeWrap>
                <div style={{display:'flex', margin:'35px 19px 34px 30px'}}>
                <MainTitle title={'실시간 에너지 사용량'} color={'black'} caseType={'mediumTitle'}/>
                </div>

                <RealTimeButtonWrap>
                    <Buttons text={'설비 리스트'} buttonType={'Button1'}/>
                    <Buttons text={'설비 배치도'}buttonType={'Button1'}/>

                </RealTimeButtonWrap>

                <WrongSensorWrap style={{display:'flex'}}>
                        <div style={{display:'flex', marginRight:'30px'}}>
                            <Circle color={'#f99600'} circleType={'BigCircle'}/>
                            <div style={{marginLeft:8}}>
                            <MainTitle title={'비효율 사용량 발생'} color={'#707070'} caseType={'thinTitle'}/>
                            </div>
                        </div>
                        <div style={{display:'flex'}}>

                            <Circle color={'#f0142f'} circleType={'BigCircle'}/>
                            <div style={{marginLeft:8}}>
                            <MainTitle title={'전력 이상 발생'} color={'#707070'} caseType={'thinTitle'}/>
                            </div>
                        </div>
                    </WrongSensorWrap>
                    <PressInfo/>


            </RealTimeWrap>

        </div>
    );
};

export default RealTimeEnergy;

const RealTimeWrap = styled.div`
    display: flex;
    position: absolute; 
    top: 182px;
    left: 290px;
    width: 1270px;
    height: 499px;
    background-color: #FFFFFF;
    box-shadow: 0px 1px 4px #15223214;
     
`;


// const RealTimeTitleText = styled.div`
//     margin-top: 35px;
//     margin-left: 30px;
//     font-family: 'Nanum Gothic', sans-serif;
//     font-size: 18px;
//     font-weight: 800;
//     color: #171725;
//
//
// `;
const RealTimeButtonWrap = styled.div`
   width:174px;
   height:35px;
   background-color: none;
   display: flex;
   margin-top:27px;
   margin-left: 22px;
   
    

`;
// const RealTimeButton1 = styled.div`
//    display: flex;
//    width: 87px;
//    height: 34px;
//    border-radius: 4px;
//    border: solid 1px #ccc;
//    background-color: #0058FF;
//    color: #ffffff;
//    align-items: center;
//    justify-content: center;
//    font-family: 'Nanum Gothic', sans-serif;
//    font-size: 13px;
//    font-weight: bold;
// `;
//
// const RealTimeButton2 = styled.div`
//    display: flex;
//    ;
//    width: 87px;
//    height: 34px;
//    border-radius: 4px;
//    border: solid 1px #ccc;
//    background-color: #ffffff;
//    color: #131523;
//    align-items: center;
//    justify-content: center;
//    font-family: 'Nanum Gothic', sans-serif;
//    font-size: 13px;
//    font-weight: bold;
// `;

const WrongSensorWrap = styled.div`
    display: flex;
    flex-direction: row;
    
    position: absolute; 
    top: 59px;
    left: 990px;
     
`;


// const InefSensor = styled.div`
//        .circle{
//          width: 10px;
//          height: 10px;
//          border-radius: 50%;
//          background-color: #red;
//          margin-right: 5px;
//        }
//
//         font-family: 'Nanum Gothic', sans-serif;
//         font-size: 12px;
//         color: #707070;
//         text-align: center;
//
// `;

// const ElectricSensor = styled.div`
//        .circle{
//          width: 10px;
//          height: 10px;
//          border-radius: 50%;
//          background-color: #f99600;
//          margin-right: 5px;
//        }
//         margin-left: 30px;
//         font-family: 'Nanum Gothic', sans-serif;
//         font-size: 12px;
//         color: #707070;
//         text-align: center;
//
// `;


