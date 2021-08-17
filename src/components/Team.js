import React from 'react';
import tw from "twin.macro";
import { HomeIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom';

// Team
import Elyse from './team-components/Elyse';
import Bailey from './team-components/Bailey';
import Cayla from './team-components/Cayla';
import Clarissa from './team-components/Clarissa';
import David from './team-components/David';
import Julia from './team-components/Julia';
import Rachel from './team-components/Rachel';
import Shruti from './team-components/Shruti';
import Tammy from './team-components/Tammy';
import Taylor from './team-components/Taylor';

export default function Team() {

    return(
        <div tw="max-h-screen flex flex-col justify-items-center items-center mx-10">
            <div tw="grid grid-cols-3 w-full p-4 border-b-4 border-gray-300">
                <div tw="flex flex-row items-baseline mt-2">
                <Link to="/home">
                <h1 tw="font-display font-bold text-2xl sm:text-2xl md:text-3xl text-green-800">Reconnect</h1>
                </Link>
                </div>
                <div tw="select-none col-start-4 mr-10">
                <Link to="/home">
                <button tw="m-2 bg-transparent font-bold text-green-800 hover:text-black hover:bg-gray-600 hover:bg-opacity-25 py-2 px-2 rounded-xl">
                    <HomeIcon tw="h-8 w-8"/>                
                </button>
                </Link>
                </div>
            </div>
            <div tw="flex flex-col justify-items-center items-center w-11/12 mt-8">
                <h1 tw="font-display font-black text-4xl">Meet our team</h1>
                <h2 tw="font-display text-base italic text-green-600">"Building a healthy relationship with technology"</h2>
                <Elyse/>
                <div tw="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-10 w-full overflow-hidden">
                    <Bailey/>
                    <Cayla/>
                    <Shruti/>
                    <David/>
                    <Clarissa/>
                    <Taylor/>
                    <Julia/>
                    <Rachel/>
                    <Tammy/>
                </div>
            </div>
        </div>
    );
};

    