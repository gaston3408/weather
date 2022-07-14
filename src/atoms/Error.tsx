import React from 'react';

const Error: React.FC<any> = ( { error } ) =>
{
    return (
        <div className='content-error'>
            <p style={{ transform: 'scale(4)' }}>OOPS</p>
            <p>{error}</p>
        </div>
    );
};

export default Error;
