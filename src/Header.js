import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
        <h1 className='name'>Arshia ❤️</h1>
        <nav className='navbar'> 
            <ul className='navList'> 
                <li className='navItem'>
                    <Link to="/">Home</Link>
                </li>
                <li className='navItem'>
                <Link to="/game">Game</Link>
                </li>
            </ul>
        </nav>
      
    </header>
  );
};

export default Header;