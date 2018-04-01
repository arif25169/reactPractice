/**
 *
 * UpdateSectionInfo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import ContentWrapper from 'components/Layout/ContentWrapper';
import BreadCumbsForThree from 'components/BreadCumbsForThree';
import { Well, ControlLabel, FormControl, FormGroup, Row, Col, Jumbotron, DropdownButton, MenuItem, Button } from 'react-bootstrap';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import SearchButton from 'components/Buttons/SearchButton';
import StudentListForSection from './StudentListForSection';
import 'font-awesome/css/font-awesome.css';
import ProcessButton from 'components/Buttons/ProcessButton';
import { default as ExcelFile, ExcelSheet, ExcelColumn } from "react-data-export";
import { makeSelectUpdateSectionInfo, makeSelectSectionList, makeSelectSectionName, makeSelectStudentInfo } from './selectors';
import { setSectionList, changeSectionName, getStudentInfo } from './actions';


const multiDataSet = [
  {
    xSteps: 1,
    ySteps: 5,
    columns: ["Academic Year", "Class", "Shift", "Section", "Total Student"],
    data: [
      ["Johnson", 30000, "Male"],
    ]
  },
  {
    //will put space of 5 rows,
    columns: ["Student ID", "Name", "Roll", "Gender", "Religion", "Father's Name", "Mother's Name", "Mobile No", "Date of Birth"],
    data: [
      ["Johnson", "Finance"],
      ["Monika", "IT"],
      ["Konstantina", "IT Billing"],
      ["John", "HR"],
      ["Josef", "Testing"],
    ]
  }
];




export class UpdateSectionInfo extends React.Component {

  onClick(apiData) {
    return <div>
      <ExcelFile>
        <ExcelSheet dataSet={multiDataSet} name="Organization" />
      </ExcelFile>
    </div>;
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
    if (this.props.studentInfo) {
      content = <StudentListForSection info={this.props.studentInfo} />
    }

    
    //console.log('ffffff');
    //console.log(this.props.studentInfo);

  //   const datafunc = [
  //   {
  //     columns: ["Academic Year", "Class", "Shift", "Section", "Total Student"],
  //     data: [
  //       [
  //         this.props.studentInfo[0].academicYear,
  //         this.props.studentInfo[0].className,
  //         this.props.studentInfo[0].shiftName,
  //         this.props.studentInfo[0].sectionName,
  //         this.props.studentInfo.length
  //       ],
  //     ]
  //   },
  //   {
  //     xSteps: 1, // Will start putting cell with 1 empty cell on left most
  //     ySteps: 5, //will put space of 5 rows,
  //     columns: ["Student ID", "Name", "Roll", "Gender", "Religion", "Father's Name", "Mother's Name", "Mobile No", "Date of Birth"],
  //     data: [
  //       [
  //         this.props.studentInfo.studentId, 
  //         this.props.studentInfo.studentName,
  //         this.props.studentInfo.customStudentId,
  //         this.props.studentInfo.studentGender,
  //         this.props.studentInfo.studentReligion,
  //         this.props.studentInfo.fatherName,
  //         this.props.studentInfo.motherName,
  //         this.props.studentInfo.guardianMobile,
  //         this.props.studentInfo.studentDOB
  //     ]
  //   ]
  //   }
  // ];

    return (
      <div>
        <Helmet>
          <title>UpdateSectionInfo</title>
          <meta name="description" content="Description of UpdateSectionInfo" />
        </Helmet>
        <ContentWrapper>

          <BreadCumbsForThree breadpagetitle="Student ID" breadlavel1="Student" breadlavel2="Update" breadlavel3="Section Info" />

          <div className="panel panel-default">
            <div className="panel-heading config-header">
              <div className="panel-title"> Student Section Update</div>
            </div>
            <div className="panel-body">
              <form method="post" onSubmit={this.props.onSubmitForm} className="form-horizontal">
                <Row>
                  <Col lg={1}></Col>
                  <Col lg={2}><ControlLabel>Choose Section<span className="requiredStar">*</span></ControlLabel></Col>
                  <Col lg={5}>
                    <Select
                      name="form-field-name"
                      value={this.props.sectionname}
                      onChange={this.props.onChangeSectionList}
                      options={sectonListOptions}
                    />
                  </Col>
                  <Col lg={1}><SearchButton /> </Col>
                  <Col lg={1}> </Col>
                  <Col lg={1}>
                    <ExcelFile element={(<Button bsClass='btn btn-green' className='buttonsize dynamicHover'><i className='fa fa-file-excel-o'> Print Excel</i> </Button>)}>
                     
                      <ExcelSheet data={this.props.studentInfo} name="StudentData">
                        <ExcelColumn label="Student ID" value="studentId" />
                        <ExcelColumn label="Name" value="studentName" />
                        <ExcelColumn label="Roll" value="customStudentId" />
                        <ExcelColumn label="Gender" value="studentGender" />
                        <ExcelColumn label="Religion" value="studentReligion" />
                        <ExcelColumn label="Father's Name" value="fatherName" />
                        <ExcelColumn label="Mother's Name" value="motherName" />
                        <ExcelColumn label="Mobile No" value="guardianMobile" />
                        <ExcelColumn label="Date of Birth" value="studentDOB" />
                      </ExcelSheet>
                      <ExcelSheet data={this.props.studentInfo} name="fstTableData">
                        <ExcelColumn label="Academic Year" value="academicYear" />
                        <ExcelColumn label="Class" value="className" />
                        <ExcelColumn label="Shift" value="shiftName" />
                        <ExcelColumn label="Section" value="sectionName" />
                        <ExcelColumn label="Total Student" value="Total Student" />
                      </ExcelSheet>
                    </ExcelFile>
                    {/* <ExcelFile element={(<Button bsClass='btn btn-green' className='buttonsize dynamicHover'><i className='fa fa-file-excel-o'> Print Excel2</i> </Button>)}>
                      <ExcelSheet  dataSet={multiDataSet} name="Organization" />
                    </ExcelFile> */}
                    {/* <Button onClick={() => this.onClick(this.props.studentInfo)} bsClass='btn btn-green' className='buttonsize dynamicHover' ><i className='fa fa-file-excel-o'> Print Excel</i></Button> */}
                  </Col>
                </Row>
                <br /><br />

              </form>
              <Row>
                <div>
                  {content}
                  <br />
                  <Row>
                    <Col lg={5} md={5} sm={5}></Col>
                    <Col lg={2} md={2} sm={2}>
                      < ProcessButton />
                    </Col>
                    <Col lg={4} md={4} sm={4}></Col>
                  </Row>
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

UpdateSectionInfo.propTypes = {
  sectionList: PropTypes.any,
  onChangeSectionList: PropTypes.func,
  selectedSectionList: PropTypes.any,
  sectionname: PropTypes.any,
  onSubmitForm: PropTypes.func,
  studentInfo: PropTypes.any,

};

const mapStateToProps = createStructuredSelector({
  updatesectioninfo: makeSelectUpdateSectionInfo(),
  sectionList: makeSelectSectionList(),
  sectionname: makeSelectSectionName(),
  studentInfo: makeSelectStudentInfo(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeSectionList: (evt) => dispatch(changeSectionName(evt.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault)
        evt.preventDefault();
      dispatch(getStudentInfo());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'updateSectionInfo', reducer });
const withSaga = injectSaga({ key: 'updateSectionInfo', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(UpdateSectionInfo);
