import React from 'react';
import tw from "twin.macro";

const MainContainer = tw.div`grid place-items-center min-h-screen`;

export default function Error() {

    return(
        <MainContainer>
            <h1 tw="text-3xl font-display font-semibold">Oops!! Page does not exist</h1>
        </MainContainer>
    );
};
    