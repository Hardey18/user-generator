import React from 'react'
import Details from './Details'
import styled from 'styled-components';

const MaleUsersDetails = styled.div`
    width: 50%;
    background: #F7F7FF;
    margin: 1rem;
    border-radius: 1rem;
`

function MaleUsers() {
    return (
        <MaleUsersDetails>
            <Details users="Male Users" />
        </MaleUsersDetails>
    )
}

export default MaleUsers
