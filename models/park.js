const Park = function (name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.dinosaurs.push(dinosaur)
}

Park.prototype.removeDinosaur = function(dinosaur) {
  let index = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(index, 1);
}

Park.prototype.mostVisited = function() {
  let mostSoFar = 0
  let visited;
  for (let dinosaur of this.dinosaurs) {
    if (dinosaur.guestsAttractedPerDay > mostSoFar) {
      visited = dinosaur;
      mostSoFar = dinosaur.guestsAttractedPerDay;
    };
  };
  return visited;
};

Park.prototype.allOfSpecies = function(speciesToCheck) {
  let listOfDinos = [];
  for (let dinosaur of this.dinosaurs) {
    if (dinosaur.species === speciesToCheck) {
      listOfDinos.push(dinosaur);
    };
  };
  return listOfDinos;
};

Park.prototype.removeAllOfSpecies = function(speciesToCheck) {
  let listOfDinos = this.allOfSpecies(speciesToCheck);
  for (let dinosaur of listOfDinos) {
    this.removeDinosaur(dinosaur);
  };
};

Park.prototype.visitsPerDay = function() {
  let total = 0;
  for (let dinosaur of this.dinosaurs) {
    total += dinosaur.guestsAttractedPerDay;
  };
  return total;
};

module.exports = Park;
