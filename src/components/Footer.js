import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Footer() {
    return (
        <Container>
                <Link to="/">
                    Tesla &copy; 2021
                </Link>
                <Link to="/">
                    Privacy &amp; Legal
                </Link>
                <Link to="/">
                    Contact
                </Link>
                <Link to="/">
                    Careers
                </Link>
                <Link to="/">
                    News
                </Link>
                <Link to="/">
                    Engage
                </Link>
                <Link to="/">
                    Locations
                </Link>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    color: rgb(92, 93, 97);
    padding: 10px 0;
    font-size: 12px; 
    font-weight: bold;
    max-height: 10vh;

    a {
        text-decoration: none;
        padding: 0 12px;
        cursor: pointer;
        margin: 7px 2px;
        opacity: .85;
    }
    @media (max-width: 600px) {
        flex-direction: column;
    }`
