import React from 'react';
import { Link } from 'react-router-dom';
import tw from "twin.macro";

const TeamLanding = (props) => {

    const {
    } = props;

    return(
        <div tw="h-screen w-full bg-white grid items-center justify-items-center">
            <h1 tw="text-3xl font-display font-semibold">Our Team</h1>
            <Link to="/about">
            <button tw="m-2 bg-green-700 rounded-xl py-2 px-4 hover:bg-green-800 font-bold text-white">About</button>
            </Link>
        </div>
        );
    };
    
export default TeamLanding;
    