import React from "react";
import "./SIdeBar.scss"
import Legend_layers from "./Legend_Layers/Legend_layers";


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
                    <div className='header'>

                        <h3 className={`
                      title
                     
                      ${'right-' + rightOpen}
                  `}>
                            Main header
                        </h3>

                    </div>
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
                                Header
                            </h3>
                        </div>
                        <div className='sidebar-content'>
                            <h3 className="sidebar_labelList">Current layer</h3><br/>
                                <Legend_layers/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}