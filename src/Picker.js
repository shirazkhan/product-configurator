import React, {useContext} from 'react';
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
    cursor: pointer;
`;

export default function Picker() {

    const {globalState, dispatch} = useContext(GlobalContext);

    const choicesRender = productSource => {
        let pickerButtons;
        productSource.forEach(option => {
            if(option.name === globalState.selectedOption){
                pickerButtons = option.choices.map(choice => {
                    if(choice.name === globalState.tempProductSpec.option1){
                        return <PickerButton key={uuid()} selected={true} name={choice.name} color={choice.colorCode} />
                    } else {
                        return <PickerButton key={uuid()} name={choice.name} color={choice.colorCode} />
                    }
                })
            }
        })
        return pickerButtons
    }

    const handleCheckoutOk = () => {
        dispatch({type: 'disablePickerMode'})
    }

    const handleCheckoutCancel = () => {
        dispatch({type: 'disablePickerMode'})
    }

    return (
        <Container>
            <TitleContainer>
                <h3>{globalState.selectedOption}</h3>
            </TitleContainer>
            <OptionButtonsContainer>
                {choicesRender(productSource)}
            </OptionButtonsContainer>
            <CheckoutContainer>
                <CheckoutButton onClick = {() => handleCheckoutOk()}>
                    <i className="fas fa-times"></i>
                </CheckoutButton>
                <CheckoutButton onClick = {() => handleCheckoutCancel()}>
                    <i className="fas fa-check"></i>
                </CheckoutButton>
            </CheckoutContainer>
        </Container>
    )
}
