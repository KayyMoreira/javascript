const inputTarefa = document.getElementById('novaTarefa');
const botaoAdicionar = document.getElementById('adicionarTarefa');
const listaTarefa = document.getElementById('listaTarefa');

//função para adicionar tarefa
function adicionarTarefa() {
    const tarefaTexto = inputTarefa.value.trim();
    if (tarefaTexto !== "") {
        let li = document.createElement('li');
        li.textContent = tarefaTexto;
        listaTarefa.appendChild(li);
        inputTarefa.value = "";
    }
}

botaoAdicionar.addEventListener('click', adicionarTarefa);

inputTarefa.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarTarefa();
    }
});
