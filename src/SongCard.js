import playBtn from './assets/icons8-play-button-32.png'
import pauseBtn from './assets/icons8-pause-button-32.png';
import {useState} from 'react';
function SongCard({name, artist, image, id}) {

    const [isClicked, setIsClicked] = useState(false);

    function handleClick() {
        setIsClicked(!isClicked)
    }

    function handlePageChange() {
        const url = 'https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&exintro=&titles=' + artist;
        fetch(url)
        .then(resp => resp.json())
        .then(data => console.log(data))

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const requestOptions = {
            method: "get",
            headers: myHeaders,
            redirect: "follow",
            
        };

        fetch("https://v1.nocodeapi.com/tanopaul/spotify/foDEddECFnQTlbOH/artists?id=" + id, requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    }

    return (
        <div className="card"  >
            <img onClick={handlePageChange} src={image} alt="album cover" className="album-img" />
            <img onClick={handleClick} src={isClicked ? pauseBtn : playBtn} alt="play buttons" className="play-btn" />
            <h3>{name}</h3>
            <p>{artist}</p>
        </div>
    )
}

export default SongCard;