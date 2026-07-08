import { IAnimal } from "../interfaces/IAnimal";

export abstract class Animal implements IAnimal {

    constructor(
        public name: string,
        public age: number,
        public species: string
    ) {}

    abstract makeSound(): void;

    getInfo(): string {
        return `Name: ${this.name}, Age: ${this.age}, Species: ${this.species}`;
    }
}