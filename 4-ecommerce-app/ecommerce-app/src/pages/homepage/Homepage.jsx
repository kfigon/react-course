import React from 'react';
import './homepage.css';

const Homepage = () => {
    return (
        <div className="homepage">
            <div className='items'>
                <div className='small-item'>
                    <div className="item-description">
                        <h1>HATS</h1>
                        <span>SHOP NOW</span>
                    </div>
                </div>
                <div className='small-item'>
                    <div className="item-description">
                        <h1>JACKETS</h1>
                        <span>SHOP NOW</span>
                    </div>
                </div>
                <div className='small-item'>
                    <div className="item-description">
                        <h1>SNEAKERS</h1>
                        <span>SHOP NOW</span>
                    </div>
                </div>

                <div className='big-item'>
                    <div className="item-description">
                        <h1>WOMENS</h1>
                        <span>SHOP NOW</span>
                    </div>
                </div>
                <div className='big-item'>
                    <div className="item-description">
                        <h1>MENS</h1>
                        <span>SHOP NOW</span>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Homepage;