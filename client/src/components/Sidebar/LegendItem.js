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
        if (groupLayer !== undefined && groupLayer !== null) {
            let classes = "legend_layers"
            if (groupLayer.controlClassName !== null && groupLayer.controlClassName !== undefined) {
                classes = classes + " " + groupLayer.controlClassName
            }


            return (
                <div className={classes}
                     onClick={this.onItemClick.bind(this)}>

                    {groupLayer.layers.length > 1 && (
                        <input className='legend_layers_item-input'
                               id={groupLayer.groupLabel}
                               name={groupLayer.groupLabel}
                               type="checkbox"
                               checked={groupLayer.isOnMap}
                        />
                    )}

                    {
                        groupLayer.label !== null && (
                            <span className="legend_item-title"> {groupLayer.groupLabel}</span>)
                    }


                    {
                        groupLayer.layers.length > 0 && (
                            groupLayer.layers.map((item, key) => (
                                <div className='legend_layers_item' key={key}>

                                    {groupLayer.layers.length === 1 && (
                                        <input className='legend_layers-_item-input'
                                               id={groupLayer.groupLabel}
                                               name={groupLayer.groupLabel}
                                               type="checkbox"
                                               checked={groupLayer.isOnMap}
                                        />
                                    )}

                                    {
                                        item.icon !== null && (
                                            <img alt={item.label}
                                                 className="legend_item-img"
                                                 src={item.icon}/>
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
    }
}
