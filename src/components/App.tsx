import React from 'react';

import logo from '@assets/react-logo.png';
import logoSvg, { ReactComponent as Logo } from '@assets/react-logo.svg';

export const App = () => (
  <div>
    <h1>Test</h1>
    <img src={logo} style={{ width: '250px' }} alt="" />
    <Logo width="150" height="150" />
    <img src={logoSvg} style={{ width: '250px' }} alt="" />
  </div>
);
