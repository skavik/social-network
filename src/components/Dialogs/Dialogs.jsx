import React from "react";
import { BrowserRouter, NavLink, Route, Router } from "react-router-dom";
import style from './Dialogs.module.css'

const Dialog = (props) => {
    return (
        <div className={style.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}


const Message = (props) => {
    return (
        <div className={style.message}>
            {props.message} 
        </div>
    )
}

const Dialogs = () => {
    return (
        
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                    <Dialog name='Dima' id='1' />
                    <Dialog name='Slavik' id='2' />
                    <Dialog name='Anastasiia' id='3' />
                    <Dialog name='Valeriii' id='4' />        
            </div>
           <div className={style.messages}>
               <Message message='Hi' />
               <Message message='Hi what happens' />
               <Message message='everything cool' />
           </div>
       </div>
    )
};

export default Dialogs;