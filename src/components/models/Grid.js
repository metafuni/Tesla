import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal'

function Grid({ grid }) {

    return (
        <GridContainer>
            <GridComponent>
                {grid.map(el => (
                    <GridRow key={el.id}>
                        <GridImage image={el.image} />
                        <GridDescription>
                            <Fade bottom>
                                <GridText>
                                    <GridTitle>
                                        {el.title}
                                    </GridTitle><br></br>
                                    <GridParagraph>
                                        {el.description}
                                    </GridParagraph>
                                </GridText>
                            </Fade>
                        </GridDescription>
                    </GridRow>
                ))}
            </GridComponent>
        </GridContainer>
    )
}

export default Grid

const GridContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px 0;
`

const GridComponent = styled.div`
    max-width: 1100px;

    div:nth-child(2n) {
        flex-direction: row-reverse;

        div {
            justify-content: flex-end;
        }
    }

    @media (max-width: 1100px) {
        div:nth-child(n) {
            flex-direction: column;
    
            div, image {
                width: 100%;
                min-height: 225px;
                justify-content: center;
            }
        }
    }
`

const GridRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const GridImage = styled.div`
    width: 50%;
    height: 330px;
    background-image: url(./images/${props => props.image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: orange;
`

const GridDescription = styled.div`
    width: 50%;
    height: 100%;
    padding: 18px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    letter-spacing: 0.1px;
`

const GridText = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const GridTitle = styled.h4`
    color: white;
`
const GridParagraph = styled.p`
    color: white;
    opacity: .8;
    line-height: 21px;
    font-size: 15px;
`