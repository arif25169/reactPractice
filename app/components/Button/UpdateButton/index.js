/**
*
* UpdateButton
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import {Button} from 'react-bootstrap';

class UpdateButton extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Button type='submit' data-notify={this.props.noti} data-message={this.props.dmsg} data-options={this.props.doption} bsClass='btn btn-green' className='buttonsize dynamicHover' href={this.props.link} onSubmit={this.props.onSubmit}><i className='fa fa-edit '> Update</i></Button>
      </div>
    );
  }
}

UpdateButton.propTypes = {

};

export default UpdateButton;
