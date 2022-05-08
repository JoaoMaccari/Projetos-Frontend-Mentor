
function choseNota(b) {
    let ratting = document.getElementsByClassName("selected")[0];

    let valor = b.value
    ratting.innerHTML = `You selected ${valor} out of 5`    
}


function trocaIndex () {
    var container = document.getElementsByClassName("container2")[0];
    container.style.zIndex = "2"
}