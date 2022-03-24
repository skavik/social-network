import React from 'react';
import style from './Header.module.css';


const Header = () => {
    return (
        <header className={style.header}>
        <img src='https://play-lh.googleusercontent.com/p6kS3dCcILt9Z4vRMxHXZTbRecqnZTx5ysBVp6Qe3fDofokRLuWjRxF8J0TkMTG2gKo' />
        <p>SOCIAL NETWORK</p>      
      </header>
    )
};

export default Header;