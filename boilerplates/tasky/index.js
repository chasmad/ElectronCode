const Path = require('path');
const Electron = require('electron');
const { app,
    BrowserWindow,
    Tray
} = Electron;

let mainWindow;
let tray;

app.on('ready', () => {
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


    const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png'
    const iconPath = Path.join(__dirname, `./src/assets/${iconName}`)
    tray = new Tray(iconPath);
    tray.on('click', () => {
        mainWindow.show();
    });
});