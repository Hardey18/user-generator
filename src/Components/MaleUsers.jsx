import React from 'react'
import Details from './Details'
import styled from 'styled-components';
import { useContext } from 'react';
import { UsersContext } from '../StateProvider';
import UserCard from './UserCard';

const MaleUsersDetails = styled.div`
    width: 50%;
    background: #F7F7FF;
    margin: 1rem;
    border-radius: 1rem;
`

function MaleUsers() {

    const { users } = useContext(UsersContext)
    console.log(users)

    return (
        <MaleUsersDetails>
            <Details users="Male Users" />
            <div>
                {users.map((person, index) => (person.gender === 'male' &&
                    <UserCard key={index} first={person.name.first} last={person.name.last} email={person.email} />
                ))}
            </div>
        </MaleUsersDetails>
    )
}

export default MaleUsers
