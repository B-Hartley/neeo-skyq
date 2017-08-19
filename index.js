'use strict';
const neeoapi = require('neeo-sdk');
//SkyQ
const skyq_controller = require('./skyq_controller');

console.log('NEEO SDK');
console.log('--------');

const skyQTCP = neeoapi.buildDevice('Sky Q')

  .setManufacturer('Sky')
  .addAdditionalSearchToken('SkyQ TCP')
  .setType('DVB')
  .addButtonGroup('Power')
  .addButtonGroup('Color Buttons')
  .addButtonGroup('Numpad')
  .addButton({name: 'SKY', label: 'Sky'})
  .addButton({name: 'GUIDE', label: 'Guide'})
  .addButton({name: 'INFO', label: 'Info'})
  .addButton({name: 'SEARCH', label: 'Search'})
  .addButton({name: 'PLAY', label: 'Play'})
  .addButton({name: 'PAUSE', label: 'Pause'})
  .addButton({name: 'RECORD', label: 'Record'})
  .addButtonGroup('Transport Skip')
  .addButtonGroup('Transport Search')
  .addButton({name:'BOX OFFICE', label: 'Box Office'})
  .addButtonGroup('Channel Zapper')
  .addButtonGroup('Menu and Back')
  .addButtonGroup('Controlpad')
  .addButtonHander(skyq_controller.onButtonPressed);

function startSdkExample(brain) {
  console.log('- Start server');
  neeoapi.startServer({
    brain,
    port: 6336,
    name: 'simple-adapter-one',
    devices: [wemoTCP, denonAVRTCP, skyQTCP]
  })
  .then(() => {
    console.log('# READY! use the NEEO app to search for "SkyQ TCP".');
  })
  .catch((error) => {
    //if there was any error, print message out to console
    console.error('ERROR!', error.message);
    process.exit(1);
  });
}

const brainIp = process.env.BRAINIP;
if (brainIp) {
  console.log('- use NEEO Brain IP from env variable', brainIp);
  startSdkExample(brainIp);
} else {
  console.log('- discover one NEEO Brain...');
  neeoapi.discoverOneBrain()
    .then((brain) => {
      console.log('- Brain discovered:', brain.name);
      startSdkExample(brain);
    });
}
