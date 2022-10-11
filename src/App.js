  import {React} from 'react';
  import './App.css';
  import StartPage from './components/start-page/start-page';
  import GamePage from './components/game-page/game-page';
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

          </main>

       )
  }

  export default App;
