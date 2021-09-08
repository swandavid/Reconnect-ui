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
                    <NavLinks to="home" spy={true} smooth={true} duration={500} offset={-80} onClick={toggleOpen} tw="cursor-pointer h-16">About Us</NavLinks>
                    <NavLinks to="how-to-play" spy={true} smooth={true} duration={500} offset={-80} onClick={toggleOpen} tw="cursor-pointer h-16">How to Play</NavLinks>
                    <NavLinks to="team" spy={true} smooth={true} duration={500} offset={-80} onClick={toggleOpen} tw="cursor-pointer h-16">Our Team</NavLinks>
                </div>
                <button tw="w-1/2 h-16 hover:bg-green-500 font-display font-bold text-lg m-4">
                    <Link to="/home" tw="w-1/2">Home</Link>
                </button>
            </div>
        </MainContainer>
        : null}
        </>
    )
}

