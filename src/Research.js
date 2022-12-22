import React from 'react'
import style from './Research.module.css'

function Research(props){
    return(
        <React.Fragment>
            <div className={style.item}>
                <div className={style.test}>{props.mt}</div>
                {props.name}
                
                <ul className={style.nspace}>
                    <li className={style.lasttext}>{props.text1}</li>
                    <li className={style.lasttext}>{props.text2}</li>
                </ul>
            </div> 
        </React.Fragment>
    )
}

export default Research; 