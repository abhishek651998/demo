import { render } from "@testing-library/react";
import React from "react";


class Features extends React.Component {
    constructor ()
    {
        super ();
        this.state={
            show:false
        }
    }
    render () {
    return(
        <div className="back">
         <input  type= "checkbox" onClick={()=>{this.setState({show:!this.state.show})}} />
            <label className="text"> Details </label>
            {
                this.state.show ?
                <div>
        <ul>
            <li> Maecenas congue lectus ac lorem aliquet, vitae feugiat lectus blandit.</li>
            <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li> Aenean sollicitudin mi vitae urna imperdiet, id imperdiet elit tristique.</li>
            <li> Mauris ac tellus ut leo maximus egestas a a nunc.</li>
            <li> Vestibulum mattis mi at diam blandit aliquam.</li>
            <li> Quisque pulvinar nunc eu tortor sagittis, a consequat diam ullamcorper.</li>
            <li> Nullam tempor massa et neque dignissim, at volutpat ipsum laoreet.</li>
            <li> Nulla venenatis velit sit amet est dictum, sed congue purus eleifend.</li>
            <li> Proin maximus dui id ligula iaculis, ut sollicitudin nisl accumsan.</li>
            <li> Sed a nibh in metus dictum accumsan.</li>
            <li> Nulla tincidunt diam id magna facilisis rutrum.</li>
            <li> Nullam fringilla leo et diam placerat, sed venenatis orci ultricies.</li>
            <li> Sed et lorem efficitur, facilisis mauris vel, ultricies metus.</li>
            <li> Curabitur at sem efficitur, sollicitudin purus mattis, egestas an</li>
        </ul>
        </div>
        :null
            }
            </div>
    );
}
}

export default Features;