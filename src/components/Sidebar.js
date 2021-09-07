import React from 'react'
import tw from "twin.macro";
import { XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import styled from "styled-components";

const NavLinks = styled(LinkScroll)`
  color: black;
  &.active {
    color: white;
  }
`;

const MainContainer = tw.div`z-50 fixed flex flex-col min-h-screen w-full bg-green-400`;

export default function Sidebar({ isOpen, toggleOpen }) {
    return (
        <>
        {isOpen ? 
        
        <MainContainer onClick={ toggleOpen }>
            <div tw="flex flex-row-reverse h-10 cursor-pointer" onClick={ toggleOpen }>
                <XIcon tw="w-10 h-10 m-4"/>
            </div>
            <div tw="grid place-items-center mt-20">
                <div tw="grid place-items-center w-1/2 font-display font-semibold text-lg border-b-2 border-white">
                    <NavLinks tw="h-16 cursor-pointer" to="home" spy={true} smooth={true} duration={500} offset={-80} onClick={toggleOpen}>
                        Home
                    </NavLinks>
                    <NavLinks tw="h-16 cursor-pointer" to="how-to-play" spy={true} smooth={true} duration={500} offset={-80} onClick={toggleOpen}>
                        How to Play
                    </NavLinks>
                    <NavLinks tw="h-16 cursor-pointer" to="mission" spy={true} smooth={true} duration={500} offset={-80} onClick={toggleOpen}>
                        Our Mission
                    </NavLinks>
                    <NavLinks tw="h-16 cursor-pointer" to="team" spy={true} smooth={true} duration={500} offset={-80} onClick={toggleOpen}>
                        Our Team
                    </NavLinks>
                </div>
                <button tw="w-1/2 h-16 hover:bg-green-500 font-display font-bold text-lg m-4">
                    <Link to="/signup" tw="w-1/2">Sign Up</Link>
                </button>
                <button tw="w-1/2 h-16 hover:bg-green-500 font-display font-bold text-lg">
                    <Link to="/login">Login</Link>
                </button>
            </div>
        </MainContainer>
        : null}
        </>
    )
}

