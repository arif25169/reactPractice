/**
*
* StudentListForCategory
*
*/

import React from 'react';
// import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Row, Button, Col } from 'react-bootstrap';
import { DataTable } from 'primereact/components/datatable/DataTable';
import { Column } from 'primereact/components/column/Column';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';
import { InputText } from 'primereact/components/inputtext/InputText';

class StudentListForCategory extends React.Component {
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
       {/* <DataTable value={this.props.info} responsive={true} header={'Student List'} paginator={true} rows={10} rowsPerPageOptions={[5, 10, 20]}
             selection={this.state.selectedStudent} onSelectionChange={(e) => this.setState({ selectedStudent: e.data })} editable={true}>
            <Column selectionMode="multiple" header="Mark *" style={{ textAlign: 'center', width: '70px' }}/>
            <Column field="studentId" header="Student ID" style={{ textAlign: 'center' }} filter={true} />
            <Column field="studentRoll" header="Roll" style={{ textAlign: 'center' }} filter={true} />
            <Column field="studentName" header="Student Name" style={{ textAlign: 'center' }} filter={true} />
            <Column field="studentGender" header="Gender" style={{ textAlign: 'center' }} filter={true} />
            <Column field="studentReligion" header="Religion" style={{ textAlign: 'center' }} filter={true} />        
          </DataTable> */}
      </div>
    );
  }
}

StudentListForCategory.propTypes = {

};

export default StudentListForCategory;
