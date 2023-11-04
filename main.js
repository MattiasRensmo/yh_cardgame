const cardDeck = createDeck();
console.table(cardDeck);

let currentCard = 0;
let score = 0;
let tries = 3;

displayCurrentCard(cardDeck[currentCard]);

document.querySelector("#nxt-low").addEventListener("click", () => {
 if (cardDeck[currentCard].num > cardDeck[currentCard + 1].num) {
  console.log("Rätt, nästa kort är lägre");
  score++;
  highlightFor("game-data", "green", 1);
 } else {
  console.log("Fel, nästa kort är INTE lägre");
  tries--;
  highlightFor("game-data", "red", 1);
 }
 currentCard++;
 displayCurrentCard(cardDeck[currentCard]);
});

document.querySelector("#nxt-same").addEventListener("click", () => {
 console.log("⭕ cardDeck[currnetCard]:", cardDeck[currentCard].num);
 console.log("⭕ cardDeck[currnetCard+1]:", cardDeck[currentCard + 1].num);

 if (cardDeck[currentCard].num == cardDeck[currentCard + 1].num) {
  console.log("Rätt, nästa kort är samma");
  score++;
  highlightFor("game-data", "green", 1);
 } else {
  console.log("Fel, nästa kort är INTE samma");
  tries--;
  highlightFor("game-data", "red", 1);
 }
 currentCard++;
 displayCurrentCard(cardDeck[currentCard]);
});

document.querySelector("#nxt-high").addEventListener("click", () => {
 console.log("⭕ cardDeck[currnetCard]:", cardDeck[currentCard].num);
 console.log("⭕ cardDeck[currnetCard+1]:", cardDeck[currentCard + 1].num);

 if (cardDeck[currentCard].num < cardDeck[currentCard + 1].num) {
  console.log("Rätt, nästa kort är högre");
  score++;
  highlightFor("game-data", "green", 1);
 } else {
  console.log("Fel, nästa kort är INTE högre");
  highlightFor("game-data", "red", 1);
  tries--;
 }
 currentCard++;
 displayCurrentCard(cardDeck[currentCard]);
});

function displayCurrentCard(card) {
 if (!tries > 0) {
  let guess = (document.querySelector(".guess").innerHTML = `
   <p>Sorry du har inga försök kvar! 
   Du fick ${score} poäng</h2>
   <p><a href="#" onclick="reload()">Försök igen</a><p>
  `);
 }

 console.log("Showing card", card);
 document.querySelector("#points").innerText = score;
 document.querySelector("#tries").innerText = tries;
 const displayNums = document.querySelectorAll(".card-num");
 displayNums.forEach((num) => (num.innerText = card.display));

 const centerDisplay = document.querySelector(".center-display");

 centerDisplay.innerHTML = addCenterSymbols(card);
 addColor(card);
}

function reload() {
 location.reload();
}

function addColor(card) {
 const symbols = document.querySelectorAll(".symbol");
 symbols.forEach((symbol) => {
  symbol.innerHTML = card.symbol;
  symbol.className = "symbol";
  symbol.classList.add(card.color);
 });

 const img = document.querySelector("img");
 if (img) {
  img.classList = "";
  img.classList.add(card.color);
 }
}

