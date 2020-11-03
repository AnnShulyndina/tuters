import React from "react";
import "./SIdeBar.scss"
import LegendItem from "./LegendItem";

export default class SideBar extends React.Component {

    state = {
        rightOpen: true,
    };
    toggleSidebar = (event) => {
        let key = `${event.currentTarget.parentNode.id}Open`;
        this.setState({[key]: !this.state[key]});
    };

    onLegendItemClick(event, groupLayer, legendNum) {
        this.props.onLegendChanged(groupLayer, legendNum)
    }

    render() {

        let rightOpen = this.state.rightOpen ? 'open' : 'closed';

        const groupLayers = this.props.groupLayers;

        return (
            <div id='layout'>
                <div id='main'>
                    <div className='header'></div>
                </div>
                <div id='right' className={rightOpen}>
                    <div className='icon'
                         onClick={this.toggleSidebar}>
                        {/* //это картинка иконки*/}
                        &equiv;
                    </div>
                    <div className={`sidebar ${rightOpen}`}>
                        <div className='sidebar-header'>
                            <h3 className='title'>
                                Условные обозначения
                            </h3>
                        </div>
                        <div className='sidebar-content'>

                            {groupLayers &&
                            groupLayers.map((item, key) => (

                                    <LegendItem groupLayer={item}
                                                key={key}
                                                legendNum={key}
                                                onItemClick={this.onLegendItemClick.bind(this)}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}