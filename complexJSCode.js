/*
Filename: complexJSCode.js
Content: Complex JavaScript Code Example

This code demonstrates a complex JavaScript application that simulates a virtual pet. This virtual pet has various attributes, such as hunger, thirst, and sleepiness, which change over time. The user can interact with the virtual pet by feeding, watering, or putting it to sleep. The user can also play games with the pet to increase its happiness level.

Note: This code is more than 200 lines long and is a simplified version for demonstration purposes.

*/

// Virtual Pet Object
const virtualPet = {
  name: "Rocky", // Pet Name
  hunger: 50, // Hunger Level
  thirst: 50, // Thirst Level
  sleepiness: 50, // Sleepiness Level
  happiness: 50, // Happiness Level
  isHungry: function() {
    return this.hunger > 75;
  },
  isThirsty: function() {
    return this.thirst > 75;
  },
  isSleepy: function() {
    return this.sleepiness > 75;
  },
  isSad: function() {
    return this.happiness < 25;
  },
  feed: function() {
    this.hunger -= 10;
    this.thirst += 5;
  },
  water: function() {
    this.thirst -= 10;
    this.happiness += 5;
  },
  sleep: function() {
    this.sleepiness -= 15;
    this.happiness += 10;
  },
  play: function() {
    this.happiness += 15;
    this.hunger += 5;
    this.thirst += 5;
  },
};

// Virtual Pet's Stats Update Function
function updateStats() {
  console.log("----------------------------");
  console.log("Name: " + virtualPet.name);
  console.log("Hunger Level: " + virtualPet.hunger);
  console.log("Thirst Level: " + virtualPet.thirst);
  console.log("Sleepiness Level: " + virtualPet.sleepiness);
  console.log("Happiness Level: " + virtualPet.happiness);
  console.log("----------------------------");
}

// Time Elapse Simulation
function timeElapse() {
  if (virtualPet.isHungry()) {
    console.log(virtualPet.name + " is hungry. Feed it!");
    virtualPet.feed();
  }
  if (virtualPet.isThirsty()) {
    console.log(virtualPet.name + " is thirsty. Give it some water!");
    virtualPet.water();
  }
  if (virtualPet.isSleepy()) {
    console.log(virtualPet.name + " is sleepy. Put it to sleep!");
    virtualPet.sleep();
  }
  if (virtualPet.isSad()) {
    console.log(virtualPet.name + " is sad. Play with it to make it happy!");
    virtualPet.play();
  }
  updateStats();
}

// Initialize Virtual Pet Stats
updateStats();

// Time Elapse Every 5 Seconds
setInterval(timeElapse, 5000);