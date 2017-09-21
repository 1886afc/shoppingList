//modules that are required
const electron = require('electron');
const url = require('url');
const path = require('path');

//
const {app, BrowserWindow, Menu} = electron;

//variable to represent the main window
let mainWindow;
let addWindow;

// listen for the app to be ready
app.on('ready', function () {
    //create new window
    mainWindow = new BrowserWindow({});
    // Load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'addWindow.html'),
        protocol:'file:',
        slashes: true
    }));

    // Building menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // Insert menu
    Menu.setApplicationMenu(mainMenu);
});

// Handle create at window
function createAddWindow() {
    //create new window
    addWindow = new BrowserWindow({
        width: 200,
        height: 300,
        title: 'Add Shopping List Item'
    });
    // Load html into window
    addWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol:'file:',
        slashes: true
    }));
}

// creating menu template
const mainMenuTemplate = [
    {
        label:"file",
        submenu: [
            {
                label: 'Add Item',
                click(){
                    createAddWindow();
                }
            },
            {
                label: 'Clear Items'
            },
            {
                label: 'Quit',
                // adding shortcuts to quit for mac and windows
                accelerator: process.platform == 'darwin' ? 'command+Q' : 'Ctrl+Q',
                click(){
                    app.quit();
                }
            }
        ]
    }

];

