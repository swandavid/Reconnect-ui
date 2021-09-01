import React from 'react';
import tw from "twin.macro";
import { StarIcon } from '@heroicons/react/outline';

const MainContainer = tw.div`w-full h-20 bg-green-800 grid grid-cols-3`;

export default function ActivityLogEntry() {
    return (
        <MainContainer>
            <div tw="grid place-items-center w-full">
                <h1 tw="font-display font-semibold">8/12/2021</h1>
            </div>
            <div tw="grid place-items-center w-full">
                <h1 tw="font-display font-semibold">Go for a walk</h1>
            </div>
            <div tw="flex flex-row items-center">
                <StarIcon tw="stroke-current h-1/2"/>
                <StarIcon tw="stroke-current h-1/2"/>
                <StarIcon tw="stroke-current h-1/2"/>
                <StarIcon tw="stroke-current h-1/2"/>
                <StarIcon tw="stroke-current h-1/2"/>
            </div>
        </MainContainer>
    )
}
