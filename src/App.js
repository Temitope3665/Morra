import './App.css';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import * as backend from './reach/build/index.main.mjs'
import { useEffect, useState } from 'react';
import { views, Loader } from './utils/';
import { ConnectAccount, PasteContractInfo, SelectRole, TestView, WaitForAttacher } from './screens';
import LandingPage from './screens/LandingPage';
import { bg } from './svg';
import { Box } from '@chakra-ui/react';
import SelectGame from './screens/SelectGame';
import CreateGame from './screens/CreateGame';
import DisplayGameID from './screens/DisplayGameID';
import PlayGameNow from './screens/PlayGameNow';
import JoinGame from './screens/JoinGame';
import Result from './screens/Result';


function App() {
  const [ view, setView ] = useState(views.CONNECT_ACCOUNT);
  
  return (
    <Box className="App">
      <header className="App-header">
        {view === views.CONNECT_ACCOUNT && <LandingPage handleClick={() => setView(views.PLAY_GAME)} />}
        {view === views.PLAY_GAME && <SelectGame gotoCreateGame={() => setView(views.CREATE_GAME)} gotoPlayGame={() => setView(views.PLAY_GAME_NOW)} />}
        {view === views.CREATE_GAME && <CreateGame handleCreateGame={() => setView(views.GAME_ID)} />}
        {view === views.GAME_ID && <DisplayGameID playGame={() => setView(views.PLAY_GAME)} />}
        {view === views.PLAY_GAME_NOW && <PlayGameNow handleJoinGame={() => setView(views.JOIN_GAME)} />}
        {view === views.JOIN_GAME && <JoinGame handleSubmit={() => setView(views.SUBMIT_HAND)} />}
        {view === views.SUBMIT_HAND && <Result goHome={() => setView(views.CONNECT_ACCOUNT)} />}
      </header>
    </Box>
  );
}

export default App;
