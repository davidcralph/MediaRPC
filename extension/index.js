// START https://stackoverflow.com/a/22076667 (slightly modified)
var HttpClient = function () {
    this.get = (aUrl, aCallback) => {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = () => {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200) aCallback(anHttpRequest.responseText);
        }
        anHttpRequest.open('GET', aUrl, true);
        anHttpRequest.send(null);
    }
}
// END https://stackoverflow.com/a/22076667 (slightly modified)

var client = new HttpClient();
var service;
var url;
if (window.location.href.includes('nicovideo')) service = 'niconico';
if (window.location.href.includes('bbc')) service = 'bbciplayer';
if (window.location.href.includes('newgrounds')) service = 'newgrounds';

if (service === 'niconico') url = `&title=${document.getElementsByClassName("VideoTitle")[0].innerHTML}&uploader=${document.getElementsByClassName("VideoOwnerInfo-pageLink")[0].innerHTML}`;
if (service === 'bbciplayer') url = `&title=${document.getElementsByClassName("typo--bold play-cta__text__title")[0].innerHTML}&uploader=${document.getElementsByClassName("play-cta__text__subtitle")[0].innerHTML}`;
if (service === 'newgrounds') url = `&title=${document.getElementsByClassName("pod-head")[0].querySelectorAll('h2')[0].textContent}&uploader=${document.getElementsByClassName("item-details")[0].querySelectorAll('a')[0].textContent}`

window.onbeforeunload = function () {
    client.get(`http://127.0.0.1:8080/setRPC?service=${service}&disable=true`, (res) => {
        console.log('request sent');
    });
};

// START https://stackoverflow.com/a/41825103
var pushState = history.pushState;
history.pushState = function () {
    pushState.apply(history, arguments);
    client.get(`http://127.0.0.1:8080/setRPC?service=${service}&disable=true`, (res) => {
        console.log('request sent');
    });
};
// END https://stackoverflow.com/a/41825103

client.get(`http://127.0.0.1:8080/setRPC?service=${service}${url}`, (res) => {
    console.log('request sent');
});