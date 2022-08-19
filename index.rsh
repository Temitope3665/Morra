'reach 0.1';

const Player = {
  ...hasRandom,
  makeGuess: Fun([], UInt),
  showHand: Fun([], UInt),
  getResult: Fun([UInt], Null),
};

export const main = Reach.App(() => {
  const Alice = Participant('Alice', {
    ...Player,
    wager: UInt
    // Specify Alice's interact interface here
  });
  const Bob = Participant('Bob', {
    ...Player,
    acceptWager: Fun([UInt], Null)
    // Specify Bob's interact interface here
  });
  const Charlie = Participant('Charlie', {
    ...Player,
    acceptWager: Fun([UInt], Null)
  });
  init();

  // Make Guess
  // The first one to publish deploys the contract
  Alice.only(() => {
    const wager = declassify(interact.wager);
    const aliceGuess = declassify(interact.makeGuess());

  })
  Alice.publish(wager, aliceGuess)
    .pay(wager);
  commit();

  // Others always attach
  Bob.only(() => {
    interact.acceptWager(wager);
    const bobGuess = declassify(interact.makeGuess());
  })
  Bob.publish(bobGuess)
    .pay(wager);
  commit();
  
  Charlie.only(() => {
    interact.acceptWager(wager);
    const charlieGuess = declassify(interact.makeGuess());
  })
  Charlie.publish(charlieGuess)
    .pay(wager);
  commit();

  // Show hand
  Alice.only(() => {
    const aliceHand = declassify(interact.showHand());
  });
  Alice.publish(aliceHand);
  commit();
  Bob.only(() => {
    const bobHand = declassify(interact.showHand());
  });
  Bob.publish(bobHand);
  commit();
  Charlie.only(() => {
    const charlieHand = declassify(interact.showHand());
  });
  Charlie.publish(charlieHand);
  
  // Calculate outcome
  const total = (aliceHand + bobHand + charlieHand);
  const outcome = 
    total == aliceGuess ? 1 : 
    total == bobGuess ? 2 : 
    total == charlieGuess ? 3 :
    0

  if (outcome != 0) {
    outcome == 1 ? transfer(wager * 3).to(Alice) :
    outcome == 2 ? transfer(wager * 3).to(Bob) :
    transfer(wager * 3).to(Charlie)
  } else {
    transfer(wager).to(Alice);
    transfer(wager).to(Bob);
    transfer(wager).to(Charlie);
  }

  commit();

  each([Alice, Bob, Charlie], () => {
    interact.getResult(outcome);
  });
  exit();
});
