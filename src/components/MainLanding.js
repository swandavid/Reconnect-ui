import React from 'react';
import tw from "twin.macro";
import SpaceShip from "../images/landing-spaceship.svg";

const MainContainer = tw.div`h-screen py-20 w-full bg-blue-200 flex flex-col md:grid md:grid-cols-2 place-items-center`;

export default function MainLanding() {
    return(
        <MainContainer>
            <div tw="mt-10 w-3/4 h-3/4">
                <img src={SpaceShip}></img>
            </div>
            <div tw="w-2/3 h-1/4 grid text-center">
                <h1 tw="font-yeseva font-semibold w-full h-full text-4xl text-yellow-400">Scroll Less</h1>
                <h1 tw="font-yeseva font-semibold w-full h-full text-4xl text-yellow-400">Smile More</h1>
            </div>
        </MainContainer>
    );
};
