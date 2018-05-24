import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import {ColumnGroup} from 'primereact/components/columngroup/ColumnGroup';
import {Row} from 'primereact/components/row/Row';
import {Button} from 'primereact/components/button/Button';
import jsPDF from "jspdf";
import autotable from "jspdf-autotable";
require('jspdf-autotable');
var pdfConverter = require('jspdf');

var getColumns = function () {
  return [
  {title: "Student", dataKey: "studentName"},
  {title: "Gender", dataKey: "studentGender"}, 
  {title: "Mother Name", dataKey: "motherName"},
  {title: "Father Name", dataKey: "fatherName"} 
]
};

var getData = function () {
  return rows
};

var rows;





class FeaturePage extends Component {
    constructor() {
        super();
        this.exportpdf = this.exportpdf.bind(this);
     
        this.state = {
          rif: [],
          
          sales: [
            {
              "studentId": "100122000116",
              "customStudentId": "1510020",
              "studentName": "Tasnim Tabassum",
              "studentGender": "Female",
              "studentDOB": "2012-07-27",
              "studentReligion": "Islam",
              "motherName": "শামসুন নাহার",
              "fatherName": "Md. Mamunar Rashid"
              
            },
            {
              "studentId": "100122000216",
              "customStudentId": "1510000",
              "studentName": "Mst. Afia Sohana",
              "studentGender": "Female",
              "studentDOB": "2012-06-30",
              "studentReligion": "Islam",
              "motherName": "Mst. Fawalia Akter",
              
              "fatherName": "Md. Azaharul Islam"
             
            }
            
            ]
        
        };
    }

    componentDidMount() {
      fetch("http://192.168.31.215:8080/student/list")
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Server don't load !");
          }
        })
        .then(responseData => {
          this.setState({ rif: responseData.item });
        });
    }
    
  exportpdf() {
    let doc = new jsPDF("l","mm","a4");
   
    

  
    doc.autoTable(getColumns(), getData(10),
      {
     
        theme: 'grid',
        headerStyles: {
          fillColor: [105,105,105],
          overflow: 'linebreak',
          //  fontSize: 8
        },
        styles: {
          halign: 'center',
          lineColor: [0, 0, 0],
          fontSize: 8
        },
       
        createdCell: function(cell, opts) {
          cell.styles.cellPadding = 1;
        },

      },

    );


    doc.save('Student Absent List.pdf');
  }
   
   
  
render() {
  rows=this.state.sales;
    

console.log(this.state.rif);

    let content = '';
    content = <div>
    <div className='ui-g ui-fluid'>
    <DataTable value={this.state.sales} paginator={true} rows={10}>
        <Column field="studentName" header="Student" />
        <Column field="studentGender" header="Gender" />
        <Column field="motherName" header="Mother Name" />
        <Column field="fatherName" header="Father Name" />
    </DataTable>
  <h4> kk </h4> 
    </div>


    </div>
   
    
   
  return (
      <div>

          <h3>Basic</h3>
    {content}

  <Button  onClick={this.exportpdf} className="exportPDF">Export to PDF</Button>
          </div>
  );
  }
}

export default FeaturePage; 