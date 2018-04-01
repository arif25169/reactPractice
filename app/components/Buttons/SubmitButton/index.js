
import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Button } from 'react-bootstrap';

import { FormattedMessage } from 'react-intl';
import messages from './messages';


class SubmitButton extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        {/* <input type="submit" onSubmit={this.props.onSubmitForm} value={this.props.label} /> */}
        <Button bsStyle='primary' className="dynamicHover" onClick={this.props.onSubmitForm}>{this.props.label}</Button>
      
      </div>
    );
  }
}

SubmitButton.propTypes = {
  onSubmitForm: PropTypes.func,
  label: PropTypes.string,
};

export default SubmitButton;
