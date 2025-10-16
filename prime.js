// --- FUNÇÃO PARA O BOTÃO DO MENU MOBILE ---
const btnMobile = document.querySelector('.btn-mobile');
const nav = document.querySelector('.navegacao');

// Adiciona o elemento do ícone "hambúrguer" dinamicamente
btnMobile.innerHTML = '<span id="hamburguer"></span>';

function toggleMenu(event) {
  // Previne o comportamento padrão (ex: se for um link)
  if (event.type === 'touchstart') event.preventDefault();
  
  nav.classList.toggle('ativo');

  // Acessibilidade: informa se o menu está expandido ou não
  const ativo = nav.classList.contains('ativo');
  event.currentTarget.setAttribute('aria-expanded', ativo);
  if(ativo) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

// Adiciona os eventos de clique e toque no botão
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


// --- FUNÇÃO PARA O FORMULÁRIO DE CONTATO (seu código original) ---
function enviarFormulario(event) {
    event.preventDefault(); // Impede o recarregamento da página

    const nomeInput = document.getElementById('nome');
    const mensagemInput = document.getElementById('mensagem');
    const telefone = '5511958085150'; // SEU NÚMERO DE WHATSAPP AQUI

    const nomeValor = nomeInput.value;
    const mensagemValor = mensagemInput.value;

    // Monta a mensagem final
    const texto = `Olá, meu nome é ${nomeValor}. ${mensagemValor}`;
    
    // Codifica a mensagem para ser usada na URL
    const textoFormatado = encodeURIComponent(texto);
    
    // Cria a URL do WhatsApp
    const url = `https://wa.me/${telefone}?text=${textoFormatado}`;
    
    // Abre a URL em uma nova aba
    window.open(url, '_blank');
}