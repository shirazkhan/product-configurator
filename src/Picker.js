import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

const TitleContainer = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
    width: 49%;
    border: 1px solid blue;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Colour = styled.div`
    height: 65px;
    width: 65px;
    border-radius: 50px;
    background-color: red;
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
`;

const CheckoutButton = styled.div`
    width: 50%;
    height: 100%;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function Picker() {
    return (
        <Container>
            <TitleContainer>
                <h3>Plate Colour</h3>
            </TitleContainer>
            <OptionButtonsContainer>
                <OptionButton>
                    <Colour />
                    <ColourLabel>Crimson Red</ColourLabel>
                </OptionButton>
                <OptionButton />
                <OptionButton />
                <OptionButton />
                <OptionButton />
            </OptionButtonsContainer>
            <CheckoutContainer>
                <CheckoutButton>Yes</CheckoutButton>
                <CheckoutButton>No</CheckoutButton>
            </CheckoutContainer>
        </Container>
    )
}
