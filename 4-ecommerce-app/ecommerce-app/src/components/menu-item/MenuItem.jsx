import React from 'react';
import './menuItem.css'

 export const SmallItem = (props) => {
    return (
        <div style={{backgroundImage:props.imageUrl}} className='small-item'>
        <div className="item-description">
            <h1>{props.headerName}</h1>
            <span>SHOP NOW</span>
        </div>
    </div>
    );
}

export const BigItem = (props) => {
    return (
        <div style={{backgroundImage:props.imageUrl}}className='big-item'>
        <div className="item-description">
            <h1>{props.headerName}</h1>
            <span>SHOP NOW</span>
        </div>
    </div>
    );
}


export default SmallItem;