const fs = require('fs');
const {dialog} = require('electron').remote;
let path = "";

function saveFile() {
    let text = document.getElementById('main').value;
    fs.writeFile(path, text, function(err) {
        if(err) {
            return console.log(err);
        }
    });

};

function saveAs() {
    let text = document.getElementById('main').value;
    dialog.showSaveDialog(function(path) {
        fs.writeFile(path, text, function(err) {
            if(err) {
                return console.log(err);
            }
        });
    })
};


function openFile() {
    path = dialog.showOpenDialog({properties: ['openFile']})[0];
    fs.readFile(path, function(err,data){
        if(err) throw err;
        fileString  = data.toString();
        document.getElementById('main').value = fileString;
    });
};

window.onload = () => {
    document.getElementById('fontPicker').onchange = function() {
        document.getElementById('main').style.fontFamily = this.value;
    };

    document.getElementById('fontSizePicker').onchange = function() {
        document.getElementById('main').style.fontSize = this.value;
    }
};
