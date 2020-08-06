import React from 'react';
import styled from 'styled-components';

const DoneButton = styled.button`
    width: 140px;
    height: 40px;
    border: 1px solid lightgray;
    border-radius: 25px;
    background-color: black;
    color: white;
    margin: 0 5px 0 5px;
    font-size: 12pt;
    cursor: pointer;
`;

const ShareButton = styled.button`
    width: 140px;
    height: 40px;
    border: 1px solid lightgray;
    border-radius: 25px;
    background-color: white;
    margin: 0 5px 0 5px;
    font-size: 12pt;
    cursor: pointer;
`;

export default function Checkout() {
    return (
        <div>
            <DoneButton>Done</DoneButton>
            <ShareButton>Share <i className="far fa-share-square"></i></ShareButton>
        </div>
    )
}
