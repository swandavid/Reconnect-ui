import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import tw from "twin.macro";
import styled from "styled-components";
import Confetti from 'react-confetti'

import { LocationMarkerIcon, EmojiHappyIcon, EmojiSadIcon, UserCircleIcon, PencilAltIcon, CheckCircleIcon, ClipboardCheckIcon, ClipboardListIcon, LogoutIcon, UserGroupIcon } from '@heroicons/react/outline'
import monkeyPNG from "../images/monkey-cartoon.png";
import Rating from "./Rating";
import logo from "../images/reconnect-r-logo.jpg";

// Need a container for the whole screen
const MainContainer = tw.div`select-none min-h-screen bg-green-800 flex flex-col justify-items-center items-center`;

const Content = tw.div`bg-green-800 w-full mt-10 grid lg:grid-cols-3 justify-items-center`;
// Need a container for the entire top bar
const TopContainer = tw.div`w-full mt-5 grid grid-cols-2 md:grid-cols-3`;
const LocationContainer = tw.div`flex flex-row place-self-center`;
const Location = tw.text`font-display font-semibold text-base text-white pl-2 col-start-2`;

// Editing name
const EditButton = styled.button`
  ${tw`tracking-wide font-semibold bg-white text-green-800 w-full p-2 rounded-lg hover:bg-gray-200 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6`}
  }
`;

// Submit Button
const SubmitButton = styled.button`
  ${tw`tracking-wide font-semibold bg-white text-green-800 w-full p-2 rounded-lg hover:bg-gray-200 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6`}
  }
`;

// Welcome Back Greeting
const WelcomeContainer = tw.div`pt-5`;
const WelcomeText = tw.h2`font-display font-bold text-2xl text-white`;

// Confetti npm module
// https://www.npmjs.com/package/canvas-confetti

