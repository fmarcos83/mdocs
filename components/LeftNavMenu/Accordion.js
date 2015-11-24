import React from 'react';
import Ink from 'react-ink';
import {Accordion, AccordionItem}from 'react-sanfona'

let AccordionWrapper = React.createClass({
    render(){
        return(
            <div>
               <Accordion>
                    <AccordionItem  title={<div className="m-item-container"><Ink />INTRO</div>}>
                        <ul>
                            <li><a><Ink /><span>The Big Picture</span></a></li>
                            <li><a><Ink /><span>Major Concepts</span></a></li>
                            <li><a><Ink /><span>Get your own store</span></a></li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem  title={<div className="m-item-container"><Ink />THEME</div>}>
                        <ul>
                            <li><a><Ink /><span>Build a theme</span></a></li>
                            <li><a><Ink /><span>Build a widget</span></a></li>
                            <li><a><Ink /><span>Looping through records</span></a></li>
                            <li><a><Ink /><span>Deploying your app</span></a></li>
                            <li><a><Ink /><span>Inheritence</span></a></li>
                            <li><a><Ink /><span>Hypr</span></a></li>
                            <li><a><Ink /><span>Making it fast</span></a></li>
                            <li><a><Ink /><span>Optimizing for seo</span></a></li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem  title={<div className="m-item-container"><Ink />APP DEVELOPMENT</div>}>
                        <ul>
                            <li><a><Ink /><span>Intro to apps</span></a></li>
                            <li><a><Ink /><span>Build an app</span></a></li>
                            <li><a><Ink /><span>Webhooks</span></a></li>
                            <li><a><Ink /><span>Configuration UI</span></a></li>
                            <li><a><Ink /><span>Authentication</span></a></li>
                            <li><a><Ink /><span>Arc.js</span></a></li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem  title={<div className="m-item-container"><Ink />REST API REFERENCE</div>}>
                        <ul>
                            <li>
                                <a><Ink /><span className="m-active">Commerce</span></a>
                                <ul>
                                    <li>
                                        <a><Ink /><span>admin</span></a>
                                        <ul>
                                            <li>
                                                <a><Ink /><span className="m-active">carts</span></a>
                                                <ul>
                                                    <li><a><Ink /><span>cartCoupons</span></a></li>
                                                    <li><a><Ink /><span>cartItems</span></a></li>
                                                    <li>
                                                        <a><Ink /><span className="m-active">cartExtendedProperties</span></a>
                                                        <ul>
                                                            <li><a><Ink /><span>cartTax</span></a></li>
                                                            <li><a><Ink /><span>cartShipping</span></a></li>
                                                            <li><a><Ink /><span>cartGiftWrapping</span></a></li>
                                                            <li><a><Ink /><span>cartDelivery</span></a></li>
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
            </div>
        );
    }
});
export default AccordionWrapper
