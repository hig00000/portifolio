const nome = document.getElementById('nome');
const mensagem = document.getElementById('mensagem');
const telefone ='5511958085150'; 
const texto = 'Olá, gostaria de entrar em contato, gostei dos seu projeto!';
const textoformatado = encodeURIComponent(texto);
const url = 'https://wa.me/${telefone}?text=${textoformatado}';
window.open(url, '_blank');
function enviarFormulario(event) {
    event.preventDefault();
    const nomeValor = nome.value;
    const mensagemValor = mensagem.value;
    const texto = `Olá, meu nome é ${nomeValor}. ${mensagemValor}`;
    const textoformatado = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${textoformatado}`;
    window.open(url, '_blank');
    console.log('envia essa pohaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
}
