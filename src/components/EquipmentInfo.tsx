import React from 'react';
import styled from "styled-components";

const EquipmentInfo = () => {
    return (
        <EquipmentInfoBox>
            <div style={{display:'flex', flexDirection:'column'}}>
            <div>{'설비정보'}</div>
            <EquipmentChange>{'설비변경'}</EquipmentChange>
            <EquipmentIndex style= {{alignItems:'start',justifyContent:'flex-start'}}>
                <EquipmentIndexItems>{'설비종류'}</EquipmentIndexItems>
                <EquipmentIndexItems>{'설비명'}</EquipmentIndexItems>
                <EquipmentIndexItems>{'CODE'}</EquipmentIndexItems>
                <EquipmentIndexItems>{'위치'}</EquipmentIndexItems>
                <EquipmentIndexItems>{'설비 ON/OFF'}</EquipmentIndexItems>
                <EquipmentIndexItems>{'비효율 에너지 기준(Wh)'}</EquipmentIndexItems>
            </EquipmentIndex>
            <EquipmentContents>
                <EquipmentContentsItems>{'프레스'}</EquipmentContentsItems>
                <EquipmentContentsItems>{'프레스 400ton-1'}</EquipmentContentsItems>
                <EquipmentContentsItems>{'PRESS-013-1111-276'}</EquipmentContentsItems>
                <EquipmentContentsItems>{'프레스동'}</EquipmentContentsItems>
                <EquipmentContentsItems>{'ON'}</EquipmentContentsItems>
                <EquipmentContentsItems>{'50.00'}</EquipmentContentsItems>
            </EquipmentContents>
        </div>
        </EquipmentInfoBox>
    );
};

export default EquipmentInfo;

const EquipmentInfoBox = styled.div`
   
    display:flex;
    flex-direction:column;
    width:1270px;
    height:211px;
    background-color:white;
    box-shadow: 0px 0px 4px rgba(0,0,0,0.1);
    border-radius:6px;
    align-self:center;
    
    &>div>:nth-child(1){
    margin:35px 30px 0 30px;  
    font-family: 'Nanum Gothic', sans-serif;
    font-size: 18px;
    font-weight: 800;
    color: #171725;
`;

const EquipmentChange = styled.div`
    display:flex;
    flex-direction:row-reverse;
    padding: 0px 30px;
    font-family: 'Nanum Gothic', sans-serif;
    font-size: 14px;
    font-weight: normal;
    color: #5A607F;
      
`;

const EquipmentIndex = styled.div`
    width:1210px;
    height:48px;
    background-color:#f5f6fa;
    display:flex;
    flex-direction:row;
     
    align-items:center;
    align-self:center;
    margin-top:8px;
     
   
   
`;

const EquipmentIndexItems = styled.div`
    padding:0px 16px;
    font-family: 'Nanum Gothic', sans-serif;
        font-size: 12px;
        font-weight: 800;
        color: #131523;
        align-self:center;
         
   
   
`;

const EquipmentContents = styled.div`
    width:1210px;
    height:48px;
    background-color:#ffffff;
    display:flex;
    flex-direction:row;  
    align-self:center;
    align-items:left;
    
  
   
   
`;

const EquipmentContentsItems = styled.div`
    padding:0px 16px;
    font-family: 'Nanum Gothic', sans-serif;
        font-size: 14px;
        font-weight: bold;
        color: #131523;
        
        align-self:center;
        
        
   
   

`;