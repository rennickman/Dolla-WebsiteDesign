import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';

import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';


function Navbar({ toggle }) {

    const [ scrollNav, setScrollNav] = useState(false);

    // Method to check how fast scroll is and hide navbar if its react scroll
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    // Call the change nav method everytime a scroll event occurs
    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);


    // Method to scroll to the top of the screen
    const toggleHome = () => {
        scroll.scrollToTop();
    };



    return (
        <>
            <IconContext.Provider value={{ color: '#fff'}} >
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        {/* Logo */}
                        <NavLogo to="/" onClick={toggleHome}>dolla</NavLogo>

                        {/* Menu Icon */}
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>

                        {/* Links */}
                        <NavMenu>
                            <NavItem>
                                <NavLinks
                                    to="about" smooth={true} duration={500} spy={true} exact="true" offset={-80}
                                >About</NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks
                                    to="discover" smooth={true} duration={500} spy={true} exact="true" offset={-80}
                                >Discover</NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks
                                    to="services" smooth={true} duration={500} spy={true} exact="true" offset={-80}
                                >Services</NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks
                                    to="signup" smooth={true} duration={500} spy={true} exact="true" offset={-80}
                                >Sign Up</NavLinks>
                            </NavItem>
                        </NavMenu>

                        {/* Sign In Link */}
                        <NavBtn>
                            <NavBtnLink to="/signin">Sign In</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};


export default Navbar;
