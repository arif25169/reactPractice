/**
*
* DownloadButton
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import {Button} from 'react-bootstrap';

class DownloadButton extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Button type='submit' bsClass='btn btn-green' className='buttonsize dynamicHover' href={this.props.link} onClick={this.props.onClick}><i className='fa fa-download '> Download</i></Button>
      </div>
    );
  }
}

DownloadButton.propTypes = {

};

export default DownloadButton;
