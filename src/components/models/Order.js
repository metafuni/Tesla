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
    padding-top: 30px;

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

    @media (max-width: 650px) {
        flex-direction: column;
    }
`

const OrderButton = styled.button``

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