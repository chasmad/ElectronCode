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
    tray.on('click', (event, bounds) => {
        const { x, y } = bounds;
        const { height, width } = mainWindow.getBounds();

        console.log(bounds.x, bounds.y)
        if (mainWindow.isVisible()) {
            mainWindow.hide();
        } else {
            const yPosition = process.platform === 'darwin' ? y : y - height;
            mainWindow.setBounds({
                x: x - width / 2,
                y: yPosition,
                height,
                width
            });
        }
        mainWindow.show();
    });
});