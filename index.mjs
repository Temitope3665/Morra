import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [ accAlice, accBob, accCharlie ] =
  await stdlib.newTestAccounts(3, startingBalance);

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (name) => fmt(await stdlib.balanceOf(name));

const displayBalance = async (account, name) => {
  const balance = await getBalance(account);
  console.log(`${name} current balance: ${balance}`);
}

await displayBalance(accAlice, "Alice");
await displayBalance(accBob, "Bob");
await displayBalance(accCharlie, "Charlie");

console.log('Welcome to Morra!');
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
    wager: stdlib.parseCurrency(10)
  }),
  backend.Bob(ctcBob, {
    ...stdlib.hasRandom,
    ...Player('Bob'),
    acceptWager: (amt) => console.log(`Bob accepts the wager of ${fmt(amt)}.`)
  }),
  backend.Charlie(ctcCharlie, {
    ...stdlib.hasRandom,
    ...Player('Charlie'),
    acceptWager: (amt) => console.log(`Bob accepts the wager of ${fmt(amt)}.`)
  }),
]);

await displayBalance(accAlice, "Alice");
await displayBalance(accBob, "Bob");
await displayBalance(accCharlie, "Charlie");

console.log('Goodbye, Alice, Bob and Charlie!');
