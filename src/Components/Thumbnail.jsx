import React from 'react';
import styled from 'styled-components';

const ThumbnailWrapper = styled.div`
    text-align: center;
    margin-right: 2rem;

    p {
        letter-spacing: -0.02px;
        color: #FFFFFF;
        opacity: 0.7;
        font-size: 12px;
    }
`

const ThumbnailContaier = styled.div`
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1.5rem;
`

function Thumbnail({ icon, text, background }) {
    return (
        <ThumbnailWrapper>
            <ThumbnailContaier style={{backgroundColor: background}}>
                {icon}
            </ThumbnailContaier>
            <p>{text}</p>
        </ThumbnailWrapper>
    )
}

export default Thumbnail
