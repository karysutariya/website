import React from 'react';
import style from './Testimonial.module.css';
import Content from './Content.js'
import Carousel from 'react-bootstrap/Carousel'

import p1 from '../src/images/b1.png';
import p2 from '../src/images/b2.png';
import m1 from '../src/images/15.jpg';


function Testimonial(){  
    return(
        <React.Fragment>
            <Carousel>
                <Carousel.Item interval={2000}>
                    <img className={style.mainimg} src={m1} alt="main"/>              
                    <div className={style.new}>
                        <Content name = {p1} name1="Amit Patel" name2="UI/UX Designer" text="To work with Kary S. is joy. We have done many good projects together."/>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img className={style.mainimg} src={m1} alt="main"/>         
                    <div className={style.new}>
                        <Content name = {p2} name1="Chintan " name2="PHP developer" text="There is just one word with him. Wow.......... He is amazing guy."/>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img className={style.mainimg} src={m1} alt="main"/>              
                    <div className={style.new}>
                        <Content name = {p1} name1="Maulik" name2="Android/Flutter developer" text="Let me make it straight forward, he has done thing which I haven't seen anybody to do like detecting number plates for just fun."/>
                    </div>
                </Carousel.Item>
            </Carousel>
        </React.Fragment>
    )
};

export default Testimonial;


// import React, {useState} from 'react';
// // import style from './Testimonial.module.css';
// // import Content from './Content'  
// import Carousel from 'react-bootstrap/Carousel'

// function Testimonial(){  
//     const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };
//     return(
//         <React.Fragment>
//             <Carousel activeIndex={index} onSelect={handleSelect}>
//                 <Carousel.Item>
//                     <img
//                     className="d-block w-100"
//                     src={process.env.PUBLIC_URL + './asset/images1.JPG'}
//                     alt="First slide"
//                     />
//                     <Carousel.Caption>
//                     <h3>First slide label</h3>
//                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                     className="d-block w-100"
//                     src={process.env.PUBLIC_URL + './asset/images1.JPG'}
//                     alt="Second slide"
//                     />
//                     <Carousel.Caption>
//                     <h3>Second slide label</h3>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                     className="d-block w-100"
//                     src={process.env.PUBLIC_URL + './asset/images1.JPG'}
//                     alt="Third slide"
//                     />
//                     <Carousel.Caption>
//                     <h3>Third slide label</h3>
//                     <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//             </Carousel>
//         </React.Fragment>
//     )
// };

// export default Testimonial;

// import React, { Component }  from 'react';
// import style from './Testimonial.module.css';
// import Content from './Content'  

// class Testimonial extends Component {  
//     render() {
//     return(
//         <React.Fragment>
//             <div className={style.container}>
//             <img className={style.mainimg} src={process.env.PUBLIC_URL + './asset/images1.JPG'} alt="main"/> 
//                 <Content name='./asset/b2.PNG' /> 
//             </div>
//         </React.Fragment>
//     )
//     }

// };

// export default Testimonial;