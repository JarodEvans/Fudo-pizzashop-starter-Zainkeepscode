import React from 'react';
import css from '../styles/Header.module.css';
import Image from 'next/image';
import Logo from '../assets/Logo.png';
import {UilShoppingBag} from '@iconscout/react-unicons';

export default function Header(){
    return(
        <div className={css.Header}>
            {/* logo side */}
            <div className={css.logo}>
                <Image src={Logo} alt= "" width={50} height={50}/>
                <span>FUDO</span>

                {/* menu side */}
                <ul className={css.menu}>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Contact</li>
                </ul>

                {/* right side */}
                <div className={css.rightSide}>
                    <div className={css.cart}>
                        <UilShoppingBag />
                    </div>
                </div>
            </div>
        </div>
    )
};