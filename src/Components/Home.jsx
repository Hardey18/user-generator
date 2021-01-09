import React from 'react'
import Welcome from './Welcome';
import styled from 'styled-components';
import AllUsers from './AllUsers';

const HomeStyle = styled.div`
    box-sizing: border-box;
    display: flex;
    height: 100%;
`

function Home() {
    return (
        <HomeStyle>
            <Welcome />
            <AllUsers />
        </HomeStyle>
    )
}

export default Home
