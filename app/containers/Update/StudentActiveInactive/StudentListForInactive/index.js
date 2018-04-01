/**
*
* StudentListForInactive
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

class StudentListForInactive extends React.Component { 
  inactiveactionbtn() {
    return <Button type="button"  onClick={this.addNewRow} style={{ width: '90px' }} className="btn btn-block btncol"><i className="fa fa-ban"></i> Disable</Button>
  }
  render() {
    return (
      <div>
      <DataTable value={this.props.info} responsive={true} header={'Student Active Table'} paginator={true} rows={10} rowsPerPageOptions={[5, 10, 20]} editable={true}>
          <Column field="studentId" header="Student ID" style={{ textAlign: 'center' }} filter={true} />
          <Column field="studentRoll" header="Roll" style={{ textAlign: 'center' }} filter={true} />
          <Column field="studentName" header="Student Name" style={{ textAlign: 'center' }} filter={true} />
          <Column field="studentGender" header="Gender" style={{ textAlign: 'center' }} filter={true} />
          <Column field="studentReligion" header="Religion" style={{ textAlign: 'center' }} filter={true} />    
          <Column field="guardianMobile" header="Mobile" style={{ textAlign: 'center' }} filter={true} /> 
          <Column field="" header="Action" style={{ textAlign: 'center', width: '100px' }} body={this.inactiveactionbtn}/>    
        </DataTable>
    </div>
    );
  }
}

StudentListForInactive.propTypes = {

};

export default StudentListForInactive;
