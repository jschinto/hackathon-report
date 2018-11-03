//This will be run first
console.log("running");

var chainapi = require('./chainapi');
var ChainApi = new chainapi();

//ChainApi.postData("{\"Hello\":\"World\"}");
ChainApi.getData('chain_6972b4c843fb6a43bd94ba772a40908e47652de8161d8a473981a502fba58ca8');
