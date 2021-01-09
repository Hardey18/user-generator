import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { BsCaretDownFill } from 'react-icons/bs';

const DetailsContainer = styled.div`
    width: 50%;
    margin-bottom: 1.5rem;
`

const UsersInput = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    
    div, button {
        display: flex;
        padding: 0.6rem;
        background: #e2e3ec;
        border-radius: 1.5rem;
        align-items: center;
        justify-content: center;
        margin-right: 1rem;
    }

    button {
        border: none;
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

function Details({ users }) {
    return (
        <DetailsContainer>
            <div className="details__inner">
                <h2>{users}</h2>
                <p>Filter by</p>

                <UsersInput>
                    <div>
                        <FiSearch color="#b2b4c0" size={20} />
                        <input type="text" name="" id="" placeholder="Find a user"/>
                    </div>
                    <button>
                        Country
                        <BsCaretDownFill color="#000000" size={20} />
                    </button>
                </UsersInput>
            </div>
        </DetailsContainer>
    )
}

export default Details
