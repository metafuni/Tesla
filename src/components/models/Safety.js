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
            <SafetyImage>
                <ul>
                    <li>
                        <span>Front-Impact Protection</span>
                    </li>
                    <li>
                        <span>Side-Impact Protection</span>
                    </li>
                    <li>
                        <span>Very Low Rollover Risk</span>
                    </li>
                </ul>
            </SafetyImage>
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

const SafetyButton = styled.button``

const SafetyImage = styled.div`
    width: 70%;
    background-image: url(./images/MS-Safety-Hero-Desktop.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    ul {
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        color: black;
        position: relative;

        li {
            list-style: none;
            position: absolute;
            font-size: 14px;
            height: 200px;
            max-width: 18%;

            span {
                display: block;
                margin-left: 10px;
            }
        }

        li:before {
            content: '';
            background: black;
            width: 3px;
            height: 100%;
            position: absolute;
            bottom: 0;
            left: 2px;
        }

        li:nth-child(2) {
            top: 4%;
            left: 39%;
            width: 140.25px;
        }

        li:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            background: white;
            border: 2px solid black;
            border-radius: 8px;
            height: 5px;
            width: 5px;
        }
    }
`

