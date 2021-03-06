import React from 'react';
import CollectionItem from '../../components/collection-item/CollectionItem';
import './preview-collection.css';

const PreviewCollection = ({ title, items }) => {
    return (
        <div>
            <h1 >{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items
                        .filter((el, idx) => idx < 4)
                        .map(i => <CollectionItem key={i.id} {...i}/>)
                }
            </div>
        </div>
    );
};

export default PreviewCollection;
