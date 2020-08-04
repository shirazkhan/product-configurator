import React, {useContext} from 'react';
import {GlobalContext} from './Configurator';
import GreenPlate from './img/Emerald-Green-Plate.png';
import RubyPlate from './img/Ruby-Red-Plate.png';
import PurplePlate from './img/Purple-Plate.png';
import GoldDesign from './img/Gold-Design.png';
import styled from 'styled-components';

const ProductImage = styled.img`
    height: 90%;
    width: auto;
    position: absolute;
`;

const productRender = () => {

}

export default function Product() {

    const {globalState,dispatch} = useContext(GlobalContext);

    return (
        <>
            <ProductImage src = {RubyPlate}/>
            <ProductImage src = {GoldDesign}/>        
        </>
    )
}
