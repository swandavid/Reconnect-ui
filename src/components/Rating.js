import React, { useState } from 'react'
import { StarIcon } from '@heroicons/react/outline'
import tw from "twin.macro";

export default function Rating() {

    const [rating, setRating] = useState(0);
    const [activity, setActivity] = useState("Current activity");
    const [finished, setFinished] = useState(false);

    function handleRating(){
        setRating(rating);
    }

    return (
        <div tw="bg-green-800 flex flex-col place-items-center rounded-xl text-white font-display font-semibold text-center overflow-hidden h-1/6 w-1/4">
            <h1 tw="py-4 text-xl">Did you finish the activity?</h1>
            <h1>Activity: {activity}</h1>
            <div tw="">
                <label tw="">
                    <input type="radio" tw="text-green-500" name="answerType" value="yes" required/>
                    <span tw="ml-2 font-display font-semibold text-lg">Yes!!</span>
                </label>
                <label tw="inline-flex items-center ml-6">
                    <input type="radio" tw="text-green-500" name="answerType" value="no" required/>
                    <span tw="ml-2 font-display font-semibold text-lg">Not Today :(</span>
                </label>
            </div>
            <div tw="grid grid-cols-5 w-3/4 place-items-center py-2">
                <div tw="grid grid-cols-1 place-items-center">
                    <StarIcon tw="stroke-current text-gray-500 w-1/2"/>
                    <button tw="hover:bg-gray-200 hover:bg-opacity-25 w-8 rounded-lg">1</button>
                </div>
                <div tw="grid grid-cols-1 place-items-center">
                    <StarIcon tw="stroke-current text-gray-500 w-1/2"/>
                    <button tw="hover:bg-gray-200 hover:bg-opacity-25 w-8 rounded-lg">2</button>
                </div>
                <div tw="grid grid-cols-1 place-items-center">
                    <StarIcon tw="stroke-current text-gray-500 w-1/2"/>
                    <button tw="hover:bg-gray-200 hover:bg-opacity-25 w-8 rounded-lg">3</button>
                </div>
                <div tw="grid grid-cols-1 place-items-center">
                    <StarIcon tw="stroke-current text-gray-500 w-1/2"/>
                    <button tw="hover:bg-gray-200 hover:bg-opacity-25 w-8 rounded-lg">4</button>
                </div>
                <div tw="grid grid-cols-1 place-items-center">
                    <StarIcon tw="stroke-current text-gray-500 w-1/2"/>
                    <button tw="hover:bg-gray-200 hover:bg-opacity-25 w-8 rounded-lg">5</button>
                </div>
            </div>
            <button tw="w-full h-full hover:bg-green-900 hover:text-white py-4 bg-white text-green-800 font-semibold border-2 border-green-800 rounded-b-xl">Submit Rating</button>
        </div>
    );
};