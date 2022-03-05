import { exec } from 'child_process';
import chalk from 'chalk';
import { createSpinner } from 'nanospinner';

const COMPLETE_PATH = 'C:/Users/kkphoenix/Desktop/project-folder'
const REACT_MESSAGE =  chalk.green(
    `
    ----------------------------------------------------------------------------\n
    Please digit: the following lines to complete the download ^^:\n
    > cd ${COMPLETE_PATH}
    > npm install react react-dom web-vitals react-scripts --save\n
    the react setup is long, so it is better to digit it\n
    ----------------------------------------------------------------------------\n
    `
)
const sleep = (ms = 2000) => new Promise( (resolve) => setTimeout(resolve, ms) )


await sleep();
const spinnerNpmInit = createSpinner('npm init...').start();

exec(`npm i nodemon --prefix ${COMPLETE_PATH}`, (error, stdout, stderr) =>{ 
    if(error){
        spinnerNpmInit.error();
        return console.error(`error: ${error.message}`)
    }

    if(stderr){
        spinnerNpmInit.error();
        return console.error(`stderr: ${stderr}`)
    }

    spinnerNpmInit.success();
    console.log(`stdout: \n ${stdout}`);
    console.log(REACT_MESSAGE);
});