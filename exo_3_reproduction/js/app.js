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

// JS pour le slider
let slides = document.querySelectorAll(".slide");
let indicator = document.querySelectorAll(".indicator");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

let index = 0;

for (let i = 0; i < slides.length; i++) {
  if (slides[i].classList.contains("active")) {
    index = i
  }
}

prev.onclick = prevSlide;
next.onclick = nextSlide;

indicator.forEach(x => {
  x.onclick = display;
});

function display() {
  let num;
  for (let i = 0; i < indicator.length; i++) {
    indicator[i].classList.remove("active");
    slides[i].classList.remove("active");
  }
  this.classList.add("active");
  for (let i =0; i < indicator.length; i++) {
    if (indicator[i].classList.contains("active")) {
     num = i;
    }
  }
  slides[num].classList.add("active");
  index = num;
}

function prevSlide() {
  slides[index].classList.remove("active");
  indicator[index].classList.remove("active");
  index--;
  console.log(index);
  if (index < 0) {
    index = slides.length - 1;
  }
  slides[index].classList.add("active");
  indicator[index].classList.add("active");
}

function nextSlide() {
  slides[index].classList.remove("active");
  indicator[index].classList.remove("active");
  index++;
  console.log(index);
  if (index == slides.length) {
    index = 0;
  }
  console.log(index);
  slides[index].classList.add("active");
  indicator[index].classList.add("active");
}