//pego meu accordion em uma classe, cada accordion é um dindice da classe
let accordion = document.getElementsByClassName("accordion");
console.log(accordion);
var i;

//uso um for para percorrer a classe
for (i =0; i< accordion.length; i++) {
    accordion[i].addEventListener("click", function(){
       

        /* alternar entre esconder e mostrar o panel ativado*/ 
        var panel = this.nextElementSibling;
        
        if (panel.style.display === "block"){
            panel.style.display = "none";
        }else{
            panel.style.display = "block"
        }
    });
}