const form = document.querySelector('#form-capsula');
const lista = document.querySelector('#lista');
const aviso = document.querySelector('#aviso');

let capsulas = [
    {
        id: 1,
        autor: 'Kayque',
        titulo: 'Para mim em 2030',
        mensagem: 'Espero ter conseguido morar sozinho',
        abre_em: '2030-01-01T00:00:00Z'
    },
      {
        id: 2,
        autor: 'Professor',
        titulo: 'Bem vindos!',
        mensagem: 'Esta cápsula já foi aberta..',
        abre_em: '2020-01-01T00:00:00Z'
    }
];

function calcularContagem(dataFutura) {
    const diferenca = new Date(dataFutura) - new Date();
    if (diferenca <= 0) {
        return null;

    }
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    return `${dias}d ${horas}h ${minutos}min`;
}
