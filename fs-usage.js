function usingFS() {
    var fs = require('fs');

    fs.readdir('./modules/', 'utf8', function (err, files) {
        if (err) throw err;
        console.log(files);
        fs.writeFile('new-file-using-fs.txt', files, function (err) {
            if(err) throw err;
            console.log('File Saved!');
        });
    });
}

usingFS();