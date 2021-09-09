import React from 'react'
import tw from "twin.macro";
import ActivityLogEntry from './ActivityLogEntry';

const Content = tw.div`w-full mb-20 grid place-items-center`;

export default function ActivityLog({ toggleTask }) {
    return (
        <Content>
                    <div tw="lg:w-3/4 w-full h-20 text-green-800 grid grid-cols-3">
                        <div tw="grid place-items-center">
                            <h1 tw="font-display font-semibold text-sm lg:text-xl">Date</h1>
                        </div>
                        <div tw="grid place-items-center">
                            <h1 tw="font-display font-semibold text-sm lg:text-xl">Activity</h1>
                        </div>
                        <div tw="flex items-center">
                            <h1 tw="font-display font-semibold text-sm lg:text-xl">Rating</h1>
                        </div>
                    </div>
                    <div tw="lg:w-3/4 w-full">
                        <ActivityLogEntry toggleTask={toggleTask}/>
                        <ActivityLogEntry toggleTask={toggleTask}/>
                        <ActivityLogEntry toggleTask={toggleTask}/>
                        <ActivityLogEntry toggleTask={toggleTask}/>
                        <ActivityLogEntry toggleTask={toggleTask}/>
                        <ActivityLogEntry toggleTask={toggleTask}/>
                        <ActivityLogEntry toggleTask={toggleTask}/>
                    </div>
        </Content>
    )
}