import React from 'react';
import MapView from "../MapView/MapView";
import "./App.css"
import SideBar from "../Sidebar/SideBar";

import groupLayers from "../../data/app_layers"

export default class App extends React.Component {

    state = {
        groupLayers: []
    };

    componentDidMount() {
        let groupToState = groupLayers;

        if (localStorage.getItem('group')) {
            // groupToState =  JSON.parse(localStorage.getItem('group'))
        }

        this.setState({
            groupLayers: groupToState
        })
    }

    onLegendChanged(groupLayer, legendNum) {
        let groupLayers = this.state.groupLayers
        groupLayers[legendNum] = groupLayer
        this.setState({
            groupLayers: groupLayers
        })

        // localStorage.setItem('group', JSON.stringify(groupLayers));
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