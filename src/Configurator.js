import React, {useReducer,useEffect} from 'react'
import styled from 'styled-components';
import Product from './Product';
import Checkout from './Checkout';
import Options from './Options';

const MainContainer = styled.div`
    display: flex;
    border: 1px solid black;
    border-radius: 10px;
    height: 100vh;
    width: 100%;
`;

const LeftContainer = styled.div`
    height: 100%;
    width: 75%;
`;

const RightContainer = styled.div`
    height: 100%;
    width: 25%;
`;

const ProductContainer = styled.div`
    background-color: white;
    height: 80%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SideContainer = styled.div`
    height: 100%;
    width: 100%;
`;

const BottomContainer = styled.div`
    background-color: green;
    height: 20%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const GlobalContext = React.createContext();

export default function Configurator() {

    //useReducer

    const initialState = {
        product: '',
        primaryColor: '',
        secondaryColor: '',
        gem1: '',
        gem2: ''
    }

    const reducer = (prevState, action) => {
        switch(action.type){
            default:
                return prevState
            case('setPrimaryColor'):
                return prevState //todo
        }
    }

    const [globalState, dispatch] = useReducer(reducer,initialState);


    ////////////

    return (
        <GlobalContext.Provider value = {{globalState, dispatch}}>
            <MainContainer>
                <LeftContainer>
                    <ProductContainer>
                        <Product />
                    </ProductContainer>
                    <BottomContainer>
                        <Checkout />
                    </BottomContainer>
                </LeftContainer>
                <RightContainer>
                    <SideContainer>
                        <Options />
                    </SideContainer>
                </RightContainer>
            </MainContainer>
        </GlobalContext.Provider>
    )
}
