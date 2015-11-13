'use strict';

var request = require('request');
var Agent = require('socks5-http-client/lib/Agent');

request({
    url: 'http://en.wikipedia.org/wiki/SOCKS',
    agentClass: Agent,
    agentOptions: {
        socksHost: '195.154.216.160',
        socksPort: 60088
    }
}, function(err, res) {
    console.log(err || res.body);
});
