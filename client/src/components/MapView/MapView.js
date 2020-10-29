import React from 'react'
import {GeoJSON, Map, Pane, TileLayer} from "react-leaflet";
import "react-leaflet-markercluster/dist/styles.min.css";
import "./MapView.css"
import srd_points from "../../data/srd_points";
import village_zone from "../../data/village_zone";
import air_add from "../../data/air_add"
import art_lighthouse from "../../data/art_lighthouse"
import art_poi from "../../data/art_poi"
import art_pol from "../../data/art_pollution"
import art_tools from "../../data/art_pollution"
import artificial from "../../data/artificial"
import birds from "../../data/birds"
import cleared_area from "../../data/cleared_area"
import mag_margins from "../../data/mag_margins"



const tileLayersURL = {
    arcGIS: "http://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    OSM: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

export default class MapView extends React.Component {

    state = {
        currentTileLayer: tileLayersURL.OSM,
        srd_points: srd_points,
        village_zone: village_zone,
        air_add: air_add,
        art_lighthouse: art_lighthouse,
        art_poi: art_poi,
        art_pol: art_pol,
        art_tools: art_tools,
        artificial: artificial,
        birds: birds,
        cleared_area: cleared_area,
        mag_margins:mag_margins



    }
    leafletMap = null

    componentDidMount() {
        console.log(srd_points)
    }

    setLeafletMapRef = map => (this.leafletMap = map && map.leafletElement)

    render() {

        const {
            currentTileLayer, srd_points, village_zone, air_add, art_lighthouse, art_poi, art_pol,
            art_tools, artificial, birds, cleared_area, mag_margins
        } = this.state

        return (
            <div className="map-view">
                <Map ref={this.setLeafletMapRef} center={[59.81777280843488, 27.24858748900535]} zoom={5} maxZoom={20}
                     attributionControl={true} zoomControl={true}
                     doubleClickZoom={true} scrollWheelZoom={true}
                     dragging={true} animate={true} easeLinearity={0.35}>

                    <TileLayer url={currentTileLayer}/>

                    <Pane>
                        <GeoJSON data={srd_points} onEachFeature={(feature, layer) => {
                            layer.bindTooltip('srd points', feature)
                        }}/>
                    </Pane>

                    <Pane>
                        <GeoJSON data={village_zone} onEachFeature={(feature, layer) => {
                            layer.bindTooltip('Village zone', feature)
                        }}/>
                    </Pane>

                    <Pane>
                        <GeoJSON data={air_add} onEachFeature={(feature, layer) => {
                            layer.bindTooltip('air_add', feature)
                        }}/>
                    </Pane>
                    <Pane>
                        <GeoJSON data={art_lighthouse} onEachFeature={(feature, layer) => {
                            layer.bindTooltip('art_lighthouse', feature)
                        }}/>
                    </Pane>
                    <Pane>
                        <GeoJSON data={art_poi} onEachFeature={(feature, layer) => {
                            layer.bindTooltip('air_poi', feature)
                        }}
                        />
                    </Pane>
                    <Pane>
                        <GeoJSON data={art_pol} onEachFeature={(feature, layer) => {
                            layer.bindTooltip('art pollution', feature)
                        }}/>
                    </Pane>
                    <Pane>
                        <GeoJSON data={art_tools} onEachFaeture={(feature, layer) => {
                            layer.bindTooltip('art tools', feature)
                        }}/>
                    </Pane>
                    <Pane>
                        <GeoJSON data={artificial} onEachFeature={(feature, layers) => {
                            layers.bindTooltip('artificial', feature)
                        }}/>
                    </Pane>
                    <Pane>
                        <GeoJSON data={birds} onEachFeature={(feature, layers) => {
                            layers.bindTooltip('birds', feature)
                        }}/>
                    </Pane>
                    <Pane>
                        <GeoJSON data={cleared_area} onEachFeature={(feature, layers) => {
                            layers.bindTooltip('cleaned area', feature)
                        }}/>
                    </Pane>
                    <Pane>
                        <GeoJSON data={mag_margins} onEachFeature={(feature, layers)=> {
                            layers.bindTooltip('mag margins', feature)
                        }}/>
                    </Pane>




                </Map>

            </div>
        )
    }
}