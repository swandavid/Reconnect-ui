import React from 'react';
import { Link } from 'react-router-dom';
import tw from "twin.macro";

// Team images
import BaileyImg from "images/team-profile-pics/bailey-dismukes.jpg";
import ElyseImg from "images/team-profile-pics/elyse-johnson.jpg";
import CaylaImg from "images/team-profile-pics/cayla-pun.jpg";
import ClarissaImg from "images/team-profile-pics/clarissa-pun.jpg";
import DavidImg from "images/team-profile-pics/david-swan.jpg";
import ShrutiImg from "images/team-profile-pics/shruti-mahadevan.jpg";
import TammyImg from "images/team-profile-pics/tammy-stugan.jpg";
import JuliaImg from "images/team-profile-pics/julia-dermody.jpg";
import RachelImg from "images/team-profile-pics/rachel-li.jpg";
import TaylorImg from "images/team-profile-pics/taylor-hutsell.jpg";

const MainContainer = tw.div`h-full lg:h-screen w-full bg-white`;

export default function TeamLanding() {

    return(
        <MainContainer>
            <div tw="h-20 w-full grid place-items-center bg-green-900 mb-8">
                <h1 tw="text-3xl font-display font-semibold text-white">Our Team</h1>
            </div>
            <div tw="place-self-start ml-10 w-full h-3/12">
                <h1 tw="text-2xl font-display font-semibold">Founders</h1>
                <div tw="grid md:flex md:flex-row">
                    <div className="Elyse" tw="flex flex-row items-center">
                        <div tw="h-16 w-16 rounded-full overflow-hidden my-5">
                            <img src={ElyseImg} tw="" alt=""/>
                        </div>
                        <div tw="ml-2">
                            <h1 tw="font-display font-semibold text-lg">Elyse</h1>
                            <h1 tw="font-display font-semibold text-lg text-green-600">Team Lead</h1>
                        </div>
                    </div>
                    <div className="Bailey" tw="flex flex-row items-center">
                        <div tw="h-16 w-16 rounded-full overflow-hidden my-5 md:ml-10">
                            <img src={BaileyImg} tw="" alt=""/>
                        </div>
                        <div tw="ml-2">
                            <h1 tw="font-display font-semibold text-lg">Bailey</h1>
                            <h1 tw="font-display font-semibold text-lg text-green-600">Backend Dev</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div tw="place-self-start ml-10 w-full h-3/12">
                <h1 tw="text-2xl font-display font-semibold">Technical Team</h1>
                <div tw="grid md:grid-cols-2 lg:flex lg:flex-row">
                    <div className="Clarissa" tw="flex flex-row items-center">
                        <div tw="h-16 w-16 rounded-full overflow-hidden my-5">
                            <img src={ClarissaImg} tw="" alt=""/>
                        </div>
                        <div tw="ml-2">
                            <h1 tw="font-display font-semibold text-lg">Clarissa</h1>
                            <h1 tw="font-display font-semibold text-lg text-green-600">Frontend Dev</h1>
                        </div>
                    </div>
                    <div className="Cayla" tw="flex flex-row items-center">
                        <div tw="h-16 w-16 rounded-full overflow-hidden my-5 md:ml-10">
                            <img src={CaylaImg} tw="" alt=""/>
                        </div>
                        <div tw="ml-2">
                            <h1 tw="font-display font-semibold text-lg">Cayla</h1>
                            <h1 tw="font-display font-semibold text-lg text-green-600">Backend Dev</h1>
                        </div>
                    </div>
                    <div className="David" tw="flex flex-row items-center">
                        <div tw="h-16 w-16 rounded-full overflow-hidden my-5 lg:ml-10">
                            <img src={DavidImg} tw="" alt=""/>
                        </div>
                        <div tw="ml-2">
                            <h1 tw="font-display font-semibold text-lg">David</h1>
                            <h1 tw="font-display font-semibold text-lg text-green-600">Frontend Tech Lead</h1>
                        </div>
                    </div>
                    <div className="Shruti" tw="flex flex-row items-center">
                        <div tw="h-16 w-16 rounded-full overflow-hidden my-5 md:ml-10">
                            <img src={ShrutiImg} tw="" alt=""/>
                        </div>
                        <div tw="ml-2">
                            <h1 tw="font-display font-semibold text-lg">Shruti</h1>
                            <h1 tw="font-display font-semibold text-lg text-green-600">Backend Dev</h1>
                        </div>
                    </div>
                    <div className="Tammy" tw="flex flex-row items-center">
                        <div tw="h-16 w-16 rounded-full overflow-hidden my-5 lg:ml-10">
                            <img src={TammyImg} tw="" alt=""/>
                        </div>
                        <div tw="ml-2">
                            <h1 tw="font-display font-semibold text-lg">Tammy</h1>
                            <h1 tw="font-display font-semibold text-lg text-green-600">Backend Tech Lead</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div tw="place-self-start ml-10 w-full h-3/12">
                <h1 tw="text-2xl font-display font-semibold">Marketing Team</h1>
                <div tw="grid md:grid-cols-2 lg:flex lg:flex-row">
                    <div className="Julia" tw="flex flex-row items-center">
                        <div tw="h-16 w-16 rounded-full overflow-hidden my-5">
                            <img src={JuliaImg} tw="" alt=""/>
                        </div>
                        <div tw="ml-2">
                            <h1 tw="font-display font-semibold text-lg">Julia</h1>
                            <h1 tw="font-display font-semibold text-lg text-green-600">Marketing</h1>
                        </div>
                    </div>
                    <div className="Rachel" tw="flex flex-row items-center">
                        <div tw="h-16 w-16 rounded-full overflow-hidden my-5 md:ml-10">
                            <img src={RachelImg} tw="" alt=""/>
                        </div>
                        <div tw="ml-2">
                            <h1 tw="font-display font-semibold text-lg">Rachel</h1>
                            <h1 tw="font-display font-semibold text-lg text-green-600">Public Relations</h1>
                        </div>
                    </div>
                    <div className="Taylor" tw="flex flex-row items-center">
                        <div tw="h-16 w-16 rounded-full overflow-hidden my-5 lg:ml-10">
                            <img src={TaylorImg} tw="" alt=""/>
                        </div>
                        <div tw="ml-2">
                            <h1 tw="font-display font-semibold text-lg">Taylor</h1>
                            <h1 tw="font-display font-semibold text-lg text-green-600">Marketing Lead</h1>
                        </div>
                    </div>
                </div>
            </div>
        </MainContainer>
    );
};
    