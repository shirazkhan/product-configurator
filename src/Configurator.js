import React, {useReducer, useEffect} from 'react'
import styled from 'styled-components';
import Product from './Product';
import Checkout from './Checkout';
import Options from './Options';

const MainContainer = styled.div`
    display: flex;
    border-radius: 10px;
    height: 100vh;
    width: 100%;

    @media (max-width: 600px) {
        border: 10px solid pink;
    }
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
    height: 85%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const SideContainer = styled.div`
    height: 100%;
    width: 100%;
`;

const BottomContainer = styled.div`
    border-top: 1px solid lightgray;
    height: 15%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const GlobalContext = React.createContext();

export default function Configurator() {

    ////// useReducer //////

    const initialState = {
        productSpec: {
            option1: 'Ruby Red',
            option2: 'Gold',
            option3: '',
            option4: ''
        },
        tempProductSpec: {},
        selectedOption: '',
        selectedChoice: ''

    }

    const reducer = (prevState, action) => {
        switch(action.type){
            default:
                return prevState
            case('disablePickerMode'):
                return {...prevState, selectedOption: '', selectedChoice: ''}
            case('productSpecToTempSwap'):
                return {...prevState, tempProductSpec: {...prevState.productSpec}}
            case('tempToProductSpecSwap'):
                return {...prevState, productSpec: {...prevState.tempProductSpec}}
            case('changeSelectedOption'):
                return {...prevState, selectedOption: action.option}
            case('changeSelectedChoice'):
                return {...prevState, selectedChoice: action.choice}
            case('setOption1'):
                return {...prevState, tempProductSpec: {...prevState.productSpec, option1: action.choice}}
            case('setOption2'):
                return {...prevState, tempProductSpec: {...prevState.productSpec, option2: action.choice}}
            case('setOption3'):
                return {...prevState, tempProductSpec: {...prevState.productSpec, option2: action.choice}}
            case('setOption4'):
                return {...prevState, tempProductSpec: {...prevState.productSpec, option2: action.choice}}
            case('setOption5'):
                return {...prevState, tempProductSpec: {...prevState.productSpec, option2: action.choice}}
        }
    }

    const [globalState, dispatch] = useReducer(reducer,initialState);

    ///////////////////////

    // Copy productSpec state to tempProductSpec on first render
    useEffect(() => {
        dispatch({type:'productSpecToTempSwap'});
    },[])

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
