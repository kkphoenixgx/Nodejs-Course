// #!/usr/bin/env node
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';
import { createSpinner } from 'nanospinner';

import { init as initReact } from './Architectures/react-Architecture.js'

var PROJECT_FOLDER_NAME;
var PATH;
var ARCHITECTURE;

let correct;
const sleep = (ms = 2000) => new Promise( (resolve) => setTimeout(resolve, ms) )


async function Questions(){

    const folder_name = await inquirer.prompt({
        name: 'folder_name',
        type: 'input',
        message: 'Please digit your folder name',
        default() { return 'project-folder' }
    });

    PROJECT_FOLDER_NAME = folder_name.folder_name;

    const path = await inquirer.prompt({
        name: 'path',
        type: 'input',
        message: 'Please digit your project path',
        default() { return `./` }
    })

    PATH = path.path
}
async function architectureChoice(){

    const architecture = await inquirer.prompt({

        name: 'architecture',
        type: 'list',
        message: 'Now select the architecture\n',
        choices: ['React', 'Node', 'Express', 'MVC'],
    
    });

    ARCHITECTURE = architecture.architecture;

    const spinner = createSpinner('Creating your architecture...').start();
    
    await createArchitecture(ARCHITECTURE, PATH, PROJECT_FOLDER_NAME);

    if(correct) spinner.success({text : 'Content created'});
    if(!correct) {
        spinner.error({ text : chalkAnimation.glitch('THAT IS A ERROR').start() })
        process.exit();
    }
}
async function createArchitecture(ARCHITECTURE,PATH, FOLDER_NAME){
    
    switch(ARCHITECTURE){
        case 'React':
            await sleep();
            initReact(FOLDER_NAME, PATH).then( message => { 
                if(message) correct = true;
                if(! message) correct = false;
            });

        break;
    }

}

await Questions();
await architectureChoice();