let flights = [
    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];

const askName =()=>{
    let name = prompt("What´s is your name?");
    alert(`Welcome ${name}`);
}

const showAllFlights = () =>{
    console.log("This are the flights for today: ")
    flights.forEach((contact)=>{
        if(contact.scale === true){
            console.log(`The flight from ${contact.from} to ${contact.to} have a price of ${contact.cost}€ and have a scale.`)
        }else {
            console.log(`The flight from ${contact.from} to ${contact.to} have a price of ${contact.cost}€ is direct.`)
        }

    })
}

const calculateAveragePrice = () =>{
    let sum = 0;
    let averageprice = 0;
    flights.forEach((contact)=>{
        sum += contact.cost;
    })
    averageprice = parseFloat(sum/flights.length).toFixed(2);
    console.log(`The average price is: ${averageprice}€`)
}

const showFlightswithScale = () =>{
    console.log("The flights with scale are: ")
    flights.forEach((contact)=>{
        if(contact.scale === true){
            console.log(`The flight from ${contact.from} to ${contact.to} have a price of ${contact.cost}€ and have a scale.`);
        }
        })
}
const showLastFlights = () =>{
    console.log("The last flights of today are: ");
    flights.forEach((contact) =>{
    if(contact.id >= 6){
        if(contact.scale === true){
        console.log(`The flight from ${contact.from} to ${contact.to} have a price of ${contact.cost}€ and have a scale.`)
        }else {
        console.log(`The flight from ${contact.from} to ${contact.to} have a price of ${contact.cost}€ is direct.`)
        }
    }
    })

}

const main = () =>{
    askName();
    showAllFlights();
    calculateAveragePrice();
    showFlightswithScale();
    showLastFlights();
}

main();



   

