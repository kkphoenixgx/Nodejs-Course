const fs = require(fs)

/* 
   Encapsulei em uma variável para podermos brincar com 
 isso e entender podemos colocar aqui nesse arquivo um
 ../ no path e pegar todos os arquivos da pasta anterior, por exemplo
*/
let path = __dirname;

fs.readdir(path, (err, files) => {

    files.foreach(file=> {
        if(err) throw err;

        console.log(path + '/' + file);
    })

});