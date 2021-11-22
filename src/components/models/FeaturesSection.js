import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal'
import { useSelector } from 'react-redux'
import { selectCars } from '../../features/car/CarSlice'

function FeaturesSection() {
    const features = useSelector(selectCars)[0].featuresSection;

    const [selected, setSelected] = useState("autopilot");

    useEffect(() => {
        const video = document.getElementById('video')
        video.load()
    });

    return (
        <FeaturesContainer>
            <FeaturesIntro>
                <h1>{features.title}</h1>
                <p>{features.description}</p>
            </FeaturesIntro>

            <video id="video" preload="auto" autoplay="autoplay" muted loop>
                <source src={`./images/${selected}.mp4`} type="video/mp4"></source>
                Your Browser does not support the video element
            </video>

            <FeaturesText>
                {features.items.map(el => (
                    <FeaturesItem onClick={() => { setSelected(el.select) }} 
                        style={selected === el.select ? 
                            { outline: '3px solid black', transform: 'scale(1.015)', opacity: '1' } : 
                            { borderTop: '3px solid black' }}
                        >
                        <div>
                            <h3>{el.title}</h3>
                            <p>{el.description}</p>
                        </div>
                    </FeaturesItem>
                ))}
            </FeaturesText>
        </FeaturesContainer>
    )
}

export default FeaturesSection

const FeaturesContainer = styled.div`
    background: white;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0 70px 0;

    video {
        max-width: 100vw;
        height: 35vw;
        min-height: 300px;
    }
`

const FeaturesIntro = styled.div`
    max-width: 1200px;
    padding: 30px;

    h1 {
        font-size: 28px;
        margin-bottom: 20px;
    }

    max-width: 900px;
`

const FeaturesText = styled.div`
    display: flex;
    max-width: 1000px;
    min-height: 245px;
    padding: 30px 60px;
    position: relative;

    p {
        font-size: 14px;
        opacity: .8;
        line-height: 18px;
    }

    > div:hover {
        cursor: pointer;
        transition: .3s;
        opacity: 1;
    }
`

const FeaturesItem = styled.div`
    width: 50%;
    padding: 18px 25px;
    outline-top: 3px solid black;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    opacity: .7;
    transition: .3s;

    h3 {
        margin-bottom: 10px;
    }
`