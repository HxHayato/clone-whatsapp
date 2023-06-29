import { CriarIconStatus } from "../CriarIconeStatus.js";

export function EnviarMensagem(conversa, mensagemEnviada, indiceConversa) {
  const contatos = JSON.parse(sessionStorage.getItem('contatos'));

  try {
    const historicoDaConversa = contatos[indiceConversa].historico;

    //Criando a nova mensagem
    const data = new Date();
    const hora = data.getHours();
    const minutos = data.getMinutes();
    const novaMensagem = {
      autor: 'eu',
      mensagem: mensagemEnviada,
      horario: `${hora}:${minutos}`,
      status: 1
    }

    historicoDaConversa.push(novaMensagem);

    //Atualizando o arquivo no session
    sessionStorage.setItem('contatos', JSON.stringify(contatos));

    const listHead = conversa.querySelector('.listHead');
    const horarioMensagemLista = listHead.querySelector('.time');
    const divMessage = conversa.querySelector('.message');
    const mensagemLista = divMessage.querySelector('p');
    const statusMensagem = divMessage.querySelector('.status');

    mensagemLista.textContent = novaMensagem.mensagem;
    horarioMensagemLista.textContent = `${hora}:${minutos}`;
    contatos[indiceConversa].historico.push(novaMensagem);
    statusMensagem.innerHTML = '';
    const iconeStatus = CriarIconStatus(novaMensagem.status);
    statusMensagem.appendChild(iconeStatus);
    
  } catch (error) {
    console.log(`Erro ao enviar a mensagem. [Error]: ${error}`);
  }
}