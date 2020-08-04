import React, {useContext} from 'react';
import Option from './Option';
import Picker from './Picker';
import styled from 'styled-components';
import { GlobalContext } from './Configurator';
import {productSource} from './ProductSource';
import {v4 as uuid} from 'uuid';

const Container = styled.div`
    height: 100%;
    width: 100%;
    border: 1px solid lightgray;
`;

export default function Options() {

    const {globalState, dispatch} = useContext(GlobalContext);

    const optionTypesRender = (src) => {

        return src.map(option => {
            return <Option key={uuid()} option={option.name} />
        });
    }

    return (
        <Container>
            {globalState.selectedOption === ''
                ? optionTypesRender(productSource)
                : <Picker />}
        </Container>
    )
}
