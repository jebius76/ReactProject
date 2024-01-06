import React from 'react';
import './NavBar.css';
import { Link, Outlet } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <div className='navBar'>
                <ul className='menuOptions'>
                    <li>
                        <Link to={'MainPage/'}>
                            <button className='linkButton'>Main Page</button>
                        </Link>
                    </li>
                    <li>
                        <Link to={'MainPage/'}>
                            <button className='linkButton'>Main Page</button>
                        </Link>
                    </li>
                    <li>
                        <Link to={'contact/'}>
                            <button className='linkButton'>Contact</button>
                        </Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </>
    );
}

export default NavBar;
