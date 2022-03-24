import React from "react";
import style from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <div className={style.dialog}>
                    Adrii
                </div>
                <div className={style.dialog}>
                    Slavik
                </div>
                <div className={style.dialog}>
                    Anastasiia
                </div>
                <div className={style.dialog}>
                    Valerii
                </div>
            </div>
           <div className={style.messages}>
                <div className={style.message}>
                    Hi 
                </div>
                <div>
                    Hi what happens
                </div>
                <div>
                    everything cool
                </div>
           </div>
       </div>
    )
};

export default Dialogs;