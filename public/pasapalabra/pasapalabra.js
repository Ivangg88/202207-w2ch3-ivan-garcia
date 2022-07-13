const questions = [

    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},

    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},

    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},

    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},

    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},

    { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},

    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},

    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},

    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},

    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},

    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},

    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo"},

    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},

    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia"},

    { letter: "ñ", answer: "señal", status: 0, question: "CON LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},

    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},

    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},

    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},

    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},

    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},

    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},

    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},

    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},

    { letter: "w", answer: "sandwich", status: 0, question: "CON LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},

    { letter: "x", answer: "botox", status: 0, question: "CON LA X. Toxina bacteriana utilizada en cirujía estética"},

    { letter: "y", answer: "peyote", status: 0, question: "CON LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},

    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"}, ]

let askedQuestions = 0;
let playerName;
let newWord = "";
let wordsFound = 0;
let wrongWords = 0;

let ranking = [
    {name: "Lucy", points: 1},
    {name: "Fry", points: 2},
    {name: "John", points: 3},
    {name: "Mike", points: 3},
    {name: "Sophie", points: 3}

]

const sortArray =(array)=> {
    array.sort((x,y)=>{
        if(x.points>y.points){
            return 1;
        }
       if(x.points < y.points){
        return -1
       }
    });
}

const showRanking = (playerName, playerPoints) =>{
    const newPlayer = {
        name:playerName,
        points:playerPoints,
    }

 sortArray(ranking); 

    if(newPlayer.points > ranking[0].points){
        ranking.shift();
        ranking.push(newPlayer);
    }
    sortArray(ranking);
    console.log("Ranking top five!!!");
    console.log("-------------------")
    ranking.forEach((player) =>{
        console.log(`The player ${player.name} has ${player.points} points.`)
    })
}

const askPlayerName = ()=> {
    const playerName = prompt("Hi, welcome to pasapalabra. Please introduce your name.");
    if(!playerName){
        return askPlayerName();
    }
    alert(`Your game is beginning ${playerName}`);
    return playerName;
}

const gameCompleted = () =>{
    alert(`ConDragtulations you´ve finished the game with: ${wordsFound} words of ${questions.length}. And you got ${wordsFound} points!!!`);
    showRanking(playerName, wordsFound);
    return;
}

const askWord =(questions) =>{
    do {
        newWord ="";

    for(let i = 0; i<questions.length; i++){
        if(questions[i].status === 0){
        newWord = prompt(`${questions[i].letter}: ${questions[i].question}`);

        if(!newWord || newWord===null){
            alert("Please introduce a word or END to finish.")
            return askWord(questions);
        }

        if(newWord.toLowerCase() === "end"){
            endProgramm();
            return;
        }

        if(newWord.toLowerCase() === questions[i].answer){
            alert(`Congratulations the word is correct, you get a point!!!.`);
            wordsFound++;
            questions[i].status = 1;
            askedQuestions++
        }

        if(newWord.toLowerCase() === "pasapalabra"){
            alert(`Word skipped!!!. You have a new chance.`)
        }else if(newWord.toLowerCase() !== questions[i].answer ){
          alert(`Wrong answer, you don´t get any points. The answer is: ${questions[i].answer}`);
          wrongWords++;
          questions[i].status = 3;
          askedQuestions++

        }
    
        if(newWord.toLowerCase === "end"){
            alert(`The programm is ended, you have ${wordsFound} correct words.`);
            return;
        }

    }
}
        }while (askedQuestions < questions.length);
        gameCompleted();
        return;
}

const pasapalabra =()=>{

    playerName =  askPlayerName();
    askWord(questions);
    }

pasapalabra();