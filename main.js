const form = document.getElementById("form-contatos");
const imgCheck = '<img src="./images/check.png" alt="Check de salvo" />';
const nomeContato = [];
const numContato = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumContato = document.getElementById('num-contato');

    if (nomeContato.includes(inputNomeContato.value)){
        alert(`O contato ${inputNomeContato.value} já foi inserido!`)
    } else {
        nomeContato.push(inputNomeContato.value);
        numContato.push(inputNumContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumContato.value}</td>`;
        linha += `<td>${imgCheck}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumContato.value = '';
};

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};

