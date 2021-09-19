import React, { useState } from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroBtnWrapper, HeroP, ArrowForward, ArrowRight } from './HeroElements';

import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';


const HeroSection = () => {

    const [ hover, setHover ] = useState(false);

    // Method to toggle the over status
    const onHover = () => {
        setHover(!hover);
    }


    return (
        <HeroContainer>
            {/* Video */}
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>

            {/* Info */}
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>
                    Sign up for a new account today and revieve $250 in credit towards your next payment.
                </HeroP>

                {/* Sign up button */}
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true" >
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};


export default  HeroSection;
