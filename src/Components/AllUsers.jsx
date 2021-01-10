import React from 'react'
import Details from './Details'
import styled from 'styled-components';
import UserCard from './UserCard';
import { useContext } from 'react';
import { UsersContext } from '../StateProvider';

const AllUsersDetails = styled.div`
    width: 50%;
    background: #F7F7FF;
    margin: 1rem;
    border-radius: 1rem;
    padding: 2.5rem 3.5rem;
`

const CardContainer = styled.div`
    height: 500px;
    overflow: scroll;
`

function AllUsers() {

    const { filteredUsers } = useContext(UsersContext)

    return (
        <AllUsersDetails>
            <Details users="All Users" />
            <CardContainer>
                {filteredUsers.map((person, index) => (
                    <UserCard key={index} first={person.name.first} last={person.name.last} email={person.email} image={person.picture.medium} streetNumber={person.location.street.number} streetName={person.location.street.name} city={person.location.city} state={person.location.state} number={person.cell} />
                ))}
            </CardContainer>
        </AllUsersDetails>
    )
}

export default AllUsers
