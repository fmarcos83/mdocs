/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React from 'react';
import './Navigation.scss';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';
import Location from '../../core/Location';

var slideIndex = "0"
var handleClick = function(index, event){
    let allowTransition = true;
    let path='/'
    event.preventDefault();
    slideIndex = index
    switch(index){
        case "0":
            path='/'
        break;
        case "1":
            path='/start'
        break;
        case "2":
            path='/guides'
        break;
        case "3":
            path='/developer'
        break;
        default:
            path='/'
        break;
    }
    this.forceUpdate();
    Location.pushState(null,path);
}
var Navigation = React.createClass({
    render(){
        return (
              <AppBar
                  showMenuIconButton={false}
                  title={
                        <div>
                            <img className="m-logo-selector" key={0} src={require("./m_logo_white.svg")}></img>
                            <span className="m-brand-selector" key={1}>docs</span>
                        </div>
                  }
                  iconElementRight={
                      <div>
                          <Tabs value={slideIndex}  tabItemContainerStyle={{height:'64px'}}>
                            <Tab onClick={handleClick.bind(this,"0")} value="0" label="BIG PICTURE"></Tab>
                            <Tab onClick={handleClick.bind(this,"1")} value="1" label="GETTING STARTED"></Tab>
                            <Tab onClick={handleClick.bind(this,"2")} value="2" label="GUIDES"></Tab>
                            <Tab onClick={handleClick.bind(this,"3")} value="3" label="DEVELOPER"></Tab>
                          </Tabs>
                      </div>
                  }
              />
          );
    }
});
export default Navigation;
