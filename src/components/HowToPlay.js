import React from 'react';
import tw from "twin.macro";
import FirstDisplay from "../images/h2p-1.png";
import SecondDisplay from "../images/h2p-2.png";
import ThirdDisplay from "../images/h2p-3.png";
import FourthDisplay from "../images/h2p-4.png";

const MainContainer = tw.div`h-screen w-full bg-yellow-100 flex flex-col place-items-center`;

export default function HowToPlay() {

    return(
        <MainContainer>
            <div tw="text-center h-1/12 w-full grid place-items-center bg-green-200">
                <h1 tw="text-2xl font-display font-semibold text-green-900">Explore new possibilities to spark your interest and level up!</h1>
            </div>
            <div tw="bg-white grid grid-cols-4 place-items-center h-11/12 w-11/12 p-20">
                <div tw="m-2 w-full">
                    <img tw="h-128" src={FirstDisplay}/>
                    <div tw="grid place-items-center text-center w-2/3">
                        <img tw="mt-2" src="https://img.icons8.com/material-outlined/35/000000/1-circle.png"/>
                        <h1 tw="font-display font-semibold text-sm mt-2">Open the app to view your XP score and interact with your companion!</h1>
                    </div>
                </div>
                <div tw="m-2 w-full">
                    <img tw="h-128" src={SecondDisplay}/>
                    <div tw="grid place-items-center text-center w-2/3">
                        <img tw="mt-2" src="https://img.icons8.com/material/35/000000/2-circle.png"/>
                        <h1 tw="font-display font-semibold text-sm mt-2">Second display info text would go here</h1>
                    </div>
                </div>
                <div tw="m-2 w-full">
                    <img tw="h-128" src={ThirdDisplay}/>
                    <div tw="grid place-items-center text-center w-2/3">
                        <img tw="mt-2" src="https://img.icons8.com/material/35/000000/3-circle.png"/>
                        <h1 tw="font-display font-semibold text-sm mt-2">Third display info text would go here</h1>
                    </div>
                </div>
                <div tw="m-2 w-full">
                    <img tw="h-128" src={FourthDisplay}/>
                    <div tw="grid place-items-center text-center w-2/3">
                        <img tw="mt-2" src="https://img.icons8.com/material/35/000000/4-circle.png"/>
                        <h1 tw="font-display font-semibold text-sm mt-2">Fourth display info text would go here</h1>
                    </div>
                </div>
            </div>
        </MainContainer>
    );
};
    