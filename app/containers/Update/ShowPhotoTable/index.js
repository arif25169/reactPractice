/**
 *
 * ShowPhotoTable
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
import makeSelectShowPhotoTable from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { Well, ControlLabel, FormControl, FormGroup, Row, Col, Jumbotron, DropdownButton, MenuItem, Button } from 'react-bootstrap';
import { DataTable } from 'primereact/components/datatable/DataTable';
import { Column } from 'primereact/components/column/Column';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';
import ImageUpload from 'components/ImageUpload';

export class ShowPhotoTable extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor() {
    super();
    this.state = {
      info: []
    };

    this.imgUpload = this.imgUpload.bind(this);

}

imgUpload(rowData, column) {
  var src = "showcase/resources/demo/images/car/" + rowData.brand + ".png";
  return <div>
   
         <img src={src} alt={rowData.brand}/>;
      <ImageUpload/>
</div>;
}

  render() {
    return (
      <div>
        <Helmet>
          <title>ShowPhotoTable</title>
          <meta name="description" content="Description of ShowPhotoTable" />
        </Helmet>
        {/* <FormattedMessage {...messages.header} /> */}
        <div className="content-section implementation">
            <DataTable value={this.props.info} responsive={true} paginator={true} rows={10} rowsPerPageOptions={[5,10,20]} header="Student List" editable={true} >
              <Column field="studentId" header="Student Id"  style={{ textAlign: 'center' }} />
              <Column field="studentName" header="Name"  style={{ textAlign: 'center' }} /> 
              <Column field="studentRoll" header="Roll" style={{ textAlign: 'center' }} />
              <Column field="studentGender" header="Gender" style={{ textAlign: 'center' }} />
              <Column field="Photo" header="Photo" style={{ textAlign: 'center' }} body={this.imgUpload} />
           
            </DataTable>

               <br/>
                <Row>
                    <Col lg={9} md={6} sm={6}></Col>
                    <Col lg={2} md={6} sm={6}>
                      <Button bsClass="btn btn-green" className={'mb-sm mr-sm btn-sm btn btn-green pull-right buttonsize fa fa-edit'}> Process</Button>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
        </div>
      </div>
    );
  }
}

ShowPhotoTable.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  showphototable: makeSelectShowPhotoTable(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'showPhotoTable', reducer });
const withSaga = injectSaga({ key: 'showPhotoTable', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ShowPhotoTable);
