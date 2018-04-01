/**
 *
 * StudentStatus
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
import makeSelectStudentStatus from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { DataTable } from 'primereact/components/datatable/DataTable';
import { Column } from 'primereact/components/column/Column';
import { InputText } from 'primereact/components/inputtext/InputText';
import { Dropdown } from 'primereact/components/dropdown/Dropdown';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/themes/redmond/theme.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import 'font-awesome/css/font-awesome.css';


export class StudentStatus extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>StudentStatus</title>
          <meta name="description" content="Description of StudentStatus" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

StudentStatus.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  studentstatus: makeSelectStudentStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'studentStatus', reducer });
const withSaga = injectSaga({ key: 'studentStatus', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(StudentStatus);
