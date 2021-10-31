import React from 'react'
import styled from 'styled-components'

function Interior() {
    return (
        <InteriorContainer>
            <InteriorOverlay>
                <InteriorTitle>
                    All-New Interior
                </InteriorTitle>
            </InteriorOverlay>
        </InteriorContainer>
    )
}

export default Interior

const InteriorContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(./images/model-s-interior.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`
const InteriorOverlay = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 48%);
    padding-top: 45px;
`

const InteriorTitle = styled.h2`
    text-align: center;
    color: white;
`