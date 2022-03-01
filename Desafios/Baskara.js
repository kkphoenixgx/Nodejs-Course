// Calcular soma e produto no js

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
  
readline.question(`Digite os valores de a, b e c da formula de Baskara divididos por , `, values => { 


   readline.close();
   let valuesArray = values.split(',');

    if (valuesArray.length == '3'){

            
        let a = valuesArray[0];
        let b = valuesArray[1];
        let c = valuesArray[2];
        
        let delta = Math.pow(b, 2) - 4 * a * c

        if(delta < 0){ 
            console.log('A equação não possuí uma raiz real');
            return
        }

        if(delta == 0){
            console.log('A equação possuí uma raiz real');
            
            let result1 = (-(b) + Math.sqrt(delta)) / 2 * a;
            let result2 = (-(b) - Math.sqrt(delta)) / 2 * a;

            if(result1 > 0){
                console.log(result1);
                return
            }

            if(result2 > 0){
                console.log(result1); 
                return
            }
        }
        
        let result1 = (-b + Math.sqrt(delta)) / 2 * a;
        let result2 = (-b - Math.sqrt(delta)) / 2 * a;
        console.log(result1, result2);
        
    }else{
        console.log('(╬▔皿▔)╯ EU DISSE TRÊS NÚMEROS')
        return
    }

})
