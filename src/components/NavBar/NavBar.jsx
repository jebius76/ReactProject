import React from 'react';
import './NavBar.css';
import { Link, Outlet } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <div className='navBar'>
                <ul>
                    <Link to={'MainPage/'}>Main Page</Link>
                    <li>Menu 2</li>
                    <li>Menu 3</li>
                    <Link to={'Contact/'}>Contact</Link>
                </ul>
            </div>
            <Outlet />
        </>
    );
}

export default NavBar;
