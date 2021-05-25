const cards = document.querySelectorAll(".card");

// Variable
var isFlipped = false;
var firstCard;
var secondCard;

cards.forEach((card) => card.addEventListener("click", flip))

function flip(){
    // console.log("Card is Flipped");
    this.classList.add("flip");

    if (!isFlipped) {
        isFlipped = true;
        firstCard = this; 
    } else {
        secondCard = this;
        checking();
    }
}

function checking(){
    if (firstCard.dataset.image === secondCard.dataset.image) {
        success();
    } else {
        fail();
    }
}

function success(){
   // console.log("Success");
   firstCard.removeEventListener("click", flip);
   secondCard.removeEventListener("click", flip);
   reset();
}

function fail(){
   // console.log("fail");
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
  }, 1000);
}

function reset(){
    isFlipped = false;
    firstCard = null;
    secondCard = null;
}

// TODO: Shuffle