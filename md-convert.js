const showdown  = require('showdown');
const fs = require('fs');
const argv = require('yargs').argv;

function run(fileToRead) {
    let converter = new showdown.Converter();
    fs.readFile(fileToRead, 'utf-8', (err, data) => {
            if (err) {
                console.error(err)
                return
            }
            let html = converter.makeHtml(data);
            
            fs.writeFile(fileToRead.replace('.md', '.html'), html, 'utf-8', function(err) {
                if (err) {
                    console.log('There was an error writing the file: ', err);
                }
                console.log("File ${fileToRead} converted to html and written to disk.");
            });
            
    });
}

run(argv.file);

