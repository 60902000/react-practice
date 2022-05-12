import React,{useState} from 'react';
import styled from 'styled-components';
import HomeIcon from "../image/ic_home.svg";
import ArrowButton from "./ArrowButton";


interface Props {
    title: any;
    childrenArray?: any[];
}

const SideMenuComp:React.FunctionComponent<Props> = ({title, childrenArray}) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <React.Fragment>
            <MenuComp onClick={()=>setIsOpen(!isOpen)} fontColor={isOpen? '#0062ff' : ''} backColor={ isOpen? 'rgba(0, 98, 255, 0.05)' : ''} selectedBorder={isOpen? '#0062ff' : ''}>
                <img className={'HomeIcon'} src={HomeIcon} alt=""  style={{alignSelf:'center'}} />
                <div className={'MenuList'} style={{alignSelf:'center'}}>{title}</div>
                <div>
                    <ArrowButton arrowType={isOpen ? 'Up' : 'Down'}/>
                </div>
            </MenuComp>

            {childrenArray?.map((data:any, idx)=>(
                <SunMenuComp key={idx} style={{height: isOpen? '52px' : '0', transform:`translateY(${isOpen? '0' : '-52px'})`,opacity:`${isOpen? 1 : 0}`, transition:`transform, opacity, 0.3s ${idx*100}ms`}}>
                    {data}
                </SunMenuComp>
            ))}
        </React.Fragment>
    );
};

export default SideMenuComp;

interface StyleProps {
    fontColor: string
    backColor: string
    selectedBorder: string
}

const MenuComp = styled.div<StyleProps>`

 display: flex;
 width: 230px;
 height: 52px;
 background-color: ${ props => props.backColor};
 color: ${ props => props.fontColor };
 align-items: center;
 margin: 0 0px 0 30px; 
 position: relative;
 cursor: pointer;
 
       &:before{
        content: '';
        position: absolute;
        width: 4px;
        height: 100%;
        background-color: ${ props => props.selectedBorder};
       }  
    
   // &:hover{
   //     background-color: rgba(0, 98, 255, 0.05);     
   //     color: ${ props => props.selectedBorder};
   //     cursor: pointer;
   //
   //      &:before{
   //      content: '';
   //      position: absolute;
   //      width: 4px;
   //      height: 100%;
   //      background-color: #0062ff;
   //      }  
   // }
   
  
 .HomeIcon{

    width: 24px;
    height: 24px;
    margin: 0px 20px 0px 20px;
  }

.MenuList{
     display:flex;
     font-family: 'Nanum Gothic', sans-serif;
     font-weight: 700;
     font-size: 14px;
     width: 100%;
     height: 15px;
     
   }
     
`;

const SunMenuComp = styled.div`
 width: 230px;
 height: 52px;
 line-height: 52px;
 align-self: center;
 justify-content: center;
 text-align: left;
 padding-left: 80px;
 font-family: 'Nanum Gothic', sans-serif;
 font-size: 14px;
 font-weight: 700;
 overflow: hidden;
 cursor: pointer;
 transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;

 
 
`;