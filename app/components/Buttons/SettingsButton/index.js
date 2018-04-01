/**
*
* SettingsButton
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import {Button} from 'react-bootstrap';

class SettingsButton extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Button type='submit' bsClass='btn btn-green' className='buttonsize dynamicHover' href={this.props.link}><i className='fa fa-cog' onSubmit={this.props.onSubmit}> Setting</i></Button>
      </div>
    );
  }
}

SettingsButton.propTypes = {

};

export default SettingsButton;
