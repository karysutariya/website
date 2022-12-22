import React from 'react';
import style from './Fstudy.module.css';

function Fstudy(props){
    return(
        <React.Fragment>                
            <div className={style.item}>
                <div className={style.test}>{props.mt}</div>
                {props.name}
                <ul className={style.nspace}>
                    <li className={style.lasttext}>{props.text1}</li>
                    <li className={style.lasttext}>{props.text2}</li>
                    <li className={style.lasttext}><a href="https://ingenioushunt.com/2019/ig/phase-2/result">{props.text3}</a></li>
                </ul>
            </div> 
        </React.Fragment>
    )
}

export default Fstudy; 
