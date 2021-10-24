const Pokemon = require("../lib/Pokemon");

describe("Pokemon class", () => {
  it("sets first agrument as name property", () => {
    expect(new Pokemon("Charmander",120,10).name).toBe("Charmander");
  });

  it("sets second argument as hp property", () => {
    expect(new Pokemon("Charmander",120,10).hp).toBe(120);
  });

  it("sets third argument as atk property", () => {
    expect(new Pokemon("Charmander",120,10).atk).toBe(10);
  });

  describe("Level Up", () => {
    it("Should increase pokemons level by 1", () => {
      const charmander = new Pokemon("Charmander",120,10)
      charmander.levelUp();
      expect(charmander.level).toBe(2);
    });

    it("Should increase pokemons hp by 20", () => {
      const charmander = new Pokemon("Charmander",120,10)
      charmander.levelUp();
      expect(charmander.hp).toBe(140);
    });
    it("Should increase pokemons atk by 5", () => {
      const charmander = new Pokemon("Charmander",120,10)
      charmander.levelUp();
      expect(charmander.atk).toBe(15);
    });
  })

});
