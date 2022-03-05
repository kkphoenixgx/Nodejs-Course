// #!/usr/bin/env node
import fs from 'fs';
import chalk from 'chalk';

let FOLDER_NAME;
const wwwScript = `
#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('../app');
var debug = require('debug')('${FOLDER_NAME}:server');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
`

// ---- Folders ----

  // The base folder is generated depending on the folderName, so can't be a const
  const rootFolders = ['public', 'bin', 'routes', 'views'];
  const publicFolders = ['src', 'assets']
  const srcFolders = ['Controller', 'Utils']
  const assetsFolders = ['Audio', 'Video', 'Images', 'Fonts']

// ----- Files -----
  const rootFiles = ['.gitignore']
  const binFiles = ['www'];
  const publicFiles = ['README.md']
  const viewsFiles = ['index.ejs', 'error.ejs']
  const routesFiles = ['index.js'];

// ----- Functions -----
  
export default function init(folderName, path){
    
    let createArchitecture = new Promise((resolve, reject) => {
        
        let COMPLETE_PATH = `${path}/${folderName}`;
        FOLDER_NAME = folderName;

        try{ createFoldersAndFiles(COMPLETE_PATH); resolve(true); }
        catch(error){ reject(error) }

    })

    return createArchitecture;
}

function createFoldersAndFiles(COMPLETE_PATH){
    
    createBaseFolder(COMPLETE_PATH);
    createRootFolders(COMPLETE_PATH);
    createPublicFolders(COMPLETE_PATH);
    createSrcFolders(COMPLETE_PATH);
    createAssetsFolders(COMPLETE_PATH);
    
    createRootFiles(COMPLETE_PATH);
    createPublicFiles(COMPLETE_PATH);
    createBinFiles(COMPLETE_PATH);
    createViews(COMPLETE_PATH);
    createRoutesFiles(COMPLETE_PATH);
    
}
  
  // ------ CREATING FOLDERS ----

  function createBaseFolder(path){

      fs.mkdir(path, { recursive: true }, function(error){
          if(error) throw error
          console.log( chalk.black('created root folder'))
      })

  }
  function createRootFolders(path){
      rootFolders.forEach(element => {
        fs.mkdir(`${path}/${element}`, function(error){
            if(error) throw error
            console.log( chalk.red(`created ${element} folder`))
        })
      });
  }
  function createPublicFolders(path){
    publicFolders.forEach(element => {
        
        fs.mkdir(`${path}/public/${element}`,{ recursive: true }, function(error){
            if(error) throw error
            console.log( chalk.blue(`created ${element} in src folder`))
        })

    })
  }
  function createSrcFolders(path){
      srcFolders.forEach(element => {
        fs.mkdir(`${path}/public/src/${element}`,{ recursive: true }, function(error){
            if(error) throw error
            console.log( chalk.green(`created ${element} in src folder`))
        })
      });
  }
  function createAssetsFolders(path){
    assetsFolders.forEach(element => {
        fs.mkdir(`${path}/assets/${element}`,{ recursive: true }, function(error){
            if(error) throw error
            console.log(chalk.yellow(`created ${element} in assets folder`))
        })
    })
}

  // ------ CREATING FILES -------
  
  function createRootFiles(path){

      rootFiles.forEach(element => {
        
        let content

        switch(element){
            case '.gitignore':
                content = 'node_modules'
            break;
            case 'package.json':
                content = package_json_preSet;
            break;
            default:
                content = ''
        }

        fs.writeFile(`${path}/${element}`, `${content}`, function(error) {
            if(error) throw error

            console.log(chalk.blue(`created ${element} file`));
        })

      });
  }
  function createPublicFiles(path){
    publicFiles.forEach(element => {

        let content
        switch (element) {
            default:
                content = '';
                break;
        }

        fs.writeFile(`${path}/public/${element}`, `${content}`, function(error) {
            if(error) throw error

            console.log(chalk.white(`created ${element} file`));
        })
    })
  }
  function createBinFiles(path){
    binFiles.forEach(element => {

        let content
        switch (element) {
            case 'www':
                content = wwwScript;
            default:
                content = '';
                break;
        }

        fs.writeFile(`${path}/bin/${element}`, `${content}`, function(error) {
            if(error) throw error

            console.log(chalk.yellow(`created ${element} file`));
        })
    })
  }
  function createViews(path){
    viewsFiles.forEach(element => {
        let content
        switch (element) {
            default:
                content = '';
                break;
        }

        fs.writeFile(`${path}/views/${element}`, `${content}`, function(error) {
            if(error) throw error

            console.log(chalk.red(`created ${element} file`));
        });
    });
  }
  function createRoutesFiles(path){

    routesFiles.forEach(element => {
        let content
        switch (element) {
            default:
                content = '';
                break;
        }

        fs.writeFile(`${path}/routes/${element}`, `${content}`, function(error) {
            if(error) throw error

            console.log(chalk.magenta(`created ${element} file`));
        });
    });
  }