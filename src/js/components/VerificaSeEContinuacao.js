export function VerificaSeEContinuacao(mensagem, mensagemAnterior) {
  const saoDoMesmoAutor = mensagem.autor == mensagemAnterior.autor;
  
  return saoDoMesmoAutor;
}