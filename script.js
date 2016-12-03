document.addEventListener("DOMContentLoaded", function() { // Code relying on the DOM
    const cards = document.getElementsByClassName("card");
const reds = document.getElementsByClassName("redborder");
const pinks = document.getElementsByClassName("pinkborder");
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("mouseover", function() {
          for(let i=0; i<cards.length; i++){
            cards[i].classList.remove("blue");
          }

            this.classList.toggle("blue");
        })
    };

    for (let i = 0; i < reds.length; i++) {
        reds[i].addEventListener("mouseover", function() {

            for(let i=0; i<cards.length; i++){
              reds[i].classList.remove("red");
            }
            this.classList.toggle("red");

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
