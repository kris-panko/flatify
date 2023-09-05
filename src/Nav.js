import { NavLink } from "react-router-dom";
import searchIcon from './assets/icons8-search-50.png';
import homeIcon from './assets/icons8-home-48.png';
function Nav() {

    const linkStyles = {
        color: 'white',
        fontWeight: "bold", 
        fontSize: "20px", 
        textDecoration: 'none',
        ':hover': {
            color: 'gray'
        }
    }

    return (
        <div className="nav">
            <div className="nav-container">
                <img src={homeIcon} alt="home icon"/>
                <NavLink exact to="/main" style={linkStyles} className="nav-link">Home</NavLink>
            </div>
            <div className="nav-container">
                <img src={searchIcon} alt="search icon"/>
                <NavLink exact to="/search" style={{color: 'white', fontWeight: "bold", fontSize: "20px", textDecoration: 'none'}} className="nav-link">Search</NavLink>
            </div>
        </div>
    )
}
 
export default Nav;

 