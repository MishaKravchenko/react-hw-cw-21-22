import React from 'react';

const Photos = ({photo}) => {
    const {id, title, thumbnailUrl} = photo;
    return (
        <div>
            <div>
                <h5>{id}. {title}</h5>
                <img src={thumbnailUrl} alt={title}/>
            </div>
        </div>
    );
};

export default Photos;