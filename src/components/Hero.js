import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import tw from "twin.macro";
import styled from "styled-components";

import { LocationMarkerIcon, EmojiHappyIcon, EmojiSadIcon, UserCircleIcon, PencilAltIcon, CheckCircleIcon, ClipboardCheckIcon, ClipboardListIcon, LogoutIcon } from '@heroicons/react/outline'
import monkeyPNG from "../images/monkey-cartoon.png";

// Need a container for the whole screen
const MainContainer = tw.div`select-none min-h-screen bg-white flex flex-col justify-items-center items-center`;

const Content = tw.div`bg-white w-full mt-10 grid lg:grid-cols-3 justify-items-center`;
// Need a container for the entire top bar
const TopContainer = tw.div`w-full mt-5 grid grid-cols-2 md:grid-cols-3`;
const LocationContainer = tw.div`flex flex-row place-self-center`;
const Location = tw.text`font-display font-semibold text-base pl-2 col-start-2`;

// Need a container for the companion and emotion scale
const MiddleContainer = tw.div`w-full`;

// Editing name
const EditButton = styled.button`
  ${tw`tracking-wide font-semibold bg-green-800 text-gray-100 w-full p-2 rounded-lg hover:bg-green-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6`}
  }
`;

// Submit Button
const SubmitButton = styled.button`
  ${tw`tracking-wide font-semibold bg-green-800 text-gray-100 w-full p-2 rounded-lg hover:bg-green-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6`}
  }
`;

// Welcome Back Greeting
const WelcomeContainer = tw.div`pt-5`;
const WelcomeText = tw.h2`font-display font-bold text-2xl`;

export default function Hero() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
    const [companionName, setCompanionName] = useState("")
    const [hasName, setHasName] = useState(false);

    async function handleLogout() {
      setError("")
  
      try {
        await logout()
        history.push("/")
      } catch {
        setError("Failed to log out")
      }
    }

    return(
        <MainContainer>
            <TopContainer>
                <h1 tw="font-display font-bold text-2xl sm:text-2xl md:text-3xl text-green-800 ml-5">Reconnect</h1>
                <LocationContainer>
                    <LocationMarkerIcon tw="h-6 w-6 text-red-600"></LocationMarkerIcon>
                    <Location>State College, PA</Location>
                </LocationContainer>
            </TopContainer>
            <WelcomeContainer>
                <WelcomeText>Welcome Back!</WelcomeText>
            </WelcomeContainer>
            <strong>User ID:</strong> {currentUser.uid}
            <Content>
                <div className="nav-list" tw="grid justify-items-start w-full h-full">
                    <div tw="bg-green-100 w-1/3 h-full grid">
                        <button tw="hover:border-r-4 hover:border-green-400 hover:bg-green-200 flex flex-row items-center w-full">
                            <ClipboardListIcon tw="w-6 ml-4"/>
                            <h1 tw="font-display font-semibold ml-2 text-lg">Get Activity</h1>
                        </button>
                        <Link to="/activity-log">
                        <button tw="hover:border-r-4 hover:border-green-400 hover:bg-green-200 flex flex-row items-center w-full h-full">
                            <ClipboardCheckIcon tw="w-6 ml-4"/>
                            <h1 tw="font-display font-semibold ml-2 text-lg">Activity Log</h1>
                        </button>
                        </Link>
                        <Link to="/profile">
                        <button tw="hover:border-r-4 hover:border-green-400 hover:bg-green-200 flex flex-row items-center w-full h-full">
                            <UserCircleIcon tw="w-6 ml-4"/>
                            <h1 tw="font-display font-semibold ml-2 text-lg">Profile</h1>
                        </button>
                        </Link>
                        <Link to="/about">
                            <button tw="hover:border-r-4 hover:border-green-400 hover:bg-green-200 flex flex-row items-center w-full h-full">
                                <UserCircleIcon tw="w-6 ml-4"/>
                                <h1 tw="font-display font-semibold ml-2 text-lg">About Us</h1>
                            </button>
                        </Link>
                        <button tw="hover:border-r-4 hover:border-green-400 hover:bg-green-200 flex flex-row items-center w-full" onClick={handleLogout}>
                            <LogoutIcon tw="w-6 ml-4"/>
                            <h1 tw="font-display font-semibold ml-2 text-lg">Logout</h1>
                            <strong>Error:</strong> {error}
                        </button>
                    </div>
                </div>
                <MiddleContainer>
                    <div tw="h-144 w-full bg-gradient-to-br from-blue-200 via-green-200 to-green-600 rounded-lg grid justify-items-center items-center">
                        <div tw="h-128 w-1/2 bg-gray-400 rounded-lg flex flex-col justify-items-center">
                            <div tw="w-full border-b border-gray-600 h-1/12 bg-white grid items-center">
                                <h1 tw="font-display font-semibold pl-4">Watson Assistant</h1>
                            </div>
                            <div tw="h-10/12 bg-transparent"/>
                            <div tw="w-full border-t border-gray-600 h-1/12 bg-white grid items-center">
                                <h1 tw="font-display pl-4 text-gray-400">Type something...</h1>
                            </div>
                        </div>
                    </div>
                </MiddleContainer>
                <div tw="flex items-end bg-white w-full">
                    <div className="companion-container" tw="flex flex-col w-full items-center">
                        <img src={monkeyPNG} tw="w-4/12" alt="companion-monkey"></img>
                            {hasName ? (
                                <div tw="flex flex-row h-10 w-1/2 my-5">
                                    <input tw="w-9/12 h-full rounded-lg text-center font-display font-semibold bg-transparent border-2 border-blue-300 placeholder-white text-base focus:outline-none focus:border-blue-600" 
                                    value={companionName} onChange={(e) => setCompanionName(e.target.value)} placeholder="Enter name here"></input>
                                    <div tw="pl-4 w-3/12">
                                        <SubmitButton type="submit" onClick={() => setHasName(!hasName)}>
                                            <CheckCircleIcon className="icon" />
                                        </SubmitButton>
                                    </div>
                                </div> 
                            ) : (
                                <div tw="flex flex-row place-items-center h-10 w-1/2 my-5">
                                    <div tw="w-9/12 text-center">
                                        <h1 tw="font-display w-full font-semibold text-base">{companionName}</h1>
                                    </div>
                                    <div tw="pl-4 w-3/12">
                                        <EditButton type="submit" onClick={() => setHasName(!hasName)}>
                                            <PencilAltIcon className="icon" />
                                        </EditButton>
                                    </div>
                                </div>
                            )}
                        <div tw="flex flex-col w-8/12 h-20">
                            <div tw="w-10/12 flex flex-row place-items-center h-1/2">
                                <EmojiHappyIcon tw="h-3/4 w-2/12 mr-2"/>
                                <EmojiSadIcon tw="invisible"/>
                                <div tw="bg-gradient-to-l from-green-600 to-red-600 border-black border h-5 rounded-xl w-10/12"/>
                            </div>
                            <div tw="w-10/12 flex flex-row h-1/2 place-items-center">
                                <div tw="grid justify-items-center items-center h-full w-2/12 mr-2">
                                    <h1 tw="font-display font-semibold text-lg">Level 1</h1>
                                </div>
                                <div tw="border-black border rounded-xl h-1/2 w-10/12 justify-items-center items-center overflow-hidden">
                                    <div tw="bg-green-600 rounded-l-xl grid justify-items-center items-center h-full">
                                        <h1 tw="tracking-wide text-sm font-display font-semibold text-white select-none">0 / 500 XP</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
        </MainContainer>
    );
};