import React from 'react'
import Hero from './components/models/Hero'
import Interior from './components/models/Interior'
import InteriorCarousel from './components/models/InteriorCarousel'
import InteriorGrid from './components/models/InteriorGrid'
import Category from './components/models/Category'
import Order from './components/models/Order'

import { useSelector } from 'react-redux'
import { selectCars } from './features/car/CarSlice'

function ModelS() {
    const models = useSelector(selectCars)[0];

    return (
        <>
            <Hero />
            <Interior />
            <InteriorCarousel />
            <InteriorGrid />
            <Category
                stats={models.performanceSection.stats}
                type={models.type}
                title={models.performanceSection.title}
                description={models.performanceSection.description}
                image={models.performanceSection.image}
            />
            <Category 
                stats={models.designSection.stats} 
                type="Exterior" 
                title={models.designSection.title} 
                description={models.designSection.description} 
                image={models.designSection.image} 
            />
            <Category 
                stats={models.rangeSection.stats} 
                type="Range" 
                title={models.rangeSection.title} 
                description={models.rangeSection.description} 
                image={models.rangeSection.image} 
            />
            <Order />
        </>
    )
}

export default ModelS

