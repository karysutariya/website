import React from 'react';
import style from './Content.module.css'

function Content(props){
    return(
        <React.Fragment>
            <div className={style.centered}>
                <img className={style.simg} src={props.name} alt="main"/>
                <div className={style.some}>{props.name1}</div>
                <div className={style.some2}>{props.name2}</div>
                <div className={style.some3}>{props.text}</div>
            </div>
        </React.Fragment>
    )
}

export default Content;