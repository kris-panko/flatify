import playBtn from './assets/icons8-play-button-32.png'
import pauseBtn from './assets/icons8-pause-button-32.png';
import {useState} from 'react';
import activeHeart from './assets/heart-active.png';
import inactiveHeart from './assets/heart-inactive.png';
import {Link} from 'react-router-dom';
function SongCard({name, artist, image, id, addBioData, addArtistData, addArtistId}) {
    const nameReduced = name.substring(0, 19);
    const [isClicked, setIsClicked] = useState(false);
    const [heartIsClicked, setHeartIsClicked] = useState(false);

    function handleClick() {
        setIsClicked(!isClicked)
    }

    function handleHeartClick() {
        setHeartIsClicked(!heartIsClicked);
    }

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
            <img onClick={handleClick} src={isClicked ? pauseBtn : playBtn} alt="play buttons" className="play-btn" />
            <div className='card-song-info'>
                <div>
                    <h3>{name.length > 19 ?  `${nameReduced}...` : `${nameReduced}`}</h3>
                    <p>{artist}</p>
                </div>
                <div className='heart-div'>
                    <img onClick={handleHeartClick} src={heartIsClicked ? activeHeart : inactiveHeart} alt='heart icon' className='heart-btn'/>                
                </div>

            </div>
        </div>
    )
}

export default SongCard;