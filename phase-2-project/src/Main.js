import {useEffect} from 'react';

function Main() {

    const CLIENT_ID = '03fc88840bda498f991248f19ea03bf0';
    const CLIENT_SECRET = 'd29c5ef924d04e04b0963225e4f3074a';
    // const REDIRECT_URL = 'http://localhost:3000/login';
    // const url = 'https://accounts.spotify.com/api/token';

    useEffect(() => {
        const authParameters = {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secrets=' + CLIENT_SECRET
        }

        fetch('https://accounts.spotify.com/api/token', authParameters)
        .then(resp => resp.json())
        .then(data => console.log(data))
    }, [])

    return (
        <div>
        
        </div>
    )
}

export default Main;