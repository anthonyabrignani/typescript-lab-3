import configPrompt from "prompt-sync";
import { Player } from "./player";
import { ConsistantPlayer } from "./cPlayer";
import { RandomPlayer } from "./rPlayer";
import { displayHeroes, playAndPickWinner } from "./functions";
const prompt = configPrompt({ sigint: true });

let villains: Player[] = [
  new ConsistantPlayer("Sword Saint Isshin", "scissors"),
  new RandomPlayer("Folding Screen Monkeys"),
  new ConsistantPlayer("Guardian Ape", "rock"),
  new RandomPlayer("Genichiro Ashina"),
  new ConsistantPlayer("Lady Butterfly", "paper"),
  new RandomPlayer("Divine Dragon")
];

let heroes: Player[] = [
  new RandomPlayer("Sekiro"),
  new ConsistantPlayer("Owl", "scissors"),
  new ConsistantPlayer("Sculptor", "rock"),
  new ConsistantPlayer("Emma", "paper")
];

let winTotal = 0;

for (let villain of villains) {
  console.log(`You are facing ${villain.name}`);
  console.log(`Who will you pick to battle for you?`);
  displayHeroes(heroes);
  let heroChoice = prompt("Type a hero name: ");
  const hero = heroes.find((hero) => {
    return hero.name === heroChoice;
  });
  if (hero === undefined) {
    console.log("NOT A VALID HERO NAME!!!");
    break;
  }
  let winner = playAndPickWinner(hero, villain);
  if (winner === hero) {
    hero.winCount += 1;
    winTotal ++;
    console.log("YOUR HERO WINS!");
  } else if (winner === villain) {
    villain.winCount += 1;
    console.log("YOUR HERO LOST!");
  } else {
    console.log("IT'S A TIE!");
  }
}
console.log("Game over.");
console.log(`Your heroes won ${winTotal} out of ${villains.length} rounds.`)
displayHeroes(heroes);