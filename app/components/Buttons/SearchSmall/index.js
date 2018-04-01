/**
*
* SearchSmall
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class SearchSmall extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
           <button type="button" className="btn btn-sm btn-green dynamicHover" onChange={this.props.onChange}>
              <em className="fa fa-search"></em>
           </button>
      </div>
    );
  }
}

SearchSmall.propTypes = {

};

export default SearchSmall;
