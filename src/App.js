import './App.css';
import Main from './Main';
import Nav from './Nav';
import Favorites from './Favorites';
import Player from './Player';
import { useEffect, useState } from 'react';

function App() {

  const [spotifyData, setSpotifyData] = useState([]);

  useEffect(() => {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
    method: "get",
    headers: myHeaders,
    redirect: "follow",
    };

    fetch("https://v1.nocodeapi.com/tanopaul/spotify/foDEddECFnQTlbOH/browse/new?country=US&perPage=50", requestOptions)
    .then(response => response.json())
    .then(result => {
      setSpotifyData(result.albums.items)
    })
    .catch(error => console.log('error', error));
    }, [])

    

  return (
    <div className="App">
    <div className="horizontal">
      <div className="left-block">
        <Nav />
        <Favorites />
      </div>
      <Main spotifyData={spotifyData} />
    </div>
    <Player />
  </div>
  );
}

export default App;
