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
    // loop over all this.islands and save the names and colors to localstorage
    const savedIslands = this.islands.map((island) => {
        return { 
            name: island.name, 
            color: island.color 
        };
    });
    
    localStorage.setItem("islands", JSON.stringify(savedIslands));
  }

  load() {
    // load islands from localstorage into array
    // loop over the array and addIslands()
    const savedIslands = JSON.parse(localStorage.getItem("islands"));

    // remove all existing islands and reload with the parsed islands
    document.querySelector("#app").innerHTML = "";
    savedIslands.forEach((island) => {
        this.addIsland(island.color, island.name);
    });
  }

  getCoordinates() {
    // return coordinates within the screen at random, feel free to change it up!
    return {
        x: (Math.random() * (window.innerWidth)),
        y: (Math.random() * (window.innerHeight - 100))
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

    // add the island to the div with id app
    document.querySelector("#app").appendChild(newIsland);

    //give it random coordinates within the screen
    const coordinates = this.getCoordinates();
    console.log(coordinates);
    newIsland.style.left = coordinates.x + "px";
    newIsland.style.top = coordinates.y + "px";

    //add the island color and name to the this.islands array
    this.islands.push({ color, name });

    this.moveIsland(newIsland);
  }

  moveIsland(island) {
    // this might be a good point to animate the islands with JS Animations API
    //get random coordinates
    const coordinates = this.getCoordinates();
    // use js web animations api to animate div from original coordinates to new coordinates
    let plusOrMinus1 = Math.random() < 0.5 ? -1 : 1;
    let plusOrMinus2 = Math.random() < 0.5 ? -1 : 1;
    let coordinatesX = coordinates.x * plusOrMinus1;
    let coordinatesY = coordinates.y * plusOrMinus2;
    island.animate([
        { transform: `translate(${island.style.left}, ${island.style.top})`, opacity: 0 },
        { transform: `translate(${coordinatesX}, ${coordinatesY})`, opacity: 1 },
    ], {
        duration: 1000,
        iterations: 1
    });
  }
}