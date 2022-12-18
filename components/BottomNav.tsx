import * as React from 'react';
import style from '../styles/BottomNav.module.scss';
import Link from 'next/link'

const BottomNav = () => {
    const [urlPages, setUrlPages] = React.useState({
        'Services': 'services',
        'Gallery': 'gallery',
        'Contact': 'contact'
    });
    
    const [currentUrl, setCurrentUrl] = React.useState('');

    const handleNavChange = () => {
        for (const page in urlPages) { //@ts-ignore
            if (currentUrl.includes(urlPages[page].toLowerCase())) {
                const newPages = { ...urlPages, 'Home': 'https://hustlinlawncare.com' };  //@ts-ignore
                delete newPages[page];
                return setUrlPages(newPages);
            }
        };
    }

    React.useEffect(() => setCurrentUrl(window.location.href), []);
    React.useEffect(() => handleNavChange(), [currentUrl]);

    return (
        <div className={style.container}>
            {Object.keys(urlPages).map((page, index) => {

                return (
                    <Link className={style.option} key={index} passHref href={`/${page === 'Home' ? '' : page.toLowerCase()}`}>
                        {page}
                    </Link>
                )
            })}
        </div>
    )
}

export default BottomNav;