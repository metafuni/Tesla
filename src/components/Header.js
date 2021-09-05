import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';

function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <Container>
            <Router>
                <Link to="/">
                    <Logo src="/images/logo.svg"></Logo>
                </Link>
                <CenterMenu>
                    <Link to="/">
                        Model S
                    </Link>
                    <Link to="/">
                        Model 3
                    </Link>
                    <Link to="/">
                        Model X
                    </Link>
                    <Link to="/">
                        Model Y
                    </Link>
                    <Link to="/">
                        Solar Roof
                    </Link>
                    <Link to="/">
                        Solar Panels
                    </Link>
                </CenterMenu>
                <RightMenu>
                    <Link to="/">
                        Shop
                    </Link>
                    <Link to="/">
                        Account
                    </Link>
                    <MenuButton to="/" onClick={() => { setOpenMenu(true) }}>
                        Menu
                    </MenuButton>
                </RightMenu>
                <BurgerNav show={openMenu}>
                    <CustomWrapper>
                        <CustomClose onClick={() => { setOpenMenu(false) }} />
                    </CustomWrapper>
                    <li>
                        <Link to="/">
                            Existing Inventory
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Used Inventory
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Trade-In
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Test Drive
                        </Link>
                    </li><li>
                        <Link to="/">
                            Cybertruck
                        </Link>
                    </li><li>
                        <Link to="/">
                            Roadster
                        </Link>
                    </li><li>
                        <Link to="/">
                            Semi
                        </Link>
                    </li><li>
                        <Link to="/">
                            Charging
                        </Link>
                    </li><li>
                        <Link to="/">
                            Powerwall
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Commercial Energy
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Utilities
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Find Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Support
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Investor Relations
                        </Link>
                    </li>
                </BurgerNav>
            </Router>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
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
    
    a {
        position: relative;
        text-decoration: none;
        padding: 0 12px;
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
`

const MenuButton = styled.a`
    cursor: pointer;
    margin-right: 10px;
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
    animation: ${props => props.show ? 'SlideMenu forwards .45s' : 'CloseMenu forwards .45s'};

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