import React from 'react';
import './NavBar.css';
import { Link, Outlet, useLocation } from 'react-router-dom';

const NavBar = () => {

    let location = useLocation();

    const clickAction = () =>{
        console.log ("Hice click");
    }

    return (
        <>
            <div className='navBar'>
                <ul className='menuOptions'>
                    <li>
                        <Link location={location} to={'HomePage/'}>
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
