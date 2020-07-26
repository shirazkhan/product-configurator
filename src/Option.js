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

export default function Option(props) {
    return (
        <Container>
            <h3>{props.type}</h3>
        </Container>
    )
}
