/**
*
* StudentListForActive
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

class StudentListForActive extends React.Component { 
  actionbtn() {
    return <Button type="button"  onClick={this.addNewRow} style={{ width: '90px' }} className="btn btn-block btncol"><i className="fa fa-check"></i> Enable</Button>
  }
  deletebtn() {
    return  <Button onClick={this.delete} style={{ width: '50px' }} className="btn btn-warning"><i className="fa fa-trash"></i></Button>
  }
  render() {
    return (
      <div>
      <DataTable value={this.props.info} responsive={true} header={'Student Inactive Table'} paginator={true} rows={10} rowsPerPageOptions={[5, 10, 20]} editable={true}>
          <Column field="studentId" header="Student ID" style={{ textAlign: 'center' }} filter={true} />
          <Column field="studentRoll" header="Roll" style={{ textAlign: 'center' }} filter={true} />
          <Column field="studentName" header="Name" style={{ textAlign: 'center' }} filter={true} />
          <Column field="studentGender" header="Class" style={{ textAlign: 'center' }} filter={true} />
          <Column field="studentReligion" header="Shift" style={{ textAlign: 'center' }} filter={true} />    
          <Column field="studentReligion" header="Section" style={{ textAlign: 'center' }} filter={true} /> 
          <Column field="guardianMobile" header="Mobile" style={{ textAlign: 'center' }} filter={true} /> 
          <Column field="" header="Action" style={{ textAlign: 'center', width: '100px' }} body={this.actionbtn}/>   
          <Column field="" header="Delete" style={{ textAlign: 'center', width: '80px' }}  body={this.deletebtn}/>       
        </DataTable>
    </div>
    );
  }
}

StudentListForActive.propTypes = {

};

export default StudentListForActive;
