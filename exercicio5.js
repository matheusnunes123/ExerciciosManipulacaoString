function verificarAnagramaPalindromo(texto){
    texto = texto.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()

    const textoReverso = texto.split("").reverse().join("");
    if(texto === textoReverso){
        return true;
    }

    
    // Criando um objeto em javascript para contagem de cada caractere
    let contagemPorCaracter = {}
    for(let char of texto){
        contagemPorCaracter[char] = (contagemPorCaracter[char] || 0) + 1 
    }

    let contagemImpar = 0
    for(let char in contagemPorCaracter){
        if(contagemPorCaracter[char] % 2 != 0){
            contagemImpar++
        }
        if(contagemImpar > 1){
            return false
        }
    }

    return true

}

console.log(verificarAnagramaPalindromo(''))