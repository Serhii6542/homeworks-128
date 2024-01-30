"use strict";

var playList = [{
  author: "LED ZEPPELIN",
  song: "STAIRWAY TO HEAVEN"
}, {
  author: "QUEEN",
  song: "BOHEMIAN RHAPSODY"
}, {
  author: "LYNYRD SKYNYRD",
  song: "FREE BIRD"
}, {
  author: "DEEP PURPLE",
  song: "SMOKE ON THE WATER"
}, {
  author: "JIMI HENDRIX",
  song: "ALL ALONG THE WATCHTOWER"
}, {
  author: "AC/DC",
  song: "BACK IN BLACK"
}, {
  author: "QUEEN",
  song: "WE WILL ROCK YOU"
}, {
  author: "METALLICA",
  song: "ENTER SANDMAN"
}];
var div = document.createElement('div');
div.id = 'wrapper';
div.classList = 'container';
var ol = document.createElement('ol');
ol.className = 'list-group';
var liList = document.createElement('li');
liList.className = 'list-group-item';
playList.forEach(function (item) {
  var li = liList.cloneNode();
  li.innerHTML = "<span><b>Author: ".concat(item.author, "</b> - song: <i>").concat(item.song, "</i></span>");
  ol.append(li);
});
div.append(ol);
document.body.prepend(div);