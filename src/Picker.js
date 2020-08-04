import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import {GlobalContext} from './Configurator';
import PickerButton from './PickerButton';
import {productSource} from './ProductSource';
import {v4 as uuid} from 'uuid';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    border-left: 1px solid lightgray;
`;

const TitleContainer = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid lightgray;
`;

const OptionButtonsContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
`;

const CheckoutContainer = styled.div`
    height: 75px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid lightgray;
`;

const CheckoutButton = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function Picker() {

    const {globalState, dispatch} = useContext(GlobalContext);

    const optionsRender = optionsArr => {

        return optionsArr.map(option => {

            if(option.name === globalState.selectedOption){
                return option.choices.map(choice => {
                    return <PickerButton key={uuid()} name={choice.name} color={choice.colorCode} />
                })
            } else {
                return null
            }
        });
    }

    return (
        <Container>
            <TitleContainer>
                <h3>Plate Colour</h3>
            </TitleContainer>
            <OptionButtonsContainer>
                {optionsRender(productSource)}
            </OptionButtonsContainer>
            <CheckoutContainer>
                <CheckoutButton onClick = {() => dispatch({type: 'disablePickerMode'})}>
                    <i className="fas fa-times"></i>
                </CheckoutButton>
                <CheckoutButton onClick = {() => dispatch({type: 'disablePickerMode'})}>
                    <i className="fas fa-check"></i>
                </CheckoutButton>
            </CheckoutContainer>
        </Container>
    )
}
