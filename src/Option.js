import React, {useContext} from 'react';
import styled from 'styled-components';
import {GlobalContext} from './Configurator'

const Container = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const Icon = styled.i`
    font-size: 40px;
    color: black;
`;

export default function Option(props) {

    const {globalState, dispatch} = useContext(GlobalContext);

    const handleClick = () => {
        dispatch({type:'changeSelectedOption', option: props.option})
    }

    return (
        <Container onClick = {() => handleClick()}>
            <Icon className="fas fa-palette"></Icon>
            <h4>{props.option}</h4>
        </Container>
    )
}
