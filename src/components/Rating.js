import React, { useState } from 'react'
import { StarIcon } from '@heroicons/react/outline'
import tw from "twin.macro";

export default function Rating() {

    const [rating, setRating] = useState(0);
    const [activity, setActivity] = useState("Current activity");
    const [finished, setFinished] = useState(false);
    let ratingDiv;

    if (rating === 0) {
        ratingDiv = 
            <>
                <StarIcon tw="stroke-current text-gray-200" onClick={()=>(setRating(1))}/>
                <StarIcon tw="stroke-current text-gray-200" onClick={()=>(setRating(2))}/>
                <StarIcon tw="stroke-current text-gray-200" onClick={()=>(setRating(3))}/>
                <StarIcon tw="stroke-current text-gray-200" onClick={()=>(setRating(4))}/>
                <StarIcon tw="stroke-current text-gray-200" onClick={()=>(setRating(5))}/>
            </>
        ;
    }
    if (rating === 1) {
        ratingDiv = 
            <>
                <StarIcon tw="stroke-current text-yellow-500" onClick={()=>(setRating(1))}/>
                <StarIcon tw="stroke-current text-gray-200" onClick={()=>(setRating(2))}/>
                <StarIcon tw="stroke-current text-gray-200" onClick={()=>(setRating(3))}/>
                <StarIcon tw="stroke-current text-gray-200" onClick={()=>(setRating(4))}/>
                <StarIcon tw="stroke-current text-gray-200" onClick={()=>(setRating(5))}/>
            </>
        ;
      } 
    if (rating === 2) {
        ratingDiv = 
            <>
                <StarIcon tw="stroke-current text-yellow-500" onClick={()=>(setRating(1))}/>
                <StarIcon tw="stroke-current text-yellow-500" onClick={()=>(setRating(2))}/>
                <StarIcon tw="stroke-current text-gray-200" onClick={()=>(setRating(3))}/>
                <StarIcon tw="stroke-current text-gray-200" onClick={()=>(setRating(4))}/>
                <StarIcon tw="stroke-current text-gray-200" onClick={()=>(setRating(5))}/>
            </>
        ;
    } 
    if (rating === 3) {
        ratingDiv =             
            <>
                <StarIcon tw="stroke-current text-yellow-500" onClick={()=>(setRating(1))}/>
                <StarIcon tw="stroke-current text-yellow-500" onClick={()=>(setRating(2))}/>
                <StarIcon tw="stroke-current text-yellow-500" onClick={()=>(setRating(3))}/>
                <StarIcon tw="stroke-current text-gray-200" onClick={()=>(setRating(4))}/>
                <StarIcon tw="stroke-current text-gray-200" onClick={()=>(setRating(5))}/>
            </>
        ;
    }
    if (rating === 4) {
        ratingDiv =             
            <>
                <StarIcon tw="stroke-current text-yellow-500" onClick={()=>(setRating(1))}/>
                <StarIcon tw="stroke-current text-yellow-500" onClick={()=>(setRating(2))}/>
                <StarIcon tw="stroke-current text-yellow-500" onClick={()=>(setRating(3))}/>
                <StarIcon tw="stroke-current text-yellow-500" onClick={()=>(setRating(4))}/>
                <StarIcon tw="stroke-current text-gray-200"   onClick={()=>(setRating(5))}/>
            </>
        ;
    }
    if (rating === 5) {
        ratingDiv =   
            <>          
                <StarIcon tw="stroke-current text-yellow-500" onClick={()=>(setRating(1))}/>
                <StarIcon tw="stroke-current text-yellow-500" onClick={()=>(setRating(2))}/>
                <StarIcon tw="stroke-current text-yellow-500" onClick={()=>(setRating(3))}/>
                <StarIcon tw="stroke-current text-yellow-500" onClick={()=>(setRating(4))}/>
                <StarIcon tw="stroke-current text-yellow-500" onClick={()=>(setRating(5))}/>
            </>
        ;
    }

    return (
        <div tw="bg-green-800 flex flex-col place-items-center rounded-xl text-white font-display font-semibold text-center overflow-hidden w-11/12 h-3/4">
            <h1 tw="h-2/12 py-4 text-xl">Did you finish the activity?</h1>
            <h1 tw="h-2/12">Activity: {activity}</h1>
            <div tw="h-4/12 w-full">
                <label tw="h-1/2 w-full">
                    <input type="radio" tw="text-green-500" name="answerType" value="yes" required/>
                    <span tw="ml-2 font-display font-semibold text-lg">Yes!!</span>
                </label>
                <label tw="inline-flex items-center ml-6 h-1/2">
                    <input type="radio" tw="text-green-500" name="answerType" value="no" required/>
                    <span tw="ml-2 font-display font-semibold text-lg">Not Today :(</span>
                </label>
            </div>
            <div tw="grid grid-cols-5 w-2/3 h-2/12 mb-5">
                {ratingDiv}
            </div>
            <button tw="w-full h-2/12 hover:bg-green-900 hover:text-white py-4 bg-white text-green-800 font-semibold border-2 border-green-800 rounded-b-xl">Submit Rating</button>
        </div>
    );
};