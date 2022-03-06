import inquirer from 'inquirer';
import { exec } from 'child_process';
import process from 'process' 
import { createSpinner } from 'nanospinner';
import chalk from 'chalk';

export async function nodeInit(architecture, path){

    const sleep = (ms = 2000) => new Promise( (resolve) => setTimeout(resolve, ms) )
    
    const REACT_MESSAGE =  chalk.green(
`
----------------------------------------------------------------------------\n
Please digit: the following lines to complete the download ^^:\n
> go to: ${path} 
or if your terminal supports it, just digit:
> ${path}
> npm install react-dom web-vitals react-scripts --save\n
the react setup is long, so it is better to digit it\n
----------------------------------------------------------------------------\n
`
    )

    switch(architecture){
        case 'React':
            await sleep();
            const spinnerNpmInit = createSpinner('npm init...').start();

            exec(`npm i nodemon --prefix ${path}`, (error, stdout, stderr) =>{ 
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

            break;
        case 'Node':
            await sleep();

            let intoProject = await inquirer.prompt({
                name: 'intoProject',
                type: 'confirm',
                message: 'You are already into a project folder?',
                default(){ return false }
            })
            switch(intoProject.intoProject){
                case true:
                    process.exit(0);
                case false:
                    await sleep();
                    const spinnerNodeInit = createSpinner('installing nodemon...').start();
                    await sleep();
                    
                    exec(`npm install nodemon --prefix ${path}`, (error, stdout, stderr) =>{ 
                        if(error){
                            spinnerNodeInit.error();
                            return console.error(`error: ${error.message}`)
                        }

                        if(stderr){
                            spinnerNodeInit.error();
                            return console.error(`stderr: ${stderr}`)
                        }

                        spinnerNodeInit.success();
                        console.log(`stdout: \n ${stdout}`);
                    });
            }

            break;
        case 'Express':
            await sleep();
            const spinnerInstallExpress = createSpinner('installing express...').start();
            await sleep();

            exec(`npm install express --prefix ${path}`, (error, stdout, stderr) =>{ 
                if(error){
                    spinnerInstallExpress.error();
                    return console.error(`error: ${error.message}`)
                }

                if(stderr){
                    spinnerInstallExpress.error();
                    return console.error(`stderr: ${stderr}`)
                }

                spinnerInstallExpress.success();
                console.log(`stdout: \n ${stdout}`);
            });
            break;
        case 'MVC':
            await sleep();
            const spinnerInstallNodemon = createSpinner('installing Nodemon...').start();
            await sleep();

            exec(`npm install nodemon --prefix ${path}`, (error, stdout, stderr) =>{ 
                if(error){
                    spinnerInstallNodemon.error();
                    return console.error(`error: ${error.message}`)
                }

                if(stderr){
                    spinnerInstallNodemon.error();
                    return console.error(`stderr: ${stderr}`)
                }

                spinnerInstallNodemon.success();
                console.log(`stdout: \n ${stdout}`);
            });

            break;
    }
}