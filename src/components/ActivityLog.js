import React from 'react'
import tw from "twin.macro";
import ActivityLogEntry from './ActivityLogEntry';
import { Link } from "react-router-dom"
import { LocationMarkerIcon } from '@heroicons/react/outline'
import HomeSideBar from './HomeSideBar';
import logo from "../images/reconnect-r-logo.jpg";

const MainContainer = tw.div`select-none min-h-screen bg-blue-200 text-green-800 flex flex-col justify-items-center items-center`;
const TopContainer = tw.div`w-full mt-5 grid grid-cols-2 md:grid-cols-3`;
const Content = tw.div`w-full grid lg:flex lg:flex-row h-full mt-20`;

export default function ActivityLog() {
    return (
        <MainContainer>
            <TopContainer>
                <div tw="flex flex-row place-items-center ml-2">
                    <img tw="select-none h-12 border-2 border-green-800" src={logo}/>
                    <h1 tw="font-display font-bold text-2xl ml-5 select-none">Reconnect</h1>
                </div>
            </TopContainer>
            <Content>
                <div tw="lg:w-1/3 w-full">
                    <HomeSideBar/>
                </div>
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