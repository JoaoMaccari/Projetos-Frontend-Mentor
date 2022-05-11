
function pontuacao(p) {
    let score = document.getElementById("nota")
    let valor = Number(p.value);
    score.innerHTML = `your score is ${valor} of 5!`
}

function changeCard() {
    let card = document.getElementsByClassName("second-card")[0]
    card.style.zIndex = 1


}