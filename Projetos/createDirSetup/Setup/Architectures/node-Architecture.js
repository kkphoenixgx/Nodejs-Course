import chalk from 'chalk';
import fs from 'fs';

const ajaxUtil = `export function CreateAjax(route, method = 'GET', formData = new FormData(), onprogress = function(){}, onloadStart = function(){} ){

    let ajax = new Promise((resolve, reject) => {
    
        let ajax = new XMLHttpRequest();
        
        ajax.open(method, route)

        ajax.onload = event => {

            try {  resolve(JSON.parse(ajax.responseText));  }
            catch (e) {  reject(e)  }
        }

        ajax.onerror = event => {
            console.log(event);
            reject(event);
        }

        ajax.upload.onprogress = onprogress();

        onloadStart();

        ajax.send(formData);
    })

    return ajax

}` 

// Folders
const rootFolders = ['Controller', 'Utils', 'DataBase'];

// Files
const rootFiles = ['.gitignore', 'README.md']
const controllerFiles = ['index.js', 'routeIndex.js'];
const utilsFiles = ['ajax.js'];
const dataBaseFiles = ['db-index.js'];


// Main function
export default function init(folderName, path){
    let createArchitecture = new Promise((resolve, reject) => {
        
        let COMPLETE_PATH = `${path}/${folderName}`;

        try{ createFoldersAndFiles(COMPLETE_PATH); resolve(true); }
        catch(error){ reject(error) }

    })

    return createArchitecture;
}

// --------- FUNCTIONS ----------

function createFoldersAndFiles(path){
    createBaseFolder(path);
    createRootFolders(path)

    createRootFiles(path);
    createControllerFiles(path);
    createUtilsFiles(path);
    createDatabaseFiles(path);
}

  // ------  CREATING FOLDERS -------

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
  
  // ------  CREATING FILES -------
  function createRootFiles(path){
      rootFiles.forEach(element => {
          
          let content
          
          switch(element){
              case '.gitignore':
                  content = 'node_modules'
            break;
            default:
                content = ''
        }

        fs.writeFile(`${path}/${element}`, `${content}`, function(error) {
            if(error) throw error

            console.log(chalk.white(`created ${element} file`));
        })

    });
  }
  function createControllerFiles(path){
    controllerFiles.forEach(element => {
        let content

        switch(element){
            default:
                content = ''
        }

        fs.writeFile(`${path}/Controller/${element}`, `${content}`, function(error) {
            if(error) throw error

            console.log(chalk.yellow(`created ${element} file`));
        });
    });
  }
  function createUtilsFiles(path){
    utilsFiles.forEach(element => {
        let content
        switch (element) {
            case 'ajax.js':
                content = ajaxUtil;
            default:
                content = '';
                break;
        }

        fs.writeFile(`${path}/Utils/${element}`, `${content}`, function(error) {
            if(error) throw error

            console.log(chalk.green(`created ${element} file`));
        })
    });
  }
  function createDatabaseFiles(path){
    dataBaseFiles.forEach(element => {
    
        let content
        switch (element) {
            default:
                content = '';
            break;
        }
    
        fs.writeFile(`${path}/DataBase/${element}`, `${content}`, function(error) {
            if(error) throw error
    
            console.log(chalk.blue(`created ${element} file`));
        })
    
    });
  }