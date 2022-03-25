import React from 'react';
import style from './Header.module.css';


const Header = () => {
    return (
        <header className={style.header}>
        <img src='https://play.google.com/store/apps/details?id=io.hexman.xiconchanger&hl=ru&gl=US' />
        <p>SOCIAL NETWORK</p>      
      </header>
    )
};

export default Header;