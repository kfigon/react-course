import React from 'react';
import './preview-collection.css';

const PreviewCollection = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items
                        .filter((el, idx) => idx < 4)
                        .map((i) => <div key={i.id}>{i.name}</div>)
                }
            </div>
        </div>
    );
};

export default PreviewCollection;
