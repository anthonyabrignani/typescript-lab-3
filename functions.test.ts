import { ConsistantPlayer } from "./cPlayer";
import { playAndPickWinner } from "./functions";
import { Player } from "./player";

describe("play and pick winner function", () => {
  test("rock vs scissors", () => {
    let hero: Player = new ConsistantPlayer("Grant", "rock");
    let villain: Player = new ConsistantPlayer("Bane", "scissors");
    let result: Player | null = playAndPickWinner(hero, villain);
    expect(result).toBe(hero);
  });
  test("rock vs paper", () => {
    let hero: Player = new ConsistantPlayer("Grant", "rock");
    let villain: Player = new ConsistantPlayer("Bane", "paper");
    let result: Player | null = playAndPickWinner(hero, villain);
    expect(result).toBe(villain);
  });
  test("rock vs rock", () => {
    let hero: Player = new ConsistantPlayer("Grant", "rock");
    let villain: Player = new ConsistantPlayer("Bane", "rock");
    let result: Player | null = playAndPickWinner(hero, villain);
    expect(result).toBe(null);
  });
  test("paper vs rock", () => {
    let hero: Player = new ConsistantPlayer("Grant", "paper");
    let villain: Player = new ConsistantPlayer("Bane", "rock");
    let result: Player | null = playAndPickWinner(hero, villain);
    expect(result).toBe(hero);
  });
  test("paper vs scissors", () => {
    let hero: Player = new ConsistantPlayer("Grant", "paper");
    let villain: Player = new ConsistantPlayer("Bane", "scissors");
    let result: Player | null = playAndPickWinner(hero, villain);
    expect(result).toBe(villain);
  });
  test("paper vs paper", () => {
    let hero: Player = new ConsistantPlayer("Grant", "paper");
    let villain: Player = new ConsistantPlayer("Bane", "paper");
    let result: Player | null = playAndPickWinner(hero, villain);
    expect(result).toBe(null);
  });
  test("scissors vs rock", () => {
    let hero: Player = new ConsistantPlayer("Grant", "scissors");
    let villain: Player = new ConsistantPlayer("Bane", "rock");
    let result: Player | null = playAndPickWinner(hero, villain);
    expect(result).toBe(villain);
  });
  test("scissors vs paper", () => {
    let hero: Player = new ConsistantPlayer("Grant", "scissors");
    let villain: Player = new ConsistantPlayer("Bane", "paper");
    let result: Player | null = playAndPickWinner(hero, villain);
    expect(result).toBe(hero);
  });
  test("scissors vs scissors", () => {
    let hero: Player = new ConsistantPlayer("Grant", "scissors");
    let villain: Player = new ConsistantPlayer("Bane", "scissors");
    let result: Player | null = playAndPickWinner(hero, villain);
    expect(result).toBe(null);
  });
});
