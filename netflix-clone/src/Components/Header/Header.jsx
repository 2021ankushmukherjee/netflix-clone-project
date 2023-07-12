import React from 'react'
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'
import {ImSearch} from 'react-icons/im'
import ('./Header.scss')

const Header = () => {
   
  return (
    <nav className="header">

        <img src={logo} alt="Netflix Logo" />

        <div>

          <Link to="/tvshows">Tv Shows</Link>
          <Link to="/tvshows">Movies</Link>
          <Link to="/tvshows">Recently Added</Link>
          <Link to="/tvshows">My List</Link>
            
        </div>

        <ImSearch/>

    </nav>
  )
}

export default Header
