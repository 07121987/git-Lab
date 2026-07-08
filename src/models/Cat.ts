import { Animal } from "./Animal";

export class Cat extends Animal {

    constructor(name: string, age: number) {
        super(name, age, "Cat");
    }

    makeSound(): void {
        console.log(`${this.name}: Мяу!`);
    }
}