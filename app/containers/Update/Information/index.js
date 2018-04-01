/**
 *
 * Information
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
import 'react-select/dist/react-select.css';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {makeSelectSectionList,makeSelectSectionInfo,makeSelectStdBasicInfo, makeSelectSectionName} from './selectors';
import {changeSectionName, setSectionList,setSectionInfo,submitInformationForm,setCheckSelectedData} from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
// import ContentWrapper from 'components/Layout/ContentWrapper';
import { ControlLabel, Tabs, Tab, Nav, NavItem, Grid, Row, Col, Panel, Accordion, FormControl, Button, ButtonGroup, ButtonToolbar, SplitButton, DropdownButton, OverlayTrigger, FormGroup, InputGroup, Dropdown, MenuItem } from 'react-bootstrap';
import SearchButton from 'components/Buttons/SearchButton';
// import FormExtendedRun from 'components/Forms/FormExtended.run';
// import NotificationsRun from 'components/Elements/Notifications.run';
// import BreadCumbsForThree from 'components/BreadCumbsForThree';
import UpdateButton from 'components/Buttons/UpdateButton';

import ShowInformationData from '../ShowInformationData';


 export class Information extends React.Component {

  constructor() {
		super();
		this.state = {
			shown: true,
		};
	}	
	
	viewTable() {
		this.setState({
			shown: !this.state.shown
		});
    }


  render() {
    console.log(this.state);
    var hidden = {
			display: this.state.shown ? "none" : "block"
		}
  
    var shown = {
			display: this.state.shown ? "block" : "none"
		};

    let content = 'No data available';
    if (this.props.stdBasicInfo) {
      console.log("Hello Check Before Data");
      content = <ShowInformationData info={this.props.stdBasicInfo} onClickUpdateCB={this.props.onUpdate} />
    }

    let sectionListOptions = [];

    if (this.props.sectionList && this.props.sectionList.length) {
      sectionListOptions = this.props.sectionList.map((item) => ({
        value: item.id,
        label: item.classObject.name+"-"+item.shiftObject.name+"-"+item.sectionObject.name,
      }));
    }

    return (
      <div>
        <Helmet>
          <title>Information</title>
          <meta name="description" content="Description of Information" />
        </Helmet>
      
          {/* <BreadCumbsForThree breadpagetitle="Information" breadlavel1="Student" breadlavel2="Update" breadlavel3="Information" /> */}
          <div id="panelDemo7" className="panel panel-default">
            <div className="panel-heading config-header"><b>Student Information Update</b></div>
            <div className="panel-body">
            
              <Row>
                <Col lg={2}  md={2} sm={12}>
                </Col>
                <Col lg={1}  md={1} sm={12}>
                  <label>Section<span className='must'>*</span></label>
                </Col>
                <Col lg={3}  md={6} sm={12}>

                 <form method="post" onSubmit={this.props.onSubmitForm} className="form-horizontal">
           

                    <FormGroup controlId="formControlsSelect">
                    {/* <ControlLabel>Section <span className="requiredStar">*</span></ControlLabel> */}
                    <Select
                       name="form-field-name"
                       value={this.props.id}
                       onChange={this.props.onChangeSectionList}
                       options={sectionListOptions} />
                     </FormGroup>
               
                 </form>
                </Col>
                <Col lg={3} md={3} sm={12}> 
                <SearchButton onClick={this.viewTable.bind(this)} />
                </Col>
                <Col lg={3}  md={3} sm={12}>
                </Col>
              </Row>
              <br />
              <div style={hidden}>
                  {content}
                </div>
                
            </div>
            <div className="panel-footer"></div>
          </div>
       
      </div>
    );
  }
}

Information.propTypes = {
  //dispatch: PropTypes.func.isRequired,
  sectionList: PropTypes.any,
  id: PropTypes.any,
  onChangeSectionList: PropTypes.func,
  selectedSectionList: PropTypes.func,
  stdBasicInfo: PropTypes.any,
  sectionInfo: PropTypes.any,
  onSubmitForm: PropTypes.func,
  onUpdate: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  //information: makeSelectInformation(),
  sectionList: makeSelectSectionList(),
  id: makeSelectSectionName(),
  sectionInfo: makeSelectSectionInfo(),
  stdBasicInfo: makeSelectStdBasicInfo(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeSectionList: (evt) => dispatch(changeSectionName(evt.value)),


    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault)
        evt.preventDefault();
      dispatch(submitInformationForm());
    },
    onUpdate: (data) => {
      //console.log(data);

      if (data !== undefined && data.preventDefault)
      data.preventDefault();
    dispatch(setCheckSelectedData(data));

      // (evt) => dispatch(setCheckSelectedData(evt.value))
    }
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'information', reducer });
const withSaga = injectSaga({ key: 'information', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Information);
