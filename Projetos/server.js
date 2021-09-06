const http = require("http");
const host = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Ola Mundo \n Meu primeiro script em node');
});

server.listen(port, host, ()=> {
    console.log(`Server running at http://${host}:${port}`);
});