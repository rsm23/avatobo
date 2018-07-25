import React from 'react';
// eslint-disable-next-line
import tachyons from 'tachyons'

const Card = ({id, name, email}) => {
    const styling = {
       zIndex : `-${id}`
    }
    return (
        <div className="tc grow bg-white br3 pa3 ma2 dib bw2 shadow" style={styling}>
            <img src={`https://robohash.org/${id}?100x100`} alt='Robot Avatar'
                 className="avatar"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;