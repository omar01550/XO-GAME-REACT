  import {React} from 'react';
  import './App.css';
  import StartPage from './components/start-page/start-page';
  import GamePage from './components/game-page/game-page';
  import GameSounds from './components/game-sounds/game-sounds';
  import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';

  function App() {
       return (
          <main className="App">
                <BrowserRouter>
                      <Routes>
                          <Route path="/game-page" element={<GamePage/>}/>
                          <Route path="/" element={<StartPage/>}/>
                      </Routes>
                </BrowserRouter>
             <GameSounds/>
          </main>

       )
  }

  export default App;
