const Path = require('path');
const Electron = require('electron');
const TimerTray = require('./app/timer_tray');
const { app,
    BrowserWindow
} = Electron;

let mainWindow;
let tray;

app.on('ready', () => {
    app.dock.hide();
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        height: 500,
        width: 300,
        frame: false,
        resizable: false,
        show: false
    });
    mainWindow.loadURL(`file://${__dirname}/src/index.html`);
    mainWindow.on('blur', () => {
        mainWindow.hide();
    });


    const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png'
    const iconPath = Path.join(__dirname, `./src/assets/${iconName}`)
    tray = new TimerTray(iconPath, mainWindow);
});