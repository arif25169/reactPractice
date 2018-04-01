/**
 *
 * StudentList
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
import makeSelectStudentList from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Row, Button, Col } from 'react-bootstrap';
import { DataTable } from 'primereact/components/datatable/DataTable';
import { Column } from 'primereact/components/column/Column';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';
import { InputText } from 'primereact/components/inputtext/InputText';

export class StudentList extends React.Component { // eslint-disable-line react/prefer-stateless-function

	constructor() {
    super();
    this.state = {};
    this.updateEditor = this.updateEditor.bind(this);
  }
  inputTextEditor(props, field) {
    return <InputText type="text" value={props.rowData.customStudentId} />;
  }
  updateEditor(props) {
    return this.inputTextEditor(props, 'customStudentId');
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>StudentList</title>
          <meta name="description" content="Description of StudentList" />
        </Helmet>
        <div className="content-section implementation">
          <DataTable value={this.props.info} responsive={true} header={'Student List'} paginator={true} rows={10} rowsPerPageOptions={[5, 10, 20]}
            selection={this.state.selectedStudent} onSelectionChange={(e) => this.setState({ selectedStudent: e.data })} editable={true}>
            <Column selectionMode="multiple" header="Mark *" style={{ textAlign: 'center', width: '70px' }} />
            <Column field="studentId" header="Student ID" style={{ textAlign: 'center' }} />
            <Column field="studentName" header="Student Name" style={{ textAlign: 'center' }} />
            <Column field="studentRoll" header="Roll" style={{ textAlign: 'center' }} />
            <Column field="customStudentId" header="Updated Student ID" editor={this.updateEditor} style={{ textAlign: 'center' }} />
            <Column field="" header="Registration ID" style={{ textAlign: 'center' }} />          
          </DataTable>
        </div>
        <br/>
        <Row>
          <Col lg={9} md={6} sm={6}></Col>
          {/* <Col lg={2}></Col>
          <Col lg={2}></Col> */}
          <Col lg={2} md={6} sm={6}>
            <Button data-notify="" data-message="Student ID Successfully Updated" data-options="{&quot;status&quot;:&quot;success&quot;, &quot;pos&quot;:&quot;top-right&quot;}" bsClass="btn btn-green" className={'mb-sm mr-sm btn-sm btn btn-green pull-right buttonsize fa fa-edit'}> Update</Button>
          </Col>
          <Col lg={1}></Col>
        </Row>
      </div>
    );
  }
}

StudentList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  studentlist: makeSelectStudentList(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'studentList', reducer });
const withSaga = injectSaga({ key: 'studentList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(StudentList);
