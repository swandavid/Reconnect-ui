import React from 'react';
import tw from "twin.macro";
import styled from "styled-components";
import cartoonGoat from '../images/cartoon-goat.svg';
import rLogo from "../images/reconnect-r-logo.jpg";
import { LocationMarkerIcon, EmojiHappyIcon, EmojiSadIcon, UserCircleIcon, PencilAltIcon, CheckCircleIcon } from '@heroicons/react/outline'
import rLogoSVG from "../images/reconnect-r-logo.svg";

// Need a container for the whole screen
const MainContainer = tw.div`min-h-screen bg-gradient-to-b from-green-200 to-green-800 flex flex-col`;

// Need a container for the entire top bar
const TopContainer = tw.div`mt-5 grid grid-cols-3 justify-items-center`;
const LogoContainer = tw.div`flex items-start justify-self-start pl-5`;
const TopLogo = tw.img`select-none w-20 h-20`;
const TaskContainer = tw.div`flex flex-row items-center`;
const LocationContainer = tw.div``;
const Location = tw.text`select-none font-display font-semibold text-base p-2`;

// Leveling Layout
const LevelContainer = tw.div`flex flex-row place-items-center`;
const IncreaseXP = tw.button`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full m-2`;
const LevelLabel = tw.text`select-none flex-none font-display font-semibold text-lg pr-3`;
const XPProgress = tw.text`tracking-wide text-sm font-display font-semibold text-white select-none`;
const XPBar = tw.div`bg-gray-200 border-black border rounded-xl w-72 justify-items-center overflow-hidden`;
const XPBarInside = tw.div`bg-green-600 w-6/12 rounded-l-xl grid justify-items-center`;

// Logout
const LogoutAndProfile = tw.div`flex flex-row place-items-center justify-self-end pr-5`;
const LogoutContainer = tw.div`justify-self-center`;
const Logout = tw.button`select-none text-lg bg-transparent hover:bg-green-700 text-black font-semibold font-display hover:text-white py-2 px-4 border border-black hover:border-transparent rounded`;

// Need a container for the companion and emotion scale
const MiddleContainer = tw.div`flex flex-col items-center`;
const Companion = tw.img`select-none w-96 h-96 mt-20 mb-5 justify-self-center `;

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

const SubmitContainer = tw.div`pl-4`;
const EditContainer = tw.div`pl-4`;
const NameContainer = tw.div`flex flex-row items-center`;
const CompanionInput = tw.input`select-none flex-none w-full px-8 py-4 rounded-lg font-medium bg-transparent border-2 border-blue-300 placeholder-white text-base focus:outline-none focus:border-blue-600 focus:bg-transparent mt-5 first:mt-0`;
const CompanionName = tw.label`font-display font-semibold text-base placeholder-black`;
const HealthBarContainer = tw.div`flex place-items-center`;
const ProgressBar = tw.div`flex-grow bg-gradient-to-l from-green-600 to-red-600 border-black border-2 rounded-xl w-64 h-6`;

// Welcome Back Greeting
const WelcomeContainer = tw.div`pt-40 self-center`;
const WelcomeText = tw.h2`font-display font-semibold text-2xl`;

const Hero = (props) => {

    const {
        handleLogout, 
        companionName,
        handleCompanionNameChange,
        setCompanionName,
        hasName,
        setHasName,
        increaseXP,
        currentXP,
        currentLevel,
        levelXP,
    } = props;

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
                        <IncreaseXP onClick={increaseXP}>+</IncreaseXP>
                        <LevelLabel>Level {currentLevel}</LevelLabel>
                        <XPBar>
                            <XPBarInside>
                                <XPProgress>{currentXP} / {levelXP} XP</XPProgress>
                            </XPBarInside>
                        </XPBar>
                    </LevelContainer>
                    <div tw="h-12 w-12 m-2">
                        <UserCircleIcon tw=""/>
                    </div>
                    <LogoutContainer>
                        <Logout onClick={handleLogout}>Logout</Logout>
                    </LogoutContainer>
                </LogoutAndProfile>
            </TopContainer>
            <MiddleContainer>
                <div>
                    <Companion src={cartoonGoat}></Companion>
                </div>
                <NameContainer>
                    {hasName ? (
                        <>
                            <CompanionInput value={companionName} onChange={(e) => setCompanionName(e.target.value)} placeholder="Enter name here"></CompanionInput>
                            <SubmitContainer>
                                <SubmitButton type="submit" onClick={() => setHasName(!hasName)}>
                                    <CheckCircleIcon className="icon" />
                                </SubmitButton>
                            </SubmitContainer>
                        </> 
                    ) : (
                        <>
                            <CompanionName>{companionName}</CompanionName>
                            <EditContainer>
                                <EditButton type="submit" onClick={() => setHasName(!hasName)}>
                                    <PencilAltIcon className="icon" />
                                </EditButton>
                            </EditContainer>
                        </>
                    )}
                </NameContainer>
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