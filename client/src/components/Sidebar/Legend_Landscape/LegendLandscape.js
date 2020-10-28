import React from "react";
import "./LegendLandscape.css"

import LogoPhoto from "../../../icons/land/photo.png"
import LogoRoad from "../../../icons/land/Line.png"

const landscape = "",
    photo = "",
    roads = ""

export default class LegendLandscape extends React.Component {

    state = {
        legendItemsLand: [
            {
                name: "Ландшафты",
                layer: landscape,
                isOnMap: false
            },
            {
                name: "Фотографии",
                layer: photo,
                img_src: LogoPhoto
            }, {
                name: "Тропы и дорожки",
                layer: roads,
                img_src: LogoRoad
            }
        ],
        isOnMap: false
    }

    addLandLayer(event) {
    }

/*    showMeImg() {

        if (this.state.img_src === true) {
            return <img alt={this.state.img_src}/>;
        } else if (this.state.img_src === false) {
            return null
        }
    }*/


    render() {


        return (

            <div className='legend_layers-land'>

                {
                    this.state.legendItemsLand.map((item, key) => (
                        <div className='legend_layers-land_item' key={key}>
                            {/*{this.showMeImg.bind(this)}*/}
                            {item.img_src && (<img alt={item.name}
                                className="legendLand_item-img"
                                src={item.img_src}/>)}
                            <label htmlFor={item.name}
                                   className="legend_item-title"> - {item.name}
                            </label>
                        </div>
                    ))
                            }


                        </div>
                    )
                }


                }