# Morra on Reach
Implementation of the Morra game with Reach

## What is Morra ?
Morra is a game in which two (or more) players each suddenly display a hand showing zero to five fingers and after each of have declared what they think the sum of all the fingers will be.

Rules:
- Each players guess what they think the sum of all fingers will be at the beginning of the game
- Players display a number of fingers (0 - 6)
- The winner is one who was able to guess the sum correctly

#### How to Play the Game
- Visit **https://morra-game.vercel.app/**
- You should ensure to have 3 players to play the game,
- Then, ensure all the 3 players connect their account to ALGO first by clicking on **connect wallet** button,
- Allow player 1 to create the game by clicking on **create game** button,
- Player 1 name should be called Alice
- Player input his/her guess, inputs his/her hand and set a stake for the game,
- Player 2 and 3 joins the game by clicking on **join game** button,
- Player 2 name should be tagged as **Bob** while player 3 name should be tagged as **Charlie**
- Player 1 waits for player 2 and player 3 to select a guess and play their hands,
- After which all players reveal their hand and the game started
- The winner is one who was able to guess the sum correctly.

## Run Morra locally

### Prerequisite
To run this Dapp locally, you need to make sure you have the following installed:
- make: confirm with `make --version`
- docker: confirm with `docker --version`
- docker-compose: confirm with `docker-compose --version`


### Clone repo
```bash
git clone https://github.com/Temitope3665/Morra.git
```

#### Install the dependencies

```
yarn install

# From the project root path

cd src/reach

# To compile to the latest version of REACH

s
```

### Run app with reach
```bash
./reach run
```

---

#### Test the Application


Run `yarn start` to get your development server start.

This opens a new browser with `localhost:3000` running.

Ensure your browser pop-ups are enabled

---

#### Host view and Player view

Open `localhost:3000` on separate browsers to test using [MyAlgo](https://wallet.myalgo.com/) Testnet only.
