import './App.css';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import * as backend from './reach/build/index.main.mjs'
import { useRef, useState } from 'react';
import { views } from './utils/';
import LandingPage from './screens/LandingPage';
import { Box } from '@chakra-ui/react';
import SelectGame from './screens/SelectGame';
import CreateGame from './screens/CreateGame';
import DisplayGameID from './screens/DisplayGameID';
import PlayGameNow from './screens/PlayGameNow';
import JoinGame from './screens/JoinGame';
import Result from './screens/Result';
import { toaster } from 'evergreen-ui';
import InputUserType from './screens/InputUserType';
import WaitingOthers from './screens/WaitingOthers';
import WinnerEmerges from './screens/WinnerEmerges';

const reach = loadStdlib('ALGO');
reach.setWalletFallback(reach.walletFallback( { providerEnv: 'TestNet', MyAlgoConnect } ));
// const fmt = (x) => reach.formatCurrency(x, 4);

function App() {
  const [ view, setView ] = useState(views.CONNECT_ACCOUNT);
  const [account, setAccount] = useState({});
  const [accountBal, setAccountBal] = useState('');
  const [userType, setUserType] = useState('');
  const [stakePrice, setStakePrice] = useState();
  const [playerContractDetails, setPlayerContractDetails] = useState({});
  const [userGuess, setUserGuess] = useState('');
  const [hand, setHand] = useState('');
  const [contractInfo, setContractInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [winner, setWinner] = useState('');
  const [displayNewBal, setDisplayNewBal] = useState(false);

  const stdlib = loadStdlib(process.env);
  const toAU = (au) => stdlib.parseCurrency(au);
  const toSU = (su) => stdlib.formatCurrency(su, 4);
  const balance = useRef();

  const OUTCOME =["No winner", "Alice wins", "Bob wins", "Charlie wins"];  

  const connectAccount = async () => {
    const getAccount = async () => {
      try {
        account.current = await reach.getDefaultAccount();
        setAccount(account);
        toaster.success(`Account connected successfully`);
        setView(views.PLAY_GAME);
        console.log("Account :" + account.current.networkAccount.addr);
      } catch (err) {
        toaster.danger(`Error occured, can't retrieve your account`)
        console.log(err);
      }
    };

    const getBalance = async () => {
      try {
        let rawBalance = await reach.balanceOf(account.current);
        balance.current = reach.formatCurrency(rawBalance, 4);
        setAccountBal(balance.current);
        console.log("Balance :" + balance.current);
      } catch (err) {
        toaster.danger('Error occured')
        console.log(err);
      }
    };

    try {
      await getAccount();
      await getBalance();
    } catch (err) {
      toaster.danger('Error occured')
      console.log(err);
    }
  };

  const getNewBalance = async (e) => {
    e.preventDefault();
    setDisplayNewBal(true);
    const getAccount = async () => {
      try {
        account.current = await reach.getDefaultAccount();
        setAccount(account);
        toaster.success(`Account connected successfully`);
      } catch (err) {
        toaster.danger(`Error occured, can't retrieve your account`)
      }
    };

    const getBalance = async () => {
      try {
        let rawBalance = await reach.balanceOf(account.current);
        balance.current = reach.formatCurrency(rawBalance, 4);
        setAccountBal(balance.current);
        console.log("Balance :" + balance.current);
      } catch (err) {
        toaster.danger('Error occured')
      }
    };

    try {
      await getAccount();
      await getBalance();
    } catch (err) {
      toaster.danger('Error occured')
    }
  };

  const getUserType = (user) => {
    setUserType(user);
  };
  
  const getStakePrice = (price) => {
    setStakePrice(price);
  };

  const getGuessNumber = (guess) => {
    setUserGuess(guess);
  };

  const getContractDetails = (details) => {
    setPlayerContractDetails(details);
  };

  const getHandValue = (handValue) => {
    console.log(handValue);
    setHand(Number(handValue));
  };

  const PlayerMakeGuess = (name) => ({
    makeGuess: () => {
      console.log(`${name} guessed ${userGuess}`);
      toaster.success(`${name} guessed ${userGuess}`);
      return userGuess;
    },
    throwHand: () => {
      console.log(`The ${name} made a ${hand}`);
      toaster.success(`The ${name} made a ${hand}`);
      return hand;
    },
    getResult: (outcome) => {
      console.log(outcome, '--> outcome res');
      toaster.success(`${name} saw result: ${OUTCOME[outcome]}`);
      setWinner(`${OUTCOME[outcome]}`);
      setView(views.WINNER)
    },
  });

  const handleCreateGame = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const aliceInteract = {
        ...PlayerMakeGuess('Alice'),
        ...stdlib.hasRandom,
        wager: toAU(stakePrice),
        reportReady: async (stakePrice) => {
          setContractInfo(`${JSON.stringify(await ctcAlice.getInfo())}`);
          toaster.success(`You set the morra game with a wager of ${toSU(stakePrice)} ALGO`)
          setIsLoading(false);
          setView(views.GAME_ID);
        }
      }
      const ctcAlice = await account.current.contract(backend);
      await ctcAlice.participants.Alice(aliceInteract);
      console.log(ctcAlice, '--> on await');
    } catch (error) {
      toaster.danger('Error occured')
      setIsLoading(false);
      console.log(error);
    }
  };

  const proceedPlayGame = async (e) => {
    e.preventDefault();
    if (userType === 'Bob') {
      try {
        setIsLoading(true);
        const bobInteract = {
          ...PlayerMakeGuess('Bob'),
          ...stdlib.hasRandom,
          acceptWager: (amt) => {
            toaster.success(`Bob accepts the wager of ${amt}`);
          },
          reportReady: async () => {
            setIsLoading(false);
            setView(views.WAITING_FOR_OTHERS);
          }
        }
        const info = JSON.parse(playerContractDetails);
        const ctcBob = await account.current.contract(backend, info);
        await ctcBob.participants.Bob(bobInteract);
      } catch (error) {
        toaster.danger('Error occured');
        console.log(error);
      };
    } else if (userType === 'Charlie') {
      try {
        setIsLoading(true);
        const charlieInteract = {
          ...PlayerMakeGuess('Charlie'),
          ...stdlib.hasRandom,
          acceptWager: (amt) => {
            toaster.success(`Charlie accepts the wager of ${amt}`);
          },
          reportReady: async () => {
            setIsLoading(false);
            setView(views.WAITING_FOR_OTHERS);
          }
        }
        const info = JSON.parse(playerContractDetails);
        const ctcCharlie = await account.current.contract(backend, info);
        await ctcCharlie.participants.Charlie(charlieInteract);
      } catch (error) {
        toaster.danger('Error occured')
        console.log(error);
      }
    }
  };

  return (
    <Box className="App">
      <header className="App-header">
        {view === views.CONNECT_ACCOUNT && <LandingPage handleConnect={connectAccount} />}
        {
          view === views.PLAY_GAME && 
          <SelectGame
            accountBal={accountBal === '' ? 0 : accountBal}
            createGame={(e) => { setUserType('Alice'); setView(views.CREATE_GAME); e.preventDefault() }}
            joinGame={(e) => { setView(views.USER_TYPE); e.preventDefault(); }}
          />
        }
        {
          view === views.USER_TYPE && 
          <InputUserType
            accountBal={accountBal === '' ? 0 : accountBal}
            getUserType={getUserType}
            playGame={proceedPlayGame}
            getUserGuess={getGuessNumber}
            getContractDetails={getContractDetails}
            isLoading={isLoading}
            getHand={getHandValue}
          />
        }
        {
          view === views.CREATE_GAME &&
          <CreateGame
            handleCreateGame={handleCreateGame}
            getStakePrice={getStakePrice}
            accountBal={accountBal}
            getGuessNumber={getGuessNumber}
            isLoading={isLoading}
            getHand={getHandValue}
          />
        }
        {
          view === views.GAME_ID &&
          <DisplayGameID
            playGame={(e) => { setView(views.JOIN_GAME); e.preventDefault(); }}
            contractInfo={contractInfo}
            accountBal={accountBal === '' ? 0 : accountBal} 
            waitForPlayer={(e) => { setView(views.WAITING_FOR_OTHERS); e.preventDefault(); }}
          />
        }
        {view === views.WAITING_FOR_OTHERS && <WaitingOthers accountBal={accountBal === '' ? 0 : accountBal}  />}
        {view === views.WINNER && 
          <WinnerEmerges
            getBalance={getNewBalance}
            accountBal={accountBal}
            displayNewBal={displayNewBal}
            goHome={() => setView(views.CREATE_GAME)}
            winnerName={winner}
          />
        }
        {view === views.JOIN_GAME && 
          <JoinGame
            getHand={getHandValue}
            accountBal={accountBal === '' ? 0 : accountBal} 
          />
        }
        {view === views.PLAY_GAME_NOW && <PlayGameNow handleJoinGame={() => setView(views.JOIN_GAME)} />}
        {view === views.SUBMIT_HAND && <Result goHome={() => setView(views.CONNECT_ACCOUNT)} />}
      </header>
    </Box>
  );
}

export default App;
