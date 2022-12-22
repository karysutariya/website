import React from 'react';
import style from './Box.module.css'

function Box(props){
    return(
        <React.Fragment>
            <div className={style.item}>
                {props.name}
                <div className={style.test}>{props.mt}</div>
                <p className={style.lasttext}>{props.text}</p>
            </div> 
        </React.Fragment>
    )
}

export default Box;