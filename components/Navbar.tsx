import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavbarStyle from '../styles/Navbar.module.scss'


const Navbar = () => {
    const pages = [
        'About',
        'Services',
        'Pricing',
        'Contact'
    ];
    return (
        <nav className={NavbarStyle.nav}>
            <span>
                <Link href='/' >
                    <Image src='/text-logo.svg' alt='logo' width='120px' height='60px' />
                </Link>
            </span>
            <ul className={NavbarStyle.ul}>
                {pages.map((page, index) => (
                    <li key={index} className={NavbarStyle.li}>
                        <Link href={`/${page.toLowerCase()}`}>{page}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar