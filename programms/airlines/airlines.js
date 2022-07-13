const flights = [
  { id: 0, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },
  { id: 1, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 2, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 3, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 4, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 5, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 6, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 7, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 8, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 9, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

const askName = () => {
  const name = prompt("What´s is your name?");
  alert(`Welcome ${name}`);
};

const showAllFlights = () => {
  console.log("This are the flights for today: ");
  flights.forEach((contact) => {
    if (contact.scale === true) {
      console.log(
        `The flight from ${contact.from} to ${contact.to} have a price of ${contact.cost}€ and have a scale.`
      );
    } else {
      console.log(
        `The flight from ${contact.from} to ${contact.to} have a price of ${contact.cost}€ is direct.`
      );
    }
  });
};

const calculateAveragePrice = () => {
  let sum = 0;
  let averageprice = 0;
  flights.forEach((contact) => {
    sum += contact.cost;
  });
  averageprice = parseFloat(sum / flights.length).toFixed(2);
  console.log(`The average price is: ${averageprice}€`);
};

const showFlightswithScale = () => {
  console.log("The flights with scale are: ");
  flights.forEach((contact) => {
    if (contact.scale === true) {
      console.log(
        `The flight from ${contact.from} to ${contact.to} have a price of ${contact.cost}€ and have a scale.`
      );
    }
  });
};
const showLastFlights = () => {
  console.log("The last flights of today are: ");
  flights.forEach((contact) => {
    if (contact.id >= 6) {
      if (contact.scale === true) {
        console.log(
          `The flight from ${contact.from} to ${contact.to} have a price of ${contact.cost}€ and have a scale.`
        );
      } else {
        console.log(
          `The flight from ${contact.from} to ${contact.to} have a price of ${contact.cost}€ is direct.`
        );
      }
    }
  });
};

const main = () => {
  askName();
  showAllFlights();
  calculateAveragePrice();
  showFlightswithScale();
  showLastFlights();
};

main();
