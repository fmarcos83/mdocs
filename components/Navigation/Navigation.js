/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React from 'react';
import './Navigation.scss';
import Tabs from "material-ui/lib/tabs/tabs";
import Tab from "material-ui/lib/tabs/tab";
import Link from '../Link';

function Navigation() {
  var tabs = [
      {name:'HOME',link:'/'},
      {name:'ABOUT',link:'/about'}
  ];
  var handleClick = function(){
      window.Link = Link;
  };
  var tabValues = tabs.map(function(linkValue, key){
    return (
        <Tab href={linkValue.link} onClick={Link.handleClick} key={key} label={linkValue.name}></Tab>
    );
  });
  return (
      <Tabs>
        {tabValues}
      </Tabs>
  );
}

export default Navigation;
