import { Player } from "./player";

export class RandomPlayer extends Player {
    constructor(name: string) {
        super(name);
    }
    pickSymbol(): string {
        let randomSymbol = ["rock", "paper", "scissors"]
        let choice = randomSymbol[Math.floor(Math.random() * randomSymbol.length)] ;
        return choice
    }
}