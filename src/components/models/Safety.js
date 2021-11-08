import React from 'react'
import styled from 'styled-components'

function Safety() {
    return (
        <SafetyContainer>
            <SafetyText>
                <SafetyDescription>
                    <span>Safety</span>
                    <h2>High Impact Protection</h2>
                    <p>Model S is built from the ground up as an electric vehicle, with a high-strength architecture and floor-mounted battery pack for incredible occupant protection and low rollover risk. Every Model S includes Tesla’s latest active safety features, such as Automatic Emergency Braking, at no extra cost.</p>
                </SafetyDescription>
                <SafetyButton>order now</SafetyButton>
            </SafetyText>
            <SafetyImage />
        </SafetyContainer>
    )
}

export default Safety

const SafetyContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    background: rgba(244, 244, 244, 1);
    display: flex;
`

const SafetyText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 30%;
    padding: 50px;

    button:hover {
        color: white;
        background: black;
    }
`
const SafetyDescription = styled.div`
    span {
        font-size: 20px;
    }

    h2 {
        color: black;
        font-size: 27px;
        margin-bottom: 20px;
    }
`

const SafetyButton = styled.button`
    background-color: transparent;
    height: 40px;
    width: 180px;
    max-width: 450px;
    color: black;    
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    border: 3px solid black;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    margin: 12px;
    cursor: pointer;
    transition: .3s;
`

const SafetyImage = styled.div`
    width: 70%;
    background-image: url(./images/MS-Safety-Hero-Desktop.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`