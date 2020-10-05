import React from "react";
import img1 from "../img/demo_c1002.jpeg"
import img2 from "../img/demo_c1004.jpeg"
import img3 from "../img/demo_p3002.jpeg"
import img4 from "../img/demo_p4010.gif"
import img5 from "../img/demo_p4045.jpeg"
import img6 from "../img/demo_p4056.jpeg"
import Carousel from "react-elastic-carousel"

 const Image = () => {
     
         


     

    return(
        <>
        <div className="back"> 
         <h2>Sarees</h2> 

        <div className= "img">
       
        <img className= "ab" src={img1} alt="" /> 
       <a href="">  <img className= "ab"  src={img2} alt="" />   </a>
        <img className= "ab"  src={img3} alt="" /> 
        <img className= "ab"  src={img4} alt="" /> 
        <img className= "ab"  src={img5} alt="" /> 
        <img className= "ab"  src={img6} alt="" /> 
        
        </div>

        </div>
        <div  style={{position:"absolute", left:"12%", top:"215px", height:"600px",width:"35%"}}>
        <Carousel>
        <img className="carousel" src= {img1} alt="" />
        <img className="carousel"src= {img2} alt="" />
        <img className="carousel" src= {img3} alt="" />
        <img className="carousel"src= {img4} alt="" />
        <img className="carousel"src= {img5} alt="" />
        <img  className="carousel"src= {img6} alt="" />
        </Carousel>
        </div>
        </>

    );

}

export default Image;