import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import tw from "twin.macro";

const ChatbotContainer = tw.div``;

export default function Chatbot(){

    var el = document.querySelector('.chatbot');
    const chatbot = () => {
        window.watsonAssistantChatOptions = {
            integrationID: "0bca7870-6bd7-4d80-8a56-6635dcf3b431", // The ID of this integration.
            region: "us-south", // The region your integration is hosted in.
            serviceInstanceID: "ca70ca9a-7e6e-40bd-a663-c3bed2f8d8db", // The ID of your service instance
            onLoad: function(instance) { instance.render(); },
            element: el,
            openChatByDefault: true,
            showLauncher: false,
        };
    }
    chatbot();

    return (
        <div className="chatbot" tw="h-144 w-full bg-gradient-to-br from-blue-200 via-green-200 to-green-600 rounded-lg">
        </div>
    );
}