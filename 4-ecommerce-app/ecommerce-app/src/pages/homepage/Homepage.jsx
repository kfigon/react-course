import React from 'react';
import {SmallItem, BigItem} from '../../components/menu-item/MenuItem';
import './homepage.css';

const Homepage = () => {
    const smallSections = ["HATS", "JACKETS", "SNEAKERS"];
    const bigSections = ["WOMENS", "MENS"];
    
    return (
        <div className="homepage">
            <div className='items'>
                {smallSections.map((name,idx) => <SmallItem key={idx} headerName={name}/>)}
                {bigSections.map((name,idx) => <BigItem key={idx} headerName={name}/>)}
            </div>
        </div>
    );
};


export default Homepage;