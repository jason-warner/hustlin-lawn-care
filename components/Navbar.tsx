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
    return (
        <nav className={NavbarStyle.nav}>
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
                <ul className={`${isClicked ? NavbarStyle.ul_open : NavbarStyle.ul}`}>
                    {pages.map((page, index) => (
                        <li key={index} className={`${isClicked ? NavbarStyle.li_open : NavbarStyle.li}`}>
                            <Link href={`/${page.toLowerCase()}`}>{page}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar