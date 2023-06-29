import { CriarIconStatus } from "./CriarIconeStatus.js";
import { VerificarQuantasMensagensNaoLidas } from "./VerificarQuantasMensagensNaoLidas.js";

export function MostrarAmigosNaLista(contatos) {
  const conversas = document.querySelectorAll('.block');
  
  conversas.forEach((amigo, index) => {
    //Campos do index.html
    const listHead = amigo.querySelector('.listHead');
    const horarioMensagem = listHead.querySelector('.time');
    const divMensagem = amigo.querySelector('.message');
    const statusMensagem = divMensagem.querySelector('.status');
    const pMensagem = divMensagem.querySelector('p');
    const spanContNotificacao = amigo.querySelector('.notification_count');

    //Extraindo as informações do "contatos"
    const historico = contatos[index].historico;
    const tamHistorico = historico.length;
    const ultMensagem = historico[tamHistorico - 1];
    const autorUltMensagem = ultMensagem.autor;
    const horarioUltMensagem = ultMensagem.horario;
    const conteudoUltMensagem = ultMensagem.mensagem;
    const statusUltMensagem = ultMensagem.status;

    //Verificando qual status é e criando o ícone
    if (autorUltMensagem.toLowerCase().trim() === 'eu'){
      const iconeStatusMensagem = CriarIconStatus(statusUltMensagem);

      //Atualizando o status da mensagem
      statusMensagem.appendChild(iconeStatusMensagem);
    } else if(autorUltMensagem.toLowerCase().trim() === 'amigo'){
      if (statusUltMensagem.toLowerCase().trim() != 'lida') {
        //Adiciona o unread a classe do block
        amigo.classList.add('unread');

        //Verifica quantas mensagens ainda não foram lidas e coloca o número no elemento passado no segundo parâmetro
        VerificarQuantasMensagensNaoLidas(historico, spanContNotificacao);
      }
    }

    //Atualizando as informações
    horarioMensagem.textContent = horarioUltMensagem;
    pMensagem.textContent = conteudoUltMensagem;
  });
}
