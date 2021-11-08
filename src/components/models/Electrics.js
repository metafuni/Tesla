import React, { useState } from 'react'
import styled from 'styled-components'

function Electrics() {
    const [plaidselected, setPlaidselected] = useState(false);
    return (
        <ElectricsContainer>
            <ElectricsIntro>
                <h1>Electric Powertrain</h1>
                <p>Model S platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions.</p>
            </ElectricsIntro>
            {plaidselected ? <PlaidElectricsImage /> : <ElectricsImage />}            
            <ElectricsText>
                <ModelSElectrics onClick={() => {setPlaidselected(false)}} style={!plaidselected ? {outline: '3px solid black', transform: 'scale(1.015)', opacity: '1'} : {borderTop: '3px solid black'}}>
                    <div>
                        <h3>Model S</h3>
                        <p>Dual Motor All-Wheel Drive platform allows for the longest range, and now delivers insane power and acceleration.</p>
                    </div>
                    <ModelSElectricsFeatures>
                        <div>
                            <h2>3.1 s</h2>
                            <p>0-60 mph</p>
                        </div>
                        <div>
                            <h2>405 mi</h2>
                            <p>range (est.)</p>
                        </div>
                        <div>
                            <h2>670 hp</h2>
                            <p>peak power</p>
                        </div>
                    </ModelSElectricsFeatures>
                </ModelSElectrics>
                <PlaidElectrics onClick={() => setPlaidselected(true)} style={plaidselected ? {outline: '3px solid black', transform: 'scale(1.015)', opacity: '1'} : {borderTop: '3px solid black'}}>
                    <div>
                        <h3>Model S Plaid</h3>
                        <p>Tri Motor All-Wheel Drive platform with torque vectoring features three independent motors, each with a carbon-sleeved rotor that maintains peak power output all the way to top speed.</p>
                    </div>
                    <PlaidElectricsFeatures>
                        <div>
                            <h2>1.99 s*</h2>
                            <p>0-60 mph</p>
                        </div>
                        <div>
                            <h2>396 mi</h2>
                            <p>range (EPA est.)</p>
                        </div>
                        <div>
                            <h2>1,020 hp</h2>
                            <p>peak power</p>
                        </div>
                    </PlaidElectricsFeatures>
                </PlaidElectrics>
            </ElectricsText>
            <p style={{ fontSize: '13px', fontWeight: 'bold', opacity: '.8' }}>* With rollout substracted</p>
        </ElectricsContainer>
    )
}

export default Electrics

const ElectricsContainer = styled.div`
    background: rgba(244, 244, 244, 1);
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0 70px 0;
`

const ElectricsIntro = styled.div`
    max-width: 1200px;
    padding: 30px;

    h1 {
        font-size: 28px;
        margin-bottom: 20px;
    }

    max-width: 900px;
`

const ElectricsImage = styled.div`
    width: 100%;
    max-width: 1000px;
    height: 480px;
    background-image: url(./images/Model-S-Performance-Dual-Motor-Desktop.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: 550px) {
        height: 30vh;
    }

    @media (max-width: 850px) {
        height: 50vh;
    }
`

const PlaidElectricsImage = styled(ElectricsImage)`
    background-image: url(./images/Model-S-Performance-Tri-Motor-Desktop.jpg);
`

const ElectricsText = styled.div`
    display: flex;
    max-width: 1000px;
    min-height: 280px;
    padding: 30px 60px;
    position: relative;

    p {
        font-size: 14px;
        opacity: .8;
        line-height: 18px;
    }

    > div:hover {
        cursor: pointer;
        transition: .3s;
        opacity: 1;
    }
`

const ModelSElectrics = styled.div`
    width: 50%;
    padding: 18px 25px;
    outline-top: 3px solid black;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    opacity: .7;
    transition: .3s;

    h3 {
        margin-bottom: 10px;
    }
`

const PlaidElectrics = styled(ModelSElectrics)`

`

const ModelSElectricsFeatures = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media (max-width: 850px) {
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-top: 20px;

        div {
            margin-bottom: 15px;
        }
    }
`
const PlaidElectricsFeatures = styled(ModelSElectricsFeatures)`

`