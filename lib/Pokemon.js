class Pokemon {
    constructor(name, hp, atk, level=1) {
      this.name = name;
      this.hp = hp;
      this.atk = atk;
      this.level = level;
    }

    levelUp() {
      this.level +=1;
      this.hp +=20;
      this.atk +=5;
    }

    attack(pokemon2) {
      pokemon2.hp -= this.atk;
    }
  }
  

  module.exports = Pokemon;