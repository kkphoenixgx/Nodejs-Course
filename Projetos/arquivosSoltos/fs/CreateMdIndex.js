const fs = require('fs');

const dir = 'C:/-Sync/Programação/Java/Aulas'; //G:/My Drive/Programação/Javascript/Typescript/Typescript
fs.readdir(dir , (err, arquivos) => {
  
    console.log(arquivos);
    arquivos.forEach(arquivo => {
        
        if ( fs.statSync(dir + '/' + arquivo).isDirectory() ){

            if(arquivo == 'img') return

            let path = dir + `/${arquivo}/`
            fs.readdir(path, (err, file) => {
                file.forEach(subFile => {

                    console.log(`|[${subFile}](./${arquivo}/${subFile})|||`)

                })
            });
        }else{
            console.log(`|[${arquivo}](./Selection1e2/${arquivo})|||`);
        }

    });
});