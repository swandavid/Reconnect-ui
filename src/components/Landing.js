import React from 'react';
import tw from "twin.macro";
import { MenuIcon } from '@heroicons/react/outline'
import { ReactComponent as ReconnectLpRight } from '../images/reconnect-lp-right.svg'; //ImportingSVG

import NavBar from './NavBar';
import MainLanding from './MainLanding';
import HowToPlay from './HowToPlay';
import Mission from './Mission';
import TeamLanding from './TeamLanding';
import Footer from './Footer';

export default function Landing() {

    return(
        <div tw="flex flex-col justify-items-center items-center">
            <NavBar/>
            <MainLanding/>
            <HowToPlay/>
            <Mission/>
            <TeamLanding/>
            <Footer/>
        </div>
    );
};
    