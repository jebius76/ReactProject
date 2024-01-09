import React from 'react';
import './NavBar.css';
import { Link, Outlet } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <div className='navBar'>
                <ul className='menuOptions'>
                    <li>
                        <Link to={'HomePage/'}>
                            <button className='linkButton'>Home</button>
                        </Link>
                    </li>
                    <li>
                        <Link to={'FormPage/'}>
                            <button className='linkButton'>Form</button>
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
