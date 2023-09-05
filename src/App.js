import './App.css';
import Main from './Main';
import Nav from './Nav';
import Favorites from './Favorites';
import Search from './Search';
import Player from './Player';
import ArtistInfo from './ArtistInfo';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';


function App() {

  const [spotifyData, setSpotifyData] = useState([]);
  const [bioData, setBioData] = useState([]);
  const [artistData, setArtistData] = useState([]);
  const [id, setId] = useState('');

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

  function addBioData(data) {
    setBioData([data]);
  }

  function addArtistData(data) {
    setArtistData([data]);
  }

  function addArtistId(id) {
    setId(id);
  }

  return (
    <div className="App">
    <div className="horizontal">
      <div className="left-block">
        <Nav />
        <Favorites />
      </div>
      <Routes>
        <Route path="/main" element={<Main spotifyData={spotifyData} addBioData={addBioData} addArtistId={addArtistId}  addArtistData={addArtistData}/>}/>
        <Route path= {`/${id}`} element={<ArtistInfo bioData={bioData} artistData={artistData} />}/>
        <Route path="/search" element={<Search spotifyData={spotifyData} />}/>
      </Routes>
    </div>
    <Player />
  </div>
  );
}

export default App;
