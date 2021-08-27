import React from 'react'
import tw from "twin.macro";
import ActivityLogEntry from './ActivityLogEntry';
import { Link } from "react-router-dom"
import { UserCircleIcon, ClipboardCheckIcon, ClipboardListIcon, LogoutIcon, UserGroupIcon } from '@heroicons/react/outline'

const MainContainer = tw.div`w-full h-screen grid grid-cols-2 items-center`;

export default function ActivityLog() {
    return (
        <MainContainer>
            <div tw="grid justify-items-start w-full h-full">
                    <div tw="bg-green-800 w-1/3 h-full grid text-white">
                        <Link to="/home">
                        <button tw="hover:border-l-4 hover:border-white hover:bg-green-700 flex flex-row items-center w-full">
                            <ClipboardListIcon tw="ml-4 w-full md:w-1/2"/>
                            <h1 tw="font-display font-semibold ml-2 text-lg md:w-1/2">Get Activity</h1>
                        </button>
                        </Link>
                        <Link to="/activity-log">
                        <button tw="hover:border-l-4 hover:border-white hover:bg-green-700 flex flex-row items-center w-full h-full">
                            <ClipboardCheckIcon tw="w-6 ml-4"/>
                            <h1 tw="font-display font-semibold ml-2 text-lg">Activity Log</h1>
                        </button>
                        </Link>
                        <Link to="/profile">
                        <button tw="hover:border-l-4 hover:border-white hover:bg-green-700 flex flex-row items-center w-full h-full">
                            <UserCircleIcon tw="w-6 ml-4"/>
                            <h1 tw="font-display font-semibold ml-2 text-lg">Profile</h1>
                        </button>
                        </Link>
                        <Link to="/about">
                            <button tw="hover:border-l-4 hover:border-white hover:bg-green-700 flex flex-row items-center w-full h-full">
                                <UserGroupIcon tw="w-6 ml-4"/>
                                <h1 tw="font-display font-semibold ml-2 text-lg">About Us</h1>
                            </button>
                        </Link>
                        <button tw="hover:border-l-4 hover:border-white hover:bg-green-700 flex flex-row items-center w-full h-full">
                            <LogoutIcon tw="w-6 ml-4"/>
                            <h1 tw="font-display font-semibold ml-2 text-lg">Logout</h1>
                        </button>
                </div>
            </div>
            <div>
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
            </div>
        </MainContainer>
    )
}