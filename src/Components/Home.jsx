import React from 'react'
import Details from './Details'
import Welcome from './Welcome';
import styled from 'styled-components';

const HomeStyle = styled.div`
    box-sizing: border-box;
    display: flex;
    height: 100%;
`

function Home() {
    return (
        <HomeStyle>
            <Welcome />
            <Details>
                <h1>Details</h1>
            </Details>
        </HomeStyle>
    )
}

export default Home
