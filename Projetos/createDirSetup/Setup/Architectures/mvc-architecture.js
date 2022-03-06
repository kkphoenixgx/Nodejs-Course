import fs from 'fs'
import chalk from 'chalk'

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

// ----- Folders -------
const rootFolders = ['Src', 'Style', 'Assets']
const srcFolders = ['Controller', 'Utils']
const assetsFolders = ['Images', 'Video', 'Fonts', 'Audio']

// ----- Files --------

const rootFiles = ['.gitignore', 'README.md', 'index.html']
const srcFiles = ['index.js']
const styleFiles = ['index.css']
const controllerFiles = ['Controller.js']
const utilsFiles = ['Ajax.js']

// ----- Functions -----

export async function init(folderName, path){
    let createMvcArchitecture = new Promise( (resolve, reject) => {
        let COMPLETE_PATH = `${path}/${folderName}`;
        
        try{ createFoldersAndFiles(COMPLETE_PATH); resolve(true) }
        catch(err){ reject(err) }
    }) 
    return createMvcArchitecture
} 

function createFoldersAndFiles(path){
    createBaseFolder(path);
    createRootFolders(path)

    createSrcFolders(path);
    createAssetsFolders(path);

    createRootFiles(path);
    createStyleFiles(path);
    createSrcFiles(path);
    createControllerFiles(path);
    createUtilsFiles(path);
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
        });
    });
}

function createSrcFolders(path){
    srcFolders.forEach(element => {
        fs.mkdir(`${path}/src/${element}`,{ recursive: true }, function(error){
            if(error) throw error
            console.log( chalk.green(`created ${element} in src folder`))
        })
    })
}
function createAssetsFolders(path){
    assetsFolders.forEach(element => {
        fs.mkdir(`${path}/assets/${element}`,{ recursive: true }, function(error){
            if(error) throw error
            console.log(chalk.yellow(`created ${element} in assets folder`))
        })
    })
}

// ----- CREATING FILES ----

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

function createStyleFiles(path){

    styleFiles.forEach(element => {

        let content;
        switch(element){
            default: 
                content= '';
            break;
        }

        fs.writeFile(`${path}/style/${element}`, `${content}`, (error)=>{
            if(error) throw error
            console.log(chalk.blue(`created ${element} file`));
        });
    });
}
function createSrcFiles(path){
    srcFiles.forEach(element => {

        let content;
        switch(element){
            default: 
                content= '';
            break;
        }

        fs.writeFile(`${path}/src/${element}`, `${content}`, (error)=>{
            if(error) throw error
            console.log(chalk.green(`created ${element} file`));
        });
    });
}
function createControllerFiles(path){
    controllerFiles.forEach(element => {
        let content

        switch(element){
            default:
                content = ''
        }

        fs.writeFile(`${path}/src/Controller/${element}`, `${content}`, function(error) {
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

        fs.writeFile(`${path}/src/Utils/${element}`, `${content}`, function(error) {
            if(error) throw error

            console.log(chalk.cyan(`created ${element} file`));
        })
    });
}