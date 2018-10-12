
var fs = require('fs');
var colors = require('colors');

fs.readdir('./', 'utf-8', function(err, data) {
    if (err) throw err;
      console.log(data);
      fs.writeFile('ZadInfo.txt', data, (err) => {
        if (err) throw err;
        console.log('Zapisano do pliku ZadInfo.txt !!'.blue);
      });
    });
