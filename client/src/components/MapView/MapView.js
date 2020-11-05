import React from 'react'
import {GeoJSON, ImageOverlay, Map, Pane, TileLayer} from "react-leaflet";
import "react-leaflet-markercluster/dist/styles.min.css";
import "./MapView.css"
import L from 'leaflet';


const tileLayersURL = {
    arcGIS: "http://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    OSM: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
};

export default class MapView extends React.Component {

    state = {
        currentTileLayer: tileLayersURL.OSM,
    };

    leafletMap = null;

    setLeafletMapRef = map => (this.leafletMap = map && map.leafletElement);


    render() {
        const {currentTileLayer} = this.state;
        let {groupLayers} = this.props;
        groupLayers = groupLayers.filter(item => item.isOnMap);

        return (
            <div className="map-view">
                <Map ref={this.setLeafletMapRef} center={[59.85, 27.2]} zoom={13} maxZoom={21} minZoom={8}
                     attributionControl={true} zoomControl={true}
                     doubleClickZoom={true} scrollWheelZoom={true}
                     dragging={true} animate={true} easeLinearity={0.35}>

                    <TileLayer url={currentTileLayer}/>

                    {this.getLayers(groupLayers)}
                </Map>
            </div>
        )
    }

    getLayers(groupLayers) {
        if (groupLayers && groupLayers.length === 0) return "";

        return groupLayers.map((item, key) => {
            return item.layers.map((item, key) => {
                    if (item.featureType === "GeoJSON") {
                        return (
                            <Pane>
                                <GeoJSON key={item.layerKey} data={item.feature} style={item.style}
                                         onEachFeature={(feature, layer) => {
                                             layer.bindTooltip(item.label, feature)
                                         }}
                                         pointToLayer={(feature, latlng) => {
                                             let iconUrl = item.iconUrl

                                             if (item.icons) {
                                                 item.icons.forEach((elem) => {
                                                     if (elem.type === feature.properties.name) {
                                                         iconUrl = elem.iconUrl
                                                     }
                                                 })
                                             }

                                             let iconSize = [32,32]
                                             if (item.iconSize) {
                                                 iconSize = item.iconSize
                                             }

                                             return L.marker(latlng, {
                                                 icon: new L.Icon({
                                                     iconUrl: item.iconUrl,
                                                     iconSize: iconSize,
                                                     iconAnchor: [16, 27]
                                                 })
                                             })
                                         }}
                                />

                            </Pane>
                        )
                    } else if (item.featureType === "raster") {
                        return (
                            <Pane>
                                <ImageOverlay key={item.layerKey} url={item.feature} bounds={item.bounds}/>
                            </Pane>
                        )
                    } else {
                        return ""
                    }
                }
            )
        })
    }
}