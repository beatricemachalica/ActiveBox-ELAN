// dans le document, je recherche le selecteur avec la class burger ; puis écouter les événements clic
// lorsqu'il entend le clic, il execute une fonction
// toggle = alterner un état vers un autre
document.querySelector('.burger').addEventListener("click", function (){
    document.querySelector("header nav").classList.toggle("visible");
});
// dans le doc, on recherche le selecteur .nav, on regarde sa liste de class, et on lui demande
// d'alterner entre ajouter/supprimer la class visible
// ne pas oublier la balise script dans le html juste avant la fermeture du body

// exemple pour  comprendre function anonyme et le callback
function maFonction(phrase, callback){
    console.log(phrase)
    callback()
}
maFonction("Coucou", function(){
    console.log("voici le callback")
})