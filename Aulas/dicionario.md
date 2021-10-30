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

* req.url(): <br>
Retorna a url do site, exemplo: <br>
~~~javascript
x.createServer(req, res){
    const url = req.url();
    // isso vai retornar a url dentro da const url
}
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
    400 = erro <br>

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

#### Express-validator

O express validator é o método indicado pelo express para validar campos html e fazer um filtro antes de entrar no db de um site. A forma de instalação pelo npm é bem simples:

> node install express-validator (--save)

O express-validator adiciona novos métodos nos requests, requirindo algumas delas, como o **assert("x", "y")** sendo x o campo que deve ser válido e y a mensagem caso seja inválido, e para determinar o que é inválido ele adiciona outros novos métodos, como o notEmpty() que verifica se está vazio e somente se estiver ele responderá com a mensagem.

* **notEmpty()**

~~~javascript
req.assert('nome', 'Você deve colocar um nome').notEmpty()
~~~

* **isEmail()**

O isEmail() valida se o campo preenchido foi escrito como um email.

~~~javascript
req.assert('email', 'o campo deve ser em formato de email').motEmpty().isEmail()
~~~

<h3>NeDB</h3>

O NeDB é um banco de dados todo feito em javascript e é um 
banco de dados bem simples de trabalhar, trazendo para os
usuários de nodeJs uma simples forma de gerir um servidor
na linguagem que a gente ama.

* <h4>db.insert</h4>

Exemplo: caso queira inserir algo no banco de dados você utiliza **db.insert**:

~~~javascript
        db.insert("o json que você quer inserir",
        "function(error, idGerado) =>" "{"
            "geralmente nesse bloco de código tratamos o erro",
            "e se tudo rolou bem"
        "}");
~~~

* <h4>db.find():</h4>

formula:

> db.find( x ).sort( y ).exec( fn );

sendo x o que você ta buscando, sort para organizar o que você ta buscando, então o y fica sendo a ordem que você quer detalhada numa função: você coloca o primeiro item que você quer como primeiro atributo json da lista e define se você quer +1 = ordem crescente ou -1 = ordem decrescente, e depois disso executa com o exec() passando uma função, normalmente uma arrow function que lida com o erro e com as informações, exemplo real:

~~~javascript
app.get('/users', (req, res)=>{

    /* 
    quando usamos no método find um array vazio estamos
     dizendo que queremos que liste todos os usuários, ou 
    seja não estamos buscando ninguém.
    */

    db.find({}).sort({name: 1}).exec((err, user)=> {

        if(err){
            console.log(`error: ${err}`);
            res.setCode(300).json({error: err});
        }else{
            res.setCode = 200
            res.setHeader('content-type', 'application/json');
            res.json({
                users: [{
                    name: 'x',
                    email: 'x',
                    id: 1,
                }]
            });
        }

    });

}) 
~~~

* <h4>findOne(x) :</h4>
O método findOne(x), sendo x um json com o(s) atributos de um json que você quer encontrar, por exemplo, eu quero encontrar um usuário com um determinado id, eu vou pedir do json, o _id: e passar um req.params.x, sendo x o parametro colocado na url

formula:
> db.findOne( { _x : req.params.x }).exec( fn )

Sendo x o parametro que você quer encontrar no banco, vamos um exemplo de que eu quero achar um id em especifico mas de uma maneira abstrata, claro para qualquer id que passar no form:  

~~~javascript
const routeId = app.routes('/users/:id');

routeId.get((req, res) => {
    db.findOne({_id: req.params.id}).exec((err, user)=> {
        if(err){
            console.log(`error: ${err}`);
            res.statusCode(300).json({
                error: err
            });
        }else{
            res.status(200).json(user);
        }
    }); 
});
~~~

* <h4>update(x) :</h4>

Então usando o método do NeDb chamado de update( ) do NeDb, podemos fazer alterações do banco.

> x.update({_y : req.params.y}, z, fn)

sendo x o banco, passar um update com um objeto json passando o parametro que você quer mudar num json que requisita o y e os dados necessários, no caso z, que pode ser por exemplo um **req.Body, ou seja uma requisição dos dados que estão no formulário naquele momento**, depois você executa a função sendo fn uma function para tratar o erro e as informações caso dê tudo certo. agora um exemplo prático:

~~~javascript
/* 
lembrando que aqui eu já to dentro de um arquivo para tratar 
dados de usuários e já defini meu app como express no meu 
index, isso que eu tô fazendo já é tratando minha rota.
*/

const routeId = app.routes('/users/:id');

routeId.put((req, res) => {
    db.update({_id: req.params.id}, req.body, err =>{
        if(err){
            console.log(`error: ${err}`);
            res.statusCode(300).json({
                error: err
            });
        }else{
            /*
            então como não temos o user podemos retornar os
            dados do body que tá tudo certo.
             */
            res.status(200).json(Object.assign(req.params,req.body));
        }
    });
});
~~~

* #### remove(x, y, z)

> db.remove(x, y, z)

sendo x um objeto json passando o registro que você está querendo remover, y sendo um parametro de opções passando multi se quiser vários registros de uma vez ou um por vez e z sendo uma variável que irá conter o erro caso for feito algum.

~~~javascript
//nesse caso eu estou usando consign, então a rota é routes

routes.delete((req, res) =>{
    db.remove({_id: req.params.id}, {}, err=>{
        if(err){
            //bloco de código para caso ter um erro
        }else{
            //bloco de código para caso não tenha.
        }
    })
})
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