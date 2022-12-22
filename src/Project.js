import React from 'react'
import style from './Project.module.css'

function Project(props){
    return(
        <React.Fragment>
            <div className={style.item}>
                <div className={style.test}>{props.mt}</div>
                
                <ul className={style.nspace}>
                    <li className={style.lasttext1}>{props.text11}</li>
                    <li className={style.lasttext}>{props.text12}</li>
                    <li className={style.lasttext}>{props.text13}</li>
                    <li className={style.lasttext}>{props.text14}</li>
                    <li className={style.lasttext}>{props.text15}</li>
                    <li className={style.lasttext}>{props.text16}</li>
                    <li className={style.lasttext}>{props.text17}</li>
                    <li className={style.lasttext}>{props.text18}</li>
                </ul>
                <a href={props.name}>Link of project</a>
            </div> 
        </React.Fragment>
    )
}

export default Project; 