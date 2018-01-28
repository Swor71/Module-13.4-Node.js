function timeFormater(uptime) {
    var seconds = Math.floor(uptime);
    var minutes = (uptime / 60).toFixed(0);
    var hours = (uptime / 3600).toFixed(0);
    
    console.log('Your uptime is: ' + hours + ' hours, which is: ' + minutes + ' minutes, which in turn is: ' + seconds + ' seconds!');
}

exports.uptime = timeFormater;