import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavbarStyle from '../styles/Navbar.module.scss'

const Navbar = () => {
    const [isClicked, setIsClicked] = React.useState(false);
    const pages = [
        'About',
        'Services',
        'Pricing',
        'Contact'
    ];
    const mergeStyles = (styleArray: string[]) => (styleArray.map((style: string) => `${style}`).join(" "));
    const conditionalClasses = (bool: boolean, classOne: string, classTwo: string) => (!!bool ? mergeStyles([classOne, classTwo]) : classOne)
    return (
        <nav className={conditionalClasses(isClicked, NavbarStyle.nav, NavbarStyle.navOpen)}>
            <div className={NavbarStyle.logoContainer}>
                <div className={NavbarStyle.mainLogoContainer}>
                    <span className={NavbarStyle.logo}>
                        <Link href='/' passHref>
                            <Image src='/text-logo.svg' alt='logo' width='120px' height='60px' />
                        </Link>
                    </span>
                </div>
                <span
                    onClick={() => setIsClicked(!isClicked)}
                    className={NavbarStyle.navButton}
                >
                    <Image src='/image-logo.svg' alt='logo' width='80px' height='40px' />
                </span>
            </div>
            <div className={NavbarStyle.listContainer}>
                <ul className={conditionalClasses(isClicked, NavbarStyle.ul, NavbarStyle.ulOpen)}>
                    {pages.map((page, index) => (
                        <li key={index} className={conditionalClasses(isClicked, NavbarStyle.li, NavbarStyle.liOpen)}>
                            <Link href={`/${page.toLowerCase()}`}><div className={NavbarStyle.center}>{page}</div></Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar