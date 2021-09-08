import React, { useState } from 'react'
import tw from "twin.macro";
import { animateScroll as scroll, Link as LinkScroll } from 'react-scroll';
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

import logo from "../images/r-logo.svg";
import { LogoutIcon, MenuIcon } from '@heroicons/react/outline'

const NavLinks = styled(LinkScroll)`
  color: blue;
  &.active {
    color: black;
  }
`;

const MainContainer = tw.div`fixed grid grid-cols-2 md:grid-cols-3 h-20 bg-green-900 w-full items-center z-40`;

export default function NavBar({ toggleOpen }) {
    
    const [error, setError] = useState("")
    const { logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
      setError("")
  
      try {
        await logout()
        history.push("/")
      } catch {
        setError("Failed to log out")
      }
    }

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return(
        <MainContainer>
            <div tw="flex ml-2 h-20 w-64">
                <img tw="h-20 flex-1" src={logo} onClick={toggleHome}/>
            </div>
            <div tw="col-start-2 grid grid-cols-3 place-items-center invisible lg:visible">
                <NavLinks to="home" spy={true} smooth={true} duration={500} offset={-80} tw="cursor-pointer font-display font-semibold text-white">Home</NavLinks>
                <Link to="/landing-private" tw="cursor-pointer font-display font-semibold text-white hover:text-black">About</Link>
                <Link to="/profile" tw="cursor-pointer font-display font-semibold text-white hover:text-black">Profile</Link>
            </div>
            <div tw="col-start-3 flex flex-row-reverse mr-5">
                <div tw="grid place-items-center lg:hidden cursor-pointer text-white" onClick={toggleOpen}>
                    <MenuIcon tw="w-8 h-8"/>
                </div>
                <div tw="invisible lg:visible">
                    <button tw="m-2 bg-green-700 rounded-xl py-2 px-4 hover:bg-green-800 font-bold text-white flex flex-row place-items-center" onClick={handleLogout}>
                        <LogoutIcon tw="w-6 flex-none"/>
                        <h1 tw="font-display font-semibold ml-2 text-xs md:text-base lg:text-lg">Logout</h1>
                    </button>        
                </div>
            </div>
        </MainContainer>
    );
};

    