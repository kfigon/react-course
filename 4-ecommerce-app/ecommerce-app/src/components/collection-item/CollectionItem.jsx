import React from 'react';
import './collection-item.css';


const CollectionItem = (props) => {

    return (
        <div className="collection-item">
            <div className="collection-picture" style={{ backgroundImage: `url(${props.imageUrl})` }} />
            <div className="description">
                <p>{props.name}</p>
                <p>{`$${props.price}`}</p>
            </div>
        </div>
    );
};

export default CollectionItem;
