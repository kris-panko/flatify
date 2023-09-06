import albumIcon from './assets/icons8-albums-32.png'
import FavoritesCard from './FavoritesCard';

function Favorites({favoritedData, handleDelete}) {

    const favoritedCards = favoritedData.map(song => {
      return  <FavoritesCard image={song.image} artist={song.artist} title={song.title} stars={song.stars} key={song.name} id={song.id} handleDelete={handleDelete} updateStarRating={updateStarRating}/>
})

    return (
        <div className="favorites">
            <div className="favorites-title">
                <img src={albumIcon} alt="album icon" />
                <p>Favorites</p>
            </div>
            <div className='favorite-songs-container'>
                {favoritedCards}
            </div> 
        </div>
    )
}

export default Favorites;