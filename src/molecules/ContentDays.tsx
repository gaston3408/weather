import React from 'react';
import '../styles/Content.css';

interface Props {
    title: string,
    children?: any
}

const ContentDays: React.FC<Props> = ( { title, children } ) =>
{
    return (
        <section>
            <header className='content-days'>
                <p className='title'>{title}</p>
                <div className='line'/>
            </header>
            <main className='content-cards'>
                {children}
            </main>
        </section>
    );
};

export default ContentDays;
