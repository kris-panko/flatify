import './App.css';
import Main from './Main';
import Nav from './Nav';
import Favorites from './Favorites';
import Player from './Player';

function App() {
  return (
    <div className="App">
    <div className="horizontal">
      <div className="left-block">
        <Nav />
        <Favorites />
      </div>
      <Main />
    </div>
    <Player />
  </div>
  );
}

export default App;
