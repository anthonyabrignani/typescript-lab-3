import { Player } from "./player"

export class ConsistantPlayer extends Player {
    symbol: string;
    constructor(name: string, symbol: string) {
        super(name);
        this.symbol = symbol;
    }
    pickSymbol(): string {
        return this.symbol;
    }
}