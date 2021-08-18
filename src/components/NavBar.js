import React from 'react';
import tw from "twin.macro";
import { animateScroll as scroll, Link as LinkScroll } from 'react-scroll';
import styled from "styled-components";

import { MenuIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom';

const NavLinks = styled(LinkScroll)`
  color: blue;
  &.active {
    color: black;
  }
`;

export default function NavBar() {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return(
        <div tw="fixed grid grid-cols-2 md:grid-cols-3 h-20 bg-green-900 w-full items-center z-50">
            <Link to="/">
                <h1 tw="font-display font-bold text-2xl text-white ml-5" onClick={toggleHome}>Reconnect</h1>
            </Link>
            <div tw="col-start-2 grid grid-cols-4 place-items-center invisible lg:visible">
                <NavLinks to="home" spy={true} smooth={true} duration={500} offset={-80} tw="cursor-pointer font-display font-semibold text-white">Home</NavLinks>
                <NavLinks to="how-to-play" spy={true} smooth={true} duration={500} offset={-80} tw="cursor-pointer font-display font-semibold text-white">How to Play</NavLinks>
                <NavLinks to="mission" spy={true} smooth={true} duration={500} offset={-80} tw="cursor-pointer font-display font-semibold text-white">Our Mission</NavLinks>
                <NavLinks to="team" spy={true} smooth={true} duration={500} offset={-80} tw="cursor-pointer font-display font-semibold text-white">Our Team</NavLinks>
            </div>
            <div tw="col-start-3 flex flex-row-reverse mr-5">
                <div tw="grid place-items-center lg:hidden">
                    <MenuIcon tw="w-8 h-8"/>
                </div>
                <div tw="invisible lg:visible">
                    <Link to="/login">
                        <button tw="m-2 bg-transparent font-bold text-white hover:text-black hover:bg-white py-2 px-4 rounded-xl">Login</button>
                    </Link>
                    <Link to="/signup">
                        <button tw="m-2 bg-green-700 rounded-xl py-2 px-4 hover:bg-green-800 font-bold text-white">Sign Up</button>
                    </Link>                    
                </div>
            </div>
        </div>
    );
};

    