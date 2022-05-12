import React from 'react';
import styled from 'styled-components';

interface Props {
  color: string
  circleType?: string;


}

const Circle:React.FunctionComponent<Props> = ({color, circleType}) => {
    const createCircle = (color: string, caseType?: string) => {
        switch (circleType) {

            case 'BigCircle':
                return (
                    <div style={{borderRadius: '50%', width: '16px', height: '16px',backgroundColor:color}}>

                    </div>
                )
            case 'SmallCircle':
                return (
                    <div style={{borderRadius: '50%', width: '10px', height: '10px', backgroundColor:color}}>

                    </div>
                )
        }
    }
        return (
            <React.Fragment>
                {createCircle(color,circleType)}
            </React.Fragment>

        );
    };

    export default Circle;

