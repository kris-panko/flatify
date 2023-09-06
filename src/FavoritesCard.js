
import heartActive from './assets/icons8-broken-heart-32.png';
import {useState} from 'react';

function FavoritesCard({stars, title, artist, image,id,handleDelete, updateStarRating}) {


    const [isClicked, setIsClicked] = useState(false);

    const API = "http://localhost:3001/spotify"

    function handleClick() {
        setIsClicked(true)
    }

    function handleChangeRating(value) {
        fetch(`http://localhost:3001/spotify/${id}`, {
        method: 'PATCH',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ stars: value }),
        })
        .then((response) => response.json())
        .then((data) => {
            updateStarRating(data.id, data);
        })
        .catch((error) => console.error('Error updating star rating:', error));
        setIsClicked(false);
    }
    function deleteFav(){
        fetch(`${API}/${id}`,{
        method: 'DELETE',
    })
        .then (r => r.json())
        .then (() => handleDelete(id))
    }

    const starCount = stars;
    const starsArr = [];
    for (let i = 0; i < starCount; i++) {
        starsArr.push('⭐️')
    }

    return (
        <div className="favorites-card">
            <img className='favorites-album-img' src={image} alt="album" />
            <div className='favorites-song-info'>
                <h5>{title}</h5>
                <span className='span-container'><span>{artist}</span><span className='bullet'> • </span><span>{starsArr.length > 0 ? starsArr.join('') : "⭐️"}</span></span>
            </div>
            <div className='favorites-left-block'>
                <div className='change-rating'>
                    {isClicked ? <div className='ratings'>
                                    <div onClick={ () => handleChangeRating(1)}><p>⭐️</p><p>1</p></div>
                                    <div onClick={ () => handleChangeRating(2)}><p>⭐️</p><p>2</p></div>
                                    <div onClick={ () => handleChangeRating(3)}><p>⭐️</p><p>3</p></div>
                                    <div onClick={ () => handleChangeRating(4)}><p>⭐️</p><p>4</p></div>
                                    <div onClick={ () => handleChangeRating(5)}><p>⭐️</p><p>5</p></div>
                                    </div> : 
                                <button className='ratings-btn' onClick={handleClick}>EDIT STARS</button>}
                </div>
                <div>
                    <img className='favorites-card-heart' src={heartActive} alt="delete" onClick={deleteFav} />
                </div>
            </div> 
        </div>
    )
}

export default FavoritesCard;