import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: 140px;
    height: 40px;
    border: 1px solid lightgray;
    border-radius: 25px;
    background-color: white;
    margin: 0 5px 0 5px;
`;

export default function Checkout() {
    return (
        <div>
            <Button>Done</Button>
            <Button>Share</Button>
        </div>
    )
}
