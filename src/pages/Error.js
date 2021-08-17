import React from 'react';
import tw from "twin.macro";

const Error = (props) => {

    const {
    } = props;

    return(
        <div tw="grid place-items-center">
            <h1 tw="text-3xl font-display font-semibold">Oops!! Page not found!</h1>
        </div>
        );
    };
    
export default Error;
    