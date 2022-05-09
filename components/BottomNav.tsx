import * as React from 'react';
import style from '../styles/BottomNav.module.scss';

const BottomNav = () => {
    // const [currentUrl, setCurrentUrl] = React.useState('');

    // React.useEffect(() => setCurrentUrl(window.location.href), []);

    // React.useEffect(() => console.log(currentUrl), [currentUrl]);

    return (
        <div className={style.container}>
            <div className={style.option}> Services </div>
            <div className={style.option}> Gallery </div>
            <div className={style.option}> Contact </div>
        </div>
    )
}

export default BottomNav;