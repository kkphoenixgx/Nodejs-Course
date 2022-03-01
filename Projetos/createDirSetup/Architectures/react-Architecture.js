// #!/usr/bin/env node
import fs from 'fs'
import chalk from 'chalk'

const package_json_preSet = `{
    "name": "x",
    "version": "1.0.0",
    "description": "",
    "main": "Index.js",
    "type": "module",
    "scripts": {
        "start": "node Index.js"
    },
    "repository": {
        "type": "git",
        "url": "x"
    },
    "keywords": [
        "x"
    ],
    "author": "kkphoenix",
    "license": "ISC",
    "bugs": {
        "url": "x/issues"
    },
    "homepage": "x",
    "dependencies": {
    }
}
`
const REACT_APP_DEFAULT = `
import logo from './styles/Index.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      </header>

      <section className="App-section">
      </section>

      <footer className="App-footer">
      </footer>

    </div>
  );
}

export default App;
`

// ----FOLDERS----
const rootFolders = ['src', 'assets', 'node_modules']
const srcFolders = ['components', 'styles', 'hooks', 'helpers', 'pages', 'services']
const assetsFolders = ['Audio', 'Video', 'Images', 'Fonts']

// ----BASE FILES----
const rootFiles = ['.gitignore', 'README.md', 'package.json']
const srcFiles = ['App.js', 'Index.js']
const stylesFiles = ['Index.css']

// ----- BASE PROCESS -------

export function init(folderName, path){

    let createFolders = new Promise((resolve, reject) => {

        try{

            let COMPLETE_PATH = `${path}/${folderName}`
        
            createBaseFolder(COMPLETE_PATH);
            createRootFolders(COMPLETE_PATH);
            createSrcFolders(COMPLETE_PATH);
            createAssetsFolders(COMPLETE_PATH);
            createRootFiles(COMPLETE_PATH);
            createSrcReactBaseFiles(COMPLETE_PATH);
            createStyleFiles(COMPLETE_PATH);

            resolve(true)

        } catch(err){ reject(err) }

    })

    return createFolders
}

// ------ CREATING FOLDERS -------

function createBaseFolder(path){
    fs.mkdir(path, { recursive: true }, function(error){
        if(error) throw error
        console.log( chalk.blue('created root folder'))
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

// ------ CREATING FILES ---------

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

            console.log(chalk.white(`created ${element} file`));

        })
    });
}
function createSrcReactBaseFiles(path){
    srcFiles.forEach(element => {
        
        let content

        switch(element){
            case 'App.js':
                content = REACT_APP_DEFAULT; 
            break;
            
            default:
                content = ''
        }

        fs.writeFile(`${path}/src/${element}`, `${content}`, function(error) {
            if(error) throw error

            console.log(chalk.magenta(`created ${element} file`));
        });
    });
}
function createStyleFiles(path){
    stylesFiles.forEach(element => {
        fs.writeFile(`${path}/src/styles/${element}`, '', function(error) {
            if(error) throw error

            console.log(chalk.cyan(`created ${element} file`));
        });
    });
}