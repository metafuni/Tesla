import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectCars } from '../../features/car/CarSlice'

function TravelSection() {
    const travels = useSelector(selectCars)[0].travelSection;
    const firstitem = travels.items[0]

    const [travelselected, setTravelSelected] = useState(firstitem.select);
    // const [distanceselected, setDistanceselected] = useState(firstitem.distance);
    const [routeselected, setRouteselected] = useState(firstitem.route)

    const findRoute = () => {
        for (const item in travels.items) {
            if (travels.items[item].select === travelselected) {
                // setDistanceselected(travels.items[item].distance)
                setRouteselected(travels.items[item].route)
            }
        }
    }

    useEffect(() => findRoute())
 
    return (
        <TravelContainer>
            <TravelIntro>
                <h1>{travels.title}</h1>
                <p>{travels.description}</p>
            </TravelIntro>

            <TravelImageContainer route={travelselected}>
                <div style={{ background: 'transparent', width: '100%' }}>
                    <TravelImage src={`./images/${travelselected}.svg`} path={routeselected} />
                    <div></div>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1225 562" fill="none" style={{ opacity: '.6', zIndex: '0', transform: 'translate(0, -65px) scale(1.22)' }}>
                        <path d={routeselected} stroke="#E82127" strokeWidth="3" />
                    </svg>
                </div>
            </TravelImageContainer>

            <TravelText>
                {travels.items.map(el => (
                    <TravelItem onClick={() => { setTravelSelected(el.select) }}
                        key={el.title}
                        style={travelselected === el.select ?
                            { outline: '3px solid black', transform: 'scale(1.015)', opacity: '1' } :
                            { borderTop: '3px solid black' }}
                    >
                        <div>
                            <h3>{el.title}</h3>
                            {/* <h2>{el.distance}</h2> */}
                        </div>
                    </TravelItem>
                ))}
            </TravelText>
        </TravelContainer>
    )
}

export default TravelSection

const TravelContainer = styled.div`
    background: white;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0 70px 0;

    video {
        max-width: 100vw;
        height: 35vw;
        min-height: 300px;
    }
`

const TravelIntro = styled.div`
    max-width: 1200px;
    padding: 30px;

    h1 {
        font-size: 28px;
        margin-bottom: 20px;
    }

    max-width: 900px;
`

const TravelText = styled.div`
    display: flex;
    max-width: 1000px;
    min-height: 220px;
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
const TravelImageContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 1000px;
    height: 480px;
    width: 1225px;
    height: 562px;
    background-image: url(./images/map_${props => props.route}_bg@2x.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    > div div {
        opacity: 0;
        @property --num {
            syntax: "<integer>";
            initial-value: 0;
            inherits: false;
          }

            animation: counter 5s infinite ease-in-out;
            counter-reset: num var(--num);
            font: 800 40px system-ui;
            padding: 2rem;

            @keyframes counter {
                from {
                  --num: 0;
                }
                to {
                  --num: 178;
                }
            }
    }

    > div div::after {
        content: counter(num)' miles';
        font-size: 20px;
      }

    @keyframes move {
        0% {
            motion-offset: 0%;
            offset-distance: 0%;
        }
        100% {
            motion-offset: 100%;
            offset-distance: 100%;
        }
    }

    @media (max-width: 550px) {
        height: 30vh;
    }

    @media (max-width: 850px) {
        height: 50vh;
    }
`

const TravelImage = styled.img`
    position: absolute;
    top: 3px;
    left: -113px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid black;
    background: transparent;
    motion-path: path('${props => props.path}');
    offset-path: path('${props => props.path}');
    animation: move 5s infinite ease-in-out;
`

const TravelItem = styled.div`
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