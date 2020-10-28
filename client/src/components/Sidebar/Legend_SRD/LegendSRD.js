import React from "react";

import "./LegendSRD.css"

import LogoIsobath from "../../../icons/srd/srd_izobata.png"
import LogoBottomObject from "../../../icons/srd/srd_points.png"
import LogoSRD from "../../../icons/srd/srd_grid.png"

const SRD = ""

export default class LegendSRD extends React.Component {

    state = {
        legendItemsSRD: [
            {
                name: "Изобата (10 м)",
                img_src: LogoIsobath,

            }, {
                name: "Объекты на дне",
                img_src: LogoBottomObject
            }, {
                name: "СРД",
                img_src: LogoSRD
            }
        ],
        isOnMap: false
    }

    addSRDLayer() {

    }


    render() {


        return (
            <div className='legend_layers-srd'>
                <input className='legend_layers-srd_item-input'
                       id={"item.name"}
                       name={"item.name"}
                       type="checkbox"
                       defaultChecked={this.state.isOnMap}
                       onClick={this.addSRDLayer.bind(this)}/>
                <label htmlFor={"item.name"}
                       className="legendSRD_item-title"> Съемка рельефа дна
                </label>
                {
                    this.state.legendItemsSRD.map((item, key) => (
                        <div className='legend_layers-srd_item' key={key}>
                            <img alt={item.name}
                                 className="legendTerr_item-img"
                                 src={item.img_src}/>
                            <label htmlFor={item.name}
                                   className="legendTerr_item-title"> - {item.name}
                            </label>
                        </div>
                    ))
                }
            </div>
        )
    }
}