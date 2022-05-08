import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import style from '../styles/Navbar.module.scss'
import { Ig } from '../components/icons/ig'
import { Mail } from '../components/icons/mail'
import { Phone } from '../components/icons/phone'

const Navbar = () => {
    const [isClicked, setIsClicked] = React.useState(false);
    const pages = [
        'Services',
        'Gallery',
        'Contact'
    ];
    const mergeStyles = (styleArray: string[]) => (styleArray.map((style: string) => `${style}`).join(" "));
    const conditionalClasses = (bool: boolean, classOne: string, classTwo: string) => (!!bool ? mergeStyles([classOne, classTwo]) : classOne)
    return (
        <nav className={conditionalClasses(isClicked, style.nav, style.navOpen)}>
            <div className={style.logoContainer}>
                <div className={style.mainLogoContainer}>
                    <span className={style.logo}>
                        <Link href='/' passHref>
                            <Image src='/text-logo-white.svg' alt='logo' width='120px' height='60px' />
                        </Link>
                    </span>
                </div>
                <span
                    onClick={() => setIsClicked(!isClicked)}
                    className={style.navButton}
                >
                    <Image src='/image-logo.svg' alt='logo' width='80px' height='40px' />
                </span>
            </div>
            <div className={style.listContainer}>
                <ul className={conditionalClasses(isClicked, style.ul, style.ulOpen)}>
                    {pages.map((page, index) => (
                        <li key={index} className={conditionalClasses(isClicked, style.li, style.liOpen)}>
                            <Link href={`/${page.toLowerCase()}`}><div className={style.center}>{page}</div></Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={style.topbar}>
                <div className={style.logo}>
                    <Ig />
                </div>
                <div className={style.logo}>
                    <Mail />
                </div>
                <div className={style.logo}>
                    <Phone />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;