import { Zoo } from "./models/Zoo";
import { Dog } from "./models/Dog";
import { Cat } from "./models/Cat";
import { Wolf } from "./models/Wolf";
import { Rooster } from "./models/Rooster";


const zoo = new Zoo();

const dog = new Dog("Каспер", 3);
const cat = new Cat("Феликс", 4);
const wolf = new Wolf("Серый", 5);
const rooster = new Rooster("Петя", 1);


zoo.addAnimal(dog);
zoo.addAnimal(cat);
zoo.addAnimal(wolf);
zoo.addAnimal(rooster);


console.log("=== Animals in Zoo ===");
zoo.displayAnimals();


console.log("\n=== Animal Sounds ===");
zoo.makeAllSounds();


console.log("\n=== Remove Cat ===");
zoo.removeAnimal("Феликс");


console.log("\n=== Animals After Removing ===");
zoo.displayAnimals();