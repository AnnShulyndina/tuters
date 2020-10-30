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

        const {groupLayer} = this.state;

        if (groupLayer !== undefined && groupLayer !== null) {
            return (
                <div className='legend_layers-srd'
                     onClick={this.onItemClick.bind(this)}>
                    <input className='legend_layers-srd_item-input'
                           id={groupLayer.groupLabel}
                           name={groupLayer.groupLabel}
                           type="checkbox"
                           checked={groupLayer.isOnMap}
                           />
                    {
                        groupLayer.label !== null && (<span className="legendSRD_item-title"> {groupLayer.groupLabel}</span>)
                    }
                    {
                        groupLayer.layers.length > 0 && (
                            groupLayer.layers.map((item, key) => (
                                <div className='legend_layers-srd_item' key={key}>
                                    <img alt={item.label}
                                         className="legendTerr_item-img"
                                         src={item.icon}/>

                                    <label htmlFor={item.label}
                                           className="legendTerr_item-title"> - {item.label}
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
    }
}