import React from "react";
import "./SIdeBar.scss"
import Legend_layers from "./Legend_Layers/Legend_layers";
import LegendTerritory from "./Legend_Territory/LegendTerritory";
import LegendSRD from "./Legend_SRD/LegendSRD";
import LegendIcons from "./Legend_Icons/LegendIcons";
import LegendLandscape from "./Legend_Landscape/LegendLandscape";
import LegendDepth from "./Legend_Depth/LegendDepth";


export default class SideBar extends React.Component {

    state = {
        rightOpen: true
    }

    constructor(props) {
        super(props);
    }

    toggleSidebar = (event) => {
        let key = `${event.currentTarget.parentNode.id}Open`;
        this.setState({[key]: !this.state[key]});
    }

    render() {

        let rightOpen = this.state.rightOpen ? 'open' : 'closed';

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
                            <Legend_layers/>
                            <hr/>
                            <LegendTerritory/>
                            <hr/>
                            <LegendSRD/>
                            <hr/>
                            <LegendIcons/>
                            <hr/>
                            <LegendLandscape/>
                            <hr/>
                            <LegendDepth/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}