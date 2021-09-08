import React, { useState } from "react"
import tw from "twin.macro";
import { Link } from "react-router-dom"
import styled from "styled-components";
import Confetti from 'react-confetti'
import { Element } from 'react-scroll';

import { EmojiHappyIcon, EmojiSadIcon, CheckCircleIcon } from '@heroicons/react/outline'
import reconnectCompanion from "../images/hero-companion.svg";
import Pencil from "../images/pencil.png";
import ActivityLog from "./ActivityLog";
import NavBarHero from "./NavBarHero";
import ChatButton from "../images/chat-button.svg";
import EmojiStraightIcon from "../images/emoji-straight-face.svg";
import SidebarHero from "./SidebarHero";

// Need a container for the whole screen
const MainContainer = tw.div`w-full overflow-hidden bg-blue-200 text-green-800 flex flex-col justify-items-center items-center`;

// Need a container for the entire top bar
const TopContainer = tw.div`w-full mt-5 grid grid-cols-2 md:grid-cols-3`;

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
const WelcomeText = tw.h2`font-display font-bold text-3xl`;

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
    const [companionName, setCompanionName] = useState("Name Me!")
    const [hasName, setHasName] = useState(false);
    const [taskCompleted, setTaskCompleted] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showingChat, setShowingChat] = useState(false);
    
    const [isOpen, setIsOpen] = useState(false)

    const toggleTask = () => {
        setTaskCompleted(true)
    }

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    async function chatbot(e) {
        e.preventDefault()
    
        try {
            setError("")
            setLoading(true)
            // old integration id "0bca7870-6bd7-4d80-8a56-6635dcf3b431"
            await document.getElementById('chatElement');
            const element = document.getElementById('chatElement');
            window.watsonAssistantChatOptions = {
                integrationID: "11347dad-3d44-419d-926b-40aeb23fb2b2",
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
                    let activitycategory = "";
                    function handler(event) {
                        console.log(event.type); // You can also manipulate context here.
                        console.log(event.data); // You can also manipulate input here. Maybe filter private data?
                        activitycategory = event.data.history.label;
                        if(activitycategory === "Recommended"){
                            //call a function to get recommended
                        }
                      }
                      function handler2(event) {
                        const generic = event.data.output.generic;
                        console.log(generic);
                        for (let i = 0; i < generic.length; i++) {
                          const item = generic[1]; //&& item.response_type === "options"
                          if (activitycategory === "Recommended" ) {
                            for(let i = 0; i < 3; i++){
                                item.options[i].label = "go outside";
                            } 
                            // Save changes made to this message so it will be re-rendered the same way if session history is enabled.
                            event.updateHistory = true;
                          }
                        }
                      }
                      instance.on({ type: "pre:receive", handler: handler2 });
                    instance.on({ type: "send", handler: handler });
                
                    // 30 seconds later, unsubscribe from listening to "send" events
                    setTimeout(function(){
                    instance.off({ type: "send", handler: handler});
                    instance.destroySession();
                    }, 30000);
                
                    // Actually render the web chat.
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
        <Element name="home" tw="w-full">
        <MainContainer>
            { taskCompleted ? (
                <Confetti tw="w-full h-full" numberOfPieces="100" recycle="false" onConfettiComplete={() => {setTaskCompleted(false)}}/>
            ) : (null)}
            <SidebarHero isOpen={isOpen} toggleOpen={toggleOpen}/>
            <NavBarHero toggleOpen={toggleOpen}/>
            <div tw="grid place-items-center py-2">
                <WelcomeText>Welcome Back!</WelcomeText>
            </div>
            <div tw="w-full h-full grid lg:grid-cols-2 place-items-center">
                <div tw="lg:w-10/12 lg:h-10/12 h-128 w-full bg-gradient-to-br from-blue-200 via-green-200 to-green-600 z-0 rounded-xl relative grid place-items-center">
                    {
                        showingChat ? (
                            null
                        ) : (<img tw="w-1/2 h-3/4 z-10 cursor-pointer hover:opacity-75" src={ChatButton} onClick={chatbot}/>)
                    }
                    <div id="chatElement" tw="absolute h-10/12 w-full md:w-10/12"></div>
                </div>
                <div tw="w-full h-full py-10">
                    <div className="companion-container" tw="flex flex-col w-full items-center">
                        <img src={reconnectCompanion} tw="w-1/2" alt="companion"></img>
                            {hasName ? (
                                <div tw="flex flex-row place-items-center h-10 w-1/2 my-5">
                                    <div tw="w-9/12 text-center">
                                        <h1 tw="font-display w-full font-semibold text-base text-green-800">{companionName}</h1>
                                    </div>
                                    <div tw="pl-4 w-3/12">
                                        <EditButton type="submit" onClick={() => setHasName(!hasName)}>
                                            <img src={Pencil} tw="w-4"/>
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
                                    <img src={EmojiStraightIcon} tw="self-center w-1/3 hidden"/>
                                    <EmojiSadIcon tw="self-center w-1/3 hidden"/>
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
                                        <h1 tw="tracking-wide text-sm font-display font-semibold text-white">0 / 500 XP</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div tw="w-full grid place-items-center">
                <div tw="w-full h-20 bg-green-900 grid place-items-center font-display font-semibold text-2xl text-white">Claim XP!</div>
                <ActivityLog toggleTask={toggleTask}/>
            </div>
        </MainContainer>
        </Element>
    );
};