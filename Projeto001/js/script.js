
function choseNota(b) {
    let ratting = document.getElementsByClassName("selected")[0];

    let valor = b.value
    ratting.innerHTML = `${valor}`    
}


//criar uma função para a primeira pagina sair da frente da segunda
//com
//z index
//ou dar um display none na primeira pagina