var fs = require('fs');
var {dialog} = require('electron').remote;

function saveFile() {
    let text = document.getElementById('main').value;
    fs.writeFile('./tempfile', text, function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });

};


function openFile() {
    let path = dialog.showOpenDialog({properties: ['openFile']})[0];
    fs.readFile(path, function(err,data){
        if(err) throw err;
        fileString  = data.toString();
        document.getElementById('main').value = fileString;
        // return fileString;

    });
};





function eatTacos() {};