export default function Hero() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
    const [companionName, setCompanionName] = useState("PLEASE NAME ME")
    const [hasName, setHasName] = useState(false);
    const [taskCompleted, setTaskCompleted] = useState(false);
    
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
            { taskCompleted ? (
                <Confetti tw="w-full h-full" numberOfPieces="100" recycle="false" onConfettiComplete={() => {setTaskCompleted(false)}}/>
            ) : (null)}
            <TopContainer>
                <div tw="flex flex-row place-items-center ml-2">
                    <img tw="select-none h-12 border-2 border-white" src={logo}/>
                    <h1 tw="font-display font-bold text-2xl text-white ml-5 select-none">Reconnect</h1>
                </div>
                <LocationContainer>
                    <LocationMarkerIcon tw="h-6 w-6 text-red-600"></LocationMarkerIcon>
                    <Location>State College, PA</Location>
                </LocationContainer>
            </TopContainer>
            <WelcomeContainer>
                <WelcomeText>Welcome Back!</WelcomeText>
            </WelcomeContainer>
            <Content>
                <div tw="grid justify-items-start w-full h-full">
                    <div tw="bg-green-800 w-1/3 h-full grid text-white">
                        <button tw="hover:border-l-4 hover:border-white hover:bg-green-700 flex flex-row items-center w-full">
                            <ClipboardListIcon tw="w-6 ml-4"/>
                            <h1 tw="font-display font-semibold ml-2 text-lg">Get Activity</h1>
                        </button>
                        <Link to="/activity-log">
                        <button tw="hover:border-l-4 hover:border-white hover:bg-green-700 flex flex-row items-center w-full h-full">
                            <ClipboardCheckIcon tw="w-6 ml-4"/>
                            <h1 tw="font-display font-semibold ml-2 text-lg">Activity Log</h1>
                        </button>
                        </Link>
                        <Link to="/profile">
                        <button tw="hover:border-l-4 hover:border-white hover:bg-green-700 flex flex-row items-center w-full h-full">
                            <UserCircleIcon tw="w-6 ml-4"/>
                            <h1 tw="font-display font-semibold ml-2 text-lg">Profile</h1>
                        </button>
                        </Link>
                        <Link to="/about">
                            <button tw="hover:border-l-4 hover:border-white hover:bg-green-700 flex flex-row items-center w-full h-full">
                                <UserGroupIcon tw="w-6 ml-4"/>
                                <h1 tw="font-display font-semibold ml-2 text-lg">About Us</h1>
                            </button>
                        </Link>
                        <button tw="hover:border-l-4 hover:border-white hover:bg-green-700 flex flex-row items-center w-full h-full" onClick={handleLogout}>
                            <LogoutIcon tw="w-6 ml-4"/>
                            <h1 tw="font-display font-semibold ml-2 text-lg">Logout</h1>
                        </button>
                    </div>
                </div>
                <div tw="h-144 w-full bg-gradient-to-br from-blue-200 via-green-200 to-green-600 rounded-lg grid justify-items-center items-center">
                    <button tw="bg-gray-300 hover:bg-gray-500 text-white font-display font-semibold rounded-xl px-4 py-2" onClick={() => {setTaskCompleted(true)}}>Show Activity Log</button>
                    <div tw="h-128 w-3/4 md:w-1/2 sm:w-1/2 lg:w-full xl:w-2/3 bg-gray-400 rounded-lg flex flex-col justify-items-center">
                        <div tw="w-full border-b border-gray-600 h-1/12 bg-white grid items-center">
                            <h1 tw="font-display font-semibold pl-4">Watson Assistant</h1>
                        </div>
                        <div tw="h-10/12 bg-transparent grid place-items-center">
                            <Rating/>
                        </div>
                        <div tw="w-full border-t border-gray-600 h-1/12 bg-white grid items-center">
                            <h1 tw="font-display pl-4 text-gray-400">Type something...</h1>
                        </div>
                    </div>
                </div>
                <div tw="flex items-end bg-green-800 w-full">
                    <div className="companion-container" tw="flex flex-col w-full items-center">
                        <img src={monkeyPNG} tw="w-4/12" alt="companion-monkey" onClick={() => {setTaskCompleted(false)}}></img>
                            {hasName ? (
                                <div tw="flex flex-row place-items-center h-10 w-1/2 my-5">
                                    <div tw="w-9/12 text-center">
                                        <h1 tw="font-display w-full font-semibold text-base text-white">{companionName}</h1>
                                    </div>
                                    <div tw="pl-4 w-3/12">
                                        <EditButton type="submit" onClick={() => setHasName(!hasName)}>
                                            <PencilAltIcon className="icon" />
                                        </EditButton>
                                    </div>
                                </div>
                            ) : (
                                <div tw="flex flex-row h-10 w-1/2 my-5">
                                    <input tw="w-9/12 h-full rounded-lg text-center text-gray-400 font-display font-semibold bg-transparent border-2 border-white placeholder-white text-base focus:outline-none focus:border-blue-600" 
                                    value={companionName} onChange={(e) => setCompanionName(e.target.value)} placeholder="Enter name here"></input>
                                    <div tw="pl-4 w-3/12">
                                        <SubmitButton type="submit" onClick={() => setHasName(!hasName)}>
                                            <CheckCircleIcon className="icon"/>
                                        </SubmitButton>
                                    </div>
                                </div>
                            )}
                        <div tw="flex flex-col w-8/12 h-20 text-white">
                            <div tw="w-10/12 flex flex-row h-1/2 text-white">
                                <EmojiHappyIcon tw="h-3/4 self-center w-10"/>
                                <EmojiSadIcon tw="invisible"/>
                                <div tw="border-white border bg-white rounded-xl self-center w-full h-1/2 overflow-hidden">
                                    <div tw="bg-gradient-to-r from-red-400 to-green-600 w-full h-full"/>
                                </div>
                            </div>
                            <div tw="w-10/12 flex flex-row h-1/2 place-items-center">
                                <div tw="grid justify-items-center items-center h-full w-2/12 mr-2">
                                    <h1 tw="font-display font-semibold text-lg">Level 1</h1>
                                </div>
                                <div tw="border-white border rounded-xl h-1/2 w-10/12 justify-items-center items-center overflow-hidden">
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