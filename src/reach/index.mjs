import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [ accAlice, accBob, accCharlie ] =
  await stdlib.newTestAccounts(3, startingBalance);

console.log('Welcome to Morra Game!');
const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());
const ctcCharlie = accCharlie.contract(backend, ctcAlice.getInfo());

const OUTCOME =["No winner", "Alice wins", "Bob wins", "Charlie wins"];
const Player = (name) => ({
  makeGuess: () => {
    const guess = Math.floor(Math.random() * 16);
    console.log(`${name} guessed ${guess}`);
    return guess;
  },
  showHand: () => {
    const hand = Math.floor(Math.random() * 6);
    console.log(`${name} showed ${hand} fingers`);
    return hand;
  },
  getResult: (outcome) => {
    console.log(`${name} saw result: ${OUTCOME[outcome]}`);
  }
})
console.log('Starting backends...');
await Promise.all([
  backend.Alice(ctcAlice, {
    ...stdlib.hasRandom,
    ...Player('Alice'),
  }),
  backend.Bob(ctcBob, {
    ...stdlib.hasRandom,
    ...Player('Bob'),
  }),
  backend.Charlie(ctcCharlie, {
    ...stdlib.hasRandom,
    ...Player('Charlie'),
  }),
]);

console.log('Goodbye, Alice, Bob and Charlie!');

