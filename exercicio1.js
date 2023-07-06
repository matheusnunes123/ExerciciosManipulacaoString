
function reverterFrase(frase){
    return frase.split(' ').reverse().join(' ');
}

let frase = 'Hello, World! OpenAI is amazing.'
console.log(reverterFrase(frase))
