import inquirer from 'inquirer';
import os from 'os';

import {createArchitecture} from './Setup/startArchitectureSetup.js';

export var PROJECT_FOLDER_NAME;
export var PATH;
export var ARCHITECTURE;

await Questions();
await architectureChoice();

await createArchitecture(ARCHITECTURE, PATH, PROJECT_FOLDER_NAME);

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
        default() { return `C:/Users/${os.userInfo().username}/Desktop` }
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
}