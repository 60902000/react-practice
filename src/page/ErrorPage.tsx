import React from 'react';
import styled from 'styled-components';

const ErrorPage = () => {
    return (
        <StyledErrorPage>
            {'Error!!!!!!!!!!!!!!!!!'}
        </StyledErrorPage>
    );
};

export default ErrorPage;

const StyledErrorPage = styled.div`
    font-size: 100px;
    font-weight: bold;
    text-align: center;
    margin-top: 50px;
`