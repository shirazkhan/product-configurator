import React, {useContext} from 'react';
import Option from './Option';
import Picker from './Picker';
import styled from 'styled-components';
import { GlobalContext } from './Configurator';

const Container = styled.div`
    height: 100%;
    width: 100%;
`;

const OPTION_TYPES = [
    'Plate Colour',
    'Paint Colour',
    'Gems Colour 1',
    'Gems Colour 2'
];

export default function Options() {

    const {globalState, dispatch} = useContext(GlobalContext);

    const optionTypesRender = (optionArr) => {
        return optionArr.map((option) => {
            return <Option type={option} />
        });
    }

    return (
        <Container>
            {globalState.pickerMode
                ? <Picker />
                : optionTypesRender(OPTION_TYPES)}
        </Container>
    )
}
