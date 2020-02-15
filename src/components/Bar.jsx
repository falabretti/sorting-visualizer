import React from 'react';

const Bar = ({ id, width, height }) => {
    return (
        <div id={id} style={{ width: `${width}%`, height: `${height}px` }} className="sorting-bar"></div>
    );
}

export { Bar };