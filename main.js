const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

const { session } = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: false,
        }
    })
    win.maximize()

    // and load the index.html of the app.
    // win.loadURL(url.format({
    //     pathname: path.join(__dirname, 'index.html'),
    //     protocol: 'file:',
    //     slashes: true
    // }))

    win.loadURL('http://office.ptafirm.com')

    // Open the DevTools.
    // win.webContents.openDevTools()

    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    })
}

// function SessionContact() {
//     // Query all cookies.
//     session.defaultSession.cookies.get({}, (error, cookies) => {
//         console.log(error, cookies)
//     })

//     // Query all cookies associated with a specific url.
//     session.defaultSession.cookies.get(win, (error, cookies) => {
//         console.log(error, cookies)
//     })

//     // Set a cookie with the given cookie data;
//     // may overwrite equivalent cookies if they exist.
//     const cookie = {win, name: 'contact', value: 'contact_new' }
//     session.defaultSession.cookies.set(cookie, (error) => {
//         if (error) console.error(error)
//     })
// }

function SessionContact() {
    // Query all cookies.
    session.defaultSession.clearStorageData([], function (data){
        console.log(data);
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)
app.on('ready', SessionContact)

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

  // In this file you can include the rest of your app's specific main process
  // code. You can also put them in separate files and require them here.

