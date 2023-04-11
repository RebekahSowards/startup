class Card {
    constructor(number, effect) {
        this.number = number;
        this.effect = effect;
    }

    generateNumberSide() {
        const cardDivEl = document.createElement("div");
        const effectDivEl = document.createElement("div");
        const effectImgEl = document.createElement("img");
        const numberDivEl = document.createElement("div");
        const numberSpanEl = document.createElement("span");

        cardDivEl.classList.add("card", "card-number");
        effectDivEl.classList.add("effect", "back-effect");
        effectImgEl.src = this.effect.imageSrc;
        effectImgEl.alt = "Bootstrap";
        numberDivEl.classList.add("number");
        numberSpanEl.textContent = this.number;

        cardDivEl.appendChild(effectDivEl);
        cardDivEl.appendChild(numberDivEl);

        effectDivEl.appendChild(effectImgEl);
        numberDivEl.appendChild(numberSpanEl);

        effectDivEl.style = `background-color: ${this.effect.color}`;

        return cardDivEl;
    }

    generateEffectSide() {
        const cardDivEl = document.createElement("div");
        const effectDivEl = document.createElement("div");
        const effectImgEl = document.createElement("img");

        cardDivEl.classList.add("card", "card-effect");
        effectDivEl.classList.add("effect", "front-effect");
        effectImgEl.src = this.effect.imageSrc;
        if (this.effect.imageSrc === "") {
            effectImgEl.classList.add("blank");
        }
        effectImgEl.alt = "Bootstrap";

        cardDivEl.appendChild(effectDivEl);
        effectDivEl.appendChild(effectImgEl);

        effectDivEl.style = `background-color: ${this.effect.color}`;

        return cardDivEl;
    }
}

class Effect {
    constructor(imageSrc, color) {
        this.imageSrc = imageSrc;
        this.color = color;
    }
}

class Game {
    deck1;
    deck2;
    deck3;
    cardIndex;
  
    constructor() {
        this.divideCards();
        this.cardIndex = 0;
        const cardContainerDivEl = document.querySelector('.card-container');

        cardContainerDivEl.appendChild(this.deck1[0].generateNumberSide());
        cardContainerDivEl.appendChild(blankCard.generateEffectSide());
        cardContainerDivEl.appendChild(this.deck2[0].generateNumberSide());
        cardContainerDivEl.appendChild(blankCard.generateEffectSide());
        cardContainerDivEl.appendChild(this.deck3[0].generateNumberSide());
        cardContainerDivEl.appendChild(blankCard.generateEffectSide());
    }

    advanceCards() {
        const cardContainerDivEl = document.querySelector('.card-container');

        while (cardContainerDivEl.firstChild) {
            cardContainerDivEl.removeChild(cardContainerDivEl.firstChild);
        }

        this.cardIndex++;
        console.log(this.deck1.length);
        console.log(this.deck2.length);
        console.log(this.deck3.length);

        if (this.cardIndex == this.deck1.length) {
            const card1 = this.deck1.pop();
            const card2 = this.deck2.pop();
            const card3 = this.deck3.pop();
            this.deck1 = this.shuffle(this.deck1);
            this.deck2 = this.shuffle(this.deck2);
            this.deck3 = this.shuffle(this.deck3);

            this.cardIndex = 0;
            cardContainerDivEl.appendChild(this.deck1[this.cardIndex].generateNumberSide());
            cardContainerDivEl.appendChild(card1.generateEffectSide());
            cardContainerDivEl.appendChild(this.deck2[this.cardIndex].generateNumberSide());
            cardContainerDivEl.appendChild(card2.generateEffectSide());
            cardContainerDivEl.appendChild(this.deck3[this.cardIndex].generateNumberSide());
            cardContainerDivEl.appendChild(card3.generateEffectSide());
        } else {
            cardContainerDivEl.appendChild(this.deck1[this.cardIndex].generateNumberSide());
            cardContainerDivEl.appendChild(this.deck1[this.cardIndex-1].generateEffectSide());
            cardContainerDivEl.appendChild(this.deck2[this.cardIndex].generateNumberSide());
            cardContainerDivEl.appendChild(this.deck2[this.cardIndex-1].generateEffectSide());
            cardContainerDivEl.appendChild(this.deck3[this.cardIndex].generateNumberSide());
            cardContainerDivEl.appendChild(this.deck3[this.cardIndex-1].generateEffectSide());
        }
    }

    shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }
    
    divideCards() {
        const shuffledCards = this.shuffle(cards);
        this.deck1 = shuffledCards.slice(0, shuffledCards.length * 1/3);
        this.deck2 = shuffledCards.slice(shuffledCards.length * 1/3, shuffledCards.length * 2/3);
        this.deck3 = shuffledCards.slice(shuffledCards.length * 2/3, shuffledCards.length);
        console.log(this.deck3);
    }
    
}

const fenceEffect = new Effect("icons/bricks.svg", "lightgray");
const investEffect = new Effect("icons/graph-up-arrow.svg", "purple");
const parkEffect = new Effect("icons/tree.svg", "green");
const poolEffect = new Effect("icons/water.svg", "blue");
const constructionEffect = new Effect("icons/cone-striped.svg", "orange");
const bisEffect = new Effect("icons/envelope.svg", "red");
const blankEffect = new Effect("", "white");

const blankCard = new Card(0, blankEffect);

const cards = [
    new Card(1, fenceEffect),
    new Card(1, investEffect),
    new Card(1, parkEffect),
    new Card(2, fenceEffect),
    new Card(2, investEffect),
    new Card(2, parkEffect),
    new Card(3, fenceEffect),
    new Card(3, poolEffect),
    new Card(3, constructionEffect),
    new Card(3, bisEffect),
    new Card(4, investEffect),
    new Card(4, parkEffect),
    new Card(4, poolEffect),
    new Card(4, constructionEffect),
    new Card(4, bisEffect),
    new Card(5, fenceEffect),
    new Card(5, investEffect),
    new Card(5, parkEffect),
    new Card(5, fenceEffect),
    new Card(5, investEffect),
    new Card(5, parkEffect),
    new Card(6, fenceEffect),
    new Card(6, fenceEffect),
    new Card(6, investEffect),
    new Card(6, parkEffect),
    new Card(6, poolEffect),
    new Card(6, constructionEffect),
    new Card(6, bisEffect),
    new Card(7, fenceEffect),
    new Card(7, investEffect),
    new Card(7, investEffect),
    new Card(7, parkEffect),
    new Card(7, parkEffect),
    new Card(7, poolEffect),
    new Card(7, constructionEffect),
    new Card(7, bisEffect),
    new Card(8, fenceEffect),
    new Card(8, fenceEffect),
    new Card(8, investEffect),
    new Card(8, investEffect),
    new Card(8, parkEffect),
    new Card(8, parkEffect),
    new Card(8, poolEffect),
    new Card(8, constructionEffect),
    new Card(8, bisEffect),
    new Card(9, fenceEffect),
    new Card(9, investEffect),
    new Card(9, investEffect),
    new Card(9, parkEffect),
    new Card(9, parkEffect),
    new Card(9, poolEffect),
    new Card(9, constructionEffect),
    new Card(9, bisEffect),
    new Card(10, fenceEffect),
    new Card(10, fenceEffect),
    new Card(10, investEffect),
    new Card(10, parkEffect),
    new Card(10, poolEffect),
    new Card(10, constructionEffect),
    new Card(10, bisEffect),
    new Card(11, fenceEffect),
    new Card(11, investEffect),
    new Card(11, parkEffect),
    new Card(11, fenceEffect),
    new Card(11, investEffect),
    new Card(11, parkEffect),
    new Card(12, investEffect),
    new Card(12, parkEffect),
    new Card(12, poolEffect),
    new Card(12, constructionEffect),
    new Card(12, bisEffect),
    new Card(13, fenceEffect),
    new Card(13, poolEffect),
    new Card(13, constructionEffect),
    new Card(13, bisEffect),
    new Card(14, fenceEffect),
    new Card(14, investEffect),
    new Card(14, parkEffect),
    new Card(15, fenceEffect),
    new Card(15, investEffect),
    new Card(15, parkEffect),
];
  
const game = new Game();

  





