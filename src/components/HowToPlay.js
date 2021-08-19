import React from 'react';
import tw from "twin.macro";

const MainContainer = tw.div`h-screen w-full bg-white grid items-center justify-items-center`;

export default function HowToPlay() {

    return(
        <MainContainer>
            <h1 tw="text-3xl font-display font-semibold">How to Play</h1>
        </MainContainer>
    );
};
    