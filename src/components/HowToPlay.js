import React from 'react';
import tw from "twin.macro";
import FirstDisplay from "../images/htp1.jpeg";
import SecondDisplay from "../images/htp2.jpeg";
import ThirdDisplay from "../images/htp3.jpeg";
import FourthDisplay from "../images/htp4.jpeg";

const MainContainer = tw.div`w-full xl:h-screen bg-yellow-100 flex flex-col place-items-center`;

export default function HowToPlay() {

    return(
        <MainContainer>
            <div tw="text-center h-20 w-full grid place-items-center bg-green-900">
                <h1 tw="text-2xl font-display font-semibold text-white">Explore new possibilities to spark your interest and level up!</h1>
            </div>
            <div tw="bg-white grid md:grid-cols-2 xl:grid-cols-4 place-items-center gap-10 py-10 h-11/12 w-11/12">
                <div tw="w-full h-full flex flex-wrap place-content-center">
                    <img tw="w-1/2 lg:w-3/4" src={FirstDisplay}/>
                    <div tw="grid place-items-center text-center w-2/3">
                        <img tw="mt-2" src="https://img.icons8.com/material-outlined/35/000000/1-circle.png"/>
                        <h1 tw="font-display font-semibold text-sm mt-2">Click to talk with your character.</h1>
                    </div>
                </div>
                <div tw="w-full h-full flex flex-wrap place-content-center">
                    <img tw="w-1/2 lg:w-3/4" src={SecondDisplay}/>
                    <div tw="grid place-items-center text-center w-2/3">
                        <img tw="mt-2" src="https://img.icons8.com/material/35/000000/2-circle.png"/>
                        <h1 tw="font-display font-semibold text-sm mt-2">Check in daily to make yourself and your companion happy!</h1>
                    </div>
                </div>
                <div tw="w-full h-full flex flex-wrap place-content-center">
                    <img tw="w-1/2 lg:w-3/4" src={ThirdDisplay}/>
                    <div tw="grid place-items-center text-center w-2/3">
                        <img tw="mt-2" src="https://img.icons8.com/material/35/000000/3-circle.png"/>
                        <h1 tw="font-display font-semibold text-sm mt-2">Engage with our chatbot to find an activity right for you.</h1>
                    </div>
                </div>
                <div tw="w-full h-full flex flex-wrap place-content-center">
                    <img tw="w-1/2 lg:w-3/4" src={FourthDisplay}/>
                    <div tw="grid place-items-center text-center w-2/3">
                        <img tw="mt-2" src="https://img.icons8.com/material/35/000000/4-circle.png"/>
                        <h1 tw="font-display font-semibold text-sm mt-2">Rate your experience and Level Up!</h1>
                    </div>
                </div>
            </div>
        </MainContainer>
    );
};
    