import React, { useContext } from 'react'
import { RiArrowRightLine } from 'react-icons/ri';
import { BiEnvelope } from 'react-icons/bi';
import { FiPhoneCall } from 'react-icons/fi';
import styled from 'styled-components';
import { UsersContext } from '../StateProvider';

const UserCardComponents = styled.div`
    display: flex;
    align-items: center;
    background: #fcfcff;
    margin-bottom: 1rem;
    padding: 0.5rem 1.8rem;
    border-radius: 0.5rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    img {
        margin-right: 2rem;
        border: 8px solid #75D6D1;
        border-radius: 50%;
    }

    .main__details {
        width: 100%;
    }

    .arrow__right {
        background:  #30BBB5;
        padding: 0.6rem;
        display: flex;
        align-items: center;
        border-radius: 0.5rem;
        cursor: pointer;
    }

    .user__contact {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #8c8f9e;
        width: 100%;
    }

    .user__contact__each {
        display: flex;
        align-items: center;
    }

    .user__contact__each > p {
        margin-left: 0.4rem;
    }
`

function UserCard({ first, last, email, image, alt, streetNumber, streetName, city, state, number }) {

    const { eachUser, setShow, show } = useContext(UsersContext)

    

    return (
        <UserCardComponents>
            <div>
                <img src={image} alt={alt} />
            </div>
            <div className="main__details">
                <h3>{first} {last}</h3>
                <p>{streetNumber} {streetName}, {city}, {state}</p>
                <div className="user__contact">
                    <div className="user__contact__each">
                        <BiEnvelope color="#8c8f9e;" /> 
                        <p>{email}</p>
                    </div>
                    <div className="user__contact__each">
                        <FiPhoneCall color="#8c8f9e;" /> 
                        <p>{number}</p>
                    </div>
                    <div onClick={eachUser} className="arrow__right" id={email}>
                        <RiArrowRightLine color="#fff" />
                    </div>
                </div>
            </div>
        </UserCardComponents>
    )
}

export default UserCard
