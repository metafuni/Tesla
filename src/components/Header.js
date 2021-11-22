import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { selectCars } from '../features/car/CarSlice'
import { selectMenu } from '../features/car/CarSlice'
import { togglerState, toggler } from '../features/toggle/toggleSlice'

import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';

function Header({ setBlur }) {

    const cars = useSelector(selectCars);
    const menu = useSelector(selectMenu);
    const value = useSelector(togglerState);
    const dispatch = useDispatch();

    return (
        <Container>
            <Link to="/">
                <Logo src="/images/logo.svg"></Logo>
            </Link>
            <CenterMenu show={value}>
                <Link to="/models" id="models">
                    <button>Model S*</button>
                </Link>
                {cars && cars.slice(1).map((item, index) => {
                    return (
                        <Link key={index} to="/" style={{cursor: 'not-allowed'}}>
                            {item.title}
                        </Link>
                    )
                })}
            </CenterMenu>
            <RightMenu>
                <Link to="/">
                    Shop
                </Link>
                <Link to="/">
                    Account
                </Link>
                <MenuButton to="/" onClick={() => { dispatch(toggler()); setBlur() }}>
                    Menu
                </MenuButton>
            </RightMenu>
            <BurgerNav show={value}>
                <CustomWrapper>
                    <CustomClose onClick={() => { dispatch(toggler()); setBlur() }} />
                </CustomWrapper>
                {menu && menu.map((item, index) => {
                    return (
                        <li key={index} to="/">
                            {item.title}
                        </li>
                    )
                })}
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    padding: 0 20px;
    flex: 1;
    justify-content: space-between;
    z-index: 1;
`

const Logo = styled.img`
    width: 155px;
    opacity: .8;
`

const CenterMenu = styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;
    filter: ${props => props.show ? 'blur(0)' : 'blur(4px)'};

    a {
        position: relative;
        text-decoration: none;
        padding: 0 12px;
    }
    #models {
        padding: 0;
    }
    #models:after {
        display: none;
    }
    a::after {
        content: "";
        position: absolute;
        top: -20%;
        left: 0;
        width: 100%;
        height: 140%;
        padding: 3px 0;
        background: grey;
        border-radius: 20px;
        opacity: 0;
        transition: .3s;
        z-index: -1;
    }
    a:hover:after {
        opacity: .15;
    }

    @media(max-width: 1200px) {
        display: none;
    }
`

const RightMenu = styled(CenterMenu)`
    > * {
        margin-right: 5px;
    }

    filter: ${props => props.show ? 'blur(4px)' : 'blur(0)'};

    @media(max-width: 1200px) {
        display: block;

        a:first-child, a:nth-child(2) {
            display: none;
        }

        a:last-child::after {
            content: "";
            position: absolute;
            top: -20%;
            left: 0;
            width: 100%;
            height: 140%;
            padding: 3px 0;
            background: rgba(0, 0, 0, .1);
            opacity: 1;
            filter: blur(4px);
            border-radius: 20px;
            transition: .3s;
            z-index: -1;
        }
    }
`

const MenuButton = styled.a`
    cursor: pointer;
    margin-right: 10px;

    @media(max-width: 1200px) {
        display: fixed;
    }
`

const BurgerNav = styled.ul`
    list-style: none;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    opacity: 0;
    z-index: 10;
    transform: translateX(100%);
    animation: ${props => props.show ? 'CloseMenu forwards .45s' : 'SlideMenu forwards .45s'};

    li {
        margin: 6px 0;
        padding: 7px 8px;
        font-weight: 600;   
        font-size: 15px;     
        border-radius: 12px;
        width: 100%;
        transition: .3s;
    }
    li a {
        text-decoration: none;
        width: 100%;
    }
    li:hover {
        background: rgba(20, 20, 20, .08);
        cursor: pointer;
    }
`

const CustomWrapper = styled.div`
    display: flex;
    justify-content: end;
    padding: 15px 10px;
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`