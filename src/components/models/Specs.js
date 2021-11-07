import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectCars } from '../../features/car/CarSlice'

function Specs() {
    const models = useSelector(selectCars)[0].specs.models;
    const plaid = useSelector(selectCars)[0].specs.plaid;

    const [selected, setSelected] = useState("plaid");

    return (
        <SpecsContainer>
            <SpecsImage />
            <SpecsText>
                <h2>Model S <span>Specs</span></h2>
                <SpecsButtons>
                    <SpecButton className={selected === "plaid" ? 'active' : ''} onClick={() => setSelected("plaid")}>
                        Model S Plaid
                    </SpecButton>
                    <SpecButton className={selected === "models" ? 'active' : ''} onClick={() => setSelected("models")}>
                        Model S
                    </SpecButton>
                </SpecsButtons>
                <SpecsDescription>
                    <SpecsLeft>
                        {selected === "plaid" ? plaid.left.map(el => (
                            <SpecTile>
                                <h4>{el.title}</h4>
                                <p>{el.description}</p>
                            </SpecTile>
                        )) : models.left.map(el => (
                            <SpecTile>
                                <h4>{el.title}</h4>
                                <p>{el.description}</p>
                            </SpecTile>
                        ))}
                    </SpecsLeft>
                    <SpecsRight>
                        {selected === "plaid" ? plaid.right.map(el => (
                            <SpecTile>
                                <h4>{el.title}</h4>
                                <p>{el.description}</p>
                                {el.sidenote && <p>{el.sidenote}</p>}
                            </SpecTile>
                        )): models.right.map(el => (
                            <SpecTile>
                                <h4>{el.title}</h4>
                                <p>{el.description}</p>
                                {el.sidenote && <p>{el.sidenote}</p>}
                            </SpecTile>
                        ))}
                    </SpecsRight>
                </SpecsDescription>
            </SpecsText>
        </SpecsContainer>
    )
}

export default Specs

const SpecsContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: black;
    display: flex;
    margin: auto;

    @media(max-width: 900px) {
        flex-direction: column;
        height: auto;
    }
`

const SpecsImage = styled.div`
    width: 50%;
    background-image: url(./images/MS-Specs-Hero-Desktop.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media(max-width: 900px) {
        width: 100%;
        height: 350px
    }
`

const SpecsText = styled.div`
    width: 50%;
    padding: 50px;
    max-width: 650px;

    h2 {
        font-size: 28px;
        color: white;
        font-weight: bold;
    }

    span {
        color: white;
        font-weight: normal;
        opacity: .8;
    }

    @media(max-width: 900px) {
        width: 100%;
        padding: 15px 10px;
        margin: 30px auto;
    }
`
const SpecsButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .active {
        color: white;
        border: 2px solid white;
        opacity: 1;
    }
`

const SpecButton = styled.button`
    background-color: transparent;
    height: 32px;
    width: 50%;
    max-width: 450px;
    color: white;    
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    border: 3px solid white;
    font-size: 12px;
    font-weight: bold;
    margin: 12px;
    cursor: pointer;
    opacity: .6;
    transition: .3s;
`

const SpecsDescription = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 40px;
    font-size: 15px;

    @media(max-width: 900px) {
        padding: 10px;
    }
`

const SpecsLeft = styled.div`
    width: 50%;
`

const SpecTile = styled.div`
    h4 {
        color: white;
        opacity: 1;
        margin: 10px 0;
        position: relative;
        padding: 15px 0 0 0;
    }

    h4:before {
        content: "";
        width: 50px;
        height: 1px;
        background: white;
        position: absolute;
        top: 0;
        left: 0;
    }

    p {
        color: white;
        opacity: .7;
        line-height: 20px;
    }

    p:nth-child(3) {
        font-style: italic;
    }

    margin-bottom: 25px;
`

const SpecsRight = styled(SpecsLeft)`

`