
import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { DataTable } from 'primereact/components/datatable/DataTable';
import { Column } from 'primereact/components/column/Column';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css'; 
// import 'font-awesome/css/font-awesome.css';
import {InputText} from 'primereact/components/inputtext/InputText';
import {Dropdown} from 'primereact/components/dropdown/Dropdown';
import { ControlLabel, Tabs, Tab, Nav, NavItem, Grid, Row, Col, Panel, Accordion, FormControl, Button, ButtonGroup, ButtonToolbar, SplitButton, DropdownButton, OverlayTrigger, FormGroup, InputGroup, MenuItem } from 'react-bootstrap';
 class ShowInformationData extends React.Component { // eslint-disable-line react/prefer-stateless-function
        constructor() {
          super();

          this.state = { 
            info: null
        };

          this.state = {};  
          this.nameEditor = this.nameEditor.bind(this);
          this.fatherNameEditor = this.fatherNameEditor.bind(this);
          this.motherNameEditor = this.motherNameEditor.bind(this);
          this.contactEditor = this.contactEditor.bind(this);
          this.genderEditor = this.genderEditor.bind(this);
          this.religionEditor = this.religionEditor.bind(this);
          this.bloodEditor = this.bloodEditor.bind(this);
      }
      onEditorValueChange(props, value) {
        let updatedInfos = [...props.value];
        updatedInfos = [...props.value];
        updatedInfos[props.rowIndex][props.field] = value;
        this.setState({info: updatedInfos});     
    }
      inputTextEditor(props, field) {
        return 
        <InputText type="text" value={props.rowData.studentName }  onChange={(e) => this.onEditorValueChange(props, e.target.value)} />;
        
      }
     
     

      nameEditor(props) {
        return this.inputTextEditor(props, 'studentName');
      }
      fatherNameEditor(props) {
        return this.inputTextEditor(props, 'fatherName');
      }
      motherNameEditor(props){
        return this.inputTextEditor(props, 'motherName');
      }

      contactEditor(props){
        return this.inputTextEditor(props, 'guardianMobile');
      }

      genderEditor(props){
        let gender = [
          {label: 'Male', value: 'Male'},
          {label: 'Female', value: 'Female'},
          {label: 'Others', value: 'Others'}
      ];
      return (
        <Dropdown value={props.value[props.rowIndex].gender} options={gender} 
                onChange={(e) => this.onEditorValueChange(props, e.value)} style={{width:'100%'}} placeholder="Select Gender"/>
    );
   }

   religionEditor(props){
    let religion = [
      {label: 'Islam', value: 'Islam'},
      {label: 'Hindu', value: 'Hindu'}

  ];
  return (
    <Dropdown value={props.value[props.rowIndex].religion} options={religion} 
            onChange={(e) => {
              this.onEditorValueChange(props, e.value);
            }} style={{width:'100%'}} placeholder="Select Religion"/>
);

   }

   bloodEditor(props){
    let blood = [
      {label: 'A+', value: 'A+'},
      {label: 'A-', value: 'A-'},
      {label: 'B+', value: 'B+'},
      {label: 'B-', value: 'B-'},
      {label: 'O+', value: 'O+'},
      {label: 'O-', value: 'O-'}

  ];
  return (
    <Dropdown value={props.value[props.rowIndex].blood} options={blood} 
            onChange={(e) => {
              // console.log(e);
              this.onEditorValueChange(props, e.value);
            }
          } style={{width:'100%'}} placeholder="Select Blood"/>
);
   }

  render() {
    return (
      <div>
          <div className="content-section implementation">
            <DataTable value={this.props.info} responsive={true} paginator={true} rows={10} rowsPerPageOptions={[5,10,20]} header="Student List" editable={true} 
            selection={this.state.selectedStudent} onSelectionChange={(e) => {
              this.setState({selectedStudent: e.data});
            }
           } >          
             <Column selectionMode="multiple" header="Mark All" style={{width:'4em'}}/>

              <Column field="studentRoll" header="Roll"  style={{ textAlign: 'center' }} />
              <Column field="studentName" header="Name" editor={this.nameEditor} style={{ textAlign: 'center' }} /> 
              <Column field="studentGender" header="Gender" editor={this.genderEditor} style={{ textAlign: 'center' }} />
              <Column field="studentReligion" header="Religion" editor={this.religionEditor} style={{ textAlign: 'center' }} />
              <Column field="studentDOB" header="Date of Birth" style={{ textAlign: 'center' }} />
              <Column field="fatherName" header="Father Name"  editor={this.fatherNameEditor} style={{ textAlign: 'center' }} />
              <Column field="motherName" header="Mother Name" editor={this.motherNameEditor} style={{ textAlign: 'center' }} />
              <Column field="guardianMobile" header="Contact No" editor={this.contactEditor} style={{ textAlign: 'center' }} />         
             
              <Column field="bloodGroup" header="Blood Group" editor={this.bloodEditor} style={{ textAlign: 'center' }} />
           
            </DataTable>
        </div>
        <br/>
           <Row>
             <Col lg={9} md={6} sm={6}></Col>
             <Col lg={2} md={6} sm={6}>
              <Button onClick={(e)=> { console.log(e); this.props.onClickUpdateCB(this.state); }} bsClass="btn btn-green" className={'mb-sm mr-sm btn-sm btn btn-green pull-right buttonsize fa fa-edit'}> Update</Button>
              </Col>
               <Col lg={1}></Col>
            </Row>
      </div>
    );
  }
}

ShowInformationData.propTypes = {
  onClickUpdateCB: React.PropTypes.func,
};

export default ShowInformationData;
