/**
 *
 * UpdateCategoryInfo
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
import { makeSelectUpdateSectionInfo, makeSelectSectionList, makeSelectSectionName, makeSelectStudentInfo } from './selectors';
import { setSectionList, changeSectionName, getStudentInfo } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import ContentWrapper from 'components/Layout/ContentWrapper';
import BreadCumbsForThree from 'components/BreadCumbsForThree';
import { Well, ControlLabel, FormControl, FormGroup, Row, Col, Jumbotron, DropdownButton, MenuItem, Button } from 'react-bootstrap';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import SearchButton from 'components/Buttons/SearchButton';
import StudentListForCategory from './StudentListForCategory';
import 'font-awesome/css/font-awesome.css';
import ProcessButton from 'components/Buttons/ProcessButton';

export class UpdateCategoryInfo extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let sectonListOptions = [];

    if (this.props.sectionList && this.props.sectionList.length) {
      sectonListOptions = this.props.sectionList.map((item) => ({
        value: item.classConfigId,
        label: item.classShiftSection,
      }))
    }

    let content = 'No data available';
    console.log('fouzia');
    console.log(this.props.studentInfo);
    if (this.props.studentInfo) {
      content = <StudentListForCategory info={this.props.studentInfo} />
    }
    return (
      <div>
        <Helmet>
          <title>UpdateCategoryInfo</title>
          <meta name="description" content="Description of UpdateCategoryInfo" />
        </Helmet>
        <ContentWrapper>

          <BreadCumbsForThree breadpagetitle="Student ID" breadlavel1="Student" breadlavel2="Update" breadlavel3="Category Info" />
          <div className="panel panel-default">
            <div className="panel-heading config-header">
              <div className="panel-title">Student Category Update</div>
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
                    <Button type='button' bsClass='btn btn-green' className='buttonsize dynamicHover' ><i className='fa fa-file-excel-o'> Print Excel</i></Button>
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

UpdateCategoryInfo.propTypes = {
  sectionList: PropTypes.any,
  onChangeSectionList: PropTypes.func,
  selectedSectionList: PropTypes.any,
  sectionname: PropTypes.any,
  onSubmitForm: PropTypes.func,
  studentInfo: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  //updatecategoryinfo: makeSelectUpdateCategoryInfo(),
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

const withReducer = injectReducer({ key: 'updateCategoryInfo', reducer });
const withSaga = injectSaga({ key: 'updateCategoryInfo', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(UpdateCategoryInfo);
