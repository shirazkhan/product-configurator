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

    return (
        <Container onClick = {() => dispatch({type:'togglePickerMode'})}>
            <Icon className="fas fa-palette"></Icon>
            <h4>{props.type}</h4>
        </Container>
    )
}
