import React from "react";


class Details extends React.Component {
    constructor()
    {
        super ();
        this.state={
            show:false
        }

    }
    render () {
    return(
        < div className="back">
        <input  type= "checkbox" onClick={()=>{this.setState({show:!this.state.show})}} />
            <label className="text"> Details </label>
            {
                this.state.show ?
            <div>
        <ul>
            <li> This product comes with something good</li>
            <li> This product doesn't comes with something bad</li>
            <li> This product is totally returnable</li>
            <li> Wash care: Don't wash ever. It's use and throw</li>


        </ul>
        </div> 
        :null
            }
        </div>

    );
    }
}

export default Details;