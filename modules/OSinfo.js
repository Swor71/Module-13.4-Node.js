var os = require('os');
var time = require('./timeFormater');
var colors = require('colors');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:'.red, type);
    console.log('Release:'.yellow, release);
    console.log('CPU model:'.green, cpu);
    time.uptime(uptime);
    console.log('User name:'.blue, userInfo.username);
    console.log('Home dir:'.cyan, userInfo.homedir);
}

exports.print = getOSinfo;