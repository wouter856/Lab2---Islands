import Island from "./Island.js";

const island = new Island();

export default class World {
  constructor() {
    this.islands = []; // a good place to keep track of your islands
    this.hookEvents(); // let's kick things of by hooking up events
  }

  hookEvents() {
    // hook events like clicking buttons to a specific function
    // when clicking on the btn with id #btnAddIsland, call function addIsland()
    document.querySelector("#btnAddIsland").addEventListener("click", () => {
        this.addIsland();
    });

    // when clicking on the btn with id #btnSave, call function save()
    document.querySelector("#btnSave").addEventListener("click", () => {
        this.save();
    });

    // when clicking on the btn with id #btnLoad, call function load()
    document.querySelector("#btnLoad").addEventListener("click", () => {
        this.load();
    });
  }

  save() {
    // save array islands to localstorage as string
    // loop over all this.islands and save the names
    
  }

  load() {
    // load islands from localstorage into array
    // loop over the array and addIslands()
    
  }

  getCoordinates() {
    // return coordinates within the screen at random, feel free to change it up!
    let randomSign = Math.random() < 0.5 ? -1 : 1;
    return {
      x: ((Math.random() * window.innerWidth) / 2 - 100) * randomSign,
      y: ((Math.random() * window.innerHeight) / 2 - 100) * randomSign,
    };
  }

  addIsland(color, name) {
    if (!color || !name) {
      // If color and name are not provided, generate random ones
      color = island.getRandomColor();
      name = island.getRandomName();
    };

    // create a new div with class island
    //add the random color as background and the random name as text
    const newIsland = document.createElement("div");
    newIsland.classList.add("island");
    newIsland.style.backgroundColor = color;
    newIsland.textContent = name;

    // add the island the div with id app
    document.querySelector("#app").appendChild(newIsland);
  }

  moveIsland(island) {
    // this might be a good point to animate the islands with JS Animations API
    
  }
}