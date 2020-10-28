import React from "react";
import "./LegendTerritory.css"

import LogoTerrOOPT from "../../../icons/terr/green.svg"
import LogoTerrFinVil from "../../../icons/terr/blue.svg"
import LogoTerrClean from "../../../icons/terr/purple.svg"
import LogoTerrAeroPhoton from "../../../icons/terr/pink.svg"


const terrOOPT = "",
    terrFinVil = "",
    terrClean = "",
    terrAeroPhoto = ""


export default class LegendTerritory extends React.Component {
    state = {
        legendItemsTerrLayers: [
            {
                name: "Территория ООПТ",
                layer: terrOOPT,
                img_src: LogoTerrOOPT,
                isOnMap: false,
            }, {
                name: "Территория финской деревни",
                layer: terrFinVil,
                img_src: LogoTerrFinVil,
                isOnMap: false,
            }, {
                name: "Очищенная территория",
                layer: terrClean,
                img_src: LogoTerrClean,
                isOnMap: false,
            }, {
                name: "Территория детальной аэрофотосъемки",
                layer: terrAeroPhoto,
                img_src: LogoTerrAeroPhoton,
                isOnMap: false
            }
        ]
    }

    addTerrLayer(event) {
// addEventListener()
    }


    render() {


        return (
            <div className='legend_layers-terr'>
                {
                    this.state.legendItemsTerrLayers.map((item, key) => (
                        <div className='legend_layers-terr_item' key={key}>

                            <input className='legend_layers-terr_item-input'
                                   id={item.name}
                                   name={item.name}
                                   type="checkbox"
                                   defaultChecked={item.isOnMap}
                                   onClick={this.addTerrLayer.bind(this)}/>

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