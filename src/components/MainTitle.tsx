import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  color: string;
  caseType?: string
}

const MainTitle:React.FunctionComponent<Props> = ({title, color, caseType}) => {

    const createTitle = (title: string, color: string, caseType?: string) => {
        switch (caseType){
            case 'kwTitle':
                return (
                    <div style={{fontSize:'8px', color: color, fontFamily: 'Nanum Gothic',fontWeight:'bold'}}>
                        {title}
                    </div>
                )

            case 'thinTitle':
                return (
                    <div style={{fontSize:'12px', color: color, fontFamily: 'Nanum Gothic',fontWeight:'bold'}}>
                        {title}
                    </div>
                )
            case 'smallTitle' :
                return(
                <div style={{fontSize:'14px', color: color, fontFamily: 'Nanum Gothic', fontWeight:'bold'}}>
                    {title}
                </div>
            )

            case 'bigTitle' :
                return(
                    <div style={{fontSize:'24px', color: color, fontFamily: 'Nanum Gothic', fontWeight:'800'}}>
                        {title}
                    </div>
                )
            case 'mediumTitle' :
                return(
                    <div style={{fontSize:'18px', color: color, fontFamily: 'Nanum Gothic', fontWeight:'800'}}>
                        {title}
                    </div>
                )
        }
    }
    return (
        <React.Fragment>
            {createTitle(title, color, caseType)}
        </React.Fragment>
        // <BaseComponent style={{color: color}}>
        //     {title}
        // </BaseComponent>
    );
};

export default MainTitle;

const BaseComponent = styled.div`
    font-family: 'Nanum Gothic', sans-serif;
    font-size: 24px;
    font-weight: 800;
    color: #171725;
`;