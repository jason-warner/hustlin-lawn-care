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
            {pages.map((page, index) => {
                // console.log('location: ', location.pathname);
                // const path = location.pathname;
                // let shouldAddHome = false;
                // pages.forEach((page) => )
                // const newPages = location.pathname.includes('')
                return (
                    <Link className={style.option} key={index} passHref href={`/${page.toLowerCase()}`}>

                        {page}

                    </Link>
                )
            })}
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