import React from "react";
import "./LegendIcons.css"

import LogoLightHouse from "../../../icons/icons/lighthouse.png"
import LogoTools from "../../../icons/icons/level.png"
import LogoSpecialObg from "../../../icons/icons/headstone.png"
import LogoTechImpact from "../../../icons/icons/metall.png"
import LogoAnimalPlaces from "../../../icons/icons/crow.png"



const lighthouse = "",
    tools = "",
    specialObj = "",
    techImpact = "",
    animalPlaces = ""

export default class LegendIcons extends React.Component {

    state = {
        legendItemsIcons: [
            {
                name: "Маяк",
                layer: lighthouse,
                isOnMap: false,
                img_src: LogoLightHouse

            },
            {
                name: "Инструменты исследования окружающей среды",
                layer: tools,
                isOnMap: false,
                img_src: LogoTools
            },
            {
                name: "Особые объекты",
                layer: specialObj,
                isOnMap: false,
                img_src: LogoSpecialObg
            },
            {
                name: "Техногенные объекты",
                layer: techImpact,
                isOnMap: false,
                img_src: LogoTechImpact
            },
            {
                name: "Места обитания птиц, животных и растений",
                layer: animalPlaces,
                isOnMap: false,
                img_src: LogoAnimalPlaces
            }
        ]
    }

    addIcons() {

    }

    render() {


        return (
            <div className='legend_layers-icons'>
                {
                    this.state.legendItemsIcons.map((item, key) => (
                        <div className='legend_layers-icons_item' key={key}>

                            <input className='legend_layers-icons_item-input'
                                   id={item.name}
                                   name={item.name}
                                   type="checkbox"
                                   defaultChecked={item.isOnMap}
                                   onClick={this.addIcons.bind(this)}/>

                            <img className="legendIcon_item-img"
                                 alt={item.name}
                                 src={item.img_src}/>

                            <label htmlFor={item.name}
                                   className="legendIcon_item-title"> - {item.name}
                            </label>

                        </div>
                    ))
                }

            </div>

        )

    }
}