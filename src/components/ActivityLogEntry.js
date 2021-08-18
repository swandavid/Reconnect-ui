import React from 'react';
import tw from "twin.macro";
import { StarIcon } from '@heroicons/react/outline';

export default function ActivityLogEntry() {
    return (
        <div tw="w-full h-20 bg-gray-300 grid grid-cols-3">
            <div tw="grid place-items-center w-full">
                <h1 tw="font-display font-semibold text-black">8/12/2021</h1>
            </div>
            <div tw="grid place-items-center w-full">
                <h1 tw="font-display font-semibold text-black">Go for a walk</h1>
            </div>
            <div tw="flex flex-row items-center">
                <StarIcon tw="stroke-current text-gray-500 h-1/2"/>
                <StarIcon tw="stroke-current text-gray-500 h-1/2"/>
                <StarIcon tw="stroke-current text-gray-500 h-1/2"/>
                <StarIcon tw="stroke-current text-gray-500 h-1/2"/>
                <StarIcon tw="stroke-current text-gray-500 h-1/2"/>
            </div>
        </div>
    )
}
