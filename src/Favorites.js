import albumIcon from './assets/icons8-albums-32.png'
function Favorites() {
    return (
        <div className="favorites">
            <div className="favorites-title">
                <img src={albumIcon} alt="album icon" />
                <p>Favorites</p>
            </div>
            <div className='favorite-songs-container'>
            
            </div> 
        </div>
    )
}

export default Favorites;