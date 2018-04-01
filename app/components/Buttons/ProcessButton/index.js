/**
*
* ProcessButton
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import {Button} from 'react-bootstrap';

class ProcessButton extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
       <Button type='submit' bsClass='btn btn-green' className='buttonsize dynamicHover' href={this.props.link} onClick={this.props.onClick}><i className='icon-settings '> Process</i></Button>
      </div>
    );
  }
}

ProcessButton.propTypes = {

};

export default ProcessButton;
