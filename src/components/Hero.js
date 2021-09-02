import React, { useState } from "react"
import tw from "twin.macro";
import { Link } from "react-router-dom"
import styled from "styled-components";
import Confetti from 'react-confetti'

import { LocationMarkerIcon, EmojiHappyIcon, EmojiSadIcon, UserCircleIcon, PencilAltIcon, CheckCircleIcon, ClipboardCheckIcon, ClipboardListIcon, LogoutIcon, UserGroupIcon } from '@heroicons/react/outline'
import reconnectCompanion from "../images/reconnect-character.svg";
import Rating from "./Rating";
import HomeSideBar from "./HomeSideBar";
import logo from "../images/reconnect-r-logo.jpg";

// Need a container for the whole screen
const MainContainer = tw.div`select-none min-h-screen bg-blue-200 text-green-800 flex flex-col justify-items-center items-center`;

const Content = tw.div`w-full mt-10 grid lg:grid-cols-3 justify-items-center`;
// Need a container for the entire top bar
const TopContainer = tw.div`w-full mt-5 grid grid-cols-2 md:grid-cols-3`;
const LocationContainer = tw.div`flex flex-row place-self-center`;
const Location = tw.text`font-display self-center font-semibold text-xs md:text-base pl-2 col-start-2`;

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
const WelcomeText = tw.h2`font-display font-bold text-2xl`;

// Important Links for Embedding Chatbot:
/*
https://cloud.ibm.com/docs/assistant?topic=assistant-deploy-web-chat
https://cloud.ibm.com/docs/assistant?topic=assistant-deploy-web-chat#deploy-web-chat-snippet
https://cloud.ibm.com/docs/assistant?topic=assistant-web-chat-config
https://web-chat.global.assistant.watson.cloud.ibm.com/docs.html?to=tutorials-launcher
https://web-chat.global.assistant.watson.cloud.ibm.com/docs.html?to=tutorials-launcher
https://www.javascripttutorial.net/javascript-dom/javascript-queryselector/
*/


export default function Hero() {
    const [companionName, setCompanionName] = useState("PLEASE NAME ME")
    const [hasName, setHasName] = useState(false);
    const [taskCompleted, setTaskCompleted] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showingChat, setShowingChat] = useState(false);

    async function chatbot(e) {
        e.preventDefault()
    
        try {
            setError("")
            setLoading(true)

            await document.getElementById('chatElement');
            const element = document.getElementById('chatElement');

            window.watsonAssistantChatOptions = {
                integrationID: "0bca7870-6bd7-4d80-8a56-6635dcf3b431",
                region: "us-south",
                serviceInstanceID: "ca70ca9a-7e6e-40bd-a663-c3bed2f8d8db",
        
                // Provide the custom element.
                element: element,
                // Hide the close button since we want it always open.
                hideCloseButton: true,
                // Hide the default launcher.
                showLauncher: false,
                // Make the window open by default.
                openChatByDefault: true,
                    
                onLoad: function(instance) {
                    instance.render();
                }
            };
            setShowingChat(true);
            setTimeout(function(){const t=document.createElement('script');t.src='https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js'; document.head.appendChild(t);});
        } catch {
          setError("Failed to log in")
        }
    
        setLoading(false)
      }

    return(
        <MainContainer>
            { taskCompleted ? (
                <Confetti tw="w-full h-full" numberOfPieces="100" recycle="false" onConfettiComplete={() => {setTaskCompleted(false)}}/>
            ) : (null)}
            <TopContainer>
                <div tw="flex flex-row place-items-center ml-2">
                    <img tw="select-none h-12 border-2 border-green-800" src={logo}/>
                    <h1 tw="font-display font-bold text-2xl ml-5 select-none">Reconnect</h1>
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
                <HomeSideBar/>
                <div tw="h-144 w-full bg-gradient-to-br from-blue-200 via-green-200 to-green-600 rounded-lg z-0 relative grid place-items-center">
                    {
                        showingChat ? (
                            null
                        ) : (<button tw="m-2 bg-white font-bold text-green-800 hover:text-black hover:bg-gray-200 py-10 px-8 rounded-xl z-10" onClick={chatbot}>Talk with the Chatbot to get an activity</button>)
                    }
                    <div id="chatElement" tw="absolute h-full w-full lg:w-3/4"></div>
                </div>
                <div tw="w-full h-full">
                    <div className="companion-container" tw="flex flex-col w-full items-center">
                        <img src={reconnectCompanion} tw="w-1/2" alt="companion-monkey" onClick={() => {setTaskCompleted(false)}}></img>
                            {hasName ? (
                                <div tw="flex flex-row place-items-center h-10 w-1/2 my-5">
                                    <div tw="w-9/12 text-center">
                                        <h1 tw="font-display w-full font-semibold text-base text-green-800">{companionName}</h1>
                                    </div>
                                    <div tw="pl-4 w-3/12">
                                        <EditButton type="submit" onClick={() => setHasName(!hasName)}>
                                            <PencilAltIcon className="icon" />
                                        </EditButton>
                                    </div>
                                </div>
                            ) : (
                                <div tw="flex flex-row h-10 w-1/2 my-5">
                                    <input tw="w-9/12 h-full rounded-lg text-center text-gray-800 font-display font-semibold bg-transparent border-2 border-white placeholder-white text-base focus:outline-none focus:border-blue-600" 
                                    value={companionName} onChange={(e) => setCompanionName(e.target.value)} placeholder="Enter name here"></input>
                                    <div tw="pl-4 w-3/12">
                                        <SubmitButton type="submit" onClick={() => setHasName(!hasName)}>
                                            <CheckCircleIcon className="icon"/>
                                        </SubmitButton>
                                    </div>
                                </div>
                            )}
                        <div tw="flex flex-col items-center w-full px-5 h-1/2 text-black">
                            <div tw="w-3/4 flex flex-row h-1/2 py-5">
                                <div tw="w-1/3 h-1/2 grid place-items-center">
                                    <EmojiHappyIcon tw="self-center w-1/3"/>
                                </div>
                                <div tw="border-white border rounded-xl self-center w-full h-5 overflow-hidden">
                                    <div tw="bg-gradient-to-r from-red-400 to-green-600 w-full h-full"/>
                                </div>
                            </div>
                            <div tw="w-3/4 flex flex-row h-1/2 place-items-center">
                                <div tw="grid justify-items-center items-center h-full w-3/12 mr-2">
                                    <h1 tw="font-display font-semibold text-base lg:text-lg">Level 1</h1>
                                </div>
                                <div tw="border-white border rounded-xl h-1/4 w-9/12 justify-items-center items-center overflow-hidden">
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