/**
 *
 * StudentActiveInactive
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import ContentWrapper from 'components/Layout/ContentWrapper';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectSelectValue, makeSelectStudentInfo, makeSelectStudentData, makeSelectSectionList, makeSelectSectionName } from './selectors';
import { changeSelectValue, setSectionList, changeSectionName, getStudentInfo, getStudentData } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Well, ControlLabel, FormControl, FormGroup, Row, Col, Jumbotron, DropdownButton, MenuItem, Button } from 'react-bootstrap';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import BreadCumbsForThree from 'components/BreadCumbsForThree';
import { DataTable } from 'primereact/components/datatable/DataTable';
import { Column } from 'primereact/components/column/Column';
import { InputText } from 'primereact/components/inputtext/InputText';
import { Dropdown } from 'primereact/components/dropdown/Dropdown';
import { Calendar } from 'primereact/components/calendar/Calendar';
import StudentListForActive from './StudentListForActive';
import StudentListForInactive from './StudentListForInactive';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/themes/redmond/theme.css';
import 'font-awesome/css/font-awesome.css';
import ProcessButton from 'components/Buttons/ProcessButton';
import SearchButton from 'components/Buttons/SearchButton';

export class StudentActiveInactive extends React.Component {

  changeFunc(event) {
    var selectBox = document.getElementById("selectBox");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    if (selectedValue == 1) {
      $('#showTbl1').hide();
      $('#showTbl2').show();
      // $('#commonDiv').hide();
      $('#printBtnDiv').hide();
      $('#inactivetopDiv').show();
    } else if (selectedValue == 0) {
      $('#showTbl1').show();
      $('#showTbl2').hide();
      $('#commonDiv').show();
      $('#inactivetopDiv').hide();
      $('#printBtnDiv').show();
    }
  }
  render() {

    let sectonListOptions = [];
    if (this.props.sectionList && this.props.sectionList.length) {
      sectonListOptions = this.props.sectionList.map((item) => ({
        value: item.classConfigId,
        label: item.classShiftSection,
      }))
    }


    let content = 'No data available';
    let content1 = 'No data available';
    if (this.props.studentInfo) {
      content = <StudentListForActive info={this.props.studentInfo} />
    }

    if (this.props.studentData) {
      content1 = <StudentListForInactive info={this.props.studentData} />
    }

    return (
      <div>
        <Helmet>
          <title>StudentActiveInactive</title>
          <meta name="description" content="Description of StudentActiveInactive" />
        </Helmet>
        <ContentWrapper>

          <BreadCumbsForThree breadpagetitle="Student ID" breadlavel1="Student" breadlavel2="Update" breadlavel3="Student Active / Inactive" />
          <div className="panel panel-default">
            <div className="panel-heading config-header">
              <div className="panel-title">Student Category Update</div>
            </div>
            <div className="panel-body">
              <div id="commonDiv">
                <Row>
                  <Col lg={1}></Col>
                  <Col lg={2}><ControlLabel>Choose Active / Inactive </ControlLabel></Col>
                  <Col lg={5}>
                    <select id="selectBox" className="form-control" onChange={this.changeFunc}>
                      <option value="0">INACTIVE</option>
                      <option value="1" >ACTIVE</option>
                    </select>
                  </Col>

                </Row>
                <br /><br />
              </div>
              <div id="inactivetopDiv" style={{ display: 'none' }}>
                <form method="post" onSubmit={this.props.onSubmitForm} className="form-horizontal">
                  <Row>
                    <Col lg={1}></Col>
                    <Col lg={2}><ControlLabel>Choose Section<span className="requiredStar">*</span></ControlLabel></Col>
                    <Col lg={5}>
                      <Select name="form-field-name"
                        value={this.props.sectionname}
                        onChange={this.props.onChangeSectionList}
                        options={sectonListOptions} />
                    </Col>
                    <Col lg={1}><SearchButton /> </Col>
                    <Col lg={1}> </Col>
                    <Col lg={1}>
                      <Button type='button' bsClass='btn btn-green' className='buttonsize dynamicHover' ><i className='fa fa-file-excel-o'> Print Excel</i></Button>
                    </Col>
                  </Row>
                  <br /><br />

                </form>

              </div>
              <Row>
                <div>
                  <div id="showTbl1">
                    {content}
                    <br />
                  </div>
                  <div id="showTbl2" style={{ display: 'none' }}>
                    {content1}
                    <br />
                  </div>
                  <div id="printBtnDiv">
                    <Row>
                      <Col lg={5} md={5} sm={5}></Col>
                      <Col lg={2} md={2} sm={2}>
                        <Button type='button' bsClass='btn btn-green' className='buttonsize dynamicHover' ><i className='fa fa-file-excel-o'> Print Excel</i></Button>
                      </Col>
                      <Col lg={4} md={4} sm={4}></Col>
                    </Row>
                  </div>
                  <div className="panel-footer"></div>
                </div>
              </Row>

            </div>

          </div>

        </ContentWrapper>
      </div>
    );
  }
}

StudentActiveInactive.propTypes = {
  onChangeVal: PropTypes.func,
  selectvalue: PropTypes.any,
  studentInfo: PropTypes.any,

  sectionList: PropTypes.any,
  onChangeSectionList: PropTypes.func,
  selectedSectionList: PropTypes.any,
  sectionname: PropTypes.any,
  onSubmitForm: PropTypes.func,
  studentData: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  selectvalue: makeSelectSelectValue(),
  studentInfo: makeSelectStudentInfo(),

  sectionList: makeSelectSectionList(),
  sectionname: makeSelectSectionName(),
  studentData: makeSelectStudentData(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeVal: (evt) => dispatch(changeSelectValue(evt.value)),
    onChangeSectionList: (evt) => dispatch(changeSectionName(evt.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault)
        evt.preventDefault();
      dispatch(getStudentData());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'studentActiveInactive', reducer });
const withSaga = injectSaga({ key: 'studentActiveInactive', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(StudentActiveInactive);
