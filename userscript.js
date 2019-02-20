// ==UserScript==
// @name         MediaRPC
// @namespace    https://derpyenterprises.org
// @version      0.1
// @description  Discord RPC for some online video/audio sites
// @author       ohlookitsderpy
// @match        https://www.nicovideo.jp/watch/*
// @match        https://www.bbc.co.uk/iplayer/episode/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    var HttpClient = function () {
        this.get = (aUrl, aCallback) => {
            var anHttpRequest = new XMLHttpRequest();
            anHttpRequest.onreadystatechange = () => {
                if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200) aCallback(anHttpRequest.responseText)
            }
            anHttpRequest.open('GET', aUrl, true);
            anHttpRequest.send(null);
        }
    }

    var client = new HttpClient();
    var service;
    var url;
    if (window.location.href.includes('nicovideo')) service = 'niconico';
    if (window.location.href.includes('bbc')) service = 'bbciplayer';

    if (service === 'niconico') url = `&title=${document.getElementsByClassName("VideoTitle")[0].innerHTML}&uploader=${document.getElementsByClassName("VideoOwnerInfo-pageLink")[0].innerHTML}`;
    if (service === 'bbciplayer') url = `&title=${document.getElementsByClassName("typo--bold play-cta__text__title")[0].innerHTML}&uploader=${document.getElementsByClassName("play-cta__text__subtitle")[0].innerHTML}`;


    window.onbeforeunload = function () {
        client.get(`http://127.0.0.1:8080/setRPC?service=${service}&disable=true`, (res) => {
            console.log('request sent');
        });
    };

    window.addEventListener('hashchange', function() {
        client.get(`http://127.0.0.1:8080/setRPC?service=${service}&disable=true`, (res) => {
            console.log('request sent');
        });
    });

    client.get(`http://127.0.0.1:8080/setRPC?service=${service}${url}`, (res) => {
        console.log('request sent');
    });
})();