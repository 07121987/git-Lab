import { Animal } from "./Animal";

export class Zoo {

    private animals: Animal[] = [];

    addAnimal(animal: Animal): void {
        this.animals.push(animal);
    }

    removeAnimal(name: string): void {
        this.animals = this.animals.filter(
            animal => animal.name !== name
        );
    }

    displayAnimals(): void {
        this.animals.forEach(animal => {
            console.log(animal.getInfo());
        });
    }

    makeAllSounds(): void {
        this.animals.forEach(animal => {
            animal.makeSound();
        });
    }
}