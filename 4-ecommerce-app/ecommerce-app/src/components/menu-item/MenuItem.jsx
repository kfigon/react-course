import React from 'react';
import './menuItem.css'

 export const Item = (props) => {
    return (
        <div style={{backgroundImage:`url(${props.image}`}} 
        className={props.size === 'large' ? 'big-item' : 'small-item'}>
        <div className="item-description">
            <h1>{props.headerName}</h1>
            <span>SHOP NOW</span>
        </div>
    </div>
    );
}


export default Item;