import React from 'react';
import Items from '../../components/items/Items';
import { Link } from 'react-router-dom';
import './homepage.css';

const Homepage = () => {
    return (
        <div>
            <Link to="/shop">SHOP</Link>
            <div className="homepage">
                <Items />
            </div>
        </div>
    );
};


export default Homepage;