import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ links }) => {

    return (
        <div className="navbar">
            <ul className="links">
                {
                    links.map((el, idx) => {
                        return <li key={idx}>
                            <Link  className="link" to={el.link}>{el.text}</Link>
                        </li>
                    })
                }
            </ul>
        </div>
    );

};

export default Navbar;