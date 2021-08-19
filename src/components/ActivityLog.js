import React from 'react'
import tw from "twin.macro";
import ActivityLogEntry from './ActivityLogEntry';

const MainContainer = tw.div`w-full h-screen flex flex-col place-items-center`;

export default function ActivityLog() {
    return (
        <MainContainer>
            <div tw="w-3/4 h-20 bg-gray-300 grid grid-cols-3">
                <div tw="grid place-items-center">
                    <h1 tw="font-display font-semibold text-xl text-black">Date</h1>
                </div>
                <div tw="grid place-items-center">
                    <h1 tw="font-display font-semibold text-xl text-black">Activity</h1>
                </div>
                <div tw="flex items-center">
                    <h1 tw="font-display font-semibold text-xl text-black">Rating</h1>
                </div>
            </div>
            <div tw="w-3/4">
                <ActivityLogEntry/>
                <ActivityLogEntry/>
                <ActivityLogEntry/>
                <ActivityLogEntry/>
                <ActivityLogEntry/>
                <ActivityLogEntry/>
                <ActivityLogEntry/>
            </div>
        </MainContainer>
    )
}