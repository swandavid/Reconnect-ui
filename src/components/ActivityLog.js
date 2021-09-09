import React from 'react'
import tw from "twin.macro";
import ActivityLogEntry from './ActivityLogEntry';

const Content = tw.div`w-full mb-20 grid place-items-center`;

export default function ActivityLog({ toggleTask, increaseXP }) {

    var activity;
    var dateOfActivity;

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
                        <ActivityLogEntry toggleTask={toggleTask} increaseXP={increaseXP} activity={"Grab a free cup of coffee from the PSU Coffee Club"} dateOfActivity={"9/2/21"}/>
                        <ActivityLogEntry toggleTask={toggleTask} increaseXP={increaseXP} activity={"Take a class at Yoga Lab"} dateOfActivity={"8/6/21"}/>
                        <ActivityLogEntry toggleTask={toggleTask} increaseXP={increaseXP} activity={"Head to a Spikes game with a family member"} dateOfActivity={"7/5/21"}/>
                        <ActivityLogEntry toggleTask={toggleTask} increaseXP={increaseXP} activity={"Play a game of minigolf with your friends in Happy Valley"} dateOfActivity={"7/4/21"}/>
                        <ActivityLogEntry toggleTask={toggleTask} increaseXP={increaseXP} activity={"Take a snowboarding lesson at Tussey Mountain with a friend!"} dateOfActivity={"1/2/21"}/>
                    </div>
        </Content>
    )
}