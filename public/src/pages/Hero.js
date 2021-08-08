import React from 'react';
import tw from "twin.macro";
import cartoonGoat from '../images/cartoon-goat.svg';
import rLogo from "../images/reconnect-r-logo.jpg";
import user from "../images/fi-user.svg";
import sadFace from "../images/fi-frown.svg";
import happyFace from "../images/fi-smile.svg";
import { LocationMarkerIcon, EmojiHappyIcon, EmojiSadIcon, UserCircleIcon } from '@heroicons/react/outline'
import mapTag from "../images/fi-map-pin.svg";

// Need a container for the whole screen
const MainContainer = tw.div`min-h-screen bg-gradient-to-b from-green-200 to-green-800 flex flex-col`;

// Need a container for the entire top bar
const TopContainer = tw.div`mt-5 grid grid-cols-3 justify-items-center`;
const LogoContainer = tw.div`flex items-start justify-self-start pl-5`;
const TopLogo = tw.img`select-none w-20 h-20`;
const TaskContainer = tw.div`flex flex-row items-center`;
const LocationContainer = tw.div``;
const Location = tw.text`select-none font-display font-semibold text-base p-2`;
const LogoutAndProfile = tw.div`flex flex-row flex-shrink place-items-center justify-self-end pr-5`;

// Leveling Layout
const LevelContainer = tw.div`flex flex-row place-items-center`;
const LevelLabel = tw.text`select-none flex-none font-display font-semibold text-lg pr-3`;
const XPBar = tw.div`bg-green-900 border-black border rounded-xl w-20 h-3`;

// Logout
const LogoutContainer = tw.div`justify-self-center`;
const Logout = tw.button`select-none text-lg bg-transparent hover:bg-green-700 text-black font-semibold font-display hover:text-white py-2 px-4 border border-black hover:border-transparent rounded`;

// Need a container for the companion and emotion scale
const MiddleContainer = tw.div`flex flex-col items-center`;
const Companion = tw.img`select-none w-96 h-96 mt-20 mb-5 justify-self-center `;
const HealthBarContainer = tw.div`flex place-items-center`;
const ProgressBar = tw.div`flex-grow bg-gradient-to-l from-green-600 to-red-600 border-black border-2 rounded-xl w-64 h-6`;

// Welcome Back Greeting
const WelcomeContainer = tw.div`pt-40 self-center`;
const WelcomeText = tw.h2`font-display text-2xl`;

const Hero = ({handleLogout}) => {

    return(
        <MainContainer>
            <TopContainer>
                <LogoContainer>
                    <TopLogo src={rLogo}></TopLogo>
                </LogoContainer>
                <TaskContainer>
                    <LocationMarkerIcon tw="h-6 w-6 text-red-600"></LocationMarkerIcon>
                    <LocationContainer>
                        <Location>State College, PA</Location>
                    </LocationContainer>
                </TaskContainer>
                <LogoutAndProfile>
                    <LevelContainer>
                        <LevelLabel>Level 100</LevelLabel>
                        <XPBar/>
                    </LevelContainer>
                    <UserCircleIcon tw="px-5"/>
                    <LogoutContainer>
                        <Logout onClick={handleLogout}>Logout</Logout>
                    </LogoutContainer>
                </LogoutAndProfile>
            </TopContainer>
            <MiddleContainer>
                <div>
                    <Companion src={cartoonGoat}></Companion>
                </div>
                <HealthBarContainer>
                    <EmojiSadIcon tw="p-4 h-20 w-20"/>
                    <ProgressBar/>
                    <EmojiHappyIcon tw="p-4 h-20 w-20"/>
                </HealthBarContainer>
            </MiddleContainer>
            <WelcomeContainer>
                <WelcomeText>Welcome Back!</WelcomeText>
            </WelcomeContainer>
        </MainContainer>
    );
};

export default Hero;