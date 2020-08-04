import React from 'react';
import PlateSrc from './img/Emerald-Green-Plate.png';
import styled from 'styled-components';

const Container = styled.div`
    height: 90%;
    width: auto;
    text-align: center;
`;

const ProductImage = styled.img`
    height: 100%;
    width: auto;
`;

export default function Product() {
    return (
        <Container>
            <ProductImage src = {PlateSrc}/>
        </Container>
    )
}
