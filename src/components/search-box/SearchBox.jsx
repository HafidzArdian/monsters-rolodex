import './search-box.styles.css';

import React from 'react';

export const SearchBox = props => (
  <input
    className='search-box'
    type='search'
    placeholder='search monsters'
    onChange={props.onSearchChange}
  />
);