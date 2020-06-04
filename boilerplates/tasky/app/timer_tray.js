const Electron = require('electron');
const { Tray } = Electron;

class TimerTray extends Tray {
    constructor(iconPath) {
        super(iconPath);
    }
}

module.exports = TimerTray;