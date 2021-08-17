import React from 'react';
import tw from "twin.macro";

export default function Footer() {

    return(
        <div tw="h-96 w-full grid place-items-center">
            <div tw="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 bg-gray-600 rounded-lg w-11/12">
                <div tw="p-4 ml-4 my-4 border-r border-gray-400">
                    <h1 tw="font-display font-bold xl:text-4xl text-2xl text-green-600">Reconnect</h1>
                    <h1 tw="font-display font-medium">315 S. Allen Street</h1>
                    <h1 tw="font-display font-medium">Suit #321</h1>
                    <h1 tw="font-display font-medium">State College, PA 16801</h1>
                </div>
                <div tw="p-4 ml-4 my-4 border-r border-gray-400">
                    <h1 tw="font-display font-bold text-white">Company</h1>
                    <h1 tw="font-display font-medium">About Us</h1>
                </div>
                <div tw="p-4 ml-4 my-4 border-r border-gray-400">
                    <h1 tw="font-display font-bold text-white">Further Information</h1>
                    <h1 tw="font-display font-medium">Terms Conditions</h1>
                    <h1 tw="font-display font-medium">Privacy Policy</h1>
                </div>
                <div tw="p-4 ml-4 my-4 border-r border-gray-400">
                    <h1 tw="font-display font-bold text-white">Follow Us</h1>
                    <h1 tw="font-display font-medium">LinkedIn</h1>
                    <h1 tw="font-display font-medium">Twitter</h1>
                </div>
                <div tw="p-4 ml-4 mr-4 my-4">
                    <h1 tw="font-display font-bold text-white">Get Started</h1>
                    <h1 tw="font-display font-medium">Login</h1>
                    <h1 tw="font-display font-medium">Signup</h1>
                </div>
            </div>
        </div>
    );
};
