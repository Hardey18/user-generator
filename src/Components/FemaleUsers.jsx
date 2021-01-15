import React from 'react'
import Details from './Details'
import styled from 'styled-components';
import { useContext } from 'react';
import { UsersContext } from '../StateProvider';
import UserCard from './UserCard';
import SingleUser from './SingleUser';
import Footer from './Footer';

const FemaleUsersDetails = styled.div`
    width: 50%;
    background: #F7F7FF;
    margin: 1rem;
    border-radius: 1rem;
    padding: 2.5rem 3.5rem;

    @media(max-width:1200px) {
        width: 100%;
    }
`

const CardContainer = styled.div`
    height: 500px;
    overflow: scroll;
`

function FemaleUsers() {

    const { filteredUsers, singleUser, show } = useContext(UsersContext)

    console.log(filteredUsers);

    return (
        <FemaleUsersDetails>
            <Details user="Female Users" />
            <CardContainer>
                {!show ? (<div className="all">
                    {filteredUsers.map((person, index) => (person.gender === 'female' &&
                    <UserCard key={index} first={person.name.first} last={person.name.last} email={person.email} image={person.picture.medium} streetNumber={person.location.street.number} streetName={person.location.street.name} city={person.location.city} state={person.location.state} number={person.cell} />
                    ))}
                </div>) :
                (<div className="single">
                    <SingleUser title={singleUser?.name?.title} first={singleUser?.name?.first} age={singleUser?.dob?.age} last={singleUser?.name?.last} email={singleUser?.email} image={singleUser?.picture?.large} streetNumber={singleUser?.location?.street?.number} joined={singleUser?.registered?.date.slice(0, 10)} streetName={singleUser?.location?.street?.name} city={singleUser?.location?.city} state={singleUser?.location?.state} number={singleUser?.cell} />
                </div>)}
            </CardContainer>
            <Footer />
        </FemaleUsersDetails>
    )
}

export default FemaleUsers