function addCenterSymbols(deck) {
 const layout = {
  2: `
  <p class="symbol" style="grid-column-start: 2; grid-row-start: 1"></p>
  <p class="symbol" style="grid-column-start: 2; grid-row-start: 3"></p>
  `,
  3: `
  <p class="symbol" style="grid-column-start: 2; grid-row-start: 1"></p>
  <p class="symbol" style="grid-column-start: 2; grid-row-start: 2"></p>
  <p class="symbol" style="grid-column-start: 2; grid-row-start: 3"></p>
  `,
  4: `
  <p class="symbol" style="grid-column-start: 1; grid-row-start: 1"></p>
  <p class="symbol" style="grid-column-start: 3; grid-row-start: 1"></p>
  <p class="symbol" style="grid-column-start: 1; grid-row-start: 4"></p>
  <p class="symbol" style="grid-column-start: 3; grid-row-start: 4"></p>
  `,
  5: `
  <p class="symbol" style="grid-column-start: 1; grid-row-start: 1"></p>
  <p class="symbol" style="grid-column-start: 1; grid-row-start: 3"></p>
  <p class="symbol" style="grid-column-start: 2; grid-row-start: 2"></p>
  <p class="symbol" style="grid-column-start: 3; grid-row-start: 1"></p>
  <p class="symbol" style="grid-column-start: 3; grid-row-start: 3"></p>
  `,
  6: `
  <p class="symbol" style="grid-column-start: 1; grid-row-start: 1"></p>
  <p class="symbol" style="grid-column-start: 1; grid-row-start: 2"></p>
  <p class="symbol" style="grid-column-start: 1; grid-row-start: 3"></p>
  <p class="symbol" style="grid-column-start: 3; grid-row-start: 1"></p>
  <p class="symbol" style="grid-column-start: 3; grid-row-start: 2"></p>
  <p class="symbol" style="grid-column-start: 3; grid-row-start: 3"></p>
  `,
  7: `
  <p class="symbol" style="grid-column-start: 1; grid-row-start: 1"></p>
  <p class="symbol" style="grid-column-start: 1; grid-row-start: 3"></p>
  <p class="symbol" style="grid-column-start: 1; grid-row-start: 4"></p>
  <p class="symbol" style="grid-column-start: 2; grid-row-start: 2; line-height: .1em;"></p>
  <p class="symbol" style="grid-column-start: 3; grid-row-start: 1"></p>
  <p class="symbol" style="grid-column-start: 3; grid-row-start: 3"></p>
  <p class="symbol" style="grid-column-start: 3; grid-row-start: 4"></p>
  `,
  8: `
  <p class="symbol" style="grid-column-start: 1; grid-row-start: 1"></p>
  <p class="symbol" style="grid-column-start: 1; grid-row-start: 3"></p>
  <p class="symbol" style="grid-column-start: 1; grid-row-start: 5"></p>
  <p class="symbol" style="grid-column-start: 2; grid-row-start: 2; line-height: .1em;"></p>
  <p class="symbol" style="grid-column-start: 2; grid-row-start: 4; line-height: .1em;"></p>
  <p class="symbol" style="grid-column-start: 3; grid-row-start: 1"></p>
  <p class="symbol" style="grid-column-start: 3; grid-row-start: 3"></p>
  <p class="symbol" style="grid-column-start: 3; grid-row-start: 5"></p>
  `,
  9: `
  <p class="symbol" style="grid-column-start: 1; grid-row-start: 1"></p>
  <p class="symbol" style="grid-column-start: 1; grid-row-start: 3"></p>
  <p class="symbol" style="grid-column-start: 1; grid-row-start: 4"></p>
  <p class="symbol" style="grid-column-start: 1; grid-row-start: 5"></p>

  <p class="symbol" style="grid-column-start: 2; grid-row-start: 2; line-height: .1em;"></p>

  <p class="symbol" style="grid-column-start: 3; grid-row-start: 1"></p>
  <p class="symbol" style="grid-column-start: 3; grid-row-start: 3"></p>
  <p class="symbol" style="grid-column-start: 3; grid-row-start: 4"></p>
  <p class="symbol" style="grid-column-start: 3; grid-row-start: 5"></p>
  `,
  10: `
  <p class="symbol" style="grid-column-start: 1; grid-row-start: 1"></p>
  <p class="symbol" style="grid-column-start: 1; grid-row-start: 3"></p>
  <p class="symbol" style="grid-column-start: 1; grid-row-start: 4"></p>
  <p class="symbol" style="grid-column-start: 1; grid-row-start: 6"></p>

  <p class="symbol" style="grid-column-start: 2; grid-row-start: 2; line-height: .1em;"></p>
  <p class="symbol" style="grid-column-start: 2; grid-row-start: 5; line-height: .1em;"></p>

  <p class="symbol" style="grid-column-start: 3; grid-row-start: 1"></p>
  <p class="symbol" style="grid-column-start: 3; grid-row-start: 3"></p>
  <p class="symbol" style="grid-column-start: 3; grid-row-start: 4"></p>
  <p class="symbol" style="grid-column-start: 3; grid-row-start: 6"></p>
  `,
  11: `<img src="./img/chris-fuck.jpg" alt="Knekt Chris O-Neill" style="grid-column: span 3"> `,
  12: `<img src="./img/vickan.jpg" alt="Dam Kronprinsessan" style="grid-column: span 3">`,
  13: `<img src="./img/kungen.jpg" alt="Kung Carl Gustav" style="grid-column: span 3">`,
  14: `<p class="symbol" style="grid-column-start: 2; grid-row-start: 1"></p>`,
 };

 // return layout[13];
 return layout[deck.num];
}

function createDeck() {
 // const colors = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
 const colors = ["♠", "♦", "♥", "♣"];
 let deck = [];

 colors.forEach((color) => {
  for (let i = 2; i <= 14; i++) {
   let cardDisplayNum;
   let cardCol = "black";
   let cardSym = color;
   if (cardSym == "♥" || cardSym == "♦") cardCol = "red";

   if (i <= 10) cardDisplayNum = i;
   if (i == 11) cardDisplayNum = "Kn";
   if (i == 12) cardDisplayNum = "D";
   if (i == 13) cardDisplayNum = "K";
   if (i == 14) cardDisplayNum = "A";

   let card = {
    num: i,
    display: cardDisplayNum,
    color: cardCol,
    symbol: cardSym,
   };
   deck.push(card);
  }
 });

 return shuffle(deck);
}

function shuffle(array) {
 let currentIndex = array.length,
  randomIndex;

 // While there remain elements to shuffle.
 while (currentIndex > 0) {
  // Pick a remaining element.
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex--;

  // And swap it with the current element.
  [array[currentIndex], array[randomIndex]] = [
   array[randomIndex],
   array[currentIndex],
  ];
 }

 return array;
}

5;

function highlightFor(id, color, seconds) {
 var element = document.getElementById(id);
 var origcolor = element.style.backgroundColor;
 element.style.backgroundColor = color;
 var t = setTimeout(function () {
  element.style.backgroundColor = origcolor;
 }, seconds * 1000);
}
