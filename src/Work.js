import React from 'react';
import style from './Work.module.css';
import Box from'./Box';
import { DiWebplatform } from 'react-icons/di';
import { SiPython } from 'react-icons/si';
import { VscServer } from 'react-icons/vsc';
import { GiMining, GiBrain, GiArtificialIntelligence, GiCyberEye, GiHangingSpider } from 'react-icons/gi';
import { GrMysql } from 'react-icons/gr';
import { SiOctave, SiPytorch } from 'react-icons/si';
import { FaRobot } from 'react-icons/fa';

function Work(){
    return(
        <React.Fragment>
            <div className={style.main}>
                <div className={style.top}>
                    <div className={style.title}>What I'm Doing!</div>
                    <div className={style.title2}>I love what I do. I take great pride in what I do.</div>
                    <hr className={style.line} />
                    
                    <div className={style.container}>
                        <Box mt="Web Design" name={ <DiWebplatform size={40} /> }
                        text="I have mastered few Web Designing technologies namely ReactJS, HTML, CSS, Jinja2, JavaScript, and etc. "
                        />
                        <Box mt="Python Developer" name={ <SiPython size={40} /> } 
                        text="There are plenty of libraries which I have utilized in my projects. For instance OpencV, Pandas, Numpy & others."
                        />
                        <Box mt="Server Deployment" name={ <VscServer size={40} /> } 
                        text="DigitalOcean, AWS, Godaddy and Pythonanywhere are the server which I opted and used in the past for projects."
                        />
                        <Box mt="Data mining" name={ <GiMining size={40} /> } 
                        text="Data mining is very fascinating stuff. I often mine data from websites to learn about security of websites."
                        />
                        <Box mt="Web Scraping" name={ <GiHangingSpider size={40} /> } 
                        text="For web scraping, I always prefer Selenium. Worked on three project of web scraping."
                        />
                        <Box mt="Database Designing" name={ <GrMysql size={40} /> } 
                        text="Worked with many databases namely MySQL, PostgreSQL, SQLite & MongoDB (Django ORM)."
                        />
                    </div>

                    <div className={style.title1}>What I'm striving to do!</div>
                    <div className={style.title2}>I steadily work on my skill set.</div>
                    <hr className={style.line} />
                    
                    <div className={style.container}>
                        <Box mt="Natural Language Processing" name={ <SiOctave size={40} /> } 
                        text="Learned and utilised, paramount concept of NLP using famous library known as NLTK."
                        />
                        <Box mt="Artificial Intelligence" name={ <GiArtificialIntelligence size={40} /> } 
                        text="While studing AI during master's, implemented high level algorithms of AI in a project of mask detection."
                        />
                        <Box mt="Machine Learning" name={ <SiPytorch  size={40} /> } 
                        text="Worked on a project of musical intrument classification using pytorch & dataset known as Openmic-2018."
                        />
                        <Box mt="Computer Vision" name={ <GiCyberEye size={40} /> } 
                        text="Gained knowleadge of computer vision by working on a academic project of type of face-masks detection."
                        />
                        <Box mt="Deep Learning" name={ <FaRobot size={40} /> } 
                        text="I am aware of few concepts of deep learning with some algorithms and trying to get more knowleadge it."
                        />
                        <Box mt="Data Scientist" name={ <GiBrain size={40} /> } 
                        text="While learning Deep Learning cocept, got exposure to Data analysis. Often, used this knowleadge in AI projects."
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Work;