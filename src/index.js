'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined;

var SKILL_NAME = "arizona's fun facts";
var GET_FACT_MESSAGE = "Here's your interesting fact: ";
var HELP_MESSAGE = "You can say tell me a fact about Arizona, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "How can I help you?";
var STOP_MESSAGE = "Have a great day!";

var data = [
    "The Arizona trout is found only in Arizona.",
    "Arizona leads the nation in copper production.",
    "The amount of copper on the roof of the Capitol building is equivalent to 4,800,000 pennies.",
    "The saguaro cactus blossom is the official state flower",
    "The saguaro cactus is the largest American cactus.",
    "The Palo verde is the official state tree. Its name means green stick and it blooms a brilliant yellow-gold in April or May.",
    "The battleship USS Arizona was named in honor of the state. It was commissioned in 1913 and launched in 1915 from the Brooklyn Navy Yard.",
    "World War II brought many military personnel to train at Luke and Thunderbird fields in Glendale.",
    "In 1926, the Southern Pacific Railroad connected Arizona with the eastern states.",
    "The Arizona tree frog is the state official amphibian. The frog is actually between three-quarter to two inches long.",
    "The colors blue and gold are the official state colors.",
    "Four Corners is noted as the spot in the United States where a person can stand in four states at the same time.",
    "The age of a saguaro cactus is determined by its height.",
    "Grand Canyon's Flaming Gorge got its name for its blazing red and orange colored, twelve-hundred-foot-high walls.",
    "The world's largest solar telescope is located at Kitts Peak National Observatory in the city of Sells.",
    "Turquoise is the official state gemstone. The blue-green stone has a somewhat waxy surface and can be found throughout the state."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};
