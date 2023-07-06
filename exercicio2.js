

function removerCaracteresRepetidos(frase){
    let caracteresFrase = frase.split('')
    let caracteresAux = []

    for(let i = 0; i < caracteresFrase.length; i++){
        if(caracteresAux.length == 0){
            caracteresAux.push(caracteresFrase[i])
        }else{
            for(let j = 0; j < caracteresAux.length; j++){
                if(caracteresAux[j] === caracteresFrase[i] && caracteresFrase[i] != ' '){
                    caracteresFrase[i] = ''
                    break;
                }
            }

            caracteresAux.push(caracteresFrase[i])
        }   
    }

    return caracteresFrase.join('')
}

let frase = 'Hello, World!'
console.log(removerCaracteresRepetidos(frase));