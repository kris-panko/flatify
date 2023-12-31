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
  const url = 'http://localhost:3001/spotify';
  const [spotifyData, setSpotifyData] = useState([]);
  const [bioData, setBioData] = useState([]);
  const [artistData, setArtistData] = useState([]);
  const [id, setId] = useState('');
  const [newSearch,setNewSearch] = useState("")
  const [isFavorited, setIsFavorited] = useState([]);
  const [favoritedData, setFavoritedData] = useState([]);
  const [playIsClicked, setPlayIsClicked] = useState([]);
  const [isPlaying, setIsPlaying] = useState([]);

  function handlePlayIsClicked(name) {
    setPlayIsClicked([name])
  }

  function handleIsPlaying(mp3) {
    setIsPlaying(mp3)
  }

  function updateStarRating(songId, newRating) {
    const newFavorites = favoritedData.map((song) => {
      return song.id!== songId ? song: newRating
    })
     setFavoritedData(newFavorites)
    }

  function addNewFavoritedSong(song) {
    setFavoritedData([...favoritedData, song]);
  }

  function addIsFavorited(name) {
    setIsFavorited([...isFavorited, name]);
  }

  function musicSearch(music){
    setNewSearch(music.toLowerCase())
  }
  const filterSearch = spotifyData.filter((data)=>{
    return data.name.toLowerCase().includes(newSearch) ||data.artists[0].name.toLowerCase().includes(newSearch)
  })

  function handleDelete(songId, title){
    const newData = favoritedData.filter(song => songId!== song.id)
    const newFavorited = isFavorited.filter(favoritedTitle => title !== favoritedTitle)
    setFavoritedData(newData)
    setIsFavorited(newFavorited)
  }



  useEffect(() => {
    const initFavorites = [];
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

    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      setFavoritedData(data)
      data.forEach(song => {
        initFavorites.push(song.title)
      })
      setIsFavorited(initFavorites);
    });

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
        <Favorites handlePlayIsClicked={handlePlayIsClicked} handleIsPlaying={handleIsPlaying} playIsClicked={playIsClicked} updateStarRating={updateStarRating} favoritedData={favoritedData} handleDelete={handleDelete} />
      </div>
      <Routes>
        <Route path="/main" element={<Main handleIsPlaying={handleIsPlaying} playIsClicked={playIsClicked} handlePlayIsClicked={handlePlayIsClicked} addNewFavoritedSong={addNewFavoritedSong} addIsFavorited={addIsFavorited} isFavorited={isFavorited} spotifyData={spotifyData} addBioData={addBioData} addArtistId={addArtistId}  addArtistData={addArtistData}/>}/>
        <Route path= {`/${id}`} element={<ArtistInfo bioData={bioData} artistData={artistData}  />}/>
        <Route path="/search" element={<Search handleIsPlaying={handleIsPlaying} playIsClicked={playIsClicked} handlePlayIsClicked={handlePlayIsClicked} addNewFavoritedSong={addNewFavoritedSong} addIsFavorited={addIsFavorited} isFavorited={isFavorited} spotifyData={filterSearch} addBioData={addBioData} addArtistId={addArtistId}  addArtistData={addArtistData} newSearch={newSearch} musicSearch={musicSearch} />}/>
      </Routes>
    </div>
    <Player isPlaying={isPlaying} />
  </div>
  );
}

export default App;
