/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { PropTypes } from 'react';
import './Layout.scss';
import Navigation from '../Navigation';
import LeftNavMenu from '../LeftNavMenu/LeftNavMenu';
import Theme from '../Theme/Theme'
import ThemeManager from 'material-ui/lib/styles/theme-manager'

var Layout = React.createClass({
  propTypes: {
    children: PropTypes.element.isRequired
  },
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext() {
    return {
        muiTheme: ThemeManager.getMuiTheme(Theme)
    };
  },
  render(){
    return (
        <div className="Layout">
          <Navigation />
          <LeftNavMenu />
          <div className="m-content">
              {this.props.children}
          </div>
        </div>
    );
  }
});
export default Layout;
