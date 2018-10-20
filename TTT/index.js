const electron = require('electron');
const url = require('url');
const path = require('path');
const { app, globalShortcut } = require('electron')

const { BrowserWindow } = electron;

let mainWindow;

//listen to app to be ready
app.on('ready', function(){

    //Create new window
    mainWindow = new BrowserWindow({});

    //load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    globalShortcut.register('CommandOrControl+L', () => {
      console.log('CommandOrControl+L is pressed')
    })
})


app.on('window-all-closed', () => {
    app.quit()
    // app.relaunch({args: process.argv.slice(1).concat(['--relaunch'])})
    // app.exit(0)
    // app.hide()
  })
