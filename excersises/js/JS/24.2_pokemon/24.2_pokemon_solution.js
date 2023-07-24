function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

const Arcanine = new Pokemon('Arcanine', 'Fire', [
  'Ember',
  'Bite',
  'FlameThrower',
]);
const Pikachu = new Pokemon('Pikachu', 'Electric', [
  'Tail Whip',
  'ThunderBolt',
  'Agility',
]);
const Blastoise = new Pokemon('Blastoise', 'Water', [
  'Water Gun',
  'Hydro Cannon',
  'Hyper Beam',
]);

Pokemon.prototype.callPokemon = function () {
  console.log(`I choose you, ${this.name}!`);
};

Pokemon.prototype.attack = function (attack_number) {
  console.log(`${this.name}! use ${this.attackList[attack_number]}.`);
};

Pikachu.callPokemon();
Arcanine.callPokemon();
Blastoise.callPokemon();

Pikachu.attack(1);
Arcanine.attack(2);
Blastoise.attack(2);
