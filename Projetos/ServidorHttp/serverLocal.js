//---------------dependencies------------

import http from 'http'
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation'
import child_process from 'child_process'

// -----------------Variables-----------

const PORT = '3000'
const HOST_NAME = '127.0.0.1'

const URL = `http://${HOST_NAME}:${PORT}`
const OPEN = (process.platform == 'win32' || process.platform == 'win64' ? 'start' : process.platform == 'darwin' ? 'open' : 'xdg-opem'  )

// -------------------Server-------------

const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<div style="text-align: center"> <h1> Page already started </h1> <text> Start working! </text> </div>')

})

server.listen(PORT, HOST_NAME, ()=> {
    chalkAnimation.rainbow('Server started').start();
});

child_process.exec(OPEN + ' ' + URL);