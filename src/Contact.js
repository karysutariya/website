import React from 'react';
import style from './Contact.module.css';
import { IoLocationOutline } from 'react-icons/io5';
import { FiPhone } from 'react-icons/fi';
import { GoMail } from 'react-icons/go';
import { MdWeb } from 'react-icons/md';

function Contact(){
    return(
        <React.Fragment>
            <div className={style.main}> 
                <div className={style.container}>
                    <div className={style.itemleft}>
                        <div className={style.mainfont}>Contact Me</div>
                        <ul>
                            <li className={style.element1}>
                                <table>
                                    <tbody>
                                    <tr>
                                    <td>
                                        <IoLocationOutline size={15} />
                                    </td>
                                    <td>
                                        Montreal, Canada.
                                    </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </li>
                            <li className={style.element1}>
                                <table>
                                <tbody>
                                    <tr>
                                    <td>
                                        <GoMail size={15} />
                                    </td>
                                    <td>
                                        Karysutariya1234@Gmail.com
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
                            </li>
                            <li className={style.element1}>
                                <table>
                                <tbody>
                                    <tr>
                                    <td>
                                        <FiPhone size={15} />
                                    </td>
                                    <td>
                                        +1 (438)-979-5201
                                    </td>
                                    </tr>
                                </tbody>
                                </table>                                
                            </li>
                            <li className={style.element1}>
                                <table>
                                <tbody>
                                    <tr>
                                    <td>
                                        <MdWeb size={15} />
                                    </td>
                                    <td>
                                        <a href='https://skarys.herokuapp.com' rel="noreferrer" target="_blank">SkaryS.herokuapp.com </a>
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
                            </li>
                        </ul>
                    </div>
                    <div className={style.itemright}> 
                        <div className={style.mainfont}>Leave a note!!!</div>
                        <div className={style.extraspace}>
                            <form className={style.block1} action = 'mailto:karysutariya1234@gmail.com?subject=Mail from Profile'  method="post" encType="text/plain" >
                                <input className={style.ifield} type="text" name="Name" placeholder="Your Name" size="25" />
                                <input className={style.ifield} type="text" name="Email" placeholder="Your Email" size="25" />
                                <input className={style.ifield} type="text" name="Subject" placeholder="Subject" size="25" />
                                <input className={style.ifield} type="text" name="Phone no" placeholder="Phone" size="25" />
                                <br />
                                <textarea className={style.ifield} cols={40} rows={7} placeholder="Your Message....."></textarea>
                                <br />
                                <button type="submit" className={style.ifield2}> Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact;