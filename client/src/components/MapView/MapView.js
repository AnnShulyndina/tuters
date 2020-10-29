import React from 'react'
import {GeoJSON, ImageOverlay, Map, Pane, TileLayer} from "react-leaflet";
import "react-leaflet-markercluster/dist/styles.min.css";
import "./MapView.css"
import srd_points from "../../data/srd_points"
import isobath from "../../data/srd_izobata_10"


import village_zone from "../../data/village_zone"
import air_add from "../../data/air_add"
import art_lighthouse from "../../data/art_lighthouse"
import art_poi from "../../data/art_poi"
import art_pol from "../../data/art_pollution"
import art_tools from "../../data/art_pollution"
import artificial from "../../data/artificial"
import birds from "../../data/birds"
import cleared_area from "../../data/cleared_area"
import mag_margins from "../../data/mag_margins"
import oopt_zone from "../../data/oopt_zone"
import roads from "../../data/roads"

import village_obj from "../../data/village_obj"
import zone from "../../data/zone"


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
        mag_margins: mag_margins,
        oopt_zone: oopt_zone,
        roads: roads,
        isobath: isobath,
        village_obj: village_obj,
        zone: zone,
        groupLayers: []
    }
    leafletMap = null

    componentDidMount() {
        const {groupLayers} = this.props
        this.setState({groupLayers})
        console.log("MavView componentDidMount" , groupLayers)
    }

    setLeafletMapRef = map => (this.leafletMap = map && map.leafletElement)

    render() {
        const {
            currentTileLayer, srd_points, village_zone, air_add, art_lighthouse, art_poi, art_pol,
            art_tools, artificial, birds, cleared_area, mag_margins, oopt_zone, roads, isobath, village_obj,
            zone
        } = this.state

        const {groupLayers} = this.props

        let layers = ""

        console.log("MavView", groupLayers)

        if (groupLayers.length > 0) {
            groupLayers.map((item, key) =>  {
                console.log("item1", item)
                if (item.isOnMap) {
                    console.log("item2", item)
                    layers = item.layers.map((item, key) =>
                      (  <Pane>
                          {item.featureType === "GeoJSON" && (<GeoJSON data={item.feature} onEachFeature={(feature, layer) => {
                              layer.bindTooltip(item.name, feature)
                          }}/>)}

                          {item.featureType === "raster" && (<ImageOverlay url={item.feature} bounds={item.bounds}/>)}
                        </Pane>)
                    )
                }
            })
        }

        return (
            <div className="map-view">
                <Map ref={this.setLeafletMapRef} center={[59.85, 27.2]} zoom={13} maxZoom={21} minZoom={8}
                     attributionControl={true} zoomControl={true}
                     doubleClickZoom={true} scrollWheelZoom={true}
                     dragging={true} animate={true} easeLinearity={0.35}>

                    <TileLayer url={currentTileLayer}/>

                    {layers}

                {/*    <Pane>
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
                        <GeoJSON data={mag_margins} onEachFeature={(feature, layers) => {
                            layers.bindTooltip('mag margins', feature)
                        }}/>
                    </Pane>
                    <Pane>
                        <GeoJSON data={oopt_zone} onEachFeature={(feature, layers) => {
                            layers.bindTooltip('oopt zone', feature)
                        }}/>
                    </Pane>
                    <Pane>
                        <GeoJSON data={roads} onEachFeature={(feature, layers) => {
                            layers.bindTooltip('roads', feature)
                        }}/>
                    </Pane>
                    <Pane>
                        <GeoJSON data={isobath} onEachFeature={(feature, layers) => {
                            layers.bindTooltip('isobath', feature)
                        }}/>
                    </Pane>
                    <Pane>
                        <GeoJSON data={village_obj} onEachFeature={(feature, layers) => {
                            layers.bindTooltip('village obj', feature)
                        }}/>
                    </Pane>
                    <Pane>
                        <GeoJSON data={zone} onEachFeature={(feature, layers) => {
                            layers.bindTooltip('zone', feature)
                        }}/>
                    </Pane>*/}


                </Map>

            </div>
        )
    }
}