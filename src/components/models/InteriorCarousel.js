import React from 'react'
import styled from 'styled-components'
import CarouselItem from './CarouselItem'

function InteriorCarousel() {
    return (
        <CarouselContainer>
            <CarouselItem />
        </CarouselContainer>
    )
}

export default InteriorCarousel

const CarouselContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 100px 0;

    @media (max-width: 700px) {
        max-height: 60vh;
    }
`