import React from "react";

const Summery = () => {
    
    return(
        <div style= {{ position:"absolute",right: "13%", maxWidth:"40%",maxHeight:"40%"}}>
        <div className="back">
        <h3>Traditional awesome super-cool cotton saree</h3> <br />
        <h2>Price <br /> <span className ="price" > &#8377;7000</span> &#8377;2000-&#8377;4500</h2> 
        
       
        <div className= "size">  
        <div className= "colors info-item">
        <h3>Colors</h3>

        <div className= "product-colors">
          <div className= "color">
            <span className= "white">&#160;</span>
            <label>Traditional white</label>
          </div>
          <div className= "color">
            <span className= "red">&#160;</span>
            <label>Blood red</label>
          </div>
          <div className= "color">
            <span className= "green">&#160;</span>
            <label>Weird green</label>
          </div>
          <div className= "color">
            <span className= "blue">&#160;</span>
            <label>Soothing blue</label>
          </div>
        </div>
      </div>
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