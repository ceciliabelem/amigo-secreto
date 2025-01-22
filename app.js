//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let participantes = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value.trim();
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }
    participantes.push(nomeAmigo);
    atualizarListaAmigos();
    document.getElementById('amigo').value = '';
}

function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    for (let amigo of participantes) {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (participantes.length === 0) {
        alert('Adicione pelo menos 1 amigo para sortear.');
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * participantes.length);
    let amigoSorteado = participantes[indiceAleatorio];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}
