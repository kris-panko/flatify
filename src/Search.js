import React from "react";
import SongCard from "./SongCard";
function Search({addNewFavoritedSong, addIsFavorited, isFavorited, spotifyData, addArtistData, addArtistId, addBioData, newSearch, musicSearch}) {
    
    const songsToRender = spotifyData.filter(song => song.name.length < 39).map(song => {
        return <SongCard addNewFavoritedSong={addNewFavoritedSong} addIsFavorited={addIsFavorited} isFavorited={isFavorited} addArtistData={addArtistData} addBioData={addBioData} addArtistId={addArtistId}  name={song.name} image={song.images[0].url} artist={song.artists[0].name} id={song.artists[0].id} key={song.id} />
    });

    function newMusicSearch(e){
        musicSearch(e.target.value)
    }

    return (
        <div className="main">
            <div className="search-input-div">
                <h1>Search</h1>
                <input type="text"
                className='searchTerm'
                value={newSearch}
                onChange={newMusicSearch}/>
            </div>
            <div className="grid-container">
                {songsToRender}
            </div>
        </div>
    )
}

export default Search;