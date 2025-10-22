const { app, BrowserWindow, Menu, shell, ipcMain } = require('electron');
const path = require('path');

// Keep a global reference of the window object
let mainWindow;

function createWindow() {
  // Create the browser window with transparency
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    transparent: true, // Enable transparency
    frame: false, // Remove default window frame
    skipTaskbar: true, // Hide from taskbar
    alwaysOnTop: true, // Keep window on top
    show: false, // Don't show initially
    hidden: true, // Hide from taskbar completely
    focusable: false, // Not focusable
    minimizable: false, // Not minimizable
    maximizable: false, // Not maximizable
    resizable: false, // Not resizable
    closable: false, // Not closable
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false
    },
    icon: path.join(__dirname, 'assets', 'icon.png'),
    title: 'Hacking Animation - Cyber Terminal',
    show: false, // Don't show until ready
    backgroundColor: '#00000000' // Transparent background
  });

  // Load the HTML file
  mainWindow.loadFile(path.join(__dirname, 'dist', 'index.html'));

  // Show window when ready to prevent visual flash
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    
    // Hide from dock on macOS
    if (process.platform === 'darwin') {
      app.dock.hide();
    }
  });

  // Open DevTools in development
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }

  // Handle window closed
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // Handle external links
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  // Add custom window controls for transparent window
  mainWindow.webContents.on('did-finish-load', () => {
    // Inject custom window controls using IPC
    mainWindow.webContents.executeJavaScript(`
      // Add window control functionality
      window.electronAPI = {
        minimizeWindow: () => {
          // This will be handled by IPC
          window.postMessage({type: 'minimize'}, '*');
        },
        maximizeWindow: () => {
          window.postMessage({type: 'maximize'}, '*');
        },
        closeWindow: () => {
          window.postMessage({type: 'close'}, '*');
        },
        toggleFullscreen: () => {
          window.postMessage({type: 'fullscreen'}, '*');
        }
      };
    `);
  });

  // Handle window control messages
  mainWindow.webContents.on('before-input-event', (event, input) => {
    if (input.type === 'keyDown') {
      if (input.key === 'F11') {
        mainWindow.setFullScreen(!mainWindow.isFullScreen());
      }
    }
  });

  // Listen for window control messages from renderer
  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.webContents.on('message', (event, message) => {
      switch(message.type) {
        case 'minimize':
          mainWindow.minimize();
          break;
        case 'maximize':
          if (mainWindow.isMaximized()) {
            mainWindow.unmaximize();
          } else {
            mainWindow.maximize();
          }
          break;
        case 'close':
          mainWindow.close();
          break;
        case 'fullscreen':
          mainWindow.setFullScreen(!mainWindow.isFullScreen());
          break;
      }
    });
  });
}

// This method will be called when Electron has finished initialization
app.whenReady().then(() => {
  createWindow();

  // On macOS, re-create window when dock icon is clicked
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Hide app from taskbar completely
app.setAppUserModelId('com.example.hacking-animation.hidden');

// Quit when all windows are closed
app.on('window-all-closed', () => {
  // On macOS, keep app running even when all windows are closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Security: Prevent new window creation
app.on('web-contents-created', (event, contents) => {
  contents.on('new-window', (event, navigationUrl) => {
    event.preventDefault();
    shell.openExternal(navigationUrl);
  });
});

// Hide app from system tray and taskbar
app.setAppUserModelId('com.example.hacking-animation.hidden');

// Stealth mode configuration 
app.commandLine.appendSwitch('disable-features', 'VizDisplayCompositor');
app.commandLine.appendSwitch('disable-gpu');
app.commandLine.appendSwitch('disable-gpu-sandbox');
app.commandLine.appendSwitch('disable-software-rasterizer');
app.commandLine.appendSwitch('disable-background-timer-throttling');
app.commandLine.appendSwitch('disable-backgrounding-occluded-windows');
app.commandLine.appendSwitch('disable-renderer-backgrounding');
app.commandLine.appendSwitch('disable-dev-shm-usage');
app.commandLine.appendSwitch('disable-extensions');
app.commandLine.appendSwitch('disable-plugins');
app.commandLine.appendSwitch('disable-web-security');
app.commandLine.appendSwitch('disable-features', 'TranslateUI');
app.commandLine.appendSwitch('disable-ipc-flooding-protection');

// Complete stealth mode
app.disableHardwareAcceleration();
app.disableDomainBlockingFor3DAPIs();


// Create application menu
const template = [
  {
    label: 'File',
    submenu: [
      {
        label: 'New Window',
        accelerator: 'CmdOrCtrl+N',
        click: () => {
          createWindow();
        }
      },
      {
        label: 'Close',
        accelerator: 'CmdOrCtrl+W',
        role: 'close'
      },
      { type: 'separator' },
      {
        label: 'Quit',
        accelerator: process.platform === 'darwin' ? 'Cmd+Q' : 'Ctrl+Q',
        click: () => {
          app.quit();
        }
      }
    ]
  },
  {
    label: 'View',
    submenu: [
      {
        label: 'Reload',
        accelerator: 'CmdOrCtrl+R',
        click: (item, focusedWindow) => {
          if (focusedWindow) focusedWindow.reload();
        }
      },
      {
        label: 'Toggle Full Screen',
        accelerator: process.platform === 'darwin' ? 'Ctrl+Cmd+F' : 'F11',
        click: (item, focusedWindow) => {
          if (focusedWindow) {
            focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
          }
        }
      },
      {
        label: 'Toggle Developer Tools',
        accelerator: process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Ctrl+Shift+I',
        click: (item, focusedWindow) => {
          if (focusedWindow) focusedWindow.webContents.toggleDevTools();
        }
      }
    ]
  },
  {
    label: 'Window',
    submenu: [
      {
        label: 'Minimize',
        accelerator: 'CmdOrCtrl+M',
        role: 'minimize'
      },
      {
        label: 'Zoom',
        role: 'zoom'
      },
      {
        label: 'Close',
        accelerator: 'CmdOrCtrl+W',
        role: 'close'
      }
    ]
  },
  {
    label: 'Help',
    submenu: [
      {
        label: 'About Hacking Animation',
        click: () => {
          const { dialog } = require('electron');
          dialog.showMessageBox(mainWindow, {
            type: 'info',
            title: 'About',
            message: 'Hacking Animation',
            detail: 'A cyber-themed animation application built with Electron'
          });
        }
      }
    ]
  }
];

// Set application menu
const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
