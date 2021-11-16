import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'

function Footer() {
    return (
        <FooterContainer>
            <ul>
                <Link to=""><li>Tesla © 2021</li></Link>
                <Link to=""><li>Privacy &amp; Legal</li></Link>
                <Link to=""><li>Contact</li></Link>
                <Link to=""><li>Careers</li></Link>
                <Link to=""><li>News</li></Link>
                <Link to=""><li>Engage</li></Link>
                <Link to=""><li>Locations</li></Link>
            </ul>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    width: 100vw;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-size: 13px;

        @media (max-width: 750px) {
            flex-direction: column;
        }

        li {
            margin: 0 .75rem;

            @media (max-width: 750px) {
                margin: .35rem .75rem;
        }
    }
`