import React from 'react';
import tw from "twin.macro";
import FirstDisplay from "../images/h2p-1.png";
import SecondDisplay from "../images/h2p-2.png";
import ThirdDisplay from "../images/h2p-3.png";
import FourthDisplay from "../images/h2p-4.png";

const MainContainer = tw.div`w-full xl:h-screen bg-yellow-100 flex flex-col place-items-center`;

export default function HowToPlay() {

    return(
        <MainContainer>
            <div tw="text-center h-20 w-full grid place-items-center bg-green-900">
                <h1 tw="text-2xl font-display font-semibold text-white">Explore new possibilities to spark your interest and level up!</h1>
            </div>
            <div tw="bg-white grid md:grid-cols-2 xl:grid-cols-4 place-items-center gap-10 py-10 h-11/12 w-11/12">
                <div tw="w-full h-full flex flex-wrap place-content-center">
                    <img tw="w-1/2" src={FirstDisplay}/>
                    <div tw="grid place-items-center text-center w-2/3">
                        <img tw="mt-2" src="https://img.icons8.com/material-outlined/35/000000/1-circle.png"/>
                        <h1 tw="font-display font-semibold text-sm mt-2">Open the app to view your XP score and interact with your companion!</h1>
                    </div>
                </div>
                <div tw="w-full h-full flex flex-wrap place-content-center">
                    <img tw="w-1/2" src={SecondDisplay}/>
                    <div tw="grid place-items-center text-center w-2/3">
                        <img tw="mt-2" src="https://img.icons8.com/material/35/000000/2-circle.png"/>
                        <h1 tw="font-display font-semibold text-sm mt-2">Second display info text would go here</h1>
                    </div>
                </div>
                <div tw="w-full h-full flex flex-wrap place-content-center">
                    <img tw="w-1/2" src={ThirdDisplay}/>
                    <div tw="grid place-items-center text-center w-2/3">
                        <img tw="mt-2" src="https://img.icons8.com/material/35/000000/3-circle.png"/>
                        <h1 tw="font-display font-semibold text-sm mt-2">Third display info text would go here</h1>
                    </div>
                </div>
                <div tw="w-full h-full flex flex-wrap place-content-center">
                    <img tw="w-1/2" src={FourthDisplay}/>
                    <div tw="grid place-items-center text-center w-2/3">
                        <img tw="mt-2" src="https://img.icons8.com/material/35/000000/4-circle.png"/>
                        <h1 tw="font-display font-semibold text-sm mt-2">Fourth display info text would go here</h1>
                    </div>
                </div>
            </div>
        </MainContainer>
    );
};
    