const app        = require('express')();
const DiscordRPC = require('discord-urpc');

const supportedApps = {
  niconico: '547484924312158210',
  bbciplayer: '547850771765526548'
};

const setStatus = (title, uploader, service, timestamp) => {
  return {
    pid: process.pid,
    activity: {
      details: title, //wessel's basement
      state: uploader,
      timestamps: {
        start: timestamp
      },
      assets: {
        large_image: service,
        large_text: service
      },
      instance: false
    }
  };
}; 

app.get('/setRPC', (req, res) => {
  if (req.query.disable) return process.exit();
  try {
    const timestamp = new Date().getTime();
    const uRPC = new DiscordRPC({ clientID: supportedApps[req.query.service], debug: false });
    if (req.query.disable) return uRPC.close();
    uRPC.on('ready', () => {
        uRPC.send('SET_ACTIVITY', setStatus(req.query.title, req.query.uploader, req.query.service, timestamp));
     });
  } catch (ex) {
    if (ex instanceof TypeError) throw ex;
    else return console.log('FriendlyError' + ex);
  }
});


app.listen(8080, () => console.log('Listening on port 8080!'));