import React from 'react';
import LeftNav from 'material-ui/lib/left-nav'
import List from 'material-ui/lib/lists/list'
import ListDivider from 'material-ui/lib/lists/list-divider'
import ListItem from 'material-ui/lib/lists/list-item'
import {Accordion, AccordionItem}from 'react-sanfona'
import Ink from 'react-ink';
import './LeftNavMenu.scss'

let LeftNavMenu = React.createClass({
    render(){
        return (
            <LeftNav style={{paddingTop:'72px',overflowY: 'auto', background:"rgba(0,0,0,0.05)"}} ref="leftNav" docked={true} >
                <Accordion>
                    <AccordionItem  title={<div className="m-item-container"><Ink />INTRO</div>}>
                        <ul>
                            <li><a><span>The Big Picture</span></a></li>
                            <li><a><span>Major Concepts</span></a></li>
                            <li><a><span>Get your own store</span></a></li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem  title={<div className="m-item-container"><Ink />THEME</div>}>
                        <ul>
                            <li><a><span>Build a theme</span></a></li>
                            <li><a><span>Build a widget</span></a></li>
                            <li><a><span>Looping through records</span></a></li>
                            <li><a><span>Deploying your app</span></a></li>
                            <li><a><span>Inheritence</span></a></li>
                            <li><a><span>Hypr</span></a></li>
                            <li><a><span>Making it fast</span></a></li>
                            <li><a><span>Optimizing for seo</span></a></li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem  title={<div className="m-item-container"><Ink />APP DEVELOPMENT</div>}>
                        <ul>
                            <li><a><span>Intro to apps</span></a></li>
                            <li><a><span>Build an app</span></a></li>
                            <li><a><span>Webhooks</span></a></li>
                            <li><a><span>Configuration UI</span></a></li>
                            <li><a><span>Authentication</span></a></li>
                            <li><a><span>Arc.js</span></a></li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem  title={<div className="m-item-container"><Ink />REST API REFERENCE</div>}>
                        <ul>
                            <li>
                                <a><span className="m-active">Commerce</span></a>
                                <ul>
                                    <li>
                                        <a><span>admin</span></a>
                                        <ul>
                                            <li>
                                                <a><span className="m-active">carts</span></a>
                                                <ul>
                                                    <li><a><span>cartCoupons</span></a></li>
                                                    <li><a><span>cartItems</span></a></li>
                                                    <li>
                                                        <a><span className="m-active">cartExtendedProperties</span></a>
                                                        <ul>
                                                            <li><a><span>cartTax</span></a></li>
                                                            <li><a><span>cartShipping</span></a></li>
                                                            <li><a><span>cartGiftWrapping</span></a></li>
                                                            <li><a><span>cartDelivery</span></a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem  title={<div className="m-item-container"><Ink />SDKS</div>}>
                    </AccordionItem>
                    <AccordionItem  title={<div className="m-item-container"><Ink />SAMPLES</div>}>
                    </AccordionItem>
                </Accordion>
            </LeftNav>
        )
    }
})

export default LeftNavMenu
