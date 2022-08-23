import './App.css';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import * as backend from './reach/build/index.main.mjs'
import { useRef, useState } from 'react';
import { views } from './utils/';
// import { ConnectAccount, PasteContractInfo, SelectRole, TestView, WaitForAttacher } from './screens';
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

const reach = loadStdlib('ALGO');
reach.setWalletFallback(reach.walletFallback( { providerEnv: 'TestNet', MyAlgoConnect } ));
const fmt = (x) => reach.formatCurrency(x, 4);

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

  const stdlib = loadStdlib(process.env);
  const toAU = (au) => stdlib.parseCurrency(au);
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

  const getUserType = (user) => {
    setUserType(user);
  };
  
  const getStakePrice = (price) => {
    setStakePrice(price);
  };

  const getGuessNumber = (guess) => {
    setUserGuess(guess)
  };

  const getContractDetails = (details) => {
    setPlayerContractDetails(details)
  };

  console.log(stakePrice);

  // const playerInteract = (role) => ({
  //   makeGuess: () => { 
  //     console.log(`The ${role} made a ${guess}`);
  //     toaster.success(`The ${role} made a ${guess}`);
  //     return guess;
  //    },
  //   throwHand: () => {
  //     console.log(`The ${role} made a ${hand}`);
  //     toaster.success(`The ${role} made a ${hand}`);
  //     return hand;
  //   },
  //   getResult: (outcome) => {
  //     toaster.success(`${role} saw result: ${OUTCOME[outcome]}`);
  //     // console.log(`${name} saw result: ${OUTCOME[outcome]}`);
  //   },
  // });

  const Player = (name) => ({
    makeGuess: () => {
      // const guess = Math.floor(Math.random() * 16);
      console.log(`${name} guessed ${userGuess}`);
      return userGuess;
    },
    throwHand: () => {
      const hand = Math.floor(Math.random() * 6);
      console.log(`${name} throwed ${hand} fingers`);
      return hand;
    },
    getResult: (outcome) => {
      console.log(`${name} saw result: ${OUTCOME[outcome]}`);
    }
  })

  const proceedPlayGame = async (e) => {
    e.preventDefault();
    if (userType === 'Bob') {
      try {
        setIsLoading(true);
        const bobInteract = {
          ...Player('Bob'),
          ...stdlib.hasRandom,
          acceptWager: (amt) => {
            toaster.success(`Bob accepts the wager of ${amt}`);
          },
          reportReady: async () => {
            setIsLoading(false);
            setView(views.GAME_ID)
          }
        }
        const info = JSON.parse(playerContractDetails);
        const ctcBob = await account.current.contract(backend, info);
        await ctcBob.participants.Bob(bobInteract);
      } catch (error) {
        toaster.danger('Error occured')
        console.log(error);
      }
      setView(views.JOIN_GAME);
    } else if (userType === 'Charlie') {
      setView(views.JOIN_GAME);
    }
  };


  const handleCreateGame = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const aliceInteract = {
        ...Player('Alice'),
        ...stdlib.hasRandom,
        wager: toAU(stakePrice),
        reportReady: async (stakePrice) => {
          setContractInfo(`${JSON.stringify(await ctcAlice.getInfo())}`);
          toaster.success(`You set the morra game with a wager of ${stakePrice}`)
          setIsLoading(false);
          setView(views.GAME_ID)
        }
      }
      const ctcAlice = await account.current.contract(backend);
      await ctcAlice.participants.Alice(aliceInteract);
    } catch (error) {
      toaster.danger('Error occured')
      setIsLoading(false);
    }
  };

  const handlePlayGame = async (e) => {
    e.preventDefault();
    try {
      
    } catch (error) {
      toaster.danger(error);
      console.log(error);
    }
  }

  console.log(userType);
  
  return (
    <Box className="App">
      <header className="App-header">
        {view === views.CONNECT_ACCOUNT && <LandingPage handleConnect={connectAccount} />}
        {
          view === views.PLAY_GAME && 
          <SelectGame
            accountBal={accountBal}
            createGame={(e) => { setUserType('Alice'); setView(views.CREATE_GAME); e.preventDefault() }}
            joinGame={(e) => { setView(views.USER_TYPE); e.preventDefault(); }}
          />
        }
        {
          view === views.USER_TYPE && 
          <InputUserType
            accountBal={accountBal}
            getUserType={getUserType}
            playGame={proceedPlayGame}
            getUserGuess={getGuessNumber}
            getContractDetails={getContractDetails}
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
          />
        }
        {view === views.GAME_ID && <DisplayGameID playGame={() => setView(views.PLAY_GAME)} contractInfo={contractInfo} accountBal={accountBal} />}
        {view === views.PLAY_GAME_NOW && <PlayGameNow handleJoinGame={() => setView(views.JOIN_GAME)} />}
        {view === views.JOIN_GAME && <JoinGame handleSubmit={() => setView(views.SUBMIT_HAND)} />}
        {view === views.SUBMIT_HAND && <Result goHome={() => setView(views.CONNECT_ACCOUNT)} />}
      </header>
    </Box>
  );
}

export default App;
