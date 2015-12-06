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
import IconMenu from 'material-ui/lib/menus/icon-menu';
import IconButton from 'material-ui/lib/icon-button';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Ink      from 'react-ink';
import {NavigationMoreVert} from 'material-ui/lib/svg-icons/index';

var slideIndex = "0"
var window = window || undefined
if(window){
    switch(window.location.path){
            case "/":
                slideIndex='0'
            break;
            case "/start":
                slideIndex='1'
            break;
            case "/guides":
                slideIndex='2'
            break;
            case "/developer":
                slideIndex='3'
            break;
            default:
                slideIndex='0'
            break;
        }
}
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
let handleLeftClick = function(){
    PubSub.publish('MENU_SHOW',true);
}
var Navigation = React.createClass({
    render(){
        return (
              <AppBar className="m-main-bar"
                  onLeftIconButtonTouchTap={handleLeftClick.bind(this)}
                  style={{zIndex:9999,position:'fixed',top:0,maxHeight:"64px"}}
                  title={
                        <div>
                            <img className="m-logo-selector" key={0} src={require("./m_logo_white.svg")}></img>
                            <span className="m-brand-selector" key={1}>docs</span>
                        </div>
                  }
                  iconElementRight={
                      <div>
                          <div className="m-expanded_menu">
                              <Tabs tabItemContainerStyle={{height:'64px'}} value={slideIndex}>
                                <Tab onClick={handleClick.bind(this,"0")} value="0" label="BIG PICTURE"></Tab>
                                <Tab onClick={handleClick.bind(this,"1")} value="1" label="GETTING STARTED"></Tab>
                                <Tab onClick={handleClick.bind(this,"2")} value="2" label="GUIDES"></Tab>
                                <Tab onClick={handleClick.bind(this,"3")} value="3" label="DEVELOPER"></Tab>
                              </Tabs>
                          </div>
                          <ul className="m-contextual-actions">
                              <li><a><Ink/>SEARCH</a></li>
                              <li><a><Ink/>COMMUNITY</a></li>
                              <li><a><Ink/>LOGIN</a></li>
                          </ul>
                      </div>
                  }
              />
          );
    }
});
export default Navigation;
