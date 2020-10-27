import React from 'react';

import './Legend_layers.css'

const arcGISlayer = "http://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    osmLayer = "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
    orthoPhotoPlan = "",
    digitalModelRelief = ""


export default class Legend_layers extends React.Component {
    state = {
        legendItems: [
            {
                name: "Спутник",
                layer: arcGISlayer,
                isOnMap: false
            }, {
                name: "Карта",
                layer: osmLayer,
                isOnMap: false
            }, {
                name: "Ортофотоплан",
                layer: orthoPhotoPlan,
                isOnMap: true
            }, {
                name: "Цифровая модель рельефа",
                layer: digitalModelRelief,
                isOnMap: false


            }
        ]
    }

    onLegendItemsChanged(event) {

console.log("onLegendItemsChanged1", event)
        const {legendItems} = this.state
        legendItems.forEach(item =>{
            console.log("onLegendItemsChanged2", item)

            if(item.layer === event.target.name) {
                console.log("onLegendItemsChanged3", item)
                item.isOnMap = !item.isOnMap
                document.getElementById(item.name).checked = item.isOnMap
                console.log("onLegendItemsChanged4", item)

            }
        })
        this.setState({
            legendItems
        })
        console.log("onLegendItemsChanged5", this.state)

    }

    render() {


        return (
             <div className='legend_layers'>

                 {
                     this.state.legendItems.map((item, key) => (
                         <div className='legend_item' key={key}>
                             <input className="legend__item-input"
                                    id={item.name}
                                    type="checkbox"
                                    defaultChecked={item.isOnMap}
                                    name={item.name}
                                    onClick={this.onLegendItemsChanged.bind(this)}
                             />
                             <span> {item.name} </span>

                         </div>
                     ))
                 }

             </div>



        )
    }


}
