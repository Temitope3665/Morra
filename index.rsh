'reach 0.1';

const Player = {
  ...hasRandom,
  makeGuess: Fun([], UInt),
  throwHand: Fun([], UInt),
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
    const _aliceHand = interact.throwHand();
    const [_aliceHandCommit, _aliceSalt] = makeCommitment(interact, _aliceHand);
    const aliceHandCommit = declassify(_aliceHandCommit);

  })
  Alice.publish(wager, aliceGuess, aliceHandCommit)
    .pay(wager);
  commit();

  // Others always attach
  Bob.only(() => {
    interact.acceptWager(wager);
    const bobGuess = declassify(interact.makeGuess());
    const _bobHand = interact.throwHand();
    const [_bobHandCommit, _bobSalt] = makeCommitment(interact, _bobHand);
    const bobHandCommit = declassify(_bobHandCommit);
  })
  Bob.publish(bobGuess, bobHandCommit)
    .pay(wager);
  commit();
  
  Charlie.only(() => {
    interact.acceptWager(wager);
    const charlieGuess = declassify(interact.makeGuess());
    const charlieHand = declassify(interact.throwHand());
  })
  Charlie.publish(charlieGuess, charlieHand)
    .pay(wager);
  commit();

  unknowable(Bob, Alice(_aliceHand, _aliceSalt));
  unknowable(Charlie, Alice(_aliceHand, _aliceSalt));
  unknowable(Charlie, Bob(_bobHand, _bobSalt));

  // Show hand
  Alice.only(() => {
    const aliceSalt = declassify(_aliceSalt);
    const aliceHand = declassify(_aliceHand);
  });
  Alice.publish(aliceHand, aliceSalt);
  checkCommitment(aliceHandCommit, aliceHand, aliceSalt);
  commit();

  Bob.only(() => {
    const bobSalt = declassify(_bobSalt);
    const bobHand = declassify(_bobHand);
  });
  Bob.publish(bobHand, bobSalt);
  checkCommitment(bobHandCommit, bobSalt, bobHand);
  
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
