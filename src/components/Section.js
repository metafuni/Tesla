import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal'

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
    return (
        <Wrap bgImage={backgroundImg}>
            <ItemText>
                <Fade duration={3000} delay={6000} exit>
                    <>
                        <Title>{title}</Title>
                        {description &&
                            <SubTitle>{description}</SubTitle>
                        }
                    </>
                </Fade>
            </ItemText>
            <Buttons>
                <Fade duration={3000}>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        {rightBtnText &&
                            <RightButton>
                                {rightBtnText}
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    scroll-snap-align: start;
    scroll-snap-stop: normal;
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const Title = styled.h1`
    font-size: 40px;
`

const SubTitle = styled.p`
    color: rgb(92, 93, 97);
    font-size: 15px;
    padding: 7px;
`

const ButtonGroup = styled.div`
    display: flex;
    @media (max-width: 640px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgb(23, 26, 32);
    height: 40px;
    width: 256px;
    color: white;    
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.9;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    margin: 12px;
    cursor: pointer;
    @media (max-width: 640px) {
        width: 90vw;
    }
`

const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;
    opacity: 0.65;
`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 50px;
    animation: AnimateDown infinite 2s;
`

const Buttons = styled.div`
    text-align: center;
`