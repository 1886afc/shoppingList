//modules that are required
const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

let mainWindow;

// listen for the app to be ready
app.on('rready', function () {
    //create new window
    mainWindow = new BrowserWindow({});
    // Load html into window

});


