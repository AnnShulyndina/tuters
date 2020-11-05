import React from 'react'
import {GeoJSON, ImageOverlay, Map, Pane, Popup, TileLayer} from "react-leaflet";
import "react-leaflet-markercluster/dist/styles.min.css";
import "./MapView.css"
import L from 'leaflet';

export default class MapView extends React.Component {

    leafletMap = null;

    setLeafletMapRef = map => (this.leafletMap = map && map.leafletElement);

    render() {
        let {groupLayers} = this.props;
        if (!groupLayers || groupLayers.length === 0) {
            return ""
        }

        groupLayers = groupLayers.filter(item => item.isOnMap);

        const baseLayer = groupLayers.filter(item => item.isBaseLayer)[0].layers[0].layerURL

        return (
            <div className="map-view">
                <Map ref={this.setLeafletMapRef} center={[59.85, 27.2]} zoom={15} maxZoom={21} minZoom={8}
                     attributionControl={true} zoomControl={true}
                     doubleClickZoom={true} scrollWheelZoom={true}
                     dragging={true} animate={true} easeLinearity={0.35}>

                    <TileLayer url={baseLayer}/>

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
                                         onEachFeature={(feature, layer) => {layer.bindPopup
                                         (`<h5>${feature.properties.name}</h5> 
                                            <p>${feature.properties.note}</p>`)
                                         }}

                                         pointToLayer={(feature, latlng) => {
                                             let iconUrl = item.iconUrl

                                             if (item.icons) {
                                                 item.icons.forEach((elem) => {
                                                     if (elem.type === feature.properties.type) {
                                                         iconUrl = elem.iconUrl
                                                     }
                                                 })
                                             }

                                             let iconSize = [32, 38]
                                             if (item.iconSize) {
                                                 iconSize = item.iconSize
                                             }

                                             return L.marker(latlng, {
                                                 icon: new L.Icon({
                                                     iconUrl: iconUrl,
                                                     iconSize: iconSize,
                                                     iconAnchor: [16, 27]
                                                 })
                                             })
                                         }}


                                >
                                    {/*<Popup >
                                        feature.properties.name
                                        <table>
                                            <th>{feature.label}</th>
                                            <tr>
                                                <td>{item.name}</td>
                                            </tr>
                                            <tr>
                                                <td><b>{item.note}</b></td>
                                            </tr>
                                            <tr>
                                                <td>{item.image_src}</td>
                                            </tr>
                                        </table>
                                    </Popup>*/}
                                </GeoJSON>

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