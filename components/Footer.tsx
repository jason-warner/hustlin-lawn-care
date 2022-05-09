import * as React from 'react'
import style from '../styles/Footer.module.scss'

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.copyright}>
                &copy; 2022-2026 HUSTLIN&apos; LAWN CARE
            </div>
        </footer>
    );
}

export default Footer;