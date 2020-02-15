import React from 'react';

const Bar = ({ width, height }) => {
    return (
        <div style={{ backgroundColor: '#3B8CDE', width: `${width}%`, height: `${height}px`, margin: '0 1px' }}></div>
    );
}

export { Bar };