import React from "react";

import "./LegendSRD.css"

import LogoIsobath from "../../../icons/srd/srd_izobata.png"
import LogoBottomObject from "../../../icons/srd/srd_points.png"
import LogoSRD from "../../../icons/srd/srd_grid.png"
import srd_points from "../../../data/srd_points";
import srd_izobata_10 from "../../../data/srd_izobata_10";

const SRD = ""

export default class LegendSRD extends React.Component {

    state = {
        legendItemsSRD: [
            {
                name: "Изобата (10 м)",
                img_src: LogoIsobath,
                feature: srd_izobata_10

            }, {
                name: "Объекты на дне",
                img_src: LogoBottomObject,
                feature: srd_points
            // }, {
            //     label: "СРД",
            //     icon: LogoSRD,
            //     feature: null
            }
        ],
        isOnMap: true,
    }

    addSRDLayer(event){
        const dataSRD = this.state.legendItemsSRD
        dataSRD.forEach(item=> {
            if (item.srd_points === event.target.name) {
                item.isOnMap = !item.isOnMap
            }

        })
    }



    render() {

        return (
            <div className='legend_layers-srd'>

                <input className='legend_layers-srd_item-input'
                       id={"item.label"}
                       name={"item.label"}
                       type="checkbox"
                       defaultChecked={this.state.isOnMap}
                       onClick={this.addSRDLayer.bind(this)}/>

                <span className="legendSRD_item-title"> Съемка рельефа дна</span>
                <p>
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
                </p>
            </div>
        )
    }
}