import React from 'react';
import PlateSrc from './Emerald-Green-Plate.png';
import styled from 'styled-components';

const Container = styled.div`
    height: 90%;
    width: 90%;
    text-align: center;
`;

const ProductImage = styled.img`
    height: 100%;
`;

export default function Product() {
    return (
        <Container>
            <ProductImage src = {PlateSrc}/>
        </Container>
    )
}
