# MediaRPC
Discord RPC for some online video/audio sites, BETA (doesn't work properly yet!)

## Supported Sites
* [niconico](https://nicovideo.jp)
* [BBC iPlayer](https://www.bbc.co.uk/iplayer)

## Installation 
### Requirements
* Tampermonkey (or similar extension)
* Node.js (and PM2 installed globally)
* Discord Desktop

### Node Process
1. ``git clone https://github.com/ohlookitsderpy/MediaRPC`` (or just click **Clone or download** -> **Download ZIP**)
2. ``cd MediaRPC``
3. ``yarn install`` or ``npm install``
4. ``pm2 start index.js --name MediaRPC``

### Userscript
1. Go to https://github.com/ohlookitsderpy/MediaRPC/raw/master/mediarpc.user.js
2. Click **install**
