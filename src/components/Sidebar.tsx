import React from 'react';
import styled from 'styled-components';
import CoperationLogo from "./CoperationLogo";
import HomeIcon from "../image/ic_home.svg";
import ArrowButton from "./ArrowButton";

import SideMenuComp from "./SideMenuComp";

const Sidebar = () => {


    const sampleArray = ['FAS','P-BAS','R-BAS','C-BAS','A-BAS','F-EMS','Home']
    const childrenArray = [
        {subMenu:['메인화면','설비별 리포트','전체설비 리포트','프레스 에너지 모니터링','에너지 알람 로그','한전 사용량 보기','에너지 수요예측', '에너지 원격제어 관리']},
        {subMenu:['메인화면','설비별 리포트','전체설비 리포트','프레스 에너지 모니터링','에너지 알람 로그','한전 사용량 보기','에너지 수요예측', '에너지 원격제어 관리']},
        {subMenu:['메인화면','설비별 리포트','전체설비 리포트','프레스 에너지 모니터링','에너지 알람 로그','한전 사용량 보기','에너지 수요예측', '에너지 원격제어 관리']},
        {subMenu:['메인화면','설비별 리포트','전체설비 리포트','프레스 에너지 모니터링','에너지 알람 로그','한전 사용량 보기','에너지 수요예측', '에너지 원격제어 관리']},
        {subMenu:['메인화면','설비별 리포트','전체설비 리포트','프레스 에너지 모니터링','에너지 알람 로그','한전 사용량 보기','에너지 수요예측', '에너지 원격제어 관리']},
        {subMenu:['메인화면','설비별 리포트','전체설비 리포트','프레스 에너지 모니터링','에너지 알람 로그','한전 사용량 보기','에너지 수요예측', '에너지 원격제어 관리']},
        {subMenu:[]},

    ]

    return (
        <div>
            <ListBaseComp>
                <div>
                    <div style={{marginLeft:'25.78px'}}>
                    <CoperationLogo></CoperationLogo>
                    </div>
                    <div style={{marginTop:'42px'}}>
                        {sampleArray.map((value, index) => (

                        <SideMenuComp key={index} title={value} childrenArray={childrenArray[index]?.subMenu}/>

                        ))}
                    </div>
                </div>

            </ListBaseComp>
        </div>
    );
};

export default Sidebar;

const ListBaseComp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 250px;
    height: 900px;
    box-shadow: 0px 1px 4px #15223214;
    background-color: #ffffff;
`;

//
// const CoperationInfo = styled.div`
//     display:flex;
//     align-items: center;
//     margin: 15px; 58px; 0px; 20px;
//     width: 200px;
//     height: 40px;
//     background-color: #ffffff;
// `;
//
// const CoName = styled.div`
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//     background-color: #ffffff;
//     with:98px;
//     height: 19px;
//     font-family: 'Nanum Gothic', sans-serif;
//     font-weight: 800;
//     font-size: 18px;
//     color: #0058ff;
//
// `;

//
// const MenuComp = styled.div`
//
//  display: flex;
//  flex-direction: row;
//  justify-items: flex-start;
//  width: 230px;
//  background-color: #ffffff;
//  align-items: center;
//  margin: 0 20px 0 0;
//  height: 52px;
//
//    &:hover{
//        background-color: rgba(0, 98, 255, 1);
//
//    }
//
//  .HomeIcon{
//     display:flex;
//     width: 24px;
//     height: 24px;
//     margin: 0px 20px 0px 20px;
//   }
//
// .MenuList{
//      display:flex;
//      font-family: 'Nanum Gothic', sans-serif;
//      font-weight: 800;
//      font-size: 14px;
//      color: #171725;
//      width: 100%;
//      height: 15px;
//      }
//
//
// .arrowButton{
//            display:flex;
//            transform: rotate(-90deg);
// }
//
// `;
//
// const SunMenuComp = styled.div`
//  width: 230px;
//  height: 52px;
//  line-height: 52px;
//  text-align: center;
//  margin: 0 20px 0 0;
//  font-family: 'Nanum Gothic', sans-serif;
//  font-weight: bold;
//  overflow: hidden;
//
//
// `;



 







