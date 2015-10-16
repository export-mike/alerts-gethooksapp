'use strict';

var request = require('request');
const URL = 'https://api.gethooksapp.com/v1/push/YOUR_APP_ALERT_ID'
var internals = {};

module.exports = internals.Hooks = function Hooks(options){
    this.apiKey = options.apiKey;
};


internals.Hooks.prototype.send = function(id, title, message, link){
    var url = URL.replace('YOUR_APP_ALERT_ID',id);
    request.post({
        url:url,
        headers:{
            'Hooks-Authorization':this.apiKey,
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            message,
            title,
            link
        })
    },function(err, httpResponse, body){
        console.log(err);
        console.log(httpResponse.statusCode);
        console.log(body);
    });
};