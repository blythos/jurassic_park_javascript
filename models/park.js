const Park = function (name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.dinosaurs.push(dinosaur)
}

Park.prototype.removeDinosaur = function(dinosaur) {
  index = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(index, 1);
}

Park.prototype.mostVisited = function() {
  let most = 0
  let visited;
  for (let dinosaur of this.dinosaurs) {
    if (dinosaur.guestsAttractedPerDay > visited) {
      visited = dinosaurl
    };
  };
  return visited;
};

Park.prototype

module.exports = Park;
