mod 7                                               06/09/21

- Primeiro código em node.

  Usando esse primeiro código que eu nem sei se eu posso
falar que estou de fato usando nodejs agora, percebo que
é bem diferente do usual, ele é cheio de métodos
facilitadores que realmente de primeira mão deve ser meio
complicado de gravar e entender, mas eu estou começando o
processo.
  O método require(x) que trás um módulo de dentro de um
outro arquivo. Então fica a pergunta:

-[em suma o que é um módulo?]
 Nisso o google pode me ajudar bastante, de acordo com 
as palavras do amuleto dá sabedoria dado pelo Joandel

"É um script php no qual você consegue incluir em um outro
script. É uma maneira bem tradicional de se organizar as 
partes funcionais do código."

* mas que porra isso significa?
Ele basicamente tá falando que a classe que ele usa para
fazer as coisas é escrita em php. E isso é libertador
até por que isso significa que é possivel migrar 
informações transformando em módulo para entregar para o 
o javascript.

Então por exemplo, posso criar com o módulo require(x)
sendo x "http" e usar os módulos do php já nativos do 
nodejs para criar um servidor na web que vai rodar algo
usando o exemplo de um localhost.
../Projetos/server.js

Usando os métodos 
server = http.createServer(req, res);
server.listen(port, host, fn);

sendo fn igual a uma function que você vai definir o que
vai acontecer após o termino do processo do servidor. 

Outro ponto muito importante são os parametros decididos
no create server, estes são o [request] e o [response]

* [request] é quando pedimos a informação para o servidor
* já o [response] é quando o servidor responde.

e usando esses res e req tempos atributos interessantes
como por exemplo o statusCode que é o status do servidor
sendo "200" tudo certo e métodos interessantes, por exemplo
o end() que responde a request de uma forma dita.

E o setHeader() que informa a forma que você vai responder 
o pedido e acho que tem outras funções mas no momento só
conheço o 'Content-Type', 'y', sendo y o tipo de arquivo
então até como usaram no curso:

res.setHeader('content-type', 'text/plain');

- Outras dicas importantes:

ctrl + c para o servidor. 