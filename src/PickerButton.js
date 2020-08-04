import React, {useContext} from 'react';
import styled from 'styled-components';
import {GlobalContext} from './Configurator';

const Container = styled.div`
    height: 25%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    background-color: ${props => {
        if(props.colorName === 'Gold'){
            return 'lightgray'
        }
    }}
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

    const {globalState, dispatch} = useContext(GlobalContext);

    const handleClick = () => {
        console.log(props.name);
    }

    return (
        <Container onClick = {() => handleClick()} colorName = {props.name}>
            <Colour color={props.color}/>
            <ColourLabel>{props.name}</ColourLabel>
        </Container>
    )
}
