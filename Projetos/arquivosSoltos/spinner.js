import { createSpinner } from 'nanospinner';
import { exec } from 'child_process';
import process from 'process' 

const spinner = createSpinner('doing a process').start( { color: 'green' } ); 

exec('echo "hello" && cd ./fs/ && node fs-sync.js', (error, stdout, stderr) => {

    if(error){
        spinner.error()
        return console.error(`error: ${error.message}`)
    }

    if(stderr){
        spinner.error()
        return console.error(`stderr: ${stderr}`)
    }

    spinner.success();
    console.log(`stdout: \n ${stdout}`);

})
