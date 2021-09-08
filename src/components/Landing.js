import React, { useState } from 'react';
import tw from "twin.macro";
import { Element } from 'react-scroll';

import NavBar from './NavBar';
import MainLanding from './MainLanding';
import HowToPlay from './HowToPlay';
import Mission from './Mission';
import TeamLanding from './TeamLanding';
import Footer from './Footer';
import Sidebar from './Sidebar';

const MainContainer = tw.div`flex flex-col justify-items-center items-center w-full overflow-hidden`;

export default function Landing() {

    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    return(
        <MainContainer>
            <Sidebar isOpen={isOpen} toggleOpen={toggleOpen}/>
            <NavBar toggleOpen={toggleOpen}/>
            <Element name="home" tw="w-full">
                <MainLanding/>
            </Element>
            <Element name="how-to-play" tw="w-full">
                <HowToPlay/>
            </Element>
            <Element name="team" tw="w-full">
                <TeamLanding/>
            </Element>
            <Footer/>
        </MainContainer>
    );
};
    