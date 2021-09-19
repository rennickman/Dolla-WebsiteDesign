import React from 'react';
import { FaBars } from 'react-icons/fa';

import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';


function Navbar({ toggle }) {

    return (
        <>
            <Nav>
                <NavbarContainer>
                    {/* Logo */}
                    <NavLogo to="/">dolla</NavLogo>

                    {/* Menu Icon */}
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>

                    {/* Links */}
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover">Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup">Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>

                    {/* Sign In Link */}
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};


export default Navbar;
