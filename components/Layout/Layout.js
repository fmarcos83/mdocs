/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { PropTypes } from 'react';
import './Layout.scss';
import Navigation from '../Navigation';
import LeftNavMenu from '../LeftNavMenu/LeftNavMenu';

function Layout({ children }) {
  return (
    <div className="Layout">
      <Navigation />
      <LeftNavMenu />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
