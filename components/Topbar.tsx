import * as React from 'react';
import style from '../styles/Topbar.module.scss';
import { Ig } from '../components/icons/ig'
import { Mail } from '../components/icons/mail'
import { Phone } from '../components/icons/phone'

const Topbar = () => {


    return (
        <div className={style.logoContainer}>
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
    )
}

export default Topbar