// import packages
const express = require("express");
const app = express();
const cors = require("cors");
const http = require("https");
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

// apply packages/imports to this file
app.use(cors());
app.use(express.json());

let activityCode = [];
let activityOptions = [];
var dbToken;
//getToken();
// IBM keys and credentials
const apiKey = "6Jt_w9NPhz5a4IUKhkPRnBqoFynpejEjhvnn0moNqbL1";
const apiURL = "https://api.us-south.assistant.watson.cloud.ibm.com/instances/fdc2630a-17c1-45e0-9358-7f50db4315f9";
const assistantID = "1897f7da-d777-49d0-ad51-aa686641bfb9";
const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

// connecting to the assistant
const assistant = new AssistantV2({
  version: '2020-09-24',
  authenticator: new IamAuthenticator({
    apikey: apiKey,
  }),
    serviceUrl: apiURL,
});
const params = {
    assistantId: assistantID,
};

//IAM tokens only last an hour
getToken();
function getToken(){
    console.log("uhh");

    let options = {
        "method": "POST",
        "hostname": "bpe61bfd0365e9u4psdglite.db2.cloud.ibm.com",
        "port": null,
        "path": "/dbapi/v4/auth/tokens",
        "headers": {
            "content-type": "application/json",
            "x-deployment-id": "crn:v1:bluemix:public:dashdb-for-transactions:us-south:a/4df53a8e9e324c78916a8dc776accad3:90465ff2-ef4f-4e7f-a9ac-29a931cb761e::"
    }};
        
    let req = http.request(options, function (res) {
        let chunks = [];
        console.log("hi");
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res.on("end", function () {
            let body = Buffer.concat(chunks);
            dbToken = JSON.parse(body).token;
            console.log(body.toString()); 
           // collectData1();
        });
    });

    req.write(JSON.stringify({ userid: 'gdk29717', password: '3FmH6NLemN561Utr'}));
    //req.write(JSON.stringify({ command: 'select' }));
    req.end(); 
}

function callAPI(path, param){
    //add param into parameters
    //replace todo -> param
    let todo = {
        userId: "hi"
    };
    fetch(`https://6e2cdc0b.us-south.apigw.appdomain.cloud/reconnectapi/${path}`, {
        method: 'POST',
        body: JSON.stringify(param),
        headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
    .then(json => console.log(json));
}

app.listen(5000, () => {
    console.log("server listening on port 5000");
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.json())

console.log("here we go ")
app.post(`/createaccount/:uid/:email`, (req, res) => {
    console.log("SERVER SIDE : index.js/createaccount");
    console.log("request");
    console.log(req);
    var param = {
        "userId": req.params.uid,
        "email": req.params.email
    }
    callAPI("adduser", param);
    res.send(`added to database ${param}`)
});

app.get("/getactivities", async (req, res) => {
    const msg = getToken();
    res.send(msg);
    console.log(`server response: ${msg}`);
});
app.post("/addfeedback", async (req, res) => {
    var param = {
        userId: 123,
        activityId: 234,
        sessionId: 456,
        rating: 5,
        completing: 1
    };
    callAPI('addfeedback', param);
});
app.get("/gethistory", async (req, res) => {
    var param = {
        userId: 123
    };
    callAPI('gethistory');
});