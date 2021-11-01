import React from 'react'
import styled from 'styled-components'

function Order() {
    return (
        <OrderContainer>
            <OrderContent>
                <h2>Model S</h2>
                <OrderButtons>
                    <OrderButton>
                        order now
                    </OrderButton>
                    <OrderButton>
                        compare
                    </OrderButton>
                </OrderButtons>
            </OrderContent>
            <OrderImage></OrderImage>
        </OrderContainer>
    )
}

export default Order

const OrderContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background: white;

    @media (max-width: 760px) {
        flex-direction: column;
    }
`

const OrderContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50vw;

    @media (max-width: 760px) {
        width: 100vw;
    }
`

const OrderButtons = styled.div`
    display: flex;
    button:hover {
        background: black;
        color: white;
    }

    @media (max-width: 650px) {
        flex-direction: column;
    }
`

const OrderButton = styled.button`
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

    @media (max-width: 640px) {
        width: 90vw;
    }
`

const OrderImage = styled.div`
    width: 50vw;
    height: 100%;
    background-image: url(./images/MS-Order-Hero-Desktop.jpg);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: 760px) {
        width: 100vw;
        max-height: 400px;
    }
`