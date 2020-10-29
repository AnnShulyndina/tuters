import React from 'react';
import MapView from "../MapView/MapView";
import "./App.css"
import SideBar from "../Sidebar/SideBar";
import LogoIsobath from "../../icons/srd/srd_izobata.png";
import LogoBottomObject from "../../icons/srd/srd_points.png";
import LogoSRD from "../../icons/srd/srd_grid.png";
import srd_points from "../../data/srd_points"
import srd_izobata_10 from "../../data/srd_izobata_10"
import srd_grid from "../../data/map_image/srd_grid.png"

export default class App extends React.Component {
    state = {
        groupLayers: [{
            label: "Съемка рельефа дна",
            isOnMap: true,
            layers: [
                {
                    label: "Изобата (10 м)",
                    icon: LogoIsobath,
                    feature: srd_izobata_10,
                    featureType: "GeoJSON"

                }, {
                    label: "Объекты на дне",
                    icon: LogoBottomObject,
                    feature: srd_points,
                    featureType: "GeoJSON"
                }, {
                    label: "СРД",
                    icon: LogoSRD,
                    feature: srd_grid,
                    featureType: "raster",
                    bounds: [
                        [59.829035277018569, 27.2013],[59.929035277018569, 27.3013]
                    ],
                }
            ],
        },
            {
                label: "2222222222222222",
                isOnMap: true,
                layers: [
                    {
                        label: "Изобата (10 м)",
                        icon: LogoIsobath,
                        feature: srd_izobata_10,
                        featureType: "GeoJSON"

                    }, {
                        label: "Объекты на дне",
                        icon: LogoBottomObject,
                        feature: srd_points,
                        featureType: "GeoJSON"
                    }, {
                        label: "СРД",
                        icon: LogoSRD,
                        feature: srd_grid,
                        featureType: "raster",
                        bounds: [
                            [59.829035277018569, 27.2013],[59.929035277018569, 27.3013]
                        ],
                    }
                ],
            }]
    }
    onLegendChanged(event, groups) {
        this.setState({
            groupLayers: groups
        })
    };
    render() {
        return (
            <div className="App">
                <MapView groupLayers={this.state.groupLayers}/>
                <SideBar groupLayers={this.state.groupLayers}
                         onLegendChanged={this.onLegendChanged.bind(this)}/>
            </div>
        );
    }
};
