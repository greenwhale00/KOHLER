import React from 'react'
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';

const Header = () => {
  return (
    <header className='Header'>
      <div className="inner">
        <nav>
          <NavMenu />
        </nav>
        <h1>
          <Link to='/'>
            <img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="" />
          </Link>
        </h1>
      </div>

    </header>
  )
}

export default Header