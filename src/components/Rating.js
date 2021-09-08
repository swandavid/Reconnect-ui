import React, { useState } from 'react'
import { StarIcon } from '@heroicons/react/outline'
import tw from "twin.macro";

export default function Rating() {

    const [rating, setRating] = useState(0);

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
            <div tw="grid grid-cols-5 w-5/12 place-items-center">
                {ratingDiv}
            </div>
    );
};