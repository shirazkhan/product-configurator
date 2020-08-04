import React, {useState, useContext} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 25%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`;

const Colour = styled.div`
height: 65px;
width: 65px;
border-radius: 50px;
background-color: ${props => props.color};
`;

const ColourLabel = styled.h5`
    margin: 15px;
`;

export default function PickerButton(props) {

    return (
        <Container>
            <Colour color={props.color}/>
            <ColourLabel>{props.name}</ColourLabel>
        </Container>
    )
}
