import { RandomPlayer } from "./rPlayer";
import { Player } from "./player";

describe("Consistant Player", () => {
  test("name is set correctly by the constructor", () => {
    let result: Player = new RandomPlayer("Grant");
    expect(result.name).toBe("Grant");
  });
  test("winCount starts at zero", () => {
    let result: Player = new RandomPlayer("Grant");
    expect(result.winCount).toBe(0);
  });
});