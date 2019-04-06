// Quick and dirty Script to auto switch to VCS using OBS websockets as OBS Can't detect it VCS inside the auto scene switcher
const OBSWebSocket = require('obs-websocket-js'); // npm install obs-websocket-js
const cmd = require('node-cmd'); // npm install node-cmd

const obs = new OBSWebSocket();

obs.connect({ address: 'localhost:4444', password: 'test' }).catch((err) => {

}).then(() => {
  
});


setInterval(()=> {


    cmd.get('xdotool getwindowfocus getwindowname', (err, data, stderr) => {
        
        let w = false


        // Configure your scenes here
        if (data.includes('Visual Studio Code')) {
            w = 'VCS';
        } 

        if (data.includes('Firefox')) {
            w = 'Firefox';
        } 

        if (w) {
          obs.send('SetCurrentScene', {
               'scene-name': w
          });
        }   

    });


    }, 1000);
