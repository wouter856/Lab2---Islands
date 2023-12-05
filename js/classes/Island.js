export default class Island {
    constructor(name) {}
  
    getRandomColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
  
    remove() {
        //JS animations API, fade out and remove from DOM
        //remove the element when the animation ended
        
    }
  
    getRandomName() {
      // array with 10 random island names
      const names = [
            "Daniel",
            "Bart",
            "Jeroen",
            "Luc",
            "Joris",
            "Bram",
            "Jan",
            "Koen",
            "Lars",
            "Jelle"
      ];
  
      // return a random name from the array
      return names[Math.floor(Math.random() * names.length)];
    }
  }