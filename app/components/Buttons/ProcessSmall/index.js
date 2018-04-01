/**
*
* ProcessSmall
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class ProcessSmall extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <button type="button" className="btn btn-sm btn-green dynamicHover" onClick={this.props.onClick}>
              <em className="icon-settings"></em>
           </button>
      </div>
    );
  }
}

ProcessSmall.propTypes = {

};

export default ProcessSmall;
