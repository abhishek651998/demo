import React from "react";

const Summery = () => {
    
    return(
        <div style= {{ position:"absolute",right: "150px"}}>
        <div className="back">
        <h3>Traditional awesome super-cool cotton saree</h3> <br />
        <h2>Price <br /> 7000  2000 - 4500</h2> 
        <h4>Colors</h4>
        <div className= "size">
            <span > <p className= "box">Traditional white</p></span>
            <span > <p className= "box">Blood red</p></span>
            <span > <p className= "box">Weird green</p></span>
            <span ><p className= "box">Soothing blue</p> </span>

        </div>
        <h4>Sizes</h4>
        <div  className= "size">
            <span><h2 className= "box"> XS</h2></span>
            <span><h2 className= "box"> S</h2></span>
            <span><h2 className= "box"> M</h2></span>
            <span><h2 className= "box"> L</h2></span>
            <span><h2 className= "box"> XL</h2></span>
            <span><h2 className= "box"> XXL</h2></span>

        </div>
        </div>
        </div>
    );
}

export default Summery;