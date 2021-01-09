import React from 'react';
import styled from 'styled-components';

const DetailsContainer = styled.div`
    width: 50%;
    background: #fff;
    margin: 1rem;
    border-radius: 1rem;
`

function Details({ children }) {
    return (
        <DetailsContainer>
            {children}
        </DetailsContainer>
    )
}

export default Details
