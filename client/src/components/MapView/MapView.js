import React from 'react'
import {Map, TileLayer} from "react-leaflet";
import "react-leaflet-markercluster/dist/styles.min.css";
import "./MapView.css"
import srd_points from "../../data/srd_points";

const tileLayersURL = {
    arcGIS: "http://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    OSM: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

export default class MapView extends React.Component {

    state = {
        currentTileLayer: tileLayersURL.OSM,
        srd_points: srd_points
    }

    componentDidMount() {
    console.log(srd_points)
    }

    leafletMap = null

    setLeafletMapRef = map => (this.leafletMap = map && map.leafletElement)

    render() {

        return (
            <div className="map-view">
                <Map ref={this.setLeafletMapRef} center={[50.0, 25.0]} zoom={5} maxZoom={20}
                     attributionControl={true} zoomControl={true}
                     doubleClickZoom={true} scrollWheelZoom={true}
                     dragging={true} animate={true} easeLinearity={0.35}>

                    <TileLayer url={this.state.currentTileLayer}/>

                </Map>

            </div>
        )
    }
}