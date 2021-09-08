import React from 'react';
import tw from "twin.macro";
import SpaceShip from "../images/landing-spaceship.svg";

const MainContainer = tw.div`h-screen py-20 w-full bg-blue-200 flex flex-col md:grid md:grid-cols-2 place-items-center`;

export default function MainLanding() {
    return(
        <MainContainer>
            <div tw="mt-10 w-full lg:w-1/2 h-3/4">
                <img src={SpaceShip}></img>
            </div>
            <div tw="w-2/3 h-1/3 text-center">
                <p tw="font-display font-semibold w-full h-full text-2xl">"Mission Statement"</p>
            </div>
        </MainContainer>
    );
};
