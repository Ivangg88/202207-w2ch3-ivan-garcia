let flights = [
    { id: 1, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 2, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 3, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 4, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 5, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 6, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 7, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 8, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 9, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false },
];
let newId = 10;

let flightsIsFull = "All flight are created, please delete a flight to add a new one.";
let flightsIsClear = "This id is erased, please create a new one before delete.";


const askName =()=>{
    let name = prompt("What´s is your name?");
    alert(`Welcome ${name}`);
}

const showAllFlights = (arr) =>{
    console.clear();
    console.log("This are the flights for today: ")
    arr.forEach((flight)=>{
        if(flight.scale === true){
            console.log(`The flight ${flight.id} from ${flight.from} to ${flight.to} have a price of ${flight.cost}€ and have a scale.`)
        }else {
            console.log(`The flight ${flight.id} from ${flight.from} to ${flight.to} have a price of ${flight.cost}€ is direct.`)
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

const createFlight = () =>{

    if(flights.length === 15){
        alert(flightsIsFull)
        console.log(flightsIsFull);
    } else{

    do {
        newId++;
        const newFlight = {};
        newFlight.to = prompt("Destiny?");
        newFlight.from = prompt("Origin?");
        newFlight.cost = prompt("Price?");
        newFlight.scale = prompt("Have escale?(true for yes, false for no)");
        newFlight.id = newId;
        flights.push(newFlight);
        showAllFlights(flights);
        let confirm = prompt("Create anyone else? (yes/no)");
        if(confirm === "yes"){confirm = true}; 
    } while (flights.length <= 14 && !confirm); // lenght - 1 porque primero ejecuto y después evaluo.
}

}

const deleteFlight = () =>{
    let next;
    console.clear;
    showAllFlights(flights);
    do {
        if(flights.length >= 0){
        const id = +prompt("Which id do you want to delete?");
            const newFlights = flights.filter(
                (flight)=>flight.id !== id
                );
                flights = newFlights.slice();
                showAllFlights(flights);
                next = prompt("Do you want to delete anyone else? (y/n)");
        } else{
            console.log(flightsIsClear);
            alert(flightsIsClear);
        }
    } while (next === "y");


}

const actionsAdmin = () =>{
    // al haber dos opciones se separan en dos funciones diferentes.
    console.log("You are identifier as admin");
    let action;
    do{
        action = prompt("Welcome admin, what do you want to do? (c to create a new flight or d to delete a flight)");
        if(action !== null){
            action.toLowerCase();
        }
        if(action === "c"){
            createFlight();
        } else if(action === "d"){
            deleteFlight();
        }

        /*
        switch(action){
            case "c":
                createFlight();
                break;
            case "d":
                deleteFlight();
                break;
            case null:
                alert("End of programm");
                break;
        }
        */

    }while(action !== "c" || action !== "d" || action !== null);
 
}

const actionsUser = () =>{
    console.log("You are identifier as user");
    let flightsByCost = [];
    const flightBought = [];
    let priceToBuy = prompt("How much do you want to spend?");
    console.log("Your flight list is the next");
    flights.forEach((flight)=>{
        if(flight.cost <= priceToBuy){
        flightsByCost.push(flight);
        }
    })
    showAllFlights(flightsByCost);
    const selectedId = prompt("Please select the flight to buy, use the id");


    flightsByCost.forEach((flight)=>{
        if(flight.id === selectedId){
            flightBought.push(flight);
        }
    })

  
    //const flightBought = flightsByCost.filter((element) =>{ element.id === selectedId});

    console.log(`You have booked the next flight:`);
    console.log(flightBought);
    if(flightBought.scale === true){
        console.log(`The flight ${flightBought.id} from ${flightBought.from} to ${flightBought.to} have a price of ${flightBought.cost}€ and have a scale.`)
    }else {
        console.log(`The flight ${flightBought.id} from ${flightBought.from} to ${flightBought.to} have a price of ${flightBought.cost}€ is direct.`)
    }

    /*
    for(let i = 0; i<flightsByCost.length; i++){
        console.log(`Dentro del for ${i}`);
        if(flightsByCost[i].id === selectedId){
            console.log("You have booked the next flight:");
        }
      
    }
    */
    /*flightsByCost.forEach((flight) =>{
        if(flight.id === selectedId){
            console.log("You have booked the next flight:");
            if(flight.scale === true){
                console.log(`The flight ${flight.id} from ${flight.from} to ${flight.to} have a price of ${flight.cost}€ and have a scale.`)
            }else {
                console.log(`The flight ${flight.id} from ${flight.from} to ${flight.to} have a price of ${flight.cost}€ is direct.`)
            }
        }

    })*/
    return;
    //solo se puede comprar, por ello se hace en una sola.
}

const askForKindOfUser = () => {
    let kindOfUser
    do{
    kindOfUser = prompt("What kind of user are you?(admin/user)");
    kindOfUser.toLowerCase();
    if(kindOfUser=== "admin"){
        actionsAdmin()  
    }else if(kindOfUser === "user") {
        actionsUser()
    }
    }while(kindOfUser !== "admin" || kindOfUser !== "user" || kindOfUser !== null);

}







const main = () =>{
    askName();
    showAllFlights(flights);
    calculateAveragePrice();
    showFlightswithScale();
    showLastFlights();
    askForKindOfUser();
}


main();


   

