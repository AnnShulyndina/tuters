import React from "react";

import "./LegendItem.css"

export default class LegendItem extends React.Component {

    state = {
        groupLayer: null,
    }

    onItemClick(event) {
        let groupLayer = this.state.groupLayer
        groupLayer.isOnMap = !groupLayer.isOnMap
        this.setState({groupLayer})

        const onLegendItemClick = this.props.onItemClick
        onLegendItemClick(event, groupLayer, this.props.legendNum)
    }

    componentDidMount() {
        const index = this.props.index
        console.log("componentDidMount",index)
        const {groupLayer, onItemClick } = this.props
        this.setState({groupLayer: groupLayer,
            onLegendItemClick: onItemClick,
            index: index})
    }

    render() {

        const {groupLayer} = this.props

        if (groupLayer !== undefined && groupLayer !== null) {
            return (
                <div className='legend_layers-srd'
                     >
                    <input className='legend_layers-srd_item-input'
                           id={groupLayer.label}
                           name={groupLayer.label}
                           type="checkbox"
                           defaultChecked={groupLayer.isOnMap}
                           onClick={this.onItemClick.bind(this)} />

                    {
                        groupLayer.label && (
                            <span className="legendSRD_item-title"> Съемка рельефа дна</span>
                        )
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