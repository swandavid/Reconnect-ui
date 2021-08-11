import React from 'react';
import tw from "twin.macro";
import styled from "styled-components";
import rLogo from "../images/reconnect-r-logo.jpg";
import { LocationMarkerIcon, EmojiHappyIcon, EmojiSadIcon, UserCircleIcon, PencilAltIcon, CheckCircleIcon, StarIcon } from '@heroicons/react/outline'
import { ReactComponent as ReconnectLpRight } from '../images/reconnect-lp-right.svg'; //ImportingSVG

// Need a container for the whole screen
const MainContainer = tw.div`select-none min-h-screen bg-white flex flex-col justify-items-center items-center`;

const Content = tw.div`bg-gradient-to-b from-green-200 to-green-800 w-6/12 mt-10 rounded-xl`;
// Need a container for the entire top bar
const TopContainer = tw.div`mt-5 grid grid-cols-3 justify-items-center`;
const LogoContainer = tw.div`flex items-start justify-self-start rounded-lg overflow-hidden`;
const TopLogo = tw.img`w-20 h-20`;
const TaskContainer = tw.div`flex flex-row items-center`;
const LocationContainer = tw.div``;
const Location = tw.text`font-display font-semibold text-base p-2`;

// Leveling Layout
const LevelContainer = tw.div`flex flex-row place-items-center`;
const LevelLabel = tw.text`flex-none font-display font-semibold text-lg pr-3`;
const XPProgress = tw.text`tracking-wide text-sm font-display font-semibold text-white select-none`;
const XPBar = tw.div`bg-gray-200 border-black border rounded-xl w-72 justify-items-center overflow-hidden`;
const XPBarInside = tw.div`bg-green-600 rounded-l-xl grid justify-items-center`;

// Logout
const LogoutAndProfile = tw.div`flex flex-row place-items-center justify-self-end pr-5`;
const LogoutContainer = tw.div`justify-self-center`;
const Logout = tw.button`text-lg bg-transparent hover:bg-green-700 text-black font-semibold font-display hover:text-white py-2 px-4 border border-black hover:border-transparent rounded`;

// Need a container for the companion and emotion scale
const MiddleContainer = tw.div`px-24`;
const Companion = tw.img`col-start-2 w-96 h-96 mt-20 mb-5 justify-self-center `;

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
const CompanionInput = tw.input`flex-none w-full px-8 py-4 rounded-lg font-medium bg-transparent border-2 border-blue-300 placeholder-white text-base focus:outline-none focus:border-blue-600 focus:bg-transparent mt-5 first:mt-0`;
const CompanionName = tw.label`font-display font-semibold text-base placeholder-black`;
const HealthBarContainer = tw.div`flex place-items-center`;
const ProgressBar = tw.div`flex-grow bg-gradient-to-l from-green-600 to-red-600 border-black border-2 rounded-xl w-64 h-6`;

// Did you finish the activity component
const ActivityContainer = tw.div`col-start-1 grid w-8/12 self-center bg-white rounded-lg justify-items-center`;
const QuestionText = tw.h1`font-display font-bold text-xl text-green-600 mt-2`;
const YesButton = tw.button`focus:ring-2 focus:ring-purple-400 text-base bg-white hover:bg-gray-200 text-green-600 font-semibold text-lg font-display py-2 px-4 rounded mt-2 mb-1`;
const NoButton = tw.button`text-base bg-white hover:bg-gray-200 text-green-600 font-semibold text-lg font-display py-2 px-4 rounded mt-2 mb-1`;
const RatingContainer = tw.div`flex flex-row h-10`;
const RatingNumberButton = tw.button`text-base bg-white hover:bg-gray-200 text-green-600 font-semibold font-display rounded py-2 px-4 mt-1 mb-2`;
const SubmitRatingButton = tw.button`text-base bg-transparent border-t border-black hover:bg-green-600 text-black font-semibold font-display rounded-b-lg py-2 px-4 mt-2 w-full`;

// Welcome Back Greeting
const WelcomeContainer = tw.div`self-center`;
const WelcomeText = tw.h2`font-display font-semibold text-2xl`;

