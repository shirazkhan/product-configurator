import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 20%;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function Option() {
    return (
        <Container>
            <h1>Pattern</h1>
        </Container>
    )
}
