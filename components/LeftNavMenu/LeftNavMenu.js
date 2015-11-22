import React from 'react';
import LeftNav from 'material-ui/lib/left-nav'
import List from 'material-ui/lib/lists/list'
import ListDivider from 'material-ui/lib/lists/list-divider'
import ListItem from 'material-ui/lib/lists/list-item'
import {Accordion, AccordionItem}from 'react-sanfona'
import Ink from 'react-ink';
import './LeftNavMenu.scss'

let menuItems = [
    {route: 'intro', text: 'INTRO'},
    {route: 'theme', text: 'THEME'},
    {route: 'app_dev', text: 'APP DEVELOPMENT'},
    {route: 'rest_api', text: 'REST API REFERENCE'},
    {route: 'sdks', text: 'SDKS'},
    {route: 'samples', text: 'SAMPLES'}
]
var LeftNavMenu = React.createClass({
    render(){
        return (
            <LeftNav style={{paddingTop:'72px',overflow: 'auto', background:'rgba(0,0,0,0.05)'}} ref="leftNav" docked={true} >
                <Accordion>
                    {menuItems.map((item, key)=>{
                        return(
                            <AccordionItem  title={<div className="m-item-container"><Ink />{item.text}</div>} key={key}>
                                HOLA K ASE
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </LeftNav>
        )
    }
})

export default LeftNavMenu
