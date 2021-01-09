import React from 'react'
import Welcome from './Welcome';
import styled from 'styled-components';
import MaleUsres from './MaleUsers'

const HomeStyle = styled.div`
    box-sizing: border-box;
    display: flex;
    height: 100%;
`

function Male() {
    return (
        <HomeStyle>
            <Welcome />
            <MaleUsres />
        </HomeStyle>
    )
}

export default Male
