/**
*
* EditSmall
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class EditSmall extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
          <button type="button" className="btn btn-sm btn-green dynamicHover" onSubmit={this.props.onSubmit}>
              <em className="fa fa-edit"></em>
           </button>
      </div>
    );
  }
}

EditSmall.propTypes = {

};

export default EditSmall;
