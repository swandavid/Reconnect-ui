import React from 'react';
import tw from "twin.macro";
import Video from "../videos/reconnect-gif.mp4"

const MainContainer = tw.div`h-screen py-20 w-full bg-blue-200 flex flex-col md:grid md:grid-cols-2 place-items-center`;

export default function MainLanding() {
    return(
        <MainContainer>
            <div tw="bg-gray-200 mt-10 w-1/2 h-3/4">
                Spaceship Gifs
            </div>
            <div tw="bg-gray-400">
                <h1 tw="font-display font-semibold w-1/2 h-3/4">"Mission Statement"</h1>
            </div>
        </MainContainer>
    );
};
