import React, { useState } from 'react'
import { StarIcon } from '@heroicons/react/outline'
import tw from "twin.macro";

export default function Rating({ toggleTask }) {

    const [rating, setRating] = useState(0);
    const [hasRating, setHasRating] = useState(false);
    let ratingDiv;

    if (rating === 0) {
        ratingDiv = 
            <>
                <StarIcon tw="h-4 lg:h-8 stroke-current text-black" onClick={()=>(setRating(1))}/>
                <StarIcon tw="h-4 lg:h-8 stroke-current text-black" onClick={()=>(setRating(2))}/>
                <StarIcon tw="h-4 lg:h-8 stroke-current text-black" onClick={()=>(setRating(3))}/>
                <StarIcon tw="h-4 lg:h-8 stroke-current text-black" onClick={()=>(setRating(4))}/>
                <StarIcon tw="h-4 lg:h-8 stroke-current text-black" onClick={()=>(setRating(5))}/>
            </>
        ;
    }
    if (rating === 1) {
        ratingDiv = 
            <>
                <StarIcon tw="h-4 lg:h-8 stroke-current text-yellow-500" onClick={()=>(setRating(1))}/>
                <StarIcon tw="h-4 lg:h-8 stroke-current text-black" onClick={()=>(setRating(2))}/>
                <StarIcon tw="h-4 lg:h-8 stroke-current text-black" onClick={()=>(setRating(3))}/>
                <StarIcon tw="h-4 lg:h-8 stroke-current text-black" onClick={()=>(setRating(4))}/>
                <StarIcon tw="h-4 lg:h-8 stroke-current text-black" onClick={()=>(setRating(5))}/>
            </>
        ;
      } 
    if (rating === 2) {
        ratingDiv = 
            <>
                <StarIcon tw="h-4 lg:h-8 stroke-current text-yellow-500" onClick={()=>(setRating(1))}/>
                <StarIcon tw="h-4 lg:h-8 stroke-current text-yellow-500" onClick={()=>(setRating(2))}/>
                <StarIcon tw="h-4 lg:h-8 stroke-current text-black" onClick={()=>(setRating(3))}/>
                <StarIcon tw="h-4 lg:h-8 stroke-current text-black" onClick={()=>(setRating(4))}/>
                <StarIcon tw="h-4 lg:h-8 stroke-current text-black" onClick={()=>(setRating(5))}/>
            </>
        ;
    } 
    if (rating === 3) {
        ratingDiv =             
            <>
                <StarIcon tw="h-4 lg:h-8 stroke-current text-yellow-500" onClick={()=>(setRating(1))}/>
                <StarIcon tw="h-4 lg:h-8 stroke-current text-yellow-500" onClick={()=>(setRating(2))}/>
                <StarIcon tw="h-4 lg:h-8 stroke-current text-yellow-500" onClick={()=>(setRating(3))}/>
                <StarIcon tw="h-4 lg:h-8 stroke-current text-black" onClick={()=>(setRating(4))}/>
                <StarIcon tw="h-4 lg:h-8 stroke-current text-black" onClick={()=>(setRating(5))}/>
            </>
        ;
    }
    if (rating === 4) {
        ratingDiv =             
            <>
                <StarIcon tw="h-4 lg:h-8 stroke-current text-yellow-500" onClick={()=>(setRating(1))}/>
                <StarIcon tw="h-4 lg:h-8 stroke-current text-yellow-500" onClick={()=>(setRating(2))}/>
                <StarIcon tw="h-4 lg:h-8 stroke-current text-yellow-500" onClick={()=>(setRating(3))}/>
                <StarIcon tw="h-4 lg:h-8 stroke-current text-yellow-500" onClick={()=>(setRating(4))}/>
                <StarIcon tw="h-4 lg:h-8 stroke-current text-black"   onClick={()=>(setRating(5))}/>
            </>
        ;
    }
    if (rating === 5) {
        ratingDiv =   
            <>          
                <StarIcon tw="h-4 lg:h-8 stroke-current text-yellow-500" onClick={()=>(setRating(1))}/>
                <StarIcon tw="h-4 lg:h-8 stroke-current text-yellow-500" onClick={()=>(setRating(2))}/>
                <StarIcon tw="h-4 lg:h-8 stroke-current text-yellow-500" onClick={()=>(setRating(3))}/>
                <StarIcon tw="h-4 lg:h-8 stroke-current text-yellow-500" onClick={()=>(setRating(4))}/>
                <StarIcon tw="h-4 lg:h-8 stroke-current text-yellow-500" onClick={()=>(setRating(5))}/>
            </>
        ;
    }

    return (
        <div tw="grid place-items-center md:flex md:flex-row">
            <div tw="grid grid-cols-5 w-10/12 md:w-5/12 place-items-center">
                {ratingDiv}
            </div>
            { hasRating ? (
                null
            ) : (<button tw="font-display font-semibold p-2 bg-white text-xs lg:text-base text-green-800 hover:bg-gray-200 m-2 rounded-lg" onClick={()=>{ toggleTask() }}>Submit</button>)
            }
        </div>
    );
};