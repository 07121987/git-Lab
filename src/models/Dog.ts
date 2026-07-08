import { Animal } from "./Animal";

export class Dog extends Animal {

    constructor(name: string, age: number) {
        super(name, age, "Dog");
    }

    makeSound(): void {
        console.log(`${this.name}: Гав!`);
    }
}