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
  let dinos;

  beforeEach(function () {
    let tRex = new Dinosaur('T-Rex', 'carnivore', 5000);
    let diplo = new Dinosaur('Diplodocus', 'herbivore', 200);
    let tricera = new Dinosaur('Triceratops', 'herbivore', 500);
    let dominus = new Dinosaur('Dominus Rex', 'carnivore', 15000);
    let ptero = new Dinosaur('Pterodactyl', 700);
    let dinos = [tRex, diplo, tricera, dominus, ptero];
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
    assert.strictEqual(actual.length, 5);
  });

  it('should be able to add a dinosaur to its collection', function() {
    stego = new Dinosaur('Stegosaurus', 'omnivore', 800);
    park.addDinosaur(stego);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 6);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.removeDinosaur(ptero);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 4);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    const actual = park.mostVisited()
    assert.strictEqual(actual, dominus)
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    const ptero2 = new Dinosaur('Pterodactyl', 700);
    park.addDinosaur(ptero2);
    const actual = park.allOfSpecies('Pterodactyl');
    assert.deepStrictEqual(actual, [ptero, ptero2]);
  });

  xit('should be able to remove all dinosaurs of a particular species');

});
