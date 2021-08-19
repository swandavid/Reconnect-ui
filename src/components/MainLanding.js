import React from 'react';
import tw from "twin.macro";
import Video from "../videos/reconnect-gif.mp4"

const MainContainer = tw.div`h-screen w-full bg-green-700 grid place-items-center relative z-20`;

export default function MainLanding() {
    return(
        <MainContainer>
            <div tw="absolute w-full h-full overflow-hidden">
                <video tw="object-cover w-full h-full" autoPlay loop muted src={Video} type="video/mp4"/>
            </div>
            <div tw="z-30 w-full absolute flex flex-col items-center">
                <h1 tw="text-4xl font-display font-bold text-center text-white">Reconnect</h1>
            </div>
        </MainContainer>
    );
};
