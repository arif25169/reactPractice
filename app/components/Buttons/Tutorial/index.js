/**
*
* Tutorial
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import {Button} from 'react-bootstrap';

class Tutorial extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <a href={this.props.link}>
        <Button bsClass='btn btn-green' className='fa fa-tumblr dynamicHover'/> 
        </a>
      </div>
    );
  }
}

Tutorial.propTypes = {

};

export default Tutorial;