const Hero = (props) => {

    const {
        handleLogout, 
        companionName,
        setCompanionName,
        hasName,
        setHasName,
        currentXP,
        currentLevel,
        levelXP,
        rating,
        setRating,
        hasRating,
        handleIncreaseXP,
        chatbot,
    } = props;

    return(
        <MainContainer onLoad={chatbot}>
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
            <Content>
            <MiddleContainer>
                <div tw="grid grid-cols-3 justify-items-center">
                    {hasRating ? 
                    <ActivityContainer>
                        <QuestionText>Did you finish the activity?</QuestionText>
                        <div tw="m-4">
                        <label tw="inline-flex items-center">
                            <input type="radio" tw="text-green-500" name="answerType" value="yes" required/>
                            <span tw="ml-2 font-display font-semibold text-green-600 text-lg">Yes!!</span>
                        </label>
                        <label tw="inline-flex items-center ml-6">
                            <input type="radio" tw="text-green-500" name="answerType" value="no" required/>
                            <span tw="ml-2 font-display font-semibold text-green-600 text-lg">Not Today :(</span>
                        </label>
                        </div>
                        <RatingContainer>
                            {
                                (() => {
                                    if (rating==1)
                                        return  <>
                                                <StarIcon tw="stroke-current text-yellow-500"/>
                                                <StarIcon tw="stroke-current text-gray-500"/>
                                                <StarIcon tw="stroke-current text-gray-500"/>
                                                <StarIcon tw="stroke-current text-gray-500"/>
                                                <StarIcon tw="stroke-current text-gray-500"/>
                                                </>
                                    if (rating==2)
                                        return  <>
                                                <StarIcon tw="stroke-current text-yellow-500"/>
                                                <StarIcon tw="stroke-current text-yellow-500"/>
                                                <StarIcon tw="stroke-current text-gray-500"/>
                                                <StarIcon tw="stroke-current text-gray-500"/>
                                                <StarIcon tw="stroke-current text-gray-500"/>
                                                </>
                                    if (rating==3)
                                        return  <>
                                                <StarIcon tw="stroke-current text-yellow-500"/>
                                                <StarIcon tw="stroke-current text-yellow-500"/>
                                                <StarIcon tw="stroke-current text-yellow-500"/>
                                                <StarIcon tw="stroke-current text-gray-500"/>
                                                <StarIcon tw="stroke-current text-gray-500"/>
                                                </>
                                    if (rating==4)
                                        return  <>
                                                <StarIcon tw="stroke-current text-yellow-500"/>
                                                <StarIcon tw="stroke-current text-yellow-500"/>
                                                <StarIcon tw="stroke-current text-yellow-500"/>
                                                <StarIcon tw="stroke-current text-yellow-500"/>
                                                <StarIcon tw="stroke-current text-gray-500"/>
                                                </>
                                    if (rating==5)
                                        return  <>
                                                <StarIcon tw="stroke-current text-yellow-500"/>
                                                <StarIcon tw="stroke-current text-yellow-500"/>
                                                <StarIcon tw="stroke-current text-yellow-500"/>
                                                <StarIcon tw="stroke-current text-yellow-500"/>
                                                <StarIcon tw="stroke-current text-yellow-500"/>
                                                </>
                                    else
                                        return  <>
                                                <StarIcon tw="stroke-current text-gray-500"/>
                                                <StarIcon tw="stroke-current text-gray-500"/>
                                                <StarIcon tw="stroke-current text-gray-500"/>
                                                <StarIcon tw="stroke-current text-gray-500"/>
                                                <StarIcon tw="stroke-current text-gray-500"/>
                                                </>
                                })()
                            }
                        </RatingContainer>
                        <div tw="flex flex-row">
                            <RatingNumberButton onClick={() => setRating(1)}>1</RatingNumberButton>
                            <RatingNumberButton onClick={() => setRating(2)}>2</RatingNumberButton>
                            <RatingNumberButton onClick={() => setRating(3)}>3</RatingNumberButton>
                            <RatingNumberButton onClick={() => setRating(4)}>4</RatingNumberButton>
                            <RatingNumberButton onClick={() => setRating(5)}>5</RatingNumberButton>
                        </div>
                        <SubmitRatingButton onClick={handleIncreaseXP}>Submit Rating</SubmitRatingButton>
                    </ActivityContainer>
                    : null}
                    <ReconnectLpRight/>
                </div>
                <div tw="grid justify-items-center">
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
                </div>
            </MiddleContainer>
            </Content>
            <WelcomeContainer>
                <WelcomeText>Welcome Back!</WelcomeText>
            </WelcomeContainer>
        </MainContainer>
    );
};

export default Hero;