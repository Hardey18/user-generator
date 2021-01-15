import React from 'react'
import Welcome from './Welcome';
import styled from 'styled-components';
import FemaleUsers from './FemaleUsers';

const HomeStyle = styled.div`
    box-sizing: border-box;
    display: flex;
    height: 100%;;

    @media(max-width:1200px) {
        flex-direction: column;
        width: 100%;
    }
`

function Female() {
    return (
        <HomeStyle>
            <Welcome />
            <FemaleUsers />
        </HomeStyle>
    )
}

export default Female
