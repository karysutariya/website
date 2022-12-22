import React from 'react';
import style from './Portfolio.module.css';
import Project from './Project';
import Research from './Research';
import Fstudy from './Fstudy';

export default class Portfolio extends React.Component{
    constructor(){
        super()
        this.state={
            showMe1:true,
            showMe2:false,
            showMe3:false
        }
    }
    
    operation1() {
        this.setState({
            showMe1:true,
            showMe2:false,
            showMe3:false
        })
    }

    operation2() {
        this.setState({
            showMe1:false,
            showMe2:true,
            showMe3:false
        })
    }

    operation3(){
        this.setState({
            showMe1:false,
            showMe2:false,
            showMe3:true
        })
    }

    componentDidMount(){
        this.nameInput.focus();
    }

    render(){
        return(
        <React.Fragment>
            <div className={style.main}>
                <div className={style.top}>
                    <div className={style.title}>My Portfolio</div>
                    <div className={style.title2}>Work speaks louder than words!!!</div>
                    <hr className={style.line} />
                    <div className={style.spa}>
                        <button onClick={()=>this.operation1()} ref={(input) => { this.nameInput = input; }} className={style.ifield2}>Projects</button>
                        <button onClick={()=>this.operation2()} className={style.ifield2}>Inculcation & Achievements</button>
                        <button onClick={()=>this.operation3()} className={style.ifield2}>Reaserch Work</button>
                    </div>
                    <div>
                        {
                            this.state.showMe1?
                            <div className={style.container}>
                            <Project mt ="Celebrity Wallpaper: Django Backend Project" name="https://play.google.com/store/apps/details?id=com.ninetynineapps.teluguactress.wallpapers" 
                                text11="Stack of Technologies:" 
                                    text12="Django Framework"
                                    text13="Django Rest Framework"
                                    text14="Google Firebase"
                                    text15="A lot of Python libraries"
                                    text16="ORM & MySQL"
                                    text17="HTML, CSS, JavaScript"
                                    text18="Godaddy server deployment"
                            />
                            <Project mt ="Dentist On Demand: Django Backend Project" name="https://apps.apple.com/in/app/dentist-on-demand/id1488297899" 
                                text11="Stack of technologies:" 
                                    text12="Django Framework"
                                    text13="Django Rest Framework"
                                    text14="Payment Intigration"
                                    text15="A lot of Python libraries"
                                    text16="ORM & MySQL"
                                    text17="Video Call Intigration"
                                    text18="DigitalOcean server deployment"
                            />
                            <Project mt ="Questimate: Data mining" name=""  
                                text11="Stack of technologies:" 
                                    text12="Django Framework"
                                    text13="Selenium Framework"
                                    text14="A lot of Python libraries"
                                    text15="ORM & MySQL"
                            />
                            </div>:
                            null
                        }
                        {
                            this.state.showMe2?
                            <div className={style.container}>
                            <Fstudy mt ="Tertiary Education" name="Gujarat Technological University"  text1="I have pursed my Bachelor of Engineering in Computer Engineering with 8.74 CGPA." text2="I was honoured 4 times by 4 scholarships by Gujarart State Government. $2100 was provided to me to support my studies."/>
                            <Fstudy mt ="Secondary Education" name="Mangaldeep High school & Ashadeep Higher Sec. School"  text1="I had scored 85.17% in the 10th standard." text2="78.15% was secured by me in the 12th class."/>
                            <Fstudy mt ="Primary Education" name="Mangaldeep school & P.P. Savani International School"  text1="I always had achieved more than 90% during my primary schooling." text2="Moreover, I had never missed my place in the top 10 students of those classes."/>
                            <Fstudy mt ="Codethon: A Coding Competition" name="Softices Consultancy Private Limited"  text1="I had 5th place at state level in this competition and more than 1000 students had taken part in this competition." text3="Result Link"/>
                            </div>:
                            null
                        }
                        {
                            this.state.showMe3?
                            <div className={style.container}>
                            <Research mt="A REVIEW DBMS WITH NATURAL LANGUAGE PROCESSING IN SANSKRIT" name ="ISBN no. 978-93-5346-457-8" text1="Published a paper at RIHET’18" text2="Presented in National level conference held by ISTE "/>
                            </div>:
                            null
                        }
                    </div>         
                </div>
            </div> 
        </React.Fragment>
        )
    }
        
}
