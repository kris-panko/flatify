import coleImg from './assets/2014ForestHillsDrive.png';
import heartActive from './assets/icons8-broken-heart-32.png';
import {useState} from 'react';
function FavoritesCard() {

    const [isClicked, setIsClicked] = useState(false);

    function handleClick() {
        setIsClicked(true)
    }

    function handleChangeRating(value) {
        setIsClicked(false);
        console.log(value)
    }

    const starCount = 3;
    const stars = [];
    for (let i = 0; i < starCount; i++) {
        stars.push('⭐️')
    }

    return (
        <div className="favorites-card">
            <img className='favorites-album-img' src={coleImg} alt="album" />
            <div className='favorites-song-info'>
                <h5>Forest Hills Drive</h5>
                <span className='span-container'><span>J Cole</span><span className='bullet'> • </span><span>{stars.length > 0 ? stars.join('') : "⭐️"}</span></span>
            </div>
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
            <img className='favorites-card-heart' src={heartActive} alt="delete" />
        </div>
    )
}

export default FavoritesCard;