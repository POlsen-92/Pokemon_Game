const inquirer = require("inquirer");
const Trainer = require("./lib/Trainer");
const Pokemon = require("./lib/Pokemon");

const trainersArr = [];
const allPokemon = [];

function askQuestion() {
    console.log('Current Trainers!')
    console.table(trainersArr)

    inquirer.prompt({
        message:"What do You Want to Do?",
        type: "list",
        name:"question",
        choices:["Add a Trainer","Add a Pokemon","Get a Random Pokemon", "Show All Pokemon", "Level Up!", "Attack!", "Quit"]
    }).then(answers => {
        switch (answers.question) {
            case "Add a Trainer":
                console.log("added trainer!")
                addTrainer();
                break;
            case "Add a Pokemon":
                console.log("added pokemon!")
                addPokemon();
                break;
            case "Get a Random Pokemon":
                console.log("random!")
                getRandomPokemon();
                break;
            case "Show All Pokemon":
                console.log("Here's All The Pokemon!")
                console.table(allPokemon);
                return askQuestion();
            case "Level Up!":
                console.log("Level Up!")
                levelUp();
                break;
            // case "Attack!":
            //     console.log("Attack!")
            //     attack();
            default:
                console.log('Thanks for playing!');
        }
    })
}

function addTrainer() {
    inquirer.prompt({
        message:"What is the Trainers Name?",
        type: "input",
        name:"name"
    }).then(({ name })=> {
        const myTrainer = new Trainer(name)
        trainersArr.push(myTrainer)
        askQuestion();
    })
}

function addPokemon() {
    if(!trainersArr.length){
        console.log(`Add a trainer first!`)
        return askQuestion();
    }
    const inqTrainers = trainersArr.map(trainer => {
        return {
            name:trainer.name,
            value:trainer
        }
    })
    inquirer.prompt([{
        message:"Which trainer should get a New Pokemon?",
        type: "list",
        name:"trainer",
        choices: inqTrainers
    },{
        type:"input",
        message:"Pokemon name?",
        name:"pokeName"
    },{
        type:"input",
        message:"Pokemon hp?",
        name:"pokeHp"
    },{
        type:"input",
        message:"Pokemon attack?",
        name:"pokeAtk"
    }
    ]).then(pokeAnswers=>{
        pokeAnswers.trainer.addPokemon(pokeAnswers.pokeName, pokeAnswers.pokeHp, pokeAnswers.pokeAtk)
        allPokemon.push(new Pokemon(pokeAnswers.pokeName, pokeAnswers.pokeHp, pokeAnswers.pokeAtk))
        console.log(JSON.stringify(trainersArr, null, 2))
        askQuestion()
    })
}

function getRandomPokemon() {
    if(!trainersArr.length){
        console.log(`Add a trainer first!`)
        return askQuestion();
    }
    const inqTrainers = trainersArr.map(trainer => {
        return {
            name:trainer.name,
            value:trainer
        }
    })
    inquirer.prompt({
        message:"Which trainer should we get a Random Pokemon from??",
        type: "list",
        name:"trainerChoice",
        choices: inqTrainers,
    }).then(trainerName=> {
        if(!trainerName.trainerChoice.pokemon.length) {
            console.log("Trainer doesn't have any pokemon!")
            return askQuestion();
        }
        const randomPoke = trainerName.trainerChoice.getRandomPokemon();
        console.log(randomPoke);
        askQuestion();
    })
}

function levelUp() {
    const inqTrainers = trainersArr.map(trainer => {
        return {
            name:trainer.name,
            value:trainer
        }
    })
    inquirer.prompt({
        message:"Whose Pokemon Should we Level Up?",
        type: "list",
        name:"trainer",
        choices: inqTrainers
    }).then(({ trainer }) => {
        const inqPokemon = trainer.pokemon.map(pokemon => {
            return {
                name:pokemon.name,
                value:pokemon
            }
        })
        inquirer.prompt ({
            message: "Which Pokemon Should We Level Up?",
            type: "list",
            name: "pokemon",
            choices: inqPokemon
        }).then(({ pokemon }) => {
            console.log(`${pokemon.name}`) //OutPut: Gives Pokemon name
            pokemon.levelUp(); //pokemons.levelUp is not a function
            console.table(pokemon);
            console.log(`${pokemon.name} Leveled Up!`);
            askQuestion();
        })
    })
}

function attack() {

}

askQuestion();


















//++++++++++++++++++++++++++++TEST++++++++++++++++++++++++++++++++++//
//   const pokemon = [
//     new Pokemon('Pikachu', 120, 12),
//     new Pokemon('Bulbasaur', 100, 15),
//   ];

//   console.log(pokemon)

//     const trainers = [
//       new Trainer('Jessie'),
//       new Trainer('Ash')
//   ]

//   const [Jessie, Ash] = trainers

//   console.log(trainers);

//   Ash.addPokemon('Bulbasaur', 125, 12)
//   Ash.addPokemon('Pikachu', 145, 15)

//   Jessie.addPokemon('Arbok', 100, 10)
  
//   console.log(Ash.pokemon)
//   console.log(Jessie.pokemon)
  
  