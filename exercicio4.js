

function verificarLetra(letra){
    return letra.length === 1 && letra.match(/[a-z]/i) != null
}

function formatarTextoEmMaiusculo(frase){
    frase = frase.split("")
    const caracteresEspeciais = ['.','!','?']
    
    let inicioFrase = true;
    for(let i = 0; i<frase.length; i++){
        if(inicioFrase){
            if(verificarLetra(frase[i])){
                frase[i] = frase[i].toUpperCase()
                inicioFrase = false
                continue
            } 
        }

        for(let j = 0; j<caracteresEspeciais.length; j++){
            if(frase[i].includes(caracteresEspeciais[j])){
                inicioFrase = true
                continue
            }
        }

    }

    frase = frase.join("")
    return frase;

}


const frase = "hello. how are you? i'm fine, thank you"
const textoFormatado = formatarTextoEmMaiusculo(frase)
console.log(textoFormatado)