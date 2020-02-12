import React from 'react';

import DateContainer from './Date';
import CheckNumber from './CheckNumber';
import GovernmentInfo from './GovernmentInfo';

import '../../assets/headerScss.scss';


const Header = () => (
  <header>
    <DateContainer />
    <CheckNumber />
    <GovernmentInfo />
  </header>
);

export default Header;
