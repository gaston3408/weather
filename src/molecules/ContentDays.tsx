import React from 'react';
import '../styles/Content.css';

interface Props {
    title: string,
    children?: any
}

const ContentDays: React.FC<Props> = ( { title, children } ) =>
{
    return (
        <div>
            <hgroup className='content-days'>
                <p className='title'>{title}</p>
                <div className='line'/>
            </hgroup>
            {children}
        </div>
    );
};

export default ContentDays;
