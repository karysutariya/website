import React from 'react';
import style from './Footer.module.css';
import {RiLinkedinFill} from 'react-icons/ri';
import {SiUpwork, SiFreelancer } from 'react-icons/si';
import m1 from '../src/images/sk1.png';

function Footer() {
  return (
    <React.Fragment>
      <div className= {style.main}>
        <div className = {style.main2}>
            <img src={m1} alt="main"/>
        </div>
        <div className = {style.main2}>
            <a className= {style.cal} href="https://in.linkedin.com/in/kary-sutariya-a24461166?trk=people_directory" rel="noreferrer" target="_blank">
              <RiLinkedinFill size={20} />       
            </a>
            &nbsp;&nbsp;&nbsp;
            <a className= {style.cal} href="https://www.upwork.com/o/profiles/users/~0153a7f325441a5818/" rel="noreferrer" target="_blank">
              <SiUpwork size={20} />     
            </a>
            &nbsp;&nbsp;&nbsp;
            <a className= {style.cal} href="https://www.freelancer.com/u/karysutariya1234" rel="noreferrer" target="_blank">
              <SiFreelancer size={20} />    
            </a>
        </div>
        <div className = {style.main2}>
            <h5 className = {style.main21}> <i className={style.colort1}> Made with Passion by </i> <b className={style.colort2}> Kary S.</b> </h5>
        </div>
        <div className = {style.main2}>
            <div className = {style.lastline} >© 2021 Kary S. - All Rights Reserved </div>   
        </div>  
      </div>
    </React.Fragment>
  );
}

export default Footer;