import React from 'react';
import tw from "twin.macro";
import { MenuIcon } from '@heroicons/react/outline'
import { ReactComponent as ReconnectLpRight } from '../images/reconnect-lp-right.svg'; //ImportingSVG

import NavBar from 'components/NavBar';
import MainLanding from 'components/MainLanding';
import HowToPlay from 'components/HowToPlay';
import Mission from 'components/Mission';
import TeamLanding from 'components/TeamLanding';
import Footer from 'components/Footer';

const Landing = (props) => {

    const {
    } = props;

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
    
export default Landing;
    