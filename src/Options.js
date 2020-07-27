import React, {useContext} from 'react';
import Option from './Option';
import Picker from './Picker';
import styled from 'styled-components';
import { GlobalContext } from './Configurator';
import {productSource} from './ProductSource';

const Container = styled.div`
    height: 100%;
    width: 100%;
    border: 1px solid lightgray;
`;

export default function Options() {

    const {globalState, dispatch} = useContext(GlobalContext);

    const optionTypesRender = (src) => {
        return src[0].options.map(option => {
            return <Option type={option.name} />
        });
    }

    return (
        <Container>
            {globalState.pickerMode
                ? <Picker />
                : optionTypesRender(productSource)}
        </Container>
    )
}
