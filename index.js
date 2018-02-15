const {
    app,
    Menu,
    BrowserWindow
} = require('electron')
const path = require('path')
const url = require('url')
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow() {
    var template = [{
            label: "Gramateria",
            submenu: [
                {
                    label: "About Gramateria",
                    selector: "orderFrontStandardAboutPanel:"
                },
                {
                    type: "separator"
                },
                {
                    label: "Quit",
                    accelerator: "Command+Q",
                    click: function () {
                        app.quit();
                    }
                }
        ]
        }, {
            label: "Edit",
            submenu: [
                {
                    label: "Undo",
                    accelerator: "CmdOrCtrl+Z",
                    selector: "undo:"
                },
                {
                    label: "Redo",
                    accelerator: "Shift+CmdOrCtrl+Z",
                    selector: "redo:"
                },
                {
                    type: "separator"
                },
                {
                    label: "Cut",
                    accelerator: "CmdOrCtrl+X",
                    selector: "cut:"
                },
                {
                    label: "Copy",
                    accelerator: "CmdOrCtrl+C",
                    selector: "copy:"
                },
                {
                    label: "Paste",
                    accelerator: "CmdOrCtrl+V",
                    selector: "paste:"
                },
                {
                    label: "Select All",
                    accelerator: "CmdOrCtrl+A",
                    selector: "selectAll:"
                }
        ]
        }
    ];
    Menu.setApplicationMenu(Menu.buildFromTemplate(template));
    
    // Create the browser window.
    win = new BrowserWindow({
        'node-integration': false,
        width: 1200,
        height: 680
    })

    // and load the index.html of the app.
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))
    
    
// debuging
//    win.webContents.openDevTools() 
    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    })
}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
})
