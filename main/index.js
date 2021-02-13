"use strict";

// Native
const {
    join
} = require("path");
const { homedir } = require('os');
const {
    platform
} = require("os");
// Packages 
const { writeJSON, readJson } = require('fs-extra');
const url = require("url");
const icons = require('./icons')
// Packages
const {
    BrowserWindow,
    app,
    Menu,
    Tray,
    globalShortcut
} = require("electron");
const isDev = require("electron-is-dev");
const prepareNext = require("electron-next");
const {
    resolve
} = require("app-root-path");
const Positioner = require("electron-positioner");
const AutoLaunch = require("auto-launch");
const log = require("electron-log");

// Utils
// const { getConfig } = require("./utils/config");
const autoUpdater = require("./updater");

let tray;
let trayWindow;
let positioner;
const autoLauncher = new AutoLaunch({
    name: "Snip"
});

app.setAppUserModelId("com.snipnote.snip");

// Prepare the renderer once the app is ready
app.on("ready", async () => {
    await prepareNext("./renderer");
    autoLauncher.enable();
    // app.config = await getConfig();
    // localSettings();
    createTray();
    createWindow();
    checkForUpdates();
    registerGlobalShortcuts();
});

// Quit the app once all windows are closed
app.on("window-all-closed", app.quit);
if (app.dock) app.dock.hide(); 

// Create Tray
function createTray() {
    tray = new Tray(icons.png); //import icon
    //tray = new Tray( join(__dirname, "main/static/logo.png")); //import icon
    tray.setToolTip("SnipNote,Organize your day with notes and checklist ");
    tray.on("click", () => toggleWindow())
     
    const template = Menu.buildFromTemplate([{ 
            label: "Quit",
            accelerator: "Command+Alt+Q",
            click: () => app.quit() 
      
    } 
    ]);
    tray.setContextMenu(template);
}

function toggleWindow() {
    if (trayWindow.isVisible()) {
        trayWindow.hide();
        if (process.platform === "darwin") {
            //app.dock.hide();
            trayWindow.setSkipTaskbar(true);
        }
    } else {
        trayWindow.show();
        if (process.platform === "darwin") {
            app.dock.show();
            trayWindow.setSkipTaskbar(true);
        }
    }
}

function createWindow() {
    trayWindow = new BrowserWindow({
        width: 350,
        height: 550,
        resizable: false,
        movable: true,
        fullscreenable: false,
        alwaysOnTop: true,
        icon: icons.png,
        show: false,
        skipTaskbar: true,
        frame: true,//platform() !== "win32",
        titleBarStyle:"inset", //"hidden",
        icon: platform() === "win32" ?
            join(__dirname, "main/static/logo.ico") : join(__dirname, "main/static/logo.icns"),
        webPreferences: {
            nodeIntegration: true,
            preload: join(__dirname, 'preload.js'),
        },
    });
    const devPath = "http://localhost:8000/";
    if (isDev) {
        trayWindow.loadURL(devPath);
        trayWindow.webContents.openDevTools();
    } else {
        // PRODUCTION Load the React build
        trayWindow.loadURL(
            url.format({
                pathname: resolve("renderer/out/index.html"),
                protocol: "file:",
                slashes: true
            })
        );
    }
    positioner = new Positioner(trayWindow);
    let trayPosition;
    if (process.platform === "win32") {
        trayPosition = "trayBottomCenter";
    } else if (process.platform === "darwin") {
        trayPosition = "trayCenter";
    } else {
        trayPosition = "trayRight";
    }
    positioner.move(trayPosition, tray.getBounds());
    trayWindow.setSkipTaskbar(true)
    trayWindow.on("ready-to-show", () => {
         trayWindow.show();
        if (app.dock) app.dock.hide();
        if (trayWindow.setSkipTaskbar) {
            trayWindow.setSkipTaskbar(true)
        }
    });


    if (platform() !== "win32") {
        autoUpdater();
    }
     
}

async function checkForUpdates() {
    // let currentVer;
    // let latestVer;

    // if (process.platform === "darwin") {
    //   const notifyLatestVersion = require("./utils/notifyLatestVersion");
    //   const {
    //     currentVersion,
    //     latestVersion
    //   } = await notifyLatestVersion();
    //   currentVer = currentVersion;
    //   latestVer = latestVersion;
    // } else {
    //   const {
    //     autoUpdater
    //   } = require("electron-updater");
    //   const getLatestVersion = require("./utils/getLatestVersion");
    //   const {
    //     currentVersion,
    //     latestVersion
    //   } = await getLatestVersion();
    //   currentVer = currentVersion;
    //   latestVer = latestVersion;
    //   autoUpdater.checkForUpdatesAndNotify();
    // }
}

function registerGlobalShortcuts() {
    // Global Shortcut : Toggle Window
    const shortcutToggleWindow = globalShortcut.register("Super+Alt+Up", () => {
        toggleWindow();
    });
    const shortcutToggleState = globalShortcut.register("Super+Alt+Down", () => {
        toggleWindow();
    });
    if (!shortcutToggleState) {
        log.warn("Unable to register:CommandOrControl+Down");
    }
}