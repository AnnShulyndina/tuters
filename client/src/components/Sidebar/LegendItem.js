import React from "react";

import "./LegendItem.css"

export default class LegendItem extends React.Component {

    state = {
        groupLayer: null,
    };

    onItemClick(event) {
        let groupLayer = this.state.groupLayer;
        groupLayer.isOnMap = !groupLayer.isOnMap;
        this.setState({groupLayer});
        const onLegendItemClick = this.props.onItemClick;
        onLegendItemClick(event, groupLayer, this.props.legendNum)
    }

    componentDidMount() {
        const {groupLayer} = this.props;
        this.setState({
            groupLayer: groupLayer,
        })
    }


    render() {

        //class assignment for state
        const {groupLayer} = this.state;
        if (groupLayer !== undefined) {
            if (groupLayer !== null) {
                let classes = "legend_layers"
                if (groupLayer.controlClassName !== null && groupLayer.controlClassName !== undefined) {
                    classes = classes + " " + groupLayer.controlClassName
                }

                let transparent = 0.5

                if (groupLayer.isOnMap) {
                    transparent = 1.0
                }

                return (
                    <div className={classes}
                         onClick={this.onItemClick.bind(this)}
                         style={{opacity: transparent}}
                    >

                        {
                            groupLayer.label !== null && (
                                <span className="legend_item-title"> {groupLayer.groupLabel}</span>)
                        }

                        {
                            groupLayer.isBaseLayer &&
                            (<span > dsfsfs</span>)
                        }

                        {
                            groupLayer.layers.length > 0 && (
                                groupLayer.layers.map((item, key) => (
                                    <div className='legend_layers_item' key={key}>

                                        {
                                            item.iconUrl !== null && (
                                                <img alt={item.label}
                                                     className="legend_item-img"
                                                     src={item.iconUrl}/>
                                            )
                                        }

                                        <label htmlFor={item.label}
                                               className="legend_item-title"> - {item.label}
                                        </label>
                                    </div>
                                ))
                            )
                        }

                    </div>
                )
            } else {
                return ""
            }
        } else {
            return ""
        }
    }
}
