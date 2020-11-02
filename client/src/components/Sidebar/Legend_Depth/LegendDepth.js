import React from "react";
import "./LegendDepth.css"
import LogoDepth from "../../../../public/icons/depths.svg"

export default class LegendDepth extends React.Component {
    addDepthLayer() {

    }

    render() {
        return (

            <div className='legend_depth-icons'>

                <input className='legend_depth-icons_item-input'
                       type="checkbox"
                       name="Исследования магнитного поля"
                       onClick={this.addDepthLayer.bind(this)}/>

                <span className="legendD_item-title"> Исследования магнитного поля</span>

                <p>
                    <img className="legendDepth_item-img"
                         alt="graduate"
                         src={LogoDepth}/>
                </p>


            </div>


        )
    }

}