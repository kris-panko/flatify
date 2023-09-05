import albumIcon from './assets/icons8-albums-32.png'
import FavoritesCard from './FavoritesCard';
function Favorites() {



    return (
        <div className="favorites">
            <div className="favorites-title">
                <img src={albumIcon} alt="album icon" />
                <p>Favorites</p>
            </div>
            <div className='favorite-songs-container'>
                <FavoritesCard />
            </div> 
        </div>
    )
}

export default Favorites;