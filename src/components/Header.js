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
                    <MenuButton to="/" onClick={() => {setOpenMenu(true)}}>
                        Menu
                    </MenuButton>
                </RightMenu>
                <BurgerNav show={openMenu}>
                    <CustomWrapper>
                        <CustomClose onClick={() => {setOpenMenu(false)}} />
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
        text-decoration: none;
        padding: 0 12px;
    }

    @media(max-width: 640px) {
        display: none;
    }
`

const RightMenu = styled(CenterMenu)`
    > * {
        margin-right: 5px;
    }
`

const MenuButton = styled.div`
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
        padding: 15px 0;
        font-weight: 600;   
        font-size: 15px;     
    }
    li a {
        text-decoration: none;
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