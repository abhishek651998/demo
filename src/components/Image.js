import React from "react";
import img1 from "../img/demo_c1002.jpeg"
import img2 from "../img/demo_c1004.jpeg"
import img3 from "../img/demo_p3002.jpeg"
import img4 from "../img/demo_p4010.gif"
import img5 from "../img/demo_p4015.jpeg"
import img6 from "../img/demo_p4019.jpeg"


 const Image = () => {

    return(
        <> 
        <ul>
        <li> <img src={img1} alt="" /> </li>
        <li> <img src={img2} alt="" /> </li>
        <li> <img src={img3} alt="" /> </li>
        <li> <img src={img4} alt="" /> </li>
        <li> <img src={img5} alt="" /> </li>
        <li> <img src={img6} alt="" /> </li>
        </ul>

        </>

    );

}

export default Image;