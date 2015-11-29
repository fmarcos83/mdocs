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
import ScrollSpy from '../ScrollSpy/ScrollSpy';

var scrollSpy = {t:undefined}
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
        <div>
          <Navigation />
          <div>
              <LeftNavMenu>
                  <div className="Layout">
                    <div className="m-content">
                        {this.props.children}
                    </div>
                    <ScrollSpy items={['introduction','structure','initialization']}/>
                  </div>
              </LeftNavMenu>
          </div>
        </div>
    );
  }
});
export default Layout;
