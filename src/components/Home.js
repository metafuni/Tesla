import React from 'react'
import styled from 'styled-components'
import Section from './Section'


function Home({ blurState }) {
    return (
        <>
            <Container blur={blurState}>
                <Section
                    title="Model S"
                    description="Order Online for Touchless Delivery"
                    backgroundImg="model-s.jpg"
                    leftBtnText="custom order"
                    rightBtnText="existing inventory"
                />
                <Section
                    title="Model Y"
                    description="Order Online for Touchless Delivery"
                    backgroundImg="model-y.jpg"
                    leftBtnText="custom order"
                    rightBtnText="existing inventory"
                />
                <Section
                    title="Model 3"
                    description="Order Online for Touchless Delivery"
                    backgroundImg="model-3.jpg"
                    leftBtnText="custom order"
                    rightBtnText="existing inventory"
                />
                <Section
                    title="Model X"
                    description="Order Online for Touchless Delivery"
                    backgroundImg="model-x.jpg"
                    leftBtnText="custom order"
                    rightBtnText="existing inventory"
                />
                <Section
                    title="Solar Panels"
                    description="Lowest Cost Solar Panels in America"
                    backgroundImg="solar-panel.jpg"
                    leftBtnText="order now"
                    rightBtnText="learn more"
                />
                <Section
                    title="Solar Roof"
                    description="Produce Clean Energy From Your Roof"
                    backgroundImg="solar-roof.jpg"
                    leftBtnText="order now"
                    rightBtnText="learn more"
                />
                <Section
                    title="Accessories"
                    backgroundImg="accessories.jpg"
                    leftBtnText="shop now"
                />
            </Container>
        </>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    overflow-x: hidden;
    filter: ${props => props.blur ? 'blur(4px)' : 'blur(0)'};
    opacity: ${props => props.blur ? '.6' : '1'};
    transition: .3s;
`