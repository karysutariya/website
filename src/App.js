import React from 'react';
import style from './App.module.css';
import {RiLinkedinFill} from 'react-icons/ri';
import {SiUpwork, SiFreelancer } from 'react-icons/si';
import m1 from '../src/images/8.jpg';


function App() {
  return (
    <React.Fragment>
      <div>
      
        <img className={style.mainimg} src={m1} alt="main" />
      
        <div className={style.topleft}>
          <div className={style.s1}>Hello,</div>
          <div className={style.s2}>I am Kary S.</div>
          <div className={style.s3}>AI Developer & Full Stack Developer</div>
          
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
          
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
