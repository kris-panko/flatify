import SongCard from "./SongCard";
function Search({spotifyData}) {
    
    const songsToRender = spotifyData.filter(song => song.name.length < 39).map(song => {
        return <SongCard  name={song.name} image={song.images[0].url} artist={song.artists[0].name} id={song.artists[0].id} key={song.id} />
    });

    return (
        <div className="main">
            <div className="search-input-div">
                <h1>Search</h1>
                <input type="text" />
            </div>
            <div className="grid-container">
                {songsToRender}
            </div>
        </div>
    )
}

export default Search;