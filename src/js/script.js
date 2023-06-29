import { GerarArrayDasConversas } from "./data/amigos.js";
import { MostrarAmigosNaLista } from "./components/MostrarAmigosNaLista.js";
import { AtualizarConversaSelecionada } from "./components/ConversaViewer.js";
import { EnviarMensagem } from "./components/EnviarMensagem/EnviarMensagem.js";

const dadosConversas = GerarArrayDasConversas();

sessionStorage.setItem('contatos', JSON.stringify(dadosConversas));

const contatos = JSON.parse(sessionStorage.getItem('contatos'));

document.addEventListener('DOMContentLoaded', ()=>{
  MostrarAmigosNaLista(contatos);
});

//Adicionar o ouvinte nas mensagens
const mensagens = document.querySelectorAll('.block');

mensagens.forEach((mensagem, indice) => {
  mensagem.addEventListener('click', () => {
    AtualizarConversaSelecionada(mensagem, JSON.parse(sessionStorage.getItem('contatos')), indice);

    //Guardando o indice da conversa
    sessionStorage.setItem('indiceConversa', indice);

    mostrarConteudoNoFinal();
  });

  //Mostra o histórico da mensagem ativa 
  if (mensagem.classList.contains('active')) {
    AtualizarConversaSelecionada(mensagem, JSON.parse(sessionStorage.getItem('contatos')), indice);
  }

  mostrarConteudoNoFinal();
});

//Enviando uma mensagem
const inputChatBox = document.getElementById('chatboxInput');

inputChatBox.addEventListener('keypress', (e)=>{
  if(e.key == 'Enter'){
    const indiceConversa = Array.from(mensagens).findIndex(mensagem => mensagem.classList.contains('active'));
    const conversa = mensagens[indiceConversa];
    const mensagemEnviada = inputChatBox.value;

    EnviarMensagem(conversa, mensagemEnviada, indiceConversa);

    //Limpa o value do input após enviar a mensagem
    inputChatBox.value = '';

    AtualizarConversaSelecionada(conversa, JSON.parse(sessionStorage.getItem('contatos')), indiceConversa);

    mostrarConteudoNoFinal();
  }
});

function mostrarConteudoNoFinal() {
  const chatBox = document.getElementById('chatBox');

  chatBox.scrollTop = chatBox.scrollHeight;
}