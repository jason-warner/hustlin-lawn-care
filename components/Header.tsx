import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import style from '../styles/Header.module.scss'
import { Ig } from './icons/ig'
import { Mail } from './icons/mail'
import { Phone } from './icons/phone'

const Header = () => {
    const [isClicked, setIsClicked] = React.useState(false);
    const pages = [
        'Services',
        'Gallery',
        'Contact'
    ];
    const mergeStyles = (styleArray: string[]) => (styleArray.map((style: string) => `${style}`).join(" "));
    const conditionalClasses = (bool: boolean, classOne: string, classTwo: string) => (!!bool ? mergeStyles([classOne, classTwo]) : classOne);

    return (
        <header className={style.header}>
            <nav className={conditionalClasses(isClicked, style.nav, style.navOpen)}>
                <div className={style.logoContainer}>
                    <div className={style.mainLogoContainer}>
                        <span
                            onClick={() => setIsClicked(false)}
                            className={style.logo}
                        >
                            <Link href='/' passHref>
                                {/* <a> */}
                                <Image src='/text-logo-white.svg' alt='logo' width='120' height='60' />
                                {/* </a> */}
                            </Link>
                        </span>
                    </div>
                    <span
                        onClick={() => setIsClicked(!isClicked)}
                        className={style.navButton}
                    >
                        <Image src='/image-logo.svg' alt='logo' width='80' height='40' />
                    </span>
                </div>
                <div className={style.listContainer}>
                    <ul className={conditionalClasses(isClicked, style.ul, style.ulOpen)}>
                        {pages.map((page, index) => (
                            <li
                                style={!isClicked ? { border: 'none' } : {}}
                                key={index}
                                onClick={() => setIsClicked(false)}
                                className={conditionalClasses(isClicked, style.li, style.liOpen)}
                            >
                                <Link passHref href={`/${page.toLowerCase()}`}>
                                    {page}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            <div className={style.topbar}>
                <a href='https://www.instagram.com/hustlinlawncare/' target="_blank" rel="noreferrer" className={style.logo}>
                    <Ig />
                </a>
                <a href='mailto:hustlinlawncare2021@gmail.com' className={style.logo}>
                    <Mail />
                </a>
                <a href='tel:+17576301662' className={style.logo} >
                    <Phone />
                </a>
            </div>
        </header>
    )
}

export default Header;

interface Props {
    setNavIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}