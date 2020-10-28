import React from "react";
import "./LegendDepth.css"
import LogoDepth from "../../../icons/depth/depths.svg"

export default class LegendDepth extends React.Component {
    addDepthLayer() {

    }


    render() {
        return (

            <div className='legend_depth-icons'>

                <header className='legendDepth_item-title'>Исследования магнитного поля</header>

                <input className='legend_depth-icons_item-input'
                       type="checkbox"
                       name="Исследования магнитного поля"
                       onClick={this.addDepthLayer.bind(this)}/>

                <img className="legendDepth_item-img"
                     alt="graduate"
                     src={LogoDepth}
                />



            </div>


        )
    }

}