import React from 'react'
import Details from './Details'
import styled from 'styled-components';
import { useContext } from 'react';
import { UsersContext } from '../StateProvider';
import UserCard from './UserCard';

const FemaleUsersDetails = styled.div`
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

function FemaleUsers() {

    const { filteredUsers } = useContext(UsersContext)

    console.log(filteredUsers);

    return (
        <FemaleUsersDetails>
            <Details users="Female Users" />
            <CardContainer>
                {filteredUsers.map((person, index) => (person.gender === 'female' &&
                <UserCard key={index} first={person.name.first} last={person.name.last} email={person.email} image={person.picture.medium} streetNumber={person.location.street.number} streetName={person.location.street.name} city={person.location.city} state={person.location.state} number={person.cell} />
                ))}
            </CardContainer>
        </FemaleUsersDetails>
    )
}

export default FemaleUsers
