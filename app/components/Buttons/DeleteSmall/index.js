/**
*
* DeleteSmall
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class DeleteSmall extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
          <button type="button" className="btn btn-sm btn-green dynamicHover" onSubmit={this.props.onSubmit}>
              <em className="fa fa-ban"></em>
           </button>
      </div>
    );
  }
}

DeleteSmall.propTypes = {

};

export default DeleteSmall;
