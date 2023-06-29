export function VerificarQuantasMensagensNaoLidas(historico, elemento) {
  let contador = 0;

  for (let index = historico.length - 1; index > 0; index--) {
    const mensagem = historico[index];
    const autorMensagem = mensagem.autor;
    
    if(autorMensagem.toLowerCase().trim() == 'amigo'){
      contador++;
    } else {
      break;
    }
  }

  elemento.textContent = contador;
}