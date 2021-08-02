import React from 'react';
//import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import cartoonGoat from '../images/cartoon-goat.svg';
import bgSvg from "../images/reconnect-background.svg";
import rLogo from "../images/reconnect-r-logo.jpg";
import user from "../images/fi-user.svg"
import sadFace from "../images/fi-frown.svg"
import happyFace from "../images/fi-smile.svg"
import { useElementScroll } from 'framer-motion';
//import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";

// Need a container for the whole screen, positioning we want 'flex flex col items-center'
const MainContainer = tw.div`min-h-screen bg-white flex flex-col`;

const TopContainer = tw.div`mt-5 flex flex-row place-items-center`;
const TopLogo = tw.img`flex-shrink select-none object-left w-20 h-20`;
const TaskContainer = tw.div`container mx-auto flex flex-col place-items-center`;
const CoundownTimer = tw.text`select-none font-display font-semibold text-xl`;
const TaskName = tw.text`select-none font-display font-semibold text-base`;
const LogoutAndProfile = tw.div`flex flex-row flex-shrink place-items-center sm: p-12`;
const ProfileCircle = tw.img`select-none w-10 h-10 col-span-1`;
const Logout = tw.button`select-none text-lg bg-transparent hover:bg-green-700 text-black font-semibold font-display hover:text-white py-2 px-4 border border-black hover:border-transparent rounded`;

const MiddleContainer = tw.div`flex flex-col items-center`;
const Companion = tw.img`select-none w-96 h-96 mt-20 mb-5 justify-self-center `;
const HealthBarContainer = tw.div`flex place-items-center`;
const Emoji = tw.img`select-none flex-none p-4 h-20 w-20`;
const ProgressBar = tw.div`flex-grow bg-gradient-to-l from-green-600 to-red-600 border-black border-2 w-64 h-6`;
// Need a container for the top bar with the logo | welcome back! | event and time remaining | profile link |, we want 'flex flex-row mt-5 flex-1'
//ProfileLink


// Need a container for the bottom talking to watson

const Hero = ({handleLogout}) => {

    return(
        <MainContainer>
            <TopContainer>
                <TopLogo src={rLogo}></TopLogo>
                <TaskContainer>
                    <CoundownTimer>15:00</CoundownTimer>
                    <TaskName>Run a mile!</TaskName>
                </TaskContainer>
                <LogoutAndProfile>
                    <ProfileCircle src={user}></ProfileCircle>
                    <Logout onClick={handleLogout}>Logout</Logout>
                </LogoutAndProfile>
            </TopContainer>
            <MiddleContainer>
                <Companion src={cartoonGoat}></Companion>
                <HealthBarContainer>
                    <Emoji src={sadFace}/>
                    <ProgressBar/>
                    <Emoji src={happyFace}/>
                </HealthBarContainer>
            </MiddleContainer>
        </MainContainer>
    );
};

export default Hero;