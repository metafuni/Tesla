import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal'
import { useSelector } from 'react-redux'
import { selectCars } from '../../features/car/CarSlice'

function VideoCategory({ stats, type, title, description, image, video }) {
    const models = useSelector(selectCars)[0];

    return (
        <CategoryContainer>
            <CategoryVideo>
                <video preload="auto" autoplay="autoplay" muted loop>
                    <source src={video} type="video/mp4"></source>
                    Your Browser does not support the video element
                </video>
                <CategoryStats>
                    <Fade duration={3000}>
                        <CategoryStatsGroup>
                            {stats.map(el => (
                                <CategoryStatsItem key={el.id}>
                                    <CategoryStatTitle>
                                        {el.image && <img src={el.image} alt={el.title} width="40px" style={{ marginRight: '5px' }} />}{el.title}
                                    </CategoryStatTitle>
                                    <CategoryStatsubtitle>
                                        {el.description}
                                    </CategoryStatsubtitle>
                                </CategoryStatsItem>
                            ))}
                        </CategoryStatsGroup>
                    </Fade>
                </CategoryStats>
            </CategoryVideo>

            <CategorySection>
                <CategorySectionLeft>
                    <CategorySectionCategory>
                        {type}
                    </CategorySectionCategory>
                    <CategorySectionTitle>
                        {title}
                    </CategorySectionTitle>
                    <SectionButton>
                        order now
                    </SectionButton>
                </CategorySectionLeft>
                <CategorySectionRight>
                    {description}
                </CategorySectionRight>
            </CategorySection>
        </CategoryContainer>
    )
}

export default VideoCategory

const CategoryContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: white;

    @media (max-width: 640px) {
        height: 110vh;
    }
`

const CategoryVideo = styled.div`
    width: 100vw;
    height: 70%;
    overflow-y: hidden;
    position: relative;

    video {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
    }

    @media(max-width: 750px) {
        height: 60%;
    }

    @media(max-width: 450px) {
        height: 50%;
    }
`

const CategoryStats = styled.div`
    height: 100%;
    display: flex;
    padding-bottom: 25px;
    overflow-x: hidden;
`

const CategoryStatsGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 15px 50px;
    button:hover {
        background: white;
        color: black;
    }

    > div:nth-child(3) > div {
        font-size: 15px;
    }

    @media (max-width: 850px) {
        flex-direction: row;
        width: 100vw;
        padding: 5px;
        align-items: flex-end;
    }
`

const CategoryStatsItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    margin: 15px 28px;

    .power {
        @media(max-width: 850px) {
            display: none;
        }
    }

    @media(max-width: 850px) {
        transform: scale(.8);
        margin: 0 5px;
        display: none;
    }
    @media (max-width: 640px) {
        padding: 0;
        margin: 0;
    }
`

const CategoryStatTitle = styled.div`
    color: black;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 10px;
    letter-spacing: 0px;
`

const CategoryStatsubtitle = styled.div`
    color: black;
    opacity: .8;
    font-size: 13px !important;
`
const CategorySection = styled.div`
    display: flex;
    padding: 50px 25px;
    min-height: 350px;
    max-width: 1100px;
    margin: auto;

    button:hover {
        background: black;
        color: white;
    }

    @media (max-width: 750px) {
        flex-direction: column;
    }
`
const CategorySectionLeft = styled.div`
    min-width: 350px;    
    max-width: 50%;
`
const CategorySectionCategory = styled.h4`
    font-weight: normal;
    color: #393c41;
`

const CategorySectionTitle = styled.h1`
    font-size: 30px;
    @media(max-width: 750px) {
        font-size: 23px;
    }
`

const CategorySectionRight = styled.div`
    max-width: 650px;
    color: rgb(57, 60, 65);
    opacity: .9;
    padding: 5px 10px;

    @media (max-width: 640px) {
        padding-top: 20px;
    }
`

const SectionButton = styled.button``