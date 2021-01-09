import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { FaUsers } from 'react-icons/fa';
import { BiMale } from 'react-icons/bi';
import { FaFemale } from 'react-icons/fa';
import Thumbnail from './Thumbnail';
import { Link } from 'react-router-dom';


const WelcomeContainer = styled.div`
    width: 50%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;

    .welcome__inner > p {
      letter-spacing: 0.23px;
      color: #FFFFFF;
      opacity: 0.66;
      font-size: 14px;
    }

    .welcome__inner > h1 {
      font-weight: lighter;
    }

    .welcome__inner > h1 > span {
      font-weight: 900;
    }

    .welcome__inner > h5 {
      letter-spacing: -0.02px;
      color: #FFFFFF;
      opacity: 0.7;
      margin-bottom: 2rem;
    }

    .welcome__search {
      display: flex;
      align-items: center;
      padding: 1.5rem;
      background: #3c4054;
      width: 100%;
      border-radius: 1.5rem;
      margin: 3rem 0;
    }

    .welcome__search > input {
      border: none;
      background: transparent;
      margin-left: 1rem;
      outline: none;
      color: #fff;
      font-size: 16px;
      font-weight: 800;
      flex: 1;
    }

    .welcome__search > input::placeholder {
      color:#c3c4cb;
      font-size: 16px;
      font-weight: 800;
    }
`

const ThumbnailContainer = styled.div`
  display: flex;
`

function Welcome() {
    return (
        <WelcomeContainer>
          <div className="welcome__inner">
            <h1>Hello, <span>Emerald</span></h1>
            <p>Welcome to your dashboard, kindly sort through the user base</p>

            <div className="welcome__search">
                <FiSearch color="#fff" size={30} />
                <input type="text" name="" id="" placeholder="Find a user"/>
            </div>

            <h5>Show Users</h5>

            <ThumbnailContainer>
              <Link to="/">
                <Thumbnail icon={<FaUsers size={40} color="#fff" />} background={"#f935a9"} text="All Users" />
              </Link>
              <Link to="male-users">
                <Thumbnail icon={<BiMale size={40} color="#fff" />} background={"#30bbB5"} text="Male Users" />
              </Link>
              <Link to="female-users">
                <Thumbnail icon={<FaFemale size={40} color="#fff" />} background={"#7946c1"} text="Female Users" />
              </Link>
            </ThumbnailContainer>
          </div>
        </WelcomeContainer>
    )
}

export default Welcome
