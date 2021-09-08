import React, { useState } from 'react'
import tw from "twin.macro";
import { XIcon } from '@heroicons/react/outline';
import { Link, useHistory } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext"

const NavLinks = styled(LinkScroll)`
  color: black;
  &.active {
    color: white;
  }
`;

const MainContainer = tw.div`z-50 fixed flex flex-col min-h-screen w-full bg-green-400`;

export default function Sidebar({ isOpen, toggleOpen }) {

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

    return (
        <>
        {isOpen ? 
        
        <MainContainer onClick={ toggleOpen }>
            <div tw="flex flex-row-reverse h-10 cursor-pointer text-black" onClick={ toggleOpen }>
                <XIcon tw="w-10 h-10 m-4"/>
            </div>
            <div tw="grid place-items-center mt-20">
                <div tw="grid place-items-center w-1/2 font-display font-semibold text-lg border-b-2 border-white text-black">
                    <NavLinks to="home" spy={true} smooth={true} duration={500} offset={-80} tw="cursor-pointer h-16" onClick={toggleOpen}>Home</NavLinks>
                    <Link to="/landing-private" tw="cursor-pointer h-16" onClick={toggleOpen}>About</Link>
                    <Link to="/profile" tw="cursor-pointer h-16" onClick={toggleOpen}>Profile</Link>
                </div>
                <button tw="w-1/2 h-16 hover:bg-green-500 font-display font-bold text-lg m-4 text-black grid place-items-center" onClick={handleLogout}>
                    <h1 tw="w-1/2">Logout</h1>
                </button>
            </div>
        </MainContainer>
        : null}
        </>
    )
}

