import { Animal } from "./Animal";

export class Rooster extends Animal {

    constructor(name: string, age: number) {
        super(name, age, "Rooster");
    }

    makeSound(): void {
        console.log(`${this.name}: Ку-ка-ру-ку!`);
    }
}