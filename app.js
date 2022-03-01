//DOM elements
let cardElement = document.querySelector(".card");
const randomBtn = document.querySelector("#random");
const noSuitRepeatBtn = document.querySelector("#norepeat");
const onceBtn = document.querySelector("#once");

//First view
window.onload = function() {
  cardElement.classList.add("backcard");
};

//Global variables
const suits = ["stdiamonds", "sthearts", "stclubs", "stspades"];
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];
const emptyDeck = [];

//Card object
function Card(value, suit, shown) {
  (this.value = value), (this.suit = suit), (this.shown = shown);
}

//FUNCTIONS
// Generates a new array by looping through both arrays and returns one array with 52 cards and suits
const newDeck = newArr => {
  suits.map(suit => {
    values.map(value => {
      newArr.push(new Card(value, suit, false));
    });
  });
  return newArr;
};
console.log(newDeck(emptyDeck));

// Generates a random item based on array index.
const generateRandomNum = newArr => {
  let i = Math.floor(Math.random() * newArr.length);
  return newArr[i];
};

//Generates a non repeating random suit
const generateUniqueSuit = () => {
  //Array with filter suit that doesnt repeat.
  let differentSuitArr = emptyDeck.filter(
    elem => elem.suit !== cardElement.classList[1]
  );
  renderCardElement(generateRandomNum(differentSuitArr));
  console.log(differentSuitArr);
};

//Generate unique card from deck
const generateUniqueCard = () => {
  //Array that is filtered and shows only the NOT shown elements
  let differentNumArr = emptyDeck.filter(elem => elem.shown === false);
  if (differentNumArr.length !== 0) {
    renderCardElement(
      generateRandomNum(differentNumArr),
      //Switch the element value to true so it doesnt show no more.
      (generateRandomNum(differentNumArr).shown = true)
    );
    console.log(differentNumArr);
  } else alert("No more cards, refresh page to load a new deck");
};

//Render card elements
const renderCardElement = elem => {
  cardElement.classList.remove(cardElement.classList[1]);
  console.log(cardElement.classList);
  cardElement.classList.add(elem.suit);
  cardElement.innerHTML = `<p>${elem.value}</p>`;
};

// BUTTONS
//Random card button
randomBtn.addEventListener("click", () => {
  renderCardElement(generateRandomNum(emptyDeck));
});

// No repeating suits button
noSuitRepeatBtn.addEventListener("click", () => {
  generateUniqueSuit();
});

//One card one time button
onceBtn.addEventListener("click", () => {
  generateUniqueCard();
});