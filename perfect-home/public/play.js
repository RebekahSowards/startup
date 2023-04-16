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
    seed;
    rand;
    deck1;
    deck2;
    deck3;
    cardIndex;
  
    constructor() {
        this.rand = Math.random;  // I might want to seed this later to allow for viewing card order from previous games

        this.divideCards();
        this.cardIndex = 0;
        const cardContainerDivEl = document.querySelector(".card-container");

        cardContainerDivEl.appendChild(this.deck1[0].generateNumberSide());
        cardContainerDivEl.appendChild(blankCard.generateEffectSide());
        cardContainerDivEl.appendChild(this.deck2[0].generateNumberSide());
        cardContainerDivEl.appendChild(blankCard.generateEffectSide());
        cardContainerDivEl.appendChild(this.deck3[0].generateNumberSide());
        cardContainerDivEl.appendChild(blankCard.generateEffectSide());

        const playerNameEl = document.querySelector(".player-name");
        playerNameEl.textContent = this.getPlayerName();
    }

    allAdvance(end = false) {
        if (end) {
            //communicate end to all players
        }
        return true; // This is where the websocket will go, if all players advance then cards are advanced, if one player ends game then the game ends for all.
    }

    async advanceCards() {
        const cont = await this.allAdvance();
        if (!cont) {
            this.endGame(true);
        }
        const cardContainerDivEl = document.querySelector(".card-container");

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
          randomIndex = Math.floor(this.rand() * currentIndex);
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

    getPlayerName() {
        return localStorage.getItem("userName") ?? "Mystery player";
    }

    addPlayer(playerName) {
        const otherPlayersDivEl = document.querySelector("#other-players");
        const playerSpanEl = document.createElement("span");

        playerSpanEl.textContent = playerName;
        playerSpanEl.classList.add("player-name");

        otherPlayersDivEl.appendChild(playerSpanEl);
    }

    leaveGame() {
        //This is for the websocket; it removes one player from the room and allows the game to advance without them.
    }

    async endGame(otherPlayer = false) {
        if (!otherPlayer) {
            await this.allAdvance(true);
        }
        const gameDivEl = document.querySelector(".game");
        gameDivEl.style.display = "none";
        
        const scoreSubmitDivEl = document.querySelector("#score-submit");
        scoreSubmitDivEl.style.visibility = "visible";
    }

    async receiveScores(myScore) {
        // get all the scores from the websocket

        const scores = [{name: "Adam", score: "56" }, { name: "Logan", score: "45" }];
        scores.push(myScore)
        scores.sort( (s, s2) => {return parseInt(s2.score) - parseInt(s.score); });
    

        const scoreSubmitDivEl = document.querySelector("#score-submit");
        const scoreDisplayDivEl = document.querySelector("#score-display");
        const scoreTableEl = document.querySelector("#game-scores");

        let place = 1;
        scores.forEach((score) => {
            const placeTdEl = document.createElement("td");
            const nameTdEl = document.createElement("td");
            const scoreTdEl = document.createElement("td");

            placeTdEl.textContent = place;
            nameTdEl.textContent = score.name;
            scoreTdEl.textContent = score.score;

            const rowEl = document.createElement("tr");
            rowEl.appendChild(placeTdEl)
            rowEl.appendChild(nameTdEl);
            rowEl.appendChild(scoreTdEl);

            scoreTableEl.appendChild(rowEl);
            place++;
        });

        scoreSubmitDivEl.style.display = "none";
        scoreDisplayDivEl.style.display = "block";

        this.saveGame(scores[0]);

        console.log(scores);
    }

    async scoreSubmit() {
        const scoreSubmitDivEl = document.querySelector("#score-submit");

        const scoreEl = document.querySelector("#score");
        const score = { name: this.getPlayerName(), score: scoreEl.value };

        while (scoreSubmitDivEl.firstChild) {
            scoreSubmitDivEl.removeChild(scoreSubmitDivEl.firstChild);
        }

        const loadWrappDivEl = document.createElement("div");
        const loadDivEl = document.createElement("div");
        const textPEl = document.createElement("p");
        const line1DivEl = document.createElement("div");
        const line2DivEl = document.createElement("div");
        const line3DivEl = document.createElement("div");


        loadWrappDivEl.classList.add("load-wrapp");
        loadDivEl.classList.add("load");
        textPEl.textContent = "Waiting for other players' scores";
        line1DivEl.classList.add("line");
        line2DivEl.classList.add("line");
        line3DivEl.classList.add("line");


        loadDivEl.appendChild(textPEl);
        loadDivEl.appendChild(line1DivEl);
        loadDivEl.appendChild(line2DivEl);
        loadDivEl.appendChild(line3DivEl);
        loadWrappDivEl.appendChild(loadDivEl);
        scoreSubmitDivEl.appendChild(loadWrappDivEl);

        this.receiveScores(score);
    }

    async saveGame(score) {
        const newScore = { date : new Date().toLocaleDateString(), winner : score.name, score : score.score };
        try {
            const response = await fetch("/api/score", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(newScore),
            });
    
            // Store what the service gave us as the recent scores
            const scores = await response.json();
            localStorage.setItem("scores", JSON.stringify(scores));
        } catch {
            // If there was an error then just track scores locally
            this.updateScoresLocal(newScore);
        }
    }

    updateScoresLocal(newScore) {
        let scores = [];
        const scoresText = localStorage.getItem("scores");
        if (scoresText) {
            scores = JSON.parse(scoresText);
        }
    
        scores.unshift(newScore);
        while (scores.length > 10) {
            scores.pop();
        }

        localStorage.setItem("scores", JSON.stringify(scores));
    }
}

const fenceEffect = new Effect("assets/icons/bricks.svg", "lightgray");
const investEffect = new Effect("assets/icons/graph-up-arrow.svg", "mediumpurple");
const parkEffect = new Effect("assets/icons/tree.svg", "seagreen");
const poolEffect = new Effect("assets/icons/water.svg", "steelblue");
const constructionEffect = new Effect("assets/icons/cone-striped.svg", "orange");
const bisEffect = new Effect("assets/icons/envelope.svg", "crimson");
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
