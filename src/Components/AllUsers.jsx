import React from 'react'
import Details from './Details'
import styled from 'styled-components';

const AllUsersDetails = styled.div`
    width: 50%;
    background: #F7F7FF;
    margin: 1rem;
    border-radius: 1rem;
`

function AllUsers() {
    return (
        <AllUsersDetails>
            <Details users="All Users" />
        </AllUsersDetails>
    )
}

export default AllUsers
