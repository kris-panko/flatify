
import SongCard from "./SongCard";

function Main({handleIsPlaying, playIsClicked, handlePlayIsClicked, addNewFavoritedSong, spotifyData, addArtistData, addBioData, addArtistId, addIsFavorited, isFavorited}) {
    
    const songsToRender = spotifyData.filter(song => song.total_tracks === 1).slice(0, 5).map(song => {
        return <SongCard handleIsPlaying={handleIsPlaying} playIsClicked={playIsClicked} handlePlayIsClicked={handlePlayIsClicked} addNewFavoritedSong={addNewFavoritedSong} addIsFavorited={addIsFavorited} isFavorited={isFavorited} addArtistId={addArtistId} addArtistData={addArtistData} addBioData={addBioData} name={song.name} image={song.images[0].url} artist={song.artists[0].name} id={song.artists[0].id} key={song.id} />
    });

    const songsToRender2 = spotifyData.filter(song => song.total_tracks === 1).slice(5, 10).map(song => {
        return <SongCard handleIsPlaying={handleIsPlaying} playIsClicked={playIsClicked} handlePlayIsClicked={handlePlayIsClicked} addNewFavoritedSong={addNewFavoritedSong} addIsFavorited={addIsFavorited} isFavorited={isFavorited} addArtistId={addArtistId} addArtistData={addArtistData} addBioData={addBioData} name={song.name} image={song.images[0].url} artist={song.artists[0].name} id={song.artists[0].id} key={song.id} />
    });

    const songsToRender3 = spotifyData.filter(song => song.total_tracks === 1).slice(10, 15).map(song => {
        return <SongCard handleIsPlaying={handleIsPlaying} playIsClicked={playIsClicked} handlePlayIsClicked={handlePlayIsClicked} addNewFavoritedSong={addNewFavoritedSong} addIsFavorited={addIsFavorited} isFavorited={isFavorited} addArtistId={addArtistId} addArtistData={addArtistData} addBioData={addBioData} name={song.name} image={song.images[0].url} artist={song.artists[0].name} id={song.artists[0].id} key={song.id} />
    });

    const songsToRender4 = spotifyData.filter(song => song.total_tracks === 1).slice(15, 20).map(song => {
        return <SongCard handleIsPlaying={handleIsPlaying} playIsClicked={playIsClicked} handlePlayIsClicked={handlePlayIsClicked} addNewFavoritedSong={addNewFavoritedSong} addIsFavorited={addIsFavorited} isFavorited={isFavorited} addArtistId={addArtistId} addArtistData={addArtistData} addBioData={addBioData} name={song.name} image={song.images[0].url} artist={song.artists[0].name} id={song.artists[0].id} key={song.id} />
    });
  

    return (
        <div className='main'>
            <div className="card-sec">
                <h1>Music for You</h1>
                <div className="cards-rendered">
                    {songsToRender}
                </div> 
            </div>
            <div className="card-sec">
                <h1>Popular Songs</h1>
                <div className="cards-rendered">
                    {songsToRender2}
                </div> 
            </div>
            <div className="card-sec">
                <h1>Try Something Different</h1>
                <div className="cards-rendered">
                    {songsToRender3}
                </div> 
            </div>
            <div className="card-sec">
                <h1>Last Week's Bangers</h1>
                <div className="cards-rendered">
                    {songsToRender4}
                </div> 
            </div>
            
        </div>
    )
}

export default Main;