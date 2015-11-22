import React from 'react';
import LeftNav from 'material-ui/lib/left-nav'
import List from 'material-ui/lib/lists/list'
import ListDivider from 'material-ui/lib/lists/list-divider'
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import ListItem from 'material-ui/lib/lists/list-item'
import Accordion from './Accordion.js'
import './LeftNavMenu.scss'

let LeftNavMenu = React.createClass({
    onMenuShow(msg, data){
        this.refs.leftNav.toggle();
    },
    componentWillMount(){
        if(canUseDOM){
            PubSub.subscribe('MENU_SHOW', this.onMenuShow.bind(this));
        }
    },
    render(){
        return (
            <div>
                <div className="m-leftnav">
                    <LeftNav style={{paddingTop:'72px',overflowY: 'auto', background:"#ebebeb"}} docked={true} >
                        <Accordion />
                    </LeftNav>
                </div>
                <div className="m-leftnav-toggle">
                    <LeftNav style={{paddingTop:'72px',overflowY: 'auto', background:"#ebebeb"}} ref="leftNav" docked={false} >
                        <Accordion />
                    </LeftNav>
                </div>
                {this.props.children}
            </div>
        )
    }
})

export default LeftNavMenu
