/**
*
* BreadCumbs
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Panel, Grid, Row, Col, Dropdown, MenuItem, Button, ButtonGroup, ButtonToolbar, SplitButton, DropdownButton } from 'react-bootstrap';


class BreadCumbsForThree extends React.Component {
  render() {
    var breadseparetor = ">";
    return (
      <Row>
        <Col lg={12}>
          <div className="panel panel-default">
            <div className="panel-heading  config-panel netipanelhead">
              <h6>
			  {/*<b>{this.props.breadpagetitle}</b>*/}
                <ol className="breadcrumb netiBread">
                  <li><a href="#"><i className="fa fa-home" /></a></li>
                  <li> <a href="{this.props.breadaction1}">{this.props.breadlavel1}</a></li>
                  <li> <a href="{this.props.breadaction2}">{this.props.breadlavel2} </a></li>
                  <li className="Active"> {this.props.breadlavel3}</li>
                </ol>
              </h6>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}
BreadCumbsForThree.propTypes = {

};

export default BreadCumbsForThree;
