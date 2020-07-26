import React from 'react';
import Option from './Option';
import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    width: 100%;
`;

export default function Options() {
    return (
        <Container>
            <Option />
            <Option />
            <Option />
            <Option />
            <Option />
        </Container>
    )
}
