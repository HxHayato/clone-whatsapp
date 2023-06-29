import { CriarIconStatus } from "./CriarIconeStatus.js";

export function ChatMessage(autor, mensagem, hora, status, eContinuacao) {
  const chatBox = document.getElementById('chatBox');

  //Criando os elementos
  const divMessage = document.createElement('div');
    divMessage.classList.add('message');

  const pMensagem = document.createElement('p');
    pMensagem.textContent = mensagem;

  const spanHoraStatus = document.createElement('span');
    spanHoraStatus.textContent = hora;

  //Aninhando
  chatBox.appendChild(divMessage);
    divMessage.appendChild(pMensagem);
      pMensagem.appendChild(spanHoraStatus);

  //Circunstanciais
  if(autor.toLowerCase().trim() == 'amigo'){
    divMessage.classList.add('frnd_msg');
  } else if (autor.toLowerCase().trim() == 'eu') {
    const iconStatus = CriarIconStatus(status);

    divMessage.classList.add('my_msg');
    spanHoraStatus.appendChild(iconStatus);
  }

  if(eContinuacao){
    divMessage.classList.add('msg_continue');
  }
}