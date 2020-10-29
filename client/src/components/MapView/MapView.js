import React from 'react'
import {GeoJSON, ImageOverlay, Map, Pane, TileLayer} from "react-leaflet";
import "react-leaflet-markercluster/dist/styles.min.css";
import "./MapView.css"


const tileLayersURL = {
    arcGIS: "http://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    OSM: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
};

export default class MapView extends React.Component {

    constructor(props){
        super(props);
        console.log("constructor this.props", this.props);
        const {groupLayers} = this.props;
        this.setState({groupLayers})
    }

    state = {
        currentTileLayer: tileLayersURL.OSM,
        groupLayers: []
    };

    leafletMap = null;
    setLeafletMapRef = map => (this.leafletMap = map && map.leafletElement);

    render() {
        const {
            currentTileLayer
        } = this.state;
        let {groupLayers} = this.props;
        groupLayers = groupLayers.filter(item => item.isOnMap);
        let layers = this.getLayers(groupLayers);


        return (
            <div className="map-view">
                <Map ref={this.setLeafletMapRef} center={[59.85, 27.2]} zoom={13} maxZoom={21} minZoom={8}
                     attributionControl={true} zoomControl={true}
                     doubleClickZoom={true} scrollWheelZoom={true}
                     dragging={true} animate={true} easeLinearity={0.35}>

                    <TileLayer url={currentTileLayer}/>

                    {layers}

                    {/*<Pane >*/}
                    {/*    <GeoJSON data={groupLayers[0].layers[0].feature} onEachFeature={(feature, layer) => {*/}
                    {/*        layer.bindTooltip(groupLayers[0].layers[0].name, feature)*/}
                    {/*    }}/>*/}
                    {/*</Pane>*/}

                </Map>
            </div>
        )
    }

    getLayers(groupLayers) {
        if (groupLayers && groupLayers.length === 0) return "";
        return groupLayers.map((item, key) => {
            const k = key;
            return item.layers.map((item, key) => {
                    const kk = key + k * 1000;
                    if (item.featureType === "GeoJSON") {
                        return (<Pane key={kk}>
                            <GeoJSON key={kk} data={item.feature} onEachFeature={(feature, layer) => {
                                layer.bindTooltip(item.name, feature)
                            }}/>
                        </Pane>)
                    } else if (item.featureType === "raster") {
                        return (<Pane key={kk}>
                            <ImageOverlay key={kk} url={item.feature} bounds={item.bounds}/>
                        </Pane>)
                    } else {
                        return ""
                    }
                }
            )
        })
    }
}