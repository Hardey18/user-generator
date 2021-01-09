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
`

function FemaleUsers() {

    const { users } = useContext(UsersContext)

    return (
        <FemaleUsersDetails>
            <Details users="Female Users" />
            <div>
                {users.map((person, index) => (person.gender === 'female' &&
                    <UserCard key={index} first={person.name.first} last={person.name.last} email={person.email} />
                ))}
            </div>
        </FemaleUsersDetails>
    )
}

export default FemaleUsers
