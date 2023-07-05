
function expandirNoCentro(texto, esquerda, direita) {
    while (esquerda >= 0 && direita < texto.length && texto[esquerda] === texto[direita]) {
      esquerda--;
      direita++;
    }
    return texto.substring(esquerda + 1, direita);
  }
  
  function palindromoMaisLongo(texto) {
    let palindromoLongo = '';
  
    for (let i = 0; i < texto.length; i++) {
      // Para retornar palindromos pares
      const palindromo1 = expandirNoCentro(texto, i, i + 1);
      if (palindromo1.length > palindromoLongo.length) {
        palindromoLongo = palindromo1;
      }
  
      // Para retornar palindromos impares
      const palindromo2 = expandirNoCentro(texto, i, i);
      if (palindromo2.length > palindromoLongo.length) {
        palindromoLongo = palindromo2;
      }
    }
  
    return palindromoLongo;
  }

  const entrada1 = "babad";
  const saida = palindromoMaisLongo(entrada2);
  console.log(saida); // Output: "bab"