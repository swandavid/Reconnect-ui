import React from 'react';
import tw from "twin.macro";
import Rating from './Rating';
const MainContainer = tw.div`w-full h-20 text-green-800 grid grid-cols-3`;

export default function ActivityLogEntry({toggleTask, activity, dateOfActivity}) {

    return (
        <MainContainer>
            <div tw="text-center w-full">
                <h1 tw="font-display font-semibold text-xs lg:text-base">{dateOfActivity}</h1>
            </div>
            <div tw="text-center w-full">
                <p tw="font-display font-semibold text-xs lg:text-base">{activity}</p>
            </div>
            <Rating toggleTask={toggleTask}/>
        </MainContainer>
    )
}
