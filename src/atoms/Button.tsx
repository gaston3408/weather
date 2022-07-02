import React from 'react';

const Button: React.FC<any> = ( { title, ...props } ) =>
{
    return (
        <button {...props}>{title}</button>
    );
};

export default Button;
