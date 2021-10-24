const Pokemon = require("./Pokemon");

class Trainer {
    constructor(name, pokemon=[]) {
      this.name = name;
      this.pokemon = pokemon;
    }

    addPokemon(name, hp, atk) {
        this.pokemon.push(new Pokemon(name, hp, atk))
    };

    getRandomPokemon() {
        const randomIdx = Math.floor(Math.random()*this.pokemon.length);
        return this.pokemon[randomIdx]
    };
  }

  module.exports = Trainer;