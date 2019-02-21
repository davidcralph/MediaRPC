# MediaRPC
Discord RPC for some online video/audio sites

## Supported Sites
* [niconico](https://www.nicovideo.jp)
* [BBC iPlayer](https://www.bbc.co.uk/iplayer)
* [Newgrounds](https://www.newgrounds.com)

Want a site adding? Open an issue [here](https://github.com/ohlookitsderpy/MediaRPC/issues/new)!

## Installation 
### Requirements
* Tampermonkey (or similar extension)
* Node.js (and PM2 installed globally)
* Discord Desktop

### Node Process
1. ``git clone https://github.com/ohlookitsderpy/MediaRPC`` (or just click **Clone or download** -> **Download ZIP**)
2. ``cd MediaRPC``
3. ``yarn install`` or ``npm install`` (yarn best btw)
4. ``pm2 start index.js --name MediaRPC``

### Userscript
1. Go to https://github.com/ohlookitsderpy/MediaRPC/raw/master/mediarpc.user.js
2. Click **install**
