import React, {useContext} from 'react';
import styled from 'styled-components';
import GlobalContext from './Configurator';

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

const OptionButton = styled.div`
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
`;

const ColourLabel = styled.h5`
    margin: 15px;
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

const PICKER_OPTIONS = [
    {name: 'Gold', colorCode: '#FFD700', img: ''},
    {name: 'Forest Green', colorCode: '#228B22', img: ''},
    {name: 'Dark Violet', colorCode: '#9400D3', img: ''},
    {name: 'Royal Blue', colorCode: '#002366', img: ''},
    {name: 'Crimson Red', colorCode: '#FF0000', img: ''},
    {name: 'Yellow', colorCode: '#FFFF00', img: ''},
];

const optionsRender = optionsArr => {
    return optionsArr.map(option => {
        return (
            <OptionButton>
                <Colour style = {{backgroundColor: option.colorCode}}></Colour>
                <ColourLabel>{option.name}</ColourLabel>
            </OptionButton>
        )
    });
}

export default function Picker() {

    const {globalContext, dispatch} = useContext(GlobalContext);

    return (
        <Container>
            <TitleContainer>
                <h3>Plate Colour</h3>
            </TitleContainer>
            <OptionButtonsContainer>
                {optionsRender(PICKER_OPTIONS)}
            </OptionButtonsContainer>
            <CheckoutContainer>
                <CheckoutButton>Go Back</CheckoutButton>
                <CheckoutButton>Ok</CheckoutButton>
            </CheckoutContainer>
        </Container>
    )
}
