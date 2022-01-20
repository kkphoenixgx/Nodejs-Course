# Módulos 21 e 22

## Programação Assíncrona com promises

Mod 21 -- **20/01/22**

Ele explicou o que é uma promise. Vou até fazer mais uma aula

~~~js
function Somar(value1, value2){
    return new Promise( (resolve, reject) => {
        if(typeof value1 =! 'number' && typeof value2 =! 'number') return
        
        try{
            setTimeout(function(){
                resolve(value1 + value2)
            },3000)
        }
        catch(error){ reject(error) }
    })
}

somar(10+20).then( result=>{
    console.log(`That is the result of your count Sir: ${result}`)
});
~~~
