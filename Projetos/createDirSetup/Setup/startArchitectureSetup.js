// #!/usr/bin/env nodes
import chalkAnimation from 'chalk-animation';
import { createSpinner } from 'nanospinner';

import { nodeInit } from './npmStart.js';

import { init as initReact } from './Architectures/react-Architecture.js'
import {init as initMVC } from './Architectures/mvc-architecture.js'
import { default as initExpress} from './Architectures/express-Architecture.js'
import { default as initNode} from './Architectures/node-Architecture.js'

export async function createArchitecture(ARCHITECTURE,PATH, FOLDER_NAME){
    
    const sleep = (ms = 2000) => new Promise( (resolve) => setTimeout(resolve, ms) )

    const spinner = createSpinner('Creating your architecture...').start();
    await sleep();

    let toggleSuccess
    
    switch(ARCHITECTURE){
        case 'React':
            await sleep();
            await initReact(FOLDER_NAME, PATH).then( message => { 
                if( message == true ) toggleSuccess = true

                if( message == false ) toggleSuccess = false;

                let COMPLETE_PATH = `${PATH}/${FOLDER_NAME}`
                nodeInit(ARCHITECTURE, COMPLETE_PATH)
            });
            break;
        case 'Node':
            await sleep();
            await initNode(FOLDER_NAME, PATH).then( message => {
                if( message == true ) spinner.success({text : 'Content created'});
                
                if( message == false ) spinner.error({ text : chalkAnimation.glitch('THAT IS A ERROR').start() })

                let COMPLETE_PATH = `${PATH}/${FOLDER_NAME}`
                nodeInit(ARCHITECTURE, COMPLETE_PATH)
            })
            break;
        case 'Express':
            await sleep();
            await initExpress(FOLDER_NAME, PATH).then( message => {
                if( message == true ) spinner.success({text : 'Content created'});
                
                if( message == false ) spinner.error({ text : chalkAnimation.glitch('THAT IS A ERROR').start() })

                
                let COMPLETE_PATH = `${PATH}/${FOLDER_NAME}`
                nodeInit(ARCHITECTURE, COMPLETE_PATH)
            })
            break;
        case 'MVC':
            await sleep();
            await initMVC(FOLDER_NAME, PATH).then( message => {
                if( message == true ) spinner.success({text : 'Content created'});
                
                if( message == false ) spinner.error({ text : chalkAnimation.glitch('THAT IS A ERROR').start() })

                
                let COMPLETE_PATH = `${PATH}/${FOLDER_NAME}`
                nodeInit(ARCHITECTURE, COMPLETE_PATH)
            })
            break;
    }

    if( toggleSuccess == true ) spinner.success({text : 'Content created'});
                
    if( toggleSuccess == false ) spinner.error({ text : chalkAnimation.glitch('THAT IS A ERROR').start() })
}