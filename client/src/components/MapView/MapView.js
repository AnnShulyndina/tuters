import React from 'react'
import {GeoJSON, ImageOverlay, Map, Pane, TileLayer} from "react-leaflet";
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
                                         onEachFeature={(feature, layer) => {
                                             
                                             let folderName = 'artificial'
                                             
                        
                                             
                                             if (feature.properties.type === 'birds') {
                                                 folderName = 'biology'
                                             } else if (feature.properties.type === 'mammal') {
                                                 folderName = 'biology'
                                             } else if (feature.properties.type === 'plants') {
                                                 folderName = 'biology'
                                                 //?
                                             } else if (feature.properties.name === 'lighthouse') {
                                                 folderName = 'gif'
                                             } else if (feature.properties.name === 'lighthouse') {
                                                 folderName = 'artificial'
                                             }
    
                                             let imagePop = `<img class=\'image-popup\' alt="images path" src="./media/${folderName}/${feature.properties.image_src}" />`
                                             let namePop =  `<h3>${feature.properties.name}</h3>`
                                             let textPop = `<p class="text-popup">${feature.properties.note}</p>`
                                             
    
                                             if ( feature.properties.image_src === null || feature.properties.image_src === undefined ) {
                                                 imagePop = ""
                                             }
                                    
                                             let popupContent = `${namePop} ${imagePop} ${textPop}`
                                             
                                    
                                             if ( feature.properties.name !== undefined) {
                                                 layer.bindPopup(popupContent) }
                                             
                                             
                                             
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
                                         }}>
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