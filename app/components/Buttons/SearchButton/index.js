/**
*
* SearchButton
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import {Button} from 'react-bootstrap';

class SearchButton extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>

        <Button type='submit' bsClass='btn btn-green' className='buttonsize dynamicHover' href={this.props.link}  onClick={this.props.onClick} onChange={this.props.onChange} ><i className='fa fa-search '> Search</i></Button>
     
      </div>
    );
  }
}

SearchButton.propTypes = {

};

export default SearchButton;
