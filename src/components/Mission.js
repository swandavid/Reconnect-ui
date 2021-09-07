import React from 'react';
import tw from "twin.macro";

const MainContainer = tw.div`h-20 w-full bg-green-700 grid items-center justify-items-center`;

export default function Mission() {
    return(
        <MainContainer>
            <h1 tw="text-3xl font-display font-semibold">Our Mission</h1>
        </MainContainer>
    );
};
    