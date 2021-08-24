import React, { useState } from 'react'
import { StarIcon } from '@heroicons/react/outline'
import tw from "twin.macro";

export default function Rating() {

    const [rating, setRating] = useState(0);

    return (
        <div tw="h-144 w-144">
            <h1>Did you finish the activity?</h1>
            <div tw="m-4">
            <label tw="inline-flex items-center">
                <input type="radio" tw="text-green-500" name="answerType" value="yes" required/>
                <span tw="ml-2 font-display font-semibold text-green-600 text-lg">Yes!!</span>
            </label>
            <label tw="inline-flex items-center ml-6">
                <input type="radio" tw="text-green-500" name="answerType" value="no" required/>
                <span tw="ml-2 font-display font-semibold text-green-600 text-lg">Not Today :(</span>
            </label>
            </div>
            <div> 
                {
                    (() => {
                        if (rating===1)
                            return  <>
                                    <StarIcon tw="stroke-current text-yellow-500"/>
                                    <StarIcon tw="stroke-current text-gray-500"/>
                                    <StarIcon tw="stroke-current text-gray-500"/>
                                    <StarIcon tw="stroke-current text-gray-500"/>
                                    <StarIcon tw="stroke-current text-gray-500"/>
                                    </>
                        if (rating===2)
                            return  <>
                                    <StarIcon tw="stroke-current text-yellow-500"/>
                                    <StarIcon tw="stroke-current text-yellow-500"/>
                                    <StarIcon tw="stroke-current text-gray-500"/>
                                    <StarIcon tw="stroke-current text-gray-500"/>
                                    <StarIcon tw="stroke-current text-gray-500"/>
                                    </>
                        if (rating===3)
                            return  <>
                                    <StarIcon tw="stroke-current text-yellow-500"/>
                                    <StarIcon tw="stroke-current text-yellow-500"/>
                                    <StarIcon tw="stroke-current text-yellow-500"/>
                                    <StarIcon tw="stroke-current text-gray-500"/>
                                    <StarIcon tw="stroke-current text-gray-500"/>
                                    </>
                        if (rating===4)
                            return  <>
                                    <StarIcon tw="stroke-current text-yellow-500"/>
                                    <StarIcon tw="stroke-current text-yellow-500"/>
                                    <StarIcon tw="stroke-current text-yellow-500"/>
                                    <StarIcon tw="stroke-current text-yellow-500"/>
                                    <StarIcon tw="stroke-current text-gray-500"/>
                                    </>
                        if (rating===5)
                            return  <>
                                    <StarIcon tw="stroke-current text-yellow-500"/>
                                    <StarIcon tw="stroke-current text-yellow-500"/>
                                    <StarIcon tw="stroke-current text-yellow-500"/>
                                    <StarIcon tw="stroke-current text-yellow-500"/>
                                    <StarIcon tw="stroke-current text-yellow-500"/>
                                    </>
                        else
                            return  <>
                                    <StarIcon tw="stroke-current text-gray-500"/>
                                    <StarIcon tw="stroke-current text-gray-500"/>
                                    <StarIcon tw="stroke-current text-gray-500"/>
                                    <StarIcon tw="stroke-current text-gray-500"/>
                                    <StarIcon tw="stroke-current text-gray-500"/>
                                    </>
                    })()
                }
            </div>
            <div tw="flex flex-row">
                <button onClick={setRating(1)}>1</button>
                <button onClick={setRating(2)}>2</button>
                <button onClick={setRating(3)}>3</button>
                <button onClick={setRating(4)}>4</button>
                <button onClick={setRating(5)}>5</button>
            </div>
            <button>Submit Rating</button>
        </div>
    );
};