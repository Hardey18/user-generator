import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { BsCaretDownFill } from 'react-icons/bs';
import { useContext } from 'react';
import { UsersContext } from '../StateProvider';
import ToggleSwitch from './ToggleSwitch';

const DetailsContainer = styled.div`
    width: 50%;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .details__inner > p {
        font-size: 12px;
    }

    @media(max-width:1200px) {
        width: 100%;
    }

    .details__inner {
        width: 100%;
    }

    .input__container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media(max-width:1200px) {
            flex-direction: column;
            align-items: left;
            justify-content: left;
        }

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            background: none;
            outline: none;
            margin-right: 14px;

            .customselect {
                overflow: hidden;
                background: none;
                padding: none;
                background: #e2e3ec;
                border-radius: 1.5rem;
                display: flex;
                align-items: center;
                padding: 12px;

                @media(min-width:1200px) {
                    width: 100px;
                }
            }

            .customselect select {
                width: 100%;
                -moz-appearance: none;
                -webkit-appearance: none;
                appearance: none;
                border: none;
                background: #e2e3ec;
                margin: 0;
                outline: none;
            }
        }

        .toggle__switch {
            display: flex;
            align-items: center;

            p {
                font-size: 12px;
                font-weight: 800;
                width: 100px;
                margin-left: 8px;
                color: #8c8f9e;
            }
        }
    }
`

const UsersInput = styled.div`
    display: flex;
    align-items: center;
    
    div {
        display: flex;
        padding: 0.6rem 1rem;
        background: #e2e3ec;
        border-radius: 1.5rem;
        align-items: center;
        justify-content: center;
        margin-right: 1rem;
    }

    input {
        border: none;  
        background: transparent;
        margin-left: 1rem;
        outline: none;
        color: #000;
        font-size: 16px;
        font-weight: 800;
        flex: 1;
    }

    input::placeholder {
        color:#b2b4c0;
        font-size: 16px;
        font-weight: 800;
    }
`


function Details({ user }) {
    const { onSearch, handleChange, users } = useContext(UsersContext)
    return (
        <DetailsContainer>
            <div className="details__inner">
                <h2>{user}</h2>
                <p>Filter by</p>

                <div className="input__container">
                    <UsersInput>
                        <div>
                            <FiSearch color="#b2b4c0" size={20} />
                            <input onChange={onSearch} type="text" name="" id="" placeholder="Find a user"/>
                        </div>
                    </UsersInput>
                    <button>
                        <div className="customselect">
                            <select onChange={handleChange}>
                                {users.map((person, index) => (
                                    <option defaultValue="Country" key={index} value={person.location.country}>{person.location.country}</option>
                                ))}
                            </select>
                            <BsCaretDownFill color="#000000" size={15} />
                        </div>
                    </button>
                    <div className="toggle__switch">
                        <ToggleSwitch />
                        <p>Show Country</p>
                    </div>
                </div>
            </div>
        </DetailsContainer>
    )
}

export default Details
