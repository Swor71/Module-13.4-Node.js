var fs = require('fs');

fs.writeFile('./tekst.txt', 'tu jest ten tekst do zapisu', function (err) {
    if(err) throw err;
    console.log('Saved');
})