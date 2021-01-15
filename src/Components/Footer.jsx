import React from 'react'
import styled from 'styled-components'
import { HiCloudDownload } from 'react-icons/hi';
import { BiChevronLeft } from 'react-icons/bi';
import { BiChevronRight } from 'react-icons/bi';

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 1.6rem;

    .download__button {
        background: #7a46c1;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        padding: 0 14px;
        border-radius: 20px;
        cursor: pointer;

        span {
            margin-left: 0.7rem;
            font-size: 12px;
            font-weight: 800;
        }
    }

    .arrow__button {
        display: flex;

        .left {
            padding: 7px;
            background: #e2e2eb;
            color: #272a41;
            border-radius: 8px;
            cursor: pointer;
        }

        .right {
            padding: 7px;
            background: #272a41;
            color: #fff;
            margin-left: 10px;
            border-radius: 8px;
            cursor: pointer;
        }
    }
`

function Footer() {
    return (
        <FooterContainer>
            <div className="download__button">
                <HiCloudDownload color="#fff" size={20} />
                <span>Download results</span>
            </div>
            <div className="arrow__button">
                <div className="left">
                    <BiChevronLeft size={20} />
                </div>
                <div className="right">
                    <BiChevronRight size={20} />
                </div>
            </div>
        </FooterContainer>
    )
}

export default Footer
