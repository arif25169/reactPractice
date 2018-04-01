
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
import { makeSelectUpdateStudentId, makeSelectclassConfigId, makeSelectSectionList, makeSelectSectionName, makeSelectStudentInfo } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { setSectionList, changeSectionName, submitStudentForm, saveId } from './actions';
import ContentWrapper from 'components/Layout/ContentWrapper';
import BreadCumbsForThree from 'components/BreadCumbsForThree';
import { Well, ControlLabel, FormControl, FormGroup, Row, Col, Jumbotron, DropdownButton, MenuItem, Button } from 'react-bootstrap';
import SearchButton from 'components/Buttons/SearchButton';
import HeadingTitle from 'components/HeadingTitle';
import UpdateButton from 'components/Buttons/UpdateButton';
import StudentList from './StudentList';

export class UpdateStudentId extends React.Component {

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
      content = <StudentList info={this.props.studentInfo} />
    }

    return (
      <div>

        <ContentWrapper>

          <BreadCumbsForThree breadpagetitle="Student ID" breadlavel1="Student" breadlavel2="Update" breadlavel3="Student ID" />

          <div className="panel panel-default">
            <div className="panel-heading config-header">
              <div className="panel-title"> Update Student ID</div>
            </div>
            <div className="panel-body">
              <form method="post" onSubmit={this.props.onSubmitForm} className="form-horizontal">
                <Row>
                  <Col lg={2}></Col>
                  <Col lg={1}><ControlLabel>Section<span className="requiredStar">*</span></ControlLabel></Col>
                  <Col lg={5}>
                    <Select
                      name="form-field-name"
                      value={this.props.classConfigId}
                      onChange={this.props.onChangeSectionList}
                      options={sectonListOptions}
                    />
                  </Col>
                  <Col lg={1}><SearchButton /> </Col>

                </Row>
			  <br /><br />

              </form>
              <Row>
                <div>
                  {content}
                  <br />
                  <div className="panel-footer"></div>

                </div>

               
              {/* </div> */}


              </Row>
            </div>

          </div>

        </ContentWrapper>
      </div>
    );
  }
}

UpdateStudentId.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  sectionList: PropTypes.any,
  onChangeSectionList: PropTypes.func,
  selectedSectionList: PropTypes.any,
  classConfigId: PropTypes.any,
  onSubmitForm: PropTypes.func,
  studentInfo: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  sectionList: makeSelectSectionList(),
  sectionname: makeSelectSectionName(),
  studentInfo: makeSelectStudentInfo(),
  classConfigId: makeSelectclassConfigId(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeSectionList: (evt) => dispatch(saveId(evt.value)),

    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault)
        evt.preventDefault();
      dispatch(submitStudentForm());
    },

  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'updateStudentId', reducer });
const withSaga = injectSaga({ key: 'updateStudentId', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(UpdateStudentId);
