import * as React from 'react';
import style from '../styles/BottomNav.module.scss';
import Link from 'next/link'

const BottomNav = () => {
    const [pages, setPages] = React.useState([
        'Services',
        'Gallery',
        'Contact'
    ]);

    const [currentUrl, setCurrentUrl] = React.useState('');

    // const handleNavChange = (currentUrl: string) => {
    //     let newPages = pages;
    //     pages.forEach((page) => {
    //         if ((page.toLowerCase()) )
    //     })
    //     return setPages(newPages)
    // }

    React.useEffect(() => setCurrentUrl(window.location.href), []);

    React.useEffect(() => console.log(currentUrl), [currentUrl]);

    return (
        <div className={style.container}>
            {pages.map((page, index) => (
                <Link key={index} passHref href={`/${page.toLowerCase()}`}>
                    <a className={style.option}>
                        {page}
                    </a>
                </Link>
            ))}
        </div>
    )
}

export default BottomNav;



{/* <Link href='/' passHref>
<a className={style.option}> Services </a>
</Link>
<Link href='/' passHref>

<a className={style.option}> Gallery </a>
</Link>
<Link href='/' passHref>
<a className={style.option}> Contact </a>
</Link> */}