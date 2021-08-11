import React from 'react';
import tw from "twin.macro";

import { ReactComponent as ReconnectLpRight } from '../images/reconnect-lp-right.svg'; //ImportingSVG

/*
Links:
illustrations link: https://themeisle.com/illustrations/
headless ui components: https://headlessui.dev/react/dialog
hero patterns: https://www.heropatterns.com/
team page idea (grid w/ large round images): https://tailwindui.com/components/marketing/sections/team-sections

TODO: 
    -> Get the svg of the leaf pattern to cover the background
*/

const Landing = (props) => {

    const {
    } = props;

    return(
        <div tw="max-h-screen flex flex-col justify-items-center items-center mx-10">
            <div tw="grid grid-cols-3 w-full p-4 border-b-4 border-gray-300">
                <div tw="flex flex-row items-baseline mt-2">
                <h1 tw="font-display font-bold text-2xl sm:text-2xl md:text-3xl text-green-800">Reconnect</h1>
                </div>
                <div tw="select-none col-start-4 mr-10">
                <button tw="m-2 bg-transparent font-bold text-black hover:bg-gray-600 hover:bg-opacity-25 py-2 px-4 rounded-xl">Signup</button>
                <button tw="m-2 bg-green-700 rounded-xl py-2 px-4 hover:bg-green-800 font-bold text-white">Login</button>
                </div>
            </div>
            <div tw="flex flex-row lg:w-1/2 xl:w-5/12 my-10 rounded-lg overflow-hidden">
               <div tw="xl:w-1/2 lg:w-1/2 sm:w-full flex flex-col items-center">
                    <h2 tw="font-bold text-5xl lg:text-3xl xl:text-4xl mt-20 text-green-800 font-display">Description</h2>
                    <p tw="mx-20 my-10">Blah blah Blah blah Blah blah Blah blah Blah blahBlah blah Blah blah Blah blah Blah blah Blah blah Blah blah Blah blah</p>
                    <div tw="select-none flex flex-row">
                    <button tw="m-2 bg-transparent font-bold text-black hover:bg-gray-600 hover:bg-opacity-25 py-2 px-4 rounded-xl">Team</button>
                    <button tw="m-2 bg-transparent font-bold text-black hover:bg-gray-600 hover:bg-opacity-25 py-2 px-4 rounded-xl">About</button>
                    </div>
                </div> 
                <div tw="bg-gray-300 xl:w-1/2 lg:w-1/2 sm:w-0 w-0">
                    <ReconnectLpRight tw="w-full"/>
                </div>
            </div>
        </div>
        );
    };
    
export default Landing;
    