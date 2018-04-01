/**
 *
 * Photo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Select from 'react-select';
import ContentWrapper from 'components/Layout/ContentWrapper';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPhoto from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import SearchButton from 'components/Buttons/SearchButton';
import BreadCumbsForThree from 'components/BreadCumbsForThree';
import UpdateButton from 'components/Buttons/UpdateButton';
import { ControlLabel, Tabs, Tab, Nav, NavItem, Grid, Row, Col, Panel, Accordion, FormControl, Button, ButtonGroup, ButtonToolbar, SplitButton, DropdownButton, OverlayTrigger, FormGroup, InputGroup, Dropdown, MenuItem } from 'react-bootstrap';
import {setClassList, saveClass, setStudentInfoList, submitClassForm} from './actions';
import {makeSelectClassList,makeSelectedClassId,makeSelectInfoList} from './selectors';
import ShowPhotoTable from '../ShowPhotoTable';

export class Photo extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {

    let classListOptions = [];

    if (this.props.classList && this.props.classList.length) {
      classListOptions = this.props.classList.map((item) => ({
        value: item.id,
        label: item.name,
      }));
    }

    let content = 'No data available';
    if (this.props.infoList) {
      console.log("hello");
      content = <ShowPhotoTable info={this.props.infoList} />
    }

    return (
      <div>
        <Helmet>
          <title>Photo</title>
          <meta name="description" content="Description of Photo" />
        </Helmet>
        {/* <FormattedMessage {...messages.header} /> */}

          <ContentWrapper>
          <BreadCumbsForThree breadpagetitle="Information" breadlavel1="Student" breadlavel2="Update" breadlavel3="Photo" />
          <div id="panelDemo7" className="panel panel-default">
            <div className="panel-heading config-header"><b>Student Quick Update</b></div>
            <div className="panel-body">   

                 <form method="post" onSubmit={this.props.onSubmitForm} className="form-horizontal">
                 <Row>
                <Col lg={2}  md={2} sm={12}> </Col>
                <Col lg={1}  md={1} sm={12}>
                <ControlLabel>Class<span className="text-danger">*</span></ControlLabel>
                </Col>
                <Col lg={5}  md={6} sm={12}>
                    <FormGroup controlId="formControlsSelect">
                    <Select
                       name="form-field-name"
                       value={this.props.id}
                       onChange={this.props.onChangeClass}
                       options={classListOptions} />
                     </FormGroup>               
                </Col>
                <Col lg={1}><SearchButton /> </Col>
                
                <Col lg={3}  md={3} sm={12}>
                </Col>
              </Row>
			  <Row>
			  <Col lg={6} md={6} sm={6}>
			  </Col>
			   
			  </Row>
        </form>
              <br />
              <div>
              {content}
                 <br/>
                </div>
                
            </div>
            <div className="panel-footer"></div>
          </div>
        </ContentWrapper>
      </div>
    );
  }
}

Photo.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func,
  onChangeClass: PropTypes.func,
  id: PropTypes.any
};

const mapStateToProps = createStructuredSelector({
  // photo: makeSelectPhoto(),
  classList: makeSelectClassList(),
  id: makeSelectedClassId(),
  infoList: makeSelectInfoList(),

});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onChangeClass: (evt) => {dispatch(saveClass(evt.value));},

    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(submitClassForm());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'photo', reducer });
const withSaga = injectSaga({ key: 'photo', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Photo);
