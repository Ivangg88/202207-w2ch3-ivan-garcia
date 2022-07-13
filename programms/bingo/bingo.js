let gameCard = [];
let playerName;
let playerPoints = 0;
const playedCard = [];
const numbersFound = [];
let randomNumberLocal;
let rounds = 0;
let lineChecked = false;
let bingo = false;

const ranking = [
  { name: "Lucy", points: 400 },
  { name: "Fry", points: 350 },
  { name: "John", points: 270 },
  { name: "Mike", points: 280 },
  { name: "Sophie", points: 400 },
];

const askName = () => {
  do {
    playerName = prompt("What is your name?");
  } while (playerName === null);
};

function showCard(card) {
  const cardTable = {
    Line_1: {
      N1: card[0],
      N2: card[1],
      N3: card[2],
      N4: card[3],
      N5: card[4],
    },
    Line_2: {
      N1: card[5],
      N2: card[6],
      N3: card[7],
      N4: card[8],
      N5: card[9],
    },
    Line_3: {
      N1: card[10],
      N2: card[11],
      N3: card[12],
      N4: card[13],
      N5: card[14],
    },
  };
  return console.table(cardTable);
}

const cardGenerator = () => {
  const randomNumbers = [];
  let randomNumberLocalFunction;
  do {
    randomNumberLocalFunction = Math.floor(Math.random() * 90) + 1;
    if (!randomNumbers.includes(randomNumberLocalFunction)) {
      randomNumbers.push(randomNumberLocalFunction);
    }
  } while (randomNumbers.length < 15);
  randomNumbers.forEach((num) => {
    gameCard.push(num);
  });
  gameCard.sort((a, b) => a - b);
};

const acceptCard = () => {
  let cardAccepted;
  do {
    cardGenerator();
    showCard(gameCard);
    cardAccepted = confirm("Do you like this card?");
    if (cardAccepted) {
      console.log("Card accepted.");
      console.log(`The game is began`);
      // startbingo.
      playBingo1();
    } else {
      console.clear();
      gameCard = [];
      // console.log(`Array vaciado: ${gameCard}`);
      cardGenerator();
    }
  } while (!cardAccepted);
};
const numberGenerator = () => {
  // Funciona!!
  let nextNumber = false; // Controlar el bucle.
  do {
    randomNumberLocal = Math.floor(Math.random() * 90) + 1;
    if (!numbersFound.includes(randomNumberLocal)) {
      numbersFound.push(randomNumberLocal);
      nextNumber = true;
    }
  } while (!nextNumber);
};

const checkNumber = (num) => {
  for (let i = 0; i < gameCard.length; i++) {
    if (gameCard[i] === num) {
      playedCard[i] = "X";
    } else if (playedCard[i] !== "X") {
      playedCard[i] = gameCard[i];
    }
  }
  if (gameCard.includes(num)) {
    console.log(`Condragtulations the number is found.`);
  } else {
    console.log(`Number not found.`);
  }
  showCard(playedCard);
  rounds++;
  console.log(`Number of rounds: ${rounds}`);
};
const newTurn = () => {
  const nextTurn = confirm("Do you want to continue?");
  return nextTurn;
};

const checkLine = (arr) => {
  const line1 = [arr[0], arr[1], arr[2], arr[3], arr[4]];
  const line2 = [arr[5], arr[6], arr[7], arr[8], arr[9]];
  const line3 = [arr[10], arr[11], arr[12], arr[13], arr[14]];
  if (line1.every((element) => element === "X") && lineChecked === false) {
    console.log("Line!!!");
    lineChecked = true;
  } else if (
    line2.every((element) => element === "X" && lineChecked === false)
  ) {
    console.log("Line!!!");
    lineChecked = true;
  } else if (
    line3.every((element) => element === "X") &&
    lineChecked === false
  ) {
    console.log("Line!!!");
    lineChecked = true;
  }
};

const checkBingo = (arr) => {
  if (arr.every((element) => element === "X")) {
    console.log("Bingo!!!");
    bingo = true;
    playerPoints = 1000 - 5 * rounds;
    console.log(`You needed ${rounds} rounds.`);
  }
};

const sortArray = (array) => {
  array.sort((x, y) => {
    if (x.points > y.points) {
      return 1;
    }
    if (x.points < y.points) {
      return -1;
    }
  });
};

const showRanking = () => {
  const newPlayer = {
    name: playerName,
    points: playerPoints,
  };

  sortArray(ranking);

  if (newPlayer.points > ranking[0].points) {
    ranking.shift();
    ranking.push(newPlayer);
  }
  sortArray(ranking);
  console.log("Ranking top five!!!");
  console.log("-------------------");
  ranking.forEach((player) => {
    console.log(`The player ${player.name} has ${player.points} points.`);
  });
};

const playAgain = () => {
  const newGame = confirm("Play?");
  if (newGame) {
    acceptCard();
  }
};
const main = () => {
  askName();
  showRanking();
  acceptCard();
  showRanking();
  // playAgain();
};

main();
