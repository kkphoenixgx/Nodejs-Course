<h2>Dicionário de Node, NPM, express e github</h2>

<h3>-NodeJs-</h3>
    
<h4>--módulos e dependentes:--</h4>

<h5>---Módulos:---</h5>

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
<h5>---Methods nodeJs---</h5>

* exec(fn) :<br>
    basicamente você executa a função fn, mas com o node
    fica bem legal, pois você pode passar o erro e o a informação propriamente dita.
~~~javascript
x.exec((err, user){
    bloco de código 
})
~~~

<h5>---Dependentes:---</h5>

<h5>----Server:----</h5>

<h5>-----Server methods-----</h5>

* x.createServer(req, res);

    CreateServer basicamente cria um servidor usando um módulo, que pode ser chamado por um require por exemplo, os parametros 
    req e res são respectivamente request e response, isso é um termo usado muito em nodejs, sendo request o que foi requisitado 
    pelo cliente e response o que foi respondido pelo server

    **statusCode** é o status do servidor, sendo : <br>
    200 = tudo certo. <br>
    300 = erro <br>

* req.setHeader()

    Informa a forma que você vai responder o request:<br>
    
    **formula:** <br>
    > res.setHeader('Content-Type', 'y')
    
    sendo y como você vai responder:
    
    "text/plain" = formato de texto.<br>
    "text/html" = formata para entender strings em html.<br>
    "application/json" = faz poder retornar um json.<br>

* x.listen(porta, ip, fn)

    No caso do listen, vamos passar a porta e o ip para o servidor rodar e o que fazer enquanto o servidor  estiver 
    rodando, sendo x = o próprio server.

    ~~~javascript
    ex:
        server.listen(3000, 127.0.0.1, ()=>{

        /*  bloco de código para o que fazer enquanto o server 
        está rodando. */
    })
    ~~~

<h5>-----Portas e Ips :-----</h5>

* ports: <br>
3000 = porta local.
* Ips: <br>
"127.0.0.1" = IP local da maquina.



<h3>--NPM--</h3>

<h4>conceitos :</h4>

npm = gerador de pacote do node. package json = é onde fica as configurações de projeto.

<h4>comandos :</h4>

* npm init = ele ajuda você a criar um package json.

* npm install x = instala um modulo externo.
    --save = se colocar isso após o nome do pacote (x)
    ele vai salvar também no package.json as informações
    do módulo como uma dependencia	

<h3>--Nodeschool--</h3>

    learnyounode = inicializa o Nodeschool.
    learnyounode verify x = testa o código

<h3>--Express--</h3>

O express funciona de uma maneira bem simples, ele vai carregar tudo para você, você só precisa requisitar ele
e criar uma variável x, que é o express em si, comumente
chamada de app:
~~~javascript
const express = require('express');

var app = express();
~~~

<h4>---Router( )---</h4>

O router do express é basicamente um método separador de rotas nativo do express que separa rotas em arquivos de uma maneira incrivelmente contra producente mas melhor que o método padrão.<br>

Usando uses() e requires() podemos usar e requirir no nosso arquivo
os paths separados, no caso fica interessante fazer uma pasta só de paths e separar essas paths em arquivos. Com um require chamamos o arquivo pelo path do arquivo ex:

~~~javascript
const routesIndex = require('./routes/pathIndex')
~~~

E podemos chamar essa constante no use() exemplo :
~~~javascript
app.use(routesIndex);
~~~

Aí já dentro do arquivo path a configuração é bem simples, você chama o express, o routes do express e vai chamar a rota não mais com o express e sim com o routes:

~~~javascript
const express = require('express')
const routes = express.Router()

routes.get('/users', (req, res) => {

    res.statusCode = 200;
    res.setHeader('content-type', 'application/json')
    res.json({
        users:[{
            user: "Kauã Alves",
            email : "macacodeoculos123@gmail.com",
            id: 1
        }]
    });

});
~~~

<h3>NeDB</h3>

O NeDB é um banco de dados todo feito em javascript e é um 
banco de dados bem simples de trabalhar, trazendo para os
usuários de nodeJs uma simples forma de gerir um servidor
na linguagem que a gente ama.

* inserindo dados com db.insert<br>
    Exemplo: caso queira inserir algo no banco de dados você utiliza **db.insert**:

formula:

        db.insert("o json que você quer inserir",
        "function(error, idGerado) =>" "{"
            "geralmente nesse bloco de código tratamos o erro",
            "e se tudo rolou bem"
        "}");

* pegando dados do servidor com db.find():<br>

formula:
> db.find(x)

sendo x um objeto json do que você tá procurando e 
usando um sort(x) sendo x umo bjeto com o nome do 
atributo que vai primeiro e : 1 para crescente e -1 
para decrescente

~~~javascript

~~~

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