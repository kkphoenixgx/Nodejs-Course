function Somar(value1, value2){

    if(typeof value1 != 'number' && typeof value2 != 'number') return
    
    let Soma = new Promise( (resolve, reject) => {
        
        try{
            setTimeout(function(){
                resolve(value1 + value2)
            },3000)
        }
        catch(error){ reject(error) }
    })

    return Soma
}

function Multiplicar(value1, value2){

    if(typeof value1 != 'number' && typeof value2 != 'number') return

    return new Promise( (resolve, reject) => {
        
        try{
            setTimeout(function(){
                resolve(value1 * value2)
            },3000)
        }
        catch(error){ reject(error) }
    })
}

function Divisão(value1, value2){
    
    if(typeof value1 != 'number' && typeof value2 != 'number') return

    return new Promise( (resolve, reject) => {
        
        try{
            setTimeout(function(){
                resolve(value1 / value2)
            },3000)
        }
        catch(error){ reject(error) }
    })
}



async function main(value1, value2){

    try{ 
        console.log(`O resultado da sua soma é ${await Somar(value1, value2)} O resultado da sua multiplicação é ${await Multiplicar(value1,value2)} e o da sua divisão é ${await Divisão(value1, value2) }`);
    }catch(error){
        console.log(error)
    }

}

main(3, 10)