'reach 0.1';

// const [isHand, ZERO_FINGER, ONE_FINGER, TWO_FINGER, THREE_FINGER, FOUR_FINGER, FIVE_FINGER] = makeEnum(6)
// const [isOutcome, A_WINS, B_WINS, C_WINS, NO_WINNER] = makeEnum(4)

const Player = {
  ...hasRandom,
  makeGuess: Fun([], UInt),
  showHand: Fun([], UInt),
  getResult: Fun([UInt], Null),
};

export const main = Reach.App(() => {
  const Alice = Participant('Alice', {
    ...Player,
    // Specify Alice's interact interface here
  });
  const Bob = Participant('Bob', {
    ...Player,
    // Specify Bob's interact interface here
  });
  const Charlie = Participant('Charlie', {
    ...Player,
  });
  init();

  // Make Guess
  // The first one to publish deploys the contract
  Alice.only(() => {
    const aliceGuess = declassify(interact.makeGuess());
  })
  Alice.publish(aliceGuess);
  commit();

  // Others always attach
  Bob.only(() => {
    const bobGuess = declassify(interact.makeGuess());
  })
  Bob.publish(bobGuess);
  commit();
  
  Charlie.only(() => {
    const charlieGuess = declassify(interact.makeGuess());
  })
  Charlie.publish(charlieGuess);
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

  
  commit();

  each([Alice, Bob, Charlie], () => {
    interact.getResult(outcome);
  });
  exit();
});
