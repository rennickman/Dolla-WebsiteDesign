import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

import { FooterContainer, FooterLinkItems, FooterLinksContainer, FooterLink, FooterLinksWrapper, 
    FooterLinkTitle, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements';




const Footer = () => {

// Method to scroll to the top of the screen
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                {/* First column local  links */}
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                    <FooterLink to="/signin">How it works</FooterLink>
                                    <FooterLink to="/signin">Testimonials</FooterLink>
                                    <FooterLink to="/signin">Careers</FooterLink>
                                    <FooterLink to="/signin">Investors</FooterLink>
                                    <FooterLink to="/signin">Terms of Service</FooterLink>
                            </FooterLinkItems>

                            <FooterLinkItems>
                                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                    <FooterLink to="/">Contact</FooterLink>
                                    <FooterLink to="/">Support</FooterLink>
                                    <FooterLink to="/">Destinations</FooterLink>
                                    <FooterLink to="/">Sponsorships</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>

                        {/* Second column local links */}
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Videos</FooterLinkTitle>
                                    <FooterLink to="/">Submit Video</FooterLink>
                                    <FooterLink to="/">Ambassadors</FooterLink>
                                    <FooterLink to="/">Agency</FooterLink>
                                    <FooterLink to="/">Influencer</FooterLink>
                            </FooterLinkItems>

                            <FooterLinkItems>
                                <FooterLinkTitle>Social Media</FooterLinkTitle>
                                    <FooterLink to="/">Instagram</FooterLink>
                                    <FooterLink to="/">Facebook</FooterLink>
                                    <FooterLink to="/">Youtube</FooterLink>
                                    <FooterLink to="/">Twitter</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>

                    <SocialMedia>
                        <SocialMediaWrap>
                            {/* Logo */}
                            <SocialLogo to="/" onClick={toggleHome}>
                                dolla
                            </SocialLogo>

                            {/* Rights */}
                            <WebsiteRights>
                                dolla {new Date().getFullYear()} All rights reserved.
                            </WebsiteRights>

                            {/* Social media links */}
                            <SocialIcons>
                                <SocialIconLink href="/" traget="_blank" aria-label="Facebook" >
                                    <FaFacebook />
                                </SocialIconLink>

                                <SocialIconLink href="/" traget="_blank" aria-label="Instagram" >
                                    <FaInstagram />
                                </SocialIconLink>

                                <SocialIconLink href="/" traget="_blank" aria-label="Youtube" >
                                    <FaYoutube />
                                </SocialIconLink>

                                <SocialIconLink href="/" traget="_blank" aria-label="Twitter" >
                                    <FaTwitter />
                                </SocialIconLink>

                                <SocialIconLink href="/" traget="_blank" aria-label="Linkedin" >
                                    <FaLinkedin />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    );
};

export default Footer;
