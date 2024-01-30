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
var playListContainer = document.getElementById('playList');
var playlistItemMaster = document.createElement('li');
playlistItemMaster.className = "list-group-item";
var authorMaster = document.createElement('strong');
var songMaster = document.createElement('span');
songMaster.className = "badge bg-primary rounded-pill";
Array.from(playList).forEach(function (item) {
  var playlistItem = playlistItemMaster.cloneNode();
  var author = authorMaster.cloneNode();
  var song = songMaster.cloneNode();
  author.innerText = "".concat(item.author, " - ");
  song.innerText = "".concat(item.song);
  playlistItem.append(author);
  playlistItem.append(song);
  playListContainer.append(playlistItem);
});