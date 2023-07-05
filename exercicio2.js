let frase = 'Hello, World!'
let caracteresFrase = frase.split('')
let caracteresAux = []

console.log(caracteresFrase);
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


console.log(caracteresFrase.join(''));