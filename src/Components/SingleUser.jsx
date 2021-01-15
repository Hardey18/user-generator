import React, { useContext } from 'react'
import { UsersContext } from '../StateProvider';
import { FaArrowLeft } from 'react-icons/fa';
import { BiEnvelope } from 'react-icons/bi';
import { FiPhoneCall } from 'react-icons/fi';
import { MdPhoneAndroid } from 'react-icons/md';
import styled from 'styled-components';

const SingleUserContainer = styled.div`
    margin-top: 2rem;
`

const BackButton = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    span {
        margin-left: 0.8rem;
        font-size: 14px;
        font-weight: 800;
        color: #8c8f9e;
    }
`

const DetailWrapper = styled.div`
    display: flex;

    img {
        border: 6px solid #75D6D1;
        border-radius: 50%;
        width: 12rem;
        height: 12rem;
        margin-right: 2rem;
    }

    h2 {
        font-weight: 800;
        margin-bottom: 1.5rem;
        span {
            font-weight: 100;
        }
    }

    .address {
        font-size: 20px;
        font-weight: 200;
        color: #111;
    }

    .email {
        background: #e2e3ec;
        margin-bottom: 1.2rem;
        color: #8c8f9e;
        padding: 0.6rem 1rem;
        border-radius: 2rem;
        width: fit-content;
    }

    .joined {
        background: #f7d9f2;
        margin-bottom: 1.2rem;
        color: #8c8f9e;
        padding: 0.6rem 1rem;
        border-radius: 2rem;
        width: fit-content;
        font-size: 14px;
    }

    p {
        display: flex;
        align-items: center;
        color: #8c8f9e;

        span {
            margin-left: 0.8rem;
        }
    }
`

function SingleUser({ first, last, title, email, image, alt, streetNumber, streetName, city, state, number, age, joined }) {
    const { closeUser } = useContext(UsersContext);
    return (
        <SingleUserContainer>
            <BackButton onClick={closeUser}>
                <FaArrowLeft color="#30bbB5" size={15} />
                <span>RESULTS</span>
            </BackButton>
            <DetailWrapper>
                <img src={image} alt={alt} />
                <div>
                    <h2>{title}. {first} {last} <span>{age}</span></h2>
                    <p className="address">{streetNumber} {streetName}, {city}, {state}</p>
                    <p className="email">
                        <BiEnvelope color="#8c8f9e" />
                        <span>{email}</span>
                    </p>
                    <p className="joined">JOINED: {joined}</p>
                    <p>
                        <FiPhoneCall color="#8c8f9e" /> 
                        <span>{number}</span>
                    </p>
                    <p>
                        <MdPhoneAndroid color="#8c8f9e" />
                        <span>{number}</span>
                    </p>
                </div>
            </DetailWrapper>
        </SingleUserContainer>
    )
}

export default SingleUser
