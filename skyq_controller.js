"use strict";

var SkyRemote = require('sky-remote');
var remoteControl = new SkyRemote('192.168.2.38', SkyRemote.SKY_Q);

module.exports.onButtonPressed = function onButtonPressed(name) {
  console.log(`[CONTROLLER] ${name} button pressed`);

var commandList = [
{A:'POWER ON',B:'sky'}, 
{A:'POWER OFF',B:'power'},
{A:'CURSOR ENTER',B:'select'}, 
{A:'BACK',B:'backup'}, 
{A:'EXIT',B:'dismiss'}, 
{A:'CHANNEL UP',B:'channelup'}, 
{A:'CHANNEL DOWN',B:'channeldown'}, 
{A:'SMART HUB',B:'interactive'}, 
{A:'MY APPS',B:'sidebar'}, 
{A:'OPTIONS',B:'help'}, 
{A:'SERVICES',B:'services'}, 
{A:'SEARCH',B:'search'}, 
{A:'GUIDE',B:'tvguide'}, 
{A:'HOME',B:'home'},
{A:'MENU',B:'home'}, 
{A:'INFO',B:'i'}, 
{A:'TELETEXT',B:'text'}, 
{A:'CURSOR UP',B:'up'}, 
{A:'CURSOR DOWN',B:'down'}, 
{A:'CURSOR LEFT',B:'left'}, 
{A:'CURSOR RIGHT',B:'right'}, 
{A:'FUNCTION RED',B:'red'}, 
{A:'FUNCTION GREEN',B:'green'}, 
{A:'FUNCTION YELLOW',B:'yellow'}, 
{A:'FUNCTION BLUE',B:'blue'}, 
{A:'DIGIT 0',B:'0'}, 
{A:'DIGIT 1',B:'1'}, 
{A:'DIGIT 2',B:'2'}, 
{A:'DIGIT 3',B:'3'}, 
{A:'DIGIT 4',B:'4'}, 
{A:'DIGIT 5',B:'5'}, 
{A:'DIGIT 6',B:'6'}, 
{A:'DIGIT 7',B:'7'}, 
{A:'DIGIT 8',B:'8'}, 
{A:'DIGIT 9',B:'9'}, 
{A:'PLAY',B:'play'}, 
{A:'PAUSE',B:'pause'}, 
{A:'STOP',B:'stop'}, 
{A:'RECORD',B:'record'}, 
{A:'FORWARD',B:'fastforward'}, 
{A:'REVERSE',B:'rewind'}, 
{A:'BOX OFFICE',B:'boxoffice'}, 
{A:'LIVE',B:'backup'},
{A:'MY RECORDINGS',B:'tvguide'},
{A:'SKY',B:'sky'},
{A:'SKIP SECONDS BACKWARD',B:['up','left','select']},
{A:'SKIP SECONDS FORWARD',B:['up','right','select']}
];

var commandStr = commandList.filter((commStr) => commStr.A === name);
if (typeof commandStr != undefined) {
 
 remoteControl.press(commandStr[0].B, function(err) {
    if (err) {
      console.log('Woah! Something went wrong. Cry time.');
      console.error(err)
    } else {
      console.log('I just pressed the : ' + commandStr[0].B);
    }});
} else {
   console.log('no command found for : ' + name);
}; 
}

