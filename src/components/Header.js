import React from 'react'
import { Link } from 'react-router-dom';

import { KITCHEN, BATH, DESIGN } from '../data/menu'

const Header = () => {
  return (
    <header className='Header'>
      <div className="inner">
        <div className="gnb">

          <nav>
            <ul>
              <li>
                <a href="/"  >욕실</a>
                <ul className='smenu'>
                  {
                    BATH.map((it, idx) => {
                      return (
                        <li key={idx}>
                          <Link to={it.link} >{it.menu}</Link>
                        </li>
                      )
                    })
                  }
                </ul>
              </li>
              <li>
                <a href="/">부엌</a>
                <ul className='smenu'>
                  {
                    KITCHEN.map((it, idx) => {
                      return (
                        <li key={idx}>
                          <Link to={it.link}>{it.menu}</Link>
                        </li>
                      )
                    })
                  }
                </ul>
              </li>
              <li>
                <a href="/">디자인</a>
                <ul className='smenu'>
                  {
                    DESIGN.map((it, idx) => {
                      return (
                        <li key={idx}>
                          <Link to={it.link}>{it.menu}</Link>
                        </li>
                      )
                    })
                  }
                </ul>
              </li>
            </ul>
          </nav>


          <h1>
            <Link to='/'>
              <img src={process.env.PUBLIC_URL + "/assets/img/logo.png"} alt="" />
            </Link>
          </h1>

        </div>


      </div>

    </header>
  )
}

export default Header