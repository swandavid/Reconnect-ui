import React from 'react';
import tw from "twin.macro";
import Rating from './Rating';
const MainContainer = tw.div`w-full h-20 bg-green-800 grid grid-cols-3`;

export default function ActivityLogEntry() {

    var activity = "Activity goes here";
    var dateOfActivity = "Date goes here";

    return (
        <MainContainer>
            <div tw="grid place-items-center w-full">
                <h1 tw="font-display font-semibold">{dateOfActivity}</h1>
            </div>
            <div tw="grid place-items-center w-full">
                <h1 tw="font-display font-semibold">{activity}</h1>
            </div>
            <Rating/>
        </MainContainer>
    )
}
