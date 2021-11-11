import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal'
import { useSelector } from 'react-redux'
import { selectCars } from '../../features/car/CarSlice'

function Category({ stats, type, title, description, image }) {
    const models = useSelector(selectCars)[0];

    return (
        <CategoryContainer>
            <CategoryImage image={image} >
                <CategoryStats>
                    <Fade duration={3000}>
                        <CategoryStatsGroup>
                            {stats.map(el => (
                                <CategoryStatsItem key={el.id}>
                                    <CategoryStatTitle>
                                        {el.title}
                                    </CategoryStatTitle>
                                    <CategoryStatsubtitle>
                                        {el.description}
                                    </CategoryStatsubtitle>
                                </CategoryStatsItem>
                            ))}
                        </CategoryStatsGroup>
                    </Fade>
                </CategoryStats>
            </CategoryImage>

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

export default Category

const CategoryContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: white;

    @media (max-width: 640px) {
        height: 110vh;
    }
`

const CategoryImage = styled.div`
    width: 100vw;
    height: 70%;
    background-image: url(./images/${props => props.image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

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
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 25px;
`

const CategoryStatsGroup = styled.div`
    display: flex;
    button:hover {
        background: white;
        color: black;
    }
`

const CategoryStatsItem = styled.div`
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
    @media (max-width: 640px) {
        padding: 0;
        margin: 0;
    }
`

const CategoryStatTitle = styled.div`
    color: white;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 10px;
    letter-spacing: 0px;
`

const CategoryStatsubtitle = styled.div`
    color: white;
    font-size: 13px;
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