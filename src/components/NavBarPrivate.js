import React from 'react';
import tw from "twin.macro";
import { animateScroll as scroll, Link as LinkScroll } from 'react-scroll';
import styled from "styled-components";
import logo from "../images/r-logo.svg";

import { MenuIcon, HomeIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom';

const NavLinks = styled(LinkScroll)`
  color: blue;
  &.active {
    color: black;
  }
`;

const MainContainer = tw.div`fixed grid grid-cols-2 md:grid-cols-3 h-20 bg-green-900 w-full items-center z-40`;

export default function NavBar({ toggleOpen }) {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return(
        <MainContainer>
            <div tw="flex ml-2 h-20 w-64">
                <img tw="h-20 flex-1" src={logo} onClick={toggleHome}/>
            </div>
            <div tw="col-start-2 grid grid-cols-3 place-items-center invisible lg:visible">
                <NavLinks to="home" spy={true} smooth={true} duration={500} offset={-80} tw="cursor-pointer font-display font-semibold text-white">About Us</NavLinks>
                <NavLinks to="how-to-play" spy={true} smooth={true} duration={500} offset={-80} tw="cursor-pointer font-display font-semibold text-white">How to Play</NavLinks>
                <NavLinks to="team" spy={true} smooth={true} duration={500} offset={-80} tw="cursor-pointer font-display font-semibold text-white">Our Team</NavLinks>
            </div>
            <div tw="col-start-3 flex flex-row-reverse mr-5">
                <div tw="grid place-items-center lg:hidden cursor-pointer" onClick={toggleOpen}>
                    <MenuIcon tw="w-8 h-8"/>
                </div>
                <div tw="invisible lg:visible">
                    <Link to="/home">
                    <button tw="m-2 bg-transparent font-bold text-white hover:text-black hover:bg-green-600 hover:bg-opacity-25 py-2 px-2 rounded-xl">
                        <HomeIcon tw="h-8 w-8"/>                
                    </button>   
                    </Link>              
                </div>
            </div>
        </MainContainer>
    );
};

    