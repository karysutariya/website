import React from 'react';
import style from './Info.module.css';
import resume from './Resume - Kary Sutariya.pdf';
import m1 from '../src/images/91.png';

class Info extends React.Component{
    downloadTxtFile = () =>{
        const element = document.createElement("a");
        const file = new Blob([document.getElementById('input').value],{type:'text/plan;charset=utf-8'});
        element.href = URL.createObjectURL(file);
        element.download  =  resume 
        document.body.appendChild(element);
        element.click();
    }
    render(){
        return(
            <React.Fragment>
                <div className={style.main}>
                <div className={style.container}>
                    <div className={style.leftcon}>
                        <h1>
                            About Me
                        </h1>
                        <div className={style.smalltext}>
                            <i>Python Developer</i>
                        </div>
                        <p className={style.newtext}>
                            I am Kary Sutariya. Current, student at Concordia Univeristy as AI enthusiastic and a part time developer with strong Python skills and intermidiate React.js developer. Saying that, for a year, worked for Benzatine Infotech which expanded my horizone in team work, and Communication. 
                        </p>
                        <a href='https://www.upwork.com/o/profiles/users/~0153a7f325441a5818/' rel="noreferrer" target="_blank">
                            <button className={style.ifield2}>Hire Me</button>
                        </a>
                        <a href={resume} download="Resume">
                            <button className={style.ifield3}>Download CV</button>
                        </a>
                    </div>
                    <div className={style.rightcon}>
                        <img className={style.mainimg} src={m1} alt="main" />
                    </div>
                </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Info;
