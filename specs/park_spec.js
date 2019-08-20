const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let tRex;
  let diplo;
  let tricera;
  let dominus;
  let ptero;
  let ptero2;
  let dinos;

  beforeEach(function () {
    tRex = new Dinosaur('T-Rex', 'carnivore', 5000);
    diplo = new Dinosaur('Diplodocus', 'herbivore', 200);
    tricera = new Dinosaur('Triceratops', 'herbivore', 500);
    dominus = new Dinosaur('Dominus Rex', 'carnivore', 15000);
    ptero = new Dinosaur('Pterodactyl', 'herbivore', 700);
    ptero2 = new Dinosaur('Pterodactyl', 'herbivore', 700);
    dinos = [tRex, diplo, tricera, dominus, ptero, ptero2];
    park = new Park('Blytheco Park', 400, dinos);
  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Blytheco Park');
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 400);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurs;
    assert.strictEqual(actual.length, 6);
  });

  it('should be able to add a dinosaur to its collection', function() {
    stego = new Dinosaur('Stegosaurus', 'omnivore', 800);
    park.addDinosaur(stego);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 7);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.removeDinosaur(ptero);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 5);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    const actual = park.mostVisited()
    assert.strictEqual(actual, dominus)
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    const actual = park.allOfSpecies('Pterodactyl');
    const expected = [ptero, ptero2];
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to remove all dinosaurs of a particular species', function() {
    park.removeAllOfSpecies('Pterodactyl');
    const actual = park.allOfSpecies('Pterodactyl');
    assert.deepStrictEqual(actual, []);
  });

  it('should bring back the total number of visits per day', function() {
    const actual = park.visitsPerDay();
    assert.strictEqual(actual, 22100)
  })
});
