import React from 'react';
import tw from "twin.macro";

import { MenuIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom';


const NavBar = (props) => {

    const {
    } = props;

    return(
        <div tw="grid grid-cols-2 md:grid-cols-3 h-20 w-full border-b-4 border-gray-800 items-center">
            <Link to="/home">
                <h1 tw="font-display font-bold text-2xl text-green-800 ml-5">Reconnect</h1>
            </Link>
            <div tw="col-start-2 grid grid-cols-3 place-items-center invisible lg:visible">
                <h1 tw="font-display font-semibold text-green-800">How to Play</h1>
                <h1 tw="font-display font-semibold text-green-800">Our Mission</h1>
                <h1 tw="font-display font-semibold text-green-800">Our Team</h1>
            </div>
            <div tw="col-start-3 flex flex-row-reverse mr-5">
                <div tw="grid place-items-center lg:hidden">
                    <MenuIcon tw="w-8 h-8"/>
                </div>
                <div tw="bg-white invisible lg:visible">
                    <Link to="/auth">
                        <button tw="m-2 bg-transparent font-bold text-black hover:bg-gray-600 hover:bg-opacity-25 py-2 px-4 rounded-xl">Login</button>
                    </Link>
                    <Link to="/auth">
                        <button tw="m-2 bg-green-700 rounded-xl py-2 px-4 hover:bg-green-800 font-bold text-white">Sign Up</button>
                    </Link>                    
                </div>
            </div>
        </div>
        );
    };
    
export default NavBar;
    