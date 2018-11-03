//This will be run first
console.log("running");

var chainapi = require('./chainapi');
var ChainApi = new chainapi();

ChainApi.getData('chain_93c6920229c316d3f098378fddc78caa2e1d8effe6ac429afc89a7fd191a3e73');