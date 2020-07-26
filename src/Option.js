import React, {useContext} from 'react';
import styled from 'styled-components';
import {GlobalContext} from './Configurator'

const Container = styled.div`
    width: 100%;
    height: 20%;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function Option(props) {

    const {globalState, dispatch} = useContext(GlobalContext);

    return (
        <Container onClick = {() => dispatch({type:'togglePickerMode'})}>
            <h3>{props.type}</h3>
        </Container>
    )
}
