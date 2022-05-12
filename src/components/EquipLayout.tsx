import React from 'react';
import styled from 'styled-components';

const EquipLayout = () => {
    return (
        <div>
            <EquipLayoutBox></EquipLayoutBox>
        </div>
    );
};

export default EquipLayout;

const EquipLayoutBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 945px;
    height: 386px;
`;
