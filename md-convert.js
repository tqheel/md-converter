const showdown  = require('showdown');
const fs = require('fs')

let converter = new showdown.Converter();
fs.readFile('top-ten-influencer-albums.md', 'utf-8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        let html = converter.makeHtml(data);
    	console.log(html);
});

// console.log(html)



