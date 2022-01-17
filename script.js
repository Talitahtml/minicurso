let indice
let imagem = []
let nomeDoPersonagem = []
let especie = []
let condicao = []

for (let i=0; i<3; i++){
    let x = document.getElementById('img'+[i]);
    let n = document.getElementById('nome'+[i]);
    let e = document.getElementById('especie'+[i]);
    let c = document.getElementById('status'+[i]);
    imagem.push(x)
    nomeDoPersonagem.push(n);
    especie.push(e);
    condicao.push(c);
}

const botao = document.querySelector('button');


gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671)
}

pegarPersonagem = () => {
    for (let i=0; i<3; i++){
        let numeroAleatorio = gerarValorAleatorio();
        t =  fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
            method: 'GET',
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
             }
            }).then((response) => response.json()).then((data) => {
                imagem[i].src = data.image;
                imagem[i].alt = data.name;
                nomeDoPersonagem[i].innerHTML = data.name;
                especie[i].innerHTML = data.species;
                condicao[i].innerHTML = data.status;
            })
    }
    return t
}



botao.onclick = pegarPersonagem
 

