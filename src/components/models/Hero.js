import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal'
import { useSelector } from 'react-redux'
import { selectCars } from '../../features/car/CarSlice'

function Hero() {
    const models = useSelector(selectCars)[0];

    return (
        <HeroContainer>
            <HeroOverlay>
                <HeroText>
                    <Fade duration={3000} delay={6000} exit>
                        <>
                            <HeroTitle>{models.title}</HeroTitle>
                            <HeroSubTitle>{models.type}</HeroSubTitle>
                        </>
                    </Fade>
                </HeroText>
                <Stats>
                    <Fade duration={3000}>
                        <StatsGroup>
                            <StatsItem>
                                <StatTitle>
                                    {models.range}
                                </StatTitle>
                                <StatSubtitle>
                                    {models.rangeSubtitle}
                                </StatSubtitle>
                            </StatsItem>
                            <StatsItem>
                                <StatTitle>
                                    {models.acceleration}
                                </StatTitle>
                                <StatSubtitle>
                                    {models.accelerationSubtitle}
                                </StatSubtitle>
                            </StatsItem>
                            <StatsItem>
                                <StatTitle>
                                    {models.topSpeed}
                                </StatTitle>
                                <StatSubtitle>
                                    {models.topSpeedSubtitle}
                                </StatSubtitle>
                            </StatsItem>
                            <StatsItem>
                                <StatTitle className="power">
                                    {models.peakPower}
                                </StatTitle>
                                <StatSubtitle className="power">
                                    {models.peakPowerSubtitle}
                                </StatSubtitle>
                            </StatsItem>
                        </StatsGroup>
                        <HeroButton>
                            order now
                        </HeroButton>
                    </Fade>
                </Stats>
            </HeroOverlay>
        </HeroContainer>

    )
}

export default Hero

const HeroContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(./images/model-s.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: white;
`

const HeroOverlay = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 48%);
    padding: 30px 0 15px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const HeroText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const HeroTitle = styled.h1`
    font-size: 40px;
`

const HeroSubTitle = styled.p`
    color: rgb(92, 93, 97);
    font-size: 15px;
    padding: 7px;
`

const Stats = styled.div`
    display: flex;
    button:hover {
        background: white;
        color: black;
    }
    
    @media (max-width: 640px) {
        flex-direction: column;
    }
`

const StatsGroup = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
`

const StatsItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px 28px;
    color: white;

    .power {
        @media(max-width: 850px) {
            display: none;
        }
    }

    @media(max-width: 850px) {
        transform: scale(.8);
        margin: 0 5px;
    }
`

const StatTitle = styled.div`
    color: white;
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 10px;
    letter-spacing: -1px;
`

const StatSubtitle = styled.div`
    color: white;
    font-size: 13px;
`

const HeroButton = styled.button`
    background-color: transparent;
    height: 40px;
    width: 180px;
    max-width: 450px;
    color: white;    
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    border: 3px solid white;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    margin: 12px;
    cursor: pointer;
    transition: .3s;

    @media (max-width: 640px) {
        width: 90vw;
    }
`