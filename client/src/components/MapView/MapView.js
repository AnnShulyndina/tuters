import React from 'react'
import {Map, TileLayer, GeoJSON, Pane} from "react-leaflet";
import "react-leaflet-markercluster/dist/styles.min.css";
import "./MapView.css"
import srd_points from "../../data/srd_points";
import village_zone from "../../data/village_zone";
import air_add from "../../data/air_add"




const tileLayersURL = {
    arcGIS: "http://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    OSM: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

export default class MapView extends React.Component {

    state = {
        currentTileLayer: tileLayersURL.OSM,
        srd_points: srd_points,
        village_zone: village_zone,
        air_add: air_add
    }

    componentDidMount() {
    console.log(srd_points)
    }

    leafletMap = null

    setLeafletMapRef = map => (this.leafletMap = map && map.leafletElement)

    render() {

        const {currentTileLayer, srd_points, village_zone} = this.state

        return (
            <div className="map-view">
                <Map ref={this.setLeafletMapRef} center={[59.81777280843488, 27.24858748900535]} zoom={5} maxZoom={20}
                     attributionControl={true} zoomControl={true}
                     doubleClickZoom={true} scrollWheelZoom={true}
                     dragging={true} animate={true} easeLinearity={0.35}>

                    <TileLayer url={currentTileLayer}/>

                    <Pane>
                        <GeoJSON data={srd_points} onEachFeature={(feature, layer)=> {
                            layer.bindTooltip('srd points', feature)
                        }}/>
                    </Pane>

                    <Pane>
                        <GeoJSON data={village_zone} onEachFeature={(feature, layer)=> {
                            layer.bindTooltip('Village zone', feature)
                        }}/>
                    </Pane>

                    <Pane>
                        <GeoJSON data={air_add} onEachFeature={(feature, layer)=> {
                            layer.bindTooltip('air_add', feature)
                        }}/>
                    </Pane>






                </Map>

            </div>
        )
    }
}