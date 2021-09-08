import React from 'react'
import tw from "twin.macro";
import ActivityLogEntry from './ActivityLogEntry';

const MainContainer = tw.div`w-full bg-blue-200 text-green-800 flex flex-col place-items-center`;
const Content = tw.div`w-full grid lg:flex lg:flex-row h-full mt-20`;

export default function ActivityLog() {
    return (
        <MainContainer>
            <Content>
                <div tw="w-full h-full">
                    <div tw="lg:w-3/4 w-full h-20 bg-green-800 text-white grid grid-cols-3">
                        <div tw="grid place-items-center">
                            <h1 tw="font-display font-semibold text-xl">Date</h1>
                        </div>
                        <div tw="grid place-items-center">
                            <h1 tw="font-display font-semibold text-xl">Activity</h1>
                        </div>
                        <div tw="flex items-center">
                            <h1 tw="font-display font-semibold text-xl">Rating</h1>
                        </div>
                    </div>
                    <div tw="lg:w-3/4 w-full text-white">
                        <ActivityLogEntry/>
                        <ActivityLogEntry/>
                        <ActivityLogEntry/>
                        <ActivityLogEntry/>
                        <ActivityLogEntry/>
                        <ActivityLogEntry/>
                        <ActivityLogEntry/>
                    </div>
                </div>
            </Content>
        </MainContainer>
    )
}