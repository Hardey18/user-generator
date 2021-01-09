import React from 'react'
import Details from './Details'
import styled from 'styled-components';

const FemaleUsersDetails = styled.div`
    width: 50%;
    background: #F7F7FF;
    margin: 1rem;
    border-radius: 1rem;
`

function FemaleUsers() {
    return (
        <FemaleUsersDetails>
            <Details users="Female Users" />
        </FemaleUsersDetails>
    )
}

export default FemaleUsers
