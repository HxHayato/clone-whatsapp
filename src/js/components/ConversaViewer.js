import { ChatMessage } from "./ChatMessage.js";
import { VerificaSeEContinuacao } from "./VerificaSeEContinuacao.js";

export function AtualizarConversaSelecionada(conversaClicada, contatos, indice) {
  const conversaAtiva = document.querySelector('.block.active');

  conversaAtiva.classList.remove('active');
  conversaClicada.classList.add('active');

  //Se a mensagem ainda não foi lida, marca como lida
  const mensagemAtualAindaNaoFoiLida = conversaClicada.classList.contains('unread');

  if(mensagemAtualAindaNaoFoiLida){
    conversaClicada.classList.remove('unread');
  }

  //Atualizando o nome, a foto e o status
  const contato = contatos[indice];

  //Atualizar o cabeçalho do chatBox
  AtualizarChatBoxCabecalho(contato);

  //Atualizar as mensagens do chatBox
  AtualizarChatBoxHistorico(contato);
}

function AtualizarChatBoxCabecalho(mensagem) {
  //Elementos que serão atualizados
  const rightSide = document.querySelector('.rightSide');
  const divImgText = rightSide.querySelector('.imgText');
  const fotoAmigo = divImgText.querySelector('img');
  const nomeAmigo = divImgText.querySelector('h4');

  //informações que serão usadas
  const nome = mensagem.nome;
  const endFoto = mensagem.foto;
  const amigoEstaOnline = mensagem.online;

  //Atualizando os elementos
  fotoAmigo.src = endFoto;
  fotoAmigo.alt = `Foto de perfil de ${nome}`;
  nomeAmigo.textContent = nome;

  if (amigoEstaOnline) {
    const br = document.createElement('br');
    const spanStatus = document.createElement('span');
    spanStatus.textContent = 'online';

    //Precisa colocar o br e o span dentro do nome
    nomeAmigo.appendChild(br);
    nomeAmigo.appendChild(spanStatus);
  }
} 

function AtualizarChatBoxHistorico(contato) {
  const historico = contato.historico;
  const chatBox = document.getElementById('chatBox');

  //Zerando o chatbox para depois preenche-lo
  chatBox.innerHTML = '';

  for (let i = 0; i < historico.length; i++) {
    const mensagem = historico[i];

    //ChatMessage(autor, mensagem, hora, status, eContinuacao)
    const autor = mensagem.autor;
    const conteudo = mensagem.mensagem; //Conteúdo da mensagem
    const hora = mensagem.horario;
    const status = mensagem.status;
    const eContinuacao = i > 0 ? VerificaSeEContinuacao(historico[i], historico[i - 1]) : false;

    ChatMessage(autor, conteudo, hora, status, eContinuacao)
  }
}