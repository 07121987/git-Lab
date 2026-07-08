import { Animal } from "./Animal";

export class Wolf extends Animal {

    constructor(name: string, age: number) {
        super(name, age, "Wolf");
    }

    makeSound(): void {
        console.log(`${this.name}: Ауууу!`);
    }
}