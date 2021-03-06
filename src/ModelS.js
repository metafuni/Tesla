import React from 'react'
import Chat from './components/models/Chat'
import Hero from './components/models/Hero'
import Interior from './components/models/Interior'
import InteriorCarousel from './components/models/InteriorCarousel'
import Grid from './components/models/Grid'
import Category from './components/models/Category'
import VideoCategory from './components/models/VideoCategory'
import Electrics from './components/models/Electrics'
import TravelSection from './components/models/TravelSection'
import Features from './components/models/FeaturesSection'
import Specs from './components/models/Specs'
import Order from './components/models/Order'
import Footer from './components/models/Footer'
import styled from 'styled-components'

import { useSelector } from 'react-redux'
import { selectCars } from './features/car/CarSlice'

function ModelS({ blurState }) {
    const models = useSelector(selectCars)[0];
    const interiorgrid = useSelector(selectCars)[0].interiorgrid;
    const exteriorgrid = useSelector(selectCars)[0].exteriorgrid;

    return (
        <>
            <ModelSContainer blur={blurState}>
                <Hero />
                <Interior />
                <InteriorCarousel />
                <Grid
                    grid={interiorgrid}
                />
                <Category
                    stats={models.performanceSection.stats}
                    type={models.type}
                    title={models.performanceSection.title}
                    description={models.performanceSection.description}
                    image={models.performanceSection.image}
                />
                <Electrics />
                <Category
                    stats={models.designSection.stats}
                    type="Exterior"
                    title={models.designSection.title}
                    description={models.designSection.description}
                    image={models.designSection.image}
                />
                <Grid
                    grid={exteriorgrid}
                />
                <Category
                    stats={models.rangeSection.stats}
                    type="Range"
                    title={models.rangeSection.title}
                    description={models.rangeSection.description}
                    image={models.rangeSection.image}
                />
                <VideoCategory
                    stats={models.autopilotSection.stats}
                    type="Autopilot"
                    title={models.autopilotSection.title}
                    description={models.autopilotSection.description}
                    video={models.autopilotSection.video}
                    image={models.autopilotSection.stats[2].image}
                />
                <TravelSection />
                <Features />
                <Specs />
                <Order />
                <Footer />
            </ModelSContainer>
            <Chat />
        </>
    )
}

export default ModelS

const ModelSContainer = styled.div`
    filter: ${props => props.blur ? 'blur(4px)' : 'blur(0)'};
    opacity: ${props => props.blur ? '.6' : '1'};
    transition: .3s;
`