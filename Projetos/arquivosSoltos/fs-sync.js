const fs = require('fs');

console.log("----Testando o blocking e non blocking----");

//---------------------------------------------------

console.log("[1]  antes da primeira leitura :" + (process.hrtime()[0]/60).toFixed(5));
// começo da operação 1

    try { 
        const data1 = fs.readFileSync("textingText.txt");
        console.log("fim da leitura 1")
    }
    catch(e){ console.error(e) }
    // os malucos fizeram um arquivo txt de 2gb para mostrar que tem diferença no tempo e mostrar o blocking funcionando

//fim da operação 1
console.log("[1]  depois da primeira leitura :" + (process.hrtime()[0]/60).toFixed(5));

//---------------------------------------------------

console.log("[2]  antes da leitura dois :" + (process.hrtime()[0]/60).toFixed(5));
// começo da operação 2


    const data2 = fs.readFile("textText.txt", (error, data) =>{
        if(error) throw error;
        if(!error) console.log("fim da leitura 2");
    });
    //agora se eu fizer sem o Sync, ele vai rodar depois desse ultimo console


//fim da operação 2
console.log("[2]  suposto depois da leitura :" + (process.hrtime()[0]/60).toFixed(5));