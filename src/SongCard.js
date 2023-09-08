import playBtn from './assets/icons8-play-button-32.png'
import pauseBtn from './assets/icons8-pause-button-32.png';
import activeHeart from './assets/heart-active.png';
import inactiveHeart from './assets/heart-inactive.png';
import {Link} from 'react-router-dom';
function SongCard({handleIsPlaying, playIsClicked, handlePlayIsClicked, addNewFavoritedSong, name, artist, image, id, addBioData, addArtistData, addArtistId, addIsFavorited, isFavorited}) {
    const nameReduced = name.substring(0, 19);
    const url = 'http://localhost:3001/spotify';
    function handleClick() {
        handlePlayIsClicked(name);

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const requestOptions = {
            method: "get",
            headers: myHeaders,
            redirect: "follow",
    
        };

        fetch(`https://v1.nocodeapi.com/tanopaul/spotify/foDEddECFnQTlbOH/search?q=${name} ${artist}&type=track&perPage=1`, requestOptions)
            .then(response => response.json())
            .then(result => handleIsPlaying(result.tracks.items[0].preview_url))
            .catch(error => console.log('error', error));
    }

    const isPlayClicked = playIsClicked.includes(name);


    function handleHeartClick() {
        const favoritedObj = {
            title: name,
            artist: artist,
            image: image,
            stars: 1
        }

        fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(favoritedObj)
        })
        .then(resp => resp.json())
        .then(data => addNewFavoritedSong(data))


        addIsFavorited(name);
    }

    const heartIsClicked = isFavorited.includes(name);

    function handlePageChange() {
        addArtistId(id)

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const requestOptions = {
            method: "get",
            headers: myHeaders,
            redirect: "follow",
            
        };
        
        fetch("https://v1.nocodeapi.com/tanopaul/spotify/foDEddECFnQTlbOH/artists?id=" + id, requestOptions)
        .then(response => response.json())
        .then(result => addArtistData(result))
        .catch(error => console.log('error', error));
        
        
        const url = 'https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&exintro=&titles=' + artist;
        
        fetch(url)
        .then(resp => resp.json())
        .then(data => addBioData(data.query.pages))
        
    }

    return (
        <div className="card"  >
            <Link exact to={`/${id}`}>
            <img onClick={handlePageChange} src={image} alt="album cover" className="album-img" />
            </Link>
            <img onClick={handleClick} src={isPlayClicked ? pauseBtn : playBtn} alt="play buttons" className="play-btn" />
            <div className='card-song-info'>
                <div>
                    <h3>{name.length > 19 ?  `${nameReduced}...` : `${nameReduced}`}</h3>
                    <p>{artist}</p>
                </div>
                <div className='heart-div'>
                    {heartIsClicked ? <img src={activeHeart} alt='heart icon' className='heart-btn'/> : <img onClick={handleHeartClick} src={inactiveHeart} alt='heart icon' className='heart-btn' />}            
                </div>

            </div>
        </div>
    )
}

export default SongCard;