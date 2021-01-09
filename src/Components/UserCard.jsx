import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri';
import { BiEnvelope } from 'react-icons/bi';
import { FiPhoneCall } from 'react-icons/fi';
import styled from 'styled-components';

const UserCardComponents = styled.div`
    display: flex;
    align-items: center;
    background: #fcfcff;
    margin-bottom: 1rem;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    /* box-shadow: 10px 10px 40px #0000000D; */

    img {
        margin-right: 2rem;
        border: 8px solid #75D6D1;
        border-radius: 50%;
    }

    .main__details {
        width: 100%;
    }

    .user__contact {
        display: flex;
        align-items: center;
        color: #d6d6de;
        width: 100%;
    }

    .icon {
        justify-self: right;
    }
`

function UserCard({ first, last, email, image, alt, streetNumber, streetName, city, state, number }) {
    return (
        <UserCardComponents>
            <div>
                <img src={image} alt={alt} />
            </div>
            <div className="main__details">
                <h3>{first} {last}</h3>
                <p>{streetNumber} {streetName}, {city}, {state}</p>
                <div className="user__contact">
                    <span><BiEnvelope color="#d6d6de" /> {email}</span>
                    <span><FiPhoneCall color="#d6d6de" /> {number}</span>
                    <span className="icon"><RiArrowRightLine /></span>
                </div>
            </div>
        </UserCardComponents>
    )
}

export default UserCard
