<h2>Dicionário de Node, dependentes e github</h2>

<h3>NodeJs :</h3>
    
<h4>módulos e dependentes:</h4>

<h5>Módulos:</h5>

* O que é um módulo?
>"É um script php no qual você consegue incluir em um outro
script. É uma maneira bem tradicional de se organizar as 
partes funcionais do código."


* require(x): <br>
    O método require(x) que trás um módulo de dentro de um outro arquivo.
    Então por exemplo, me traga o módulo http: require("http).<br>

    Isso é muito usado para definir uma constante com o módulo que vai ser usado no código.

    ~~~javascript
        const http = require("http")
    ~~~ 

<h5>Dependentes:</h5>

* server

    * ports: <br>
    > 3000 = porta local;


    * Ips
    > "127.0.0.1" = IP local da maquina.


    * x.createServer(req, res);

        CreateServer basicamente cria um servidor usando um módulo, que pode ser chamado por um require por exemplo, os parametros 
        req e res são respectivamente request e response, isso é um termo usado muito em nodejs, sendo request o que foi requisitado 
        pelo cliente e response o que foi respondido pelo server

        **statusCode** é o status do servidor, sendo : <br>
        200 = tudo certo. <br>
        300 = erro <br>

    * req.setHeader()

        Informa a forma que você vai responder o request:<br>
        
            formula:
            > res.setHeader('Content-Type', 'y')
            
            sendo y como você vai responder:
            
            > "text/plain" : formato de texto;
            > "text/html" : formata para entender strings em html;
            > "application/json" : faz poder retornar um json



* x.listen(porta, ip, fn){

    No caso do listen, vamos passar a porta e o ip para o servidor rodar e o que fazer enquanto o servidor  estiver 
    rodando, sendo x = o próprio server.

    ~~~javascript
    ex:
        server.listen(3000, 127.0.0.1, ()=>{

        /*  bloco de código para o que fazer enquanto o server 
        está rodando. */
    }
~~~

<h3>Nodeschool :</h3>

    learnyounode = inicializa o Nodeschool.
    learnyounode verify x = testa o código


<h3>Github :</h3>

    - git init
        para inicializar o repositório github
        Lembrando que ele vai entrar na branch master como padrão
    

    -git add
        para mandar para a stage area do repositório.
    

    -git commit -m "x"
        sendo x a mensagem do commit que você quer fazer.
        e ele basicamente vai mandar para o repositório.
    

    -git remote
        Verifica se tem algum diretório remoto ligado a pasta.
    

    -git remote add origin y
        sendo y o link do seu repositório no github.
    

    -git pull origin master --allow-unrelated-histories
        Vai baixar os arquivos existentes no repositório
    

    -git push origin master
        Vai dar um push nos arquivos na stage area;