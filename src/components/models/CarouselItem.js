import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { carouselState, increase, decrease } from '../../features/carousel/toggleCarouselSlice'

function CarouselItem() {
    const value = useSelector(carouselState);
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setInterval(() => {
            dispatch(increase());
        }, 5000);
        return () => clearInterval(timer);
      });

    return (
        <>
                <ItemContainer>
                    <ItemImage value={value}>
                        <ImageMask>
                            <button onClick={() => dispatch(decrease())}>
                                <img src="./images/arrow.svg" alt="previous item" />
                            </button>
                            <button onClick={() => dispatch(increase())}>
                                <img src="./images/arrow.svg" alt="next item" /> 
                            </button>
                        </ImageMask>
                    </ItemImage>
                    <ItemDescriptionContainer>
                        <ItemBullets value={value}> 
                            <Bullet />
                            <Bullet />
                            <Bullet />
                            <Bullet />
                        </ItemBullets>
                        <ItemText>
                            <h2>Focus on Driving</h2>
                            <p>The ultimate focus on driving: no stalks, no shifting. Model S is the best car to drive, and the best car to be driven in.</p>
                        </ItemText>
                    </ItemDescriptionContainer>
                </ItemContainer>
        </>
    )
}

export default CarouselItem

const ItemContainer = styled.div`
    width: 100%;
    max-width: 1100px;
    height: 100%;
`

const ItemImage = styled.div`
    width: 100%;
    height: 80%;
    background-image: url(./images/MS-Interior-Carousel-${props => props.value}-Desktop.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: 700px) {
        height: 60%;
    }
`

const ImageMask = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 700px) {
        display: none;
    }

    button {
        background: transparent;
        outline: none;
        border: none;
        cursor: pointer;
        width: 35px;
        height: 35px;
        margin: 35px;
    }
    
    button:nth-child(1) {
        transform: rotate(180deg);
    }

    img {
        width: 35px;
        border: 2px solid white;
        color: white;
        background: rgba(0, 0, 0, .3);
    }
`

const ItemDescriptionContainer = styled.div`
    display: flex;

    @media (max-width: 700px) {
        flex-direction: column;
        height: 40%;
    }
`

const ItemBullets = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 20%;
    padding: 20px;

    span:nth-child(${props => props.value}) {
        background: white;
    }

    @media (max-width: 700px) {
        width: 100%;
        justify-content: flex-start;
    }
`

const Bullet = styled.span`
    width: 8px;
    height: 8px;
    border-radius: 100%;
    border: 1px solid white;
    margin-right: 10px;
`

const ItemText = styled.div`
    width: 80%;
    padding: 20px;

    h2, p {
        color: white;
    }

    h2 {
        margin-bottom: 20px;
    }

    @media (max-width: 700px) {
        width: 100%;
    }
`