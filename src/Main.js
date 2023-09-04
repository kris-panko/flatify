// import {useEffect} from 'react';
import SongCard from "./SongCard";

function Main({spotifyData}) {

    console.log(spotifyData)
    const songsToRender = spotifyData.filter(song => song.name.length < 17).slice(0, 6).map(song => {
        return <SongCard name={song.name} image={song.images[0].url} artist={song.artists[0].name} id={song.artists[0].id} key={song.id} />
    });

    const songsToRender2 = spotifyData.filter(song => song.name.length < 17).slice(6, 12).map(song => {
        return <SongCard name={song.name} image={song.images[0].url} artist={song.artists[0].name} id={song.artists[0].id} key={song.id} />
    });

    const songsToRender3 = spotifyData.filter(song => song.name.length < 17).slice(12, 18).map(song => {
        return <SongCard name={song.name} image={song.images[0].url} artist={song.artists[0].name} id={song.artists[0].id} key={song.id} />
    });

    const songsToRender4 = spotifyData.filter(song => song.name.length < 17).slice(18, 24).map(song => {
        return <SongCard name={song.name} image={song.images[0].url} artist={song.artists[0].name} id={song.artists[0].id} key={song.id} />
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