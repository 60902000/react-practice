import React from 'react';
import styled from 'styled-components';
import chevron from '../image/chevron-left.png';


interface Props {

    arrowType: string;

}

const ArrowButton:React.FunctionComponent<Props> = ({arrowType}) => {
    const createArrow = (arrowType:string) => {
     switch (arrowType) {
         case 'Left':
             return (
                 <img className={'arrowButton'} src={chevron} alt="" width={24} height={24} style={{alignSelf:'center', cursor:'pointer'}} />
             )
         case 'Right':
             return (
                 <img className={'arrowButton'} src={chevron} alt="" width={24} height={24}  style={{transform: 'rotate(180deg)',alignSelf:'center',cursor:'pointer'}} />
             )
         case 'Up':
             return (
                 <img className={'arrowButton'} src={chevron} alt="" width={24} height={24}  style={{transform: 'rotate(90deg)',alignSelf:'center',cursor:'pointer'}} />
             )
         case 'Down':
             return (
                 <img className={'arrowButton'} src={chevron} alt="" width={24} height={24} style={{transform: 'rotate(-90deg)',alignSelf:'center',cursor:'pointer'}} />
             )
     }
     }


    return (
        <React.Fragment>
            {createArrow(arrowType)}
        </React.Fragment>

    );
};

export default ArrowButton;

