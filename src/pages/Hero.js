import React from 'react';
import tw from "twin.macro";
import styled from "styled-components";
import rLogo from "../images/reconnect-r-logo.jpg";
import { LocationMarkerIcon, EmojiHappyIcon, EmojiSadIcon, UserCircleIcon, PencilAltIcon, CheckCircleIcon, StarIcon, ClipboardCheckIcon, ClipboardListIcon, LogoutIcon } from '@heroicons/react/outline'
import { ReactComponent as Leaf } from "../images/leaf-logo.svg";
// Need a container for the whole screen
const MainContainer = tw.div`select-none min-h-screen bg-white flex flex-col justify-items-center items-center`;

const Content = tw.div`bg-gray-200 w-full mt-10 grid grid-cols-3 justify-items-center`;
// Need a container for the entire top bar
const TopContainer = tw.div`w-full mt-5 grid grid-cols-3 justify-items-center bg-gray-200`;
const LogoContainer = tw.div`col-start-1`;
const TopLogo = tw.img``;
const LocationContainer = tw.div`flex items-center`;
const Location = tw.text`font-display font-semibold text-base pl-2 col-start-2`;

// Leveling Layout
const LevelContainer = tw.div`flex flex-row place-items-center`;
const LevelLabel = tw.text`flex-none font-display font-semibold text-lg pr-3`;
const XPProgress = tw.text`tracking-wide text-sm font-display font-semibold text-white select-none`;
const XPBar = tw.div`bg-gray-200 border-black border rounded-xl w-72 justify-items-center overflow-hidden`;
const XPBarInside = tw.div`bg-green-600 rounded-l-xl grid justify-items-center`;

// Logout
const LogoutAndProfile = tw.div`flex flex-col`;
const LogoutContainer = tw.div`justify-self-center`;
const Logout = tw.button`text-lg bg-transparent hover:bg-green-700 text-black font-semibold font-display hover:text-white py-2 px-4 border border-black hover:border-transparent rounded`;

// Need a container for the companion and emotion scale
const MiddleContainer = tw.div`w-full`;
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
const RatingContainer = tw.div`flex flex-row h-10`;
const RatingNumberButton = tw.button`text-base bg-white hover:bg-gray-200 text-green-600 font-semibold font-display rounded py-2 px-4 mt-1 mb-2`;
const SubmitRatingButton = tw.button`text-base bg-transparent border-t border-black hover:bg-green-600 text-black font-semibold font-display rounded-b-lg py-2 px-4 mt-2 w-full`;

// Welcome Back Greeting
const WelcomeContainer = tw.div`pt-5`;
const WelcomeText = tw.h2`font-display font-bold text-2xl`;

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
                <h1 tw="font-display font-bold text-2xl sm:text-2xl md:text-3xl text-green-800">Reconnect</h1>
                <LocationContainer>
                    <LocationMarkerIcon tw="h-6 w-6 text-red-600"></LocationMarkerIcon>
                    <Location>State College, PA</Location>
                </LocationContainer>
            </TopContainer>
            <WelcomeContainer>
                <WelcomeText>Welcome Back!</WelcomeText>
            </WelcomeContainer>
            <Content>
                <div className="nav-list" tw="grid justify-items-center w-full bg-green-100 my-10">
                    <div tw="bg-white w-1/3">
                        <button tw="hover:border-l-4 hover:border-green-400 hover:bg-gray-300 flex flex-row items-center w-full h-2/12">
                            <ClipboardListIcon tw="w-6 ml-4"/>
                            <h1 tw="font-display font-semibold ml-2 text-lg">Get Activity</h1>
                        </button>
                        <button tw="hover:border-l-4 hover:border-green-400 hover:bg-gray-300 flex flex-row items-center w-full h-2/12">
                            <ClipboardCheckIcon tw="w-6 ml-4"/>
                            <h1 tw="font-display font-semibold ml-2 text-lg">Activity Log</h1>
                        </button>
                        <button tw="hover:border-l-4 hover:border-green-400 hover:bg-gray-300 flex flex-row items-center w-full h-2/12">
                            <UserCircleIcon tw="w-6 ml-4"/>
                            <h1 tw="font-display font-semibold ml-2 text-lg">Profile</h1>
                        </button>
                        <button tw="hover:border-l-4 hover:border-green-400 hover:bg-gray-300 flex flex-row items-center w-full h-2/12" onClick={handleLogout}>
                            <LogoutIcon tw="w-6 ml-4"/>
                            <h1 tw="font-display font-semibold ml-2 text-lg">Logout</h1>
                        </button>
                        <div tw="grid place-items-center h-4/12">
                        <Leaf tw=""/>
                        </div>
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
                    </div>
                </MiddleContainer>
                <div tw="flex items-end">
                    <div className="companion-container" tw="flex flex-col justify-items-center items-center">
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
                        <LevelContainer>
                            <LevelLabel>Level {currentLevel}</LevelLabel>
                            <XPBar>
                                <XPBarInside>
                                    <XPProgress>{currentXP} / {levelXP} XP</XPProgress>
                                </XPBarInside>
                            </XPBar>
                        </LevelContainer>
                    </div>
                </div>
            </Content>
        </MainContainer>
    );
};

export default Hero;