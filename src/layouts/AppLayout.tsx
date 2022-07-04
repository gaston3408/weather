import '../styles/App.css';

interface Props {
    children?: any
}

const AppLayout: React.FC<Props> = ( { children } ) =>
{
    return (
        <div className="App">
            <div className='content'>
                <img className='image-bg' src='BG-MAIN.jpg' alt='background'/>
                <div className='shadow'/>
                {children}
            </div>
        </div>
    );
};

export default AppLayout;
