/**
*
* Youtube
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import {Button} from 'react-bootstrap';

class Youtube extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
         <a href={this.props.link}>
         <Button bsClass='btn btn-green' className='icon-social-youtube dynamicHover'/>
         </a>
      </div>
    );
  }
}

Youtube.propTypes = {

};

export default Youtube;
