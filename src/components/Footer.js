import React from 'react';
import tw from "twin.macro";
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import logo from "../images/r-logo.svg";

const MainContainer = tw.div`h-full w-full grid place-items-center bg-gray-400`;

export default function Footer() {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return(
        <MainContainer>
            <div tw="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 rounded-lg w-11/12">
                <div tw="p-4 ml-4 border-r border-gray-400">
                    <Link tw="" onClick={toggleHome}>
                        <div tw="flex h-10 w-48 bg-green-800">
                            <img tw="" src={logo}/>
                        </div>
                    </Link>
                    <h1 tw="font-display font-medium my-4 font-bold">psureconnect@gmail.com</h1>
                </div>
                <div tw="p-4 ml-4 my-2 border-r border-gray-400">
                    <h1 tw="font-display font-bold text-green-800 mb-2">Company</h1>
                    <Link tw="font-display font-medium" to="/about">About Us</Link>
                </div>
                <div tw="p-4 ml-4 my-2 border-r border-gray-400">
                    <h1 tw="font-display font-bold text-green-800 mb-2">Further Information</h1>
                    <h1 tw="font-display font-medium">Terms Conditions</h1>
                    <h1 tw="font-display font-medium">Privacy Policy</h1>
                </div>
                <div tw="p-4 ml-4 my-2 border-r border-gray-400 grid">
                    <h1 tw="font-display font-bold text-green-800 mb-2">Follow Us</h1>
                    <a tw="font-display font-medium" href={"https://www.linkedin.com/company/reconnectpsu/"} target="_blank" rel="noreferrer">LinkedIn</a>
                    <a tw="font-display font-medium" href={"https://www.instagram.com/reconnect_psu/"} target="_blank" rel="noreferrer">Instagram</a>
                </div>
                <div tw="p-4 ml-4 mr-4 my-2">
                    <h1 tw="font-display font-bold text-green-800 mb-2">Get Started</h1>
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
