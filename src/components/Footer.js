import React from 'react';
import tw from "twin.macro";
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

const MainContainer = tw.div`h-full w-full grid place-items-center bg-gray-400`;

export default function Footer() {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return(
        <MainContainer>
            <div tw="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 rounded-lg w-11/12">
                <div tw="p-4 ml-4 my-4 border-r border-gray-400">
                    <Link tw="font-display font-bold xl:text-4xl text-2xl text-green-600" onClick={toggleHome}>Reconnect</Link>
                    <h1 tw="font-display font-medium">315 S. Allen Street</h1>
                    <h1 tw="font-display font-medium">Suit #321</h1>
                    <h1 tw="font-display font-medium">State College, PA 16801</h1>
                </div>
                <div tw="p-4 ml-4 my-4 border-r border-gray-400">
                    <h1 tw="font-display font-bold text-white">Company</h1>
                    <Link tw="font-display font-medium" to="/about">About Us</Link>
                </div>
                <div tw="p-4 ml-4 my-4 border-r border-gray-400">
                    <h1 tw="font-display font-bold text-white">Further Information</h1>
                    <h1 tw="font-display font-medium">Terms Conditions</h1>
                    <h1 tw="font-display font-medium">Privacy Policy</h1>
                </div>
                <div tw="p-4 ml-4 my-4 border-r border-gray-400 grid">
                    <h1 tw="font-display font-bold text-white">Follow Us</h1>
                    <a tw="font-display font-medium" href={"https://www.linkedin.com/company/reconnectpsu/"} target="_blank" rel="noreferrer">LinkedIn</a>
                    <a tw="font-display font-medium" href={"https://www.instagram.com/reconnect_psu/"} target="_blank" rel="noreferrer">Instagram</a>
                </div>
                <div tw="p-4 ml-4 mr-4 my-4">
                    <h1 tw="font-display font-bold text-white">Get Started</h1>
                    <Link to="/login">
                        <h1 tw="font-display font-medium">Login</h1>
                    </Link>
                    <Link to="/signup">
                        <h1 tw="font-display font-medium">Signup</h1>
                    </Link>
                </div>
            </div>
        </MainContainer>
    );
};
