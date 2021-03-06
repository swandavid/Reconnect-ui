import React from 'react';
import tw from "twin.macro";
import SpaceShip from "../images/landing-spaceship.svg";

const MainContainer = tw.div`h-full py-20 w-full bg-blue-200 flex flex-col md:grid md:grid-cols-2 md:place-items-center items-center`;

export default function MainLanding() {
    return(
        <MainContainer>
            <div tw="mt-10 w-3/4">
                <img src={SpaceShip}></img>
            </div>
            <div tw="w-2/3 h-full md:h-1/4 text-center">
                <h1 tw="font-yeseva font-black md:font-bold w-full h-full text-2xl sm:text-4xl lg:text-6xl text-yellow-400">Scroll Less</h1>
                <h1 tw="font-yeseva font-black md:font-bold w-full h-full text-2xl sm:text-4xl lg:text-6xl text-yellow-400">Smile More</h1>
            </div>
        </MainContainer>
    );
};
