import { ConsistantPlayer } from "./cPlayer";
import { Player } from "./player";

describe("Consistant Player", () => {
  test("name is set correctly by the constructor", () => {
    let result: Player = new ConsistantPlayer("Grant", "rock");
    expect(result.name).toBe("Grant");
  });
  test("winCount starts at zero", () => {
    let result: Player = new ConsistantPlayer("Grant", "rock");
    expect(result.winCount).toBe(0);
  });
  test("pickSymbol returns the symbol set in the constructor", () => {
    let result: Player = new ConsistantPlayer("Grant", "rock");
    result.pickSymbol();
    expect(result.pickSymbol()).toBe("rock");
  });
});