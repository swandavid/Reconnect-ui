import React from 'react';
import tw from "twin.macro";
import { MailIcon } from '@heroicons/react/outline'
import { ReactComponent as Linkedin } from '../images/linkedin.svg'; //ImportingSVG
import RachelLiImg from "../images/team-profile-pics/rachel-li.jpg";

const Rachel = () => {

    return(
            <div tw="grid justify-items-center rounded-xl">
                <div tw="h-56 w-56 rounded-full overflow-hidden my-5">
                    <img src={RachelLiImg} tw=""/>
                </div>
                <h1 tw="font-display font-semibold text-lg">Rachel Li</h1>
                <h1 tw="font-display font-semibold text-lg text-green-600">Marketing Lead</h1>
                <div tw="my-2 flex flex-row">
                    <a tw="w-6 h-6 mx-2" href={"https://www.linkedin.com/in/rachel-li-664a35159/"} target="_blank">
                        <Linkedin tw="fill-current text-blue-500"/>
                    </a>
                    <a tw="w-6 h-6 mx-2" href={"mailto:"}>
                        <MailIcon tw="stroke-current text-black"/>
                    </a>
                </div>
            </div>
        );
    };
    
export default Rachel;
    