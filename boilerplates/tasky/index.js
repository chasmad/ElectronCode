const Path = require('path');
const Electron = require('electron');
const TimerTray = require('./app/timer_tray');
const { app,
    BrowserWindow
} = Electron;
const MainWindow = require('./app/main_window');

let mainWindow;
let tray;

app.on('ready', () => {
    app.dock.hide();
    mainWindow = new MainWindow(`file://${__dirname}/src/index.html`);

    const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png'
    const iconPath = Path.join(__dirname, `./src/assets/${iconName}`)
    tray = new TimerTray(iconPath, mainWindow);
});