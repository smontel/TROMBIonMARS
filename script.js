document.addEventListener("DOMContentLoaded", function() { // Code relying on the DOM
    const cards = document.getElementsByClassName("card");
const whites = document.getElementsByClassName("whiteborder");
const pinks = document.getElementsByClassName("pinkborder");
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("mouseover", function() {
          for(let i=0; i<cards.length; i++){
            cards[i].classList.remove("blue");
          }

            this.classList.toggle("blue");
        })
    };

    for (let i = 0; i < whites.length; i++) {
        whites[i].addEventListener("mouseover", function() {

            for(let i=0; i<cards.length; i++){
              whites[i].classList.remove("white");
            }
            this.classList.toggle("white");

        })
    };
    for (let i = 0; i < pinks.length; i++) {
        pinks[i].addEventListener("mouseover", function() {

            for(let i=0; i<cards.length; i++){
              pinks[i].classList.remove("pink");
            }

            this.classList.toggle("pink");

        })
    }
});
