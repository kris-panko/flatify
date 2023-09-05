

function ArtistInfo({bioData, artistData}) {
    let key;
    let bioElement;
    if (bioData.length > 0) {
        key = Object.keys(bioData[0])[0];
        bioElement = bioData[0][key].extract;
    }
    
    console.log(bioElement)

    return (
        <div className="main">
            <div className="artist-info-img-div">
                <img src={artistData.length > 0 ? artistData[0].images[0].url : ""} alt={artistData.name} />
                <div className="artist-info">
                    <div className="span-div">
                        <span>✅</span><span className="span-text">Verified Artist</span>
                    </div>
                    <h1>{artistData.length > 0 ? artistData[0].name : 'LOADING...'}</h1>
                    <h4>{artistData.length > 0 ? artistData[0].followers.total : "LOADING..."} Followers</h4>                
                </div>
            </div>
            <div className="artist-info-about-div">
                <h1>Genres</h1>
                <p>{artistData.length > 0 ? artistData[0].genres.join(', ') : "LOADING..."}</p> 
                <h1>About</h1>
                {'bio'}
            </div>
           
        </div>
    )
}

export default ArtistInfo;