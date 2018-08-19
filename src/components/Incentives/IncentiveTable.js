import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactDataGrid from 'react-data-grid';
import Drawer from 'material-ui/Drawer';
import Dialog, { DialogActions, DialogContent, DialogContentText,DialogTitle } from 'material-ui/Dialog';
import { getIncentiveTransactionList } from '../../actions/Incentives';

class IncentiveTable extends React.Component {
  constructor(props) {
    super(props);
    this._columns = [
        {
          key: 'team',
          name: 'Team',
          width: 150,
          height: 28,
          sortable: true,
          editable: true
        },
        {
          key: 'salesPerName',
          name: 'SalesPerson',
          width: 150,
          height: 28,
          sortable: true,
          editable: true
        },
        {
          key: 'salesPerEfforts',
          name: 'SalesPerEfforts',
          width: 150,
          height: 28,
          sortable: true,
           editable: true
        },
        {
          key: 'salesPerInc',
          name: 'SalPerIncAmount',
          width: 150,
          height: 28,
          sortable: true,
           editable: true
        },{
          key: 'recName',
          name: 'Recruiter',
          width: 150,
          height: 28,
          sortable: true
        },
        {
          key: 'recEfforts',
          name: 'RecEfforts',
          width: 150,
          height: 28,
          sortable: true
        },
        {
          key: 'recInc',
          name: 'RecIncentiveAmount',
          width: 150,
          height: 28,
          sortable: true,
          editable: true
        }];
    this.state = { originalRows : [] , rows : [], value: 0, selectedRows:false };
  }
  componentDidMount(){
    this.props.dispatch(getIncentiveTransactionList());
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.incentivesList.length > 0){
      this.setState({
         originalRows : Object.assign([], nextProps.incentivesList),
         rows : Object.assign([], nextProps.incentivesList)
      })
    }
  }

  rowGetter = (index) => {
    return this.state.rows[index];
  };

  onRowSelect = (rows) => {
    if(!this.state.selectedRows){
        this.props.onRowClicked(rows[0]);
    } else{
      this.setState({
        selectedRows : true
      });
    }
  };

  onCellSelected = ({ rowIdx, idx }) => {
    this.grid.openCellEditor(rowIdx, idx);
  };

  onCellDeSelected = ({ rowIdx, idx }) => {
    if (idx === 2) {
      alert('the editor for cell (' + rowIdx + ',' + idx + ') should have just closed');
    }
  };

  render() {
    return  (
      <div>
        <ReactDataGrid
          ref={ node => this.grid = node }
          rowKey="id"
          columns={this._columns}
          rowGetter={this.rowGetter}
          rowsCount={this.state.rows.length}
          enableRowSelect="multi"
          minHeight={500}
          onRowSelect={this.onRowSelect}
          enableCellSelect={true}
          onCellSelected={this.onCellSelected}
          onCellDeSelected={this.onCellDeSelected} />
      </div>);
  }
}


const mapStateToProps = (state) => {
  return {
    incentivesList : state.incentives.incTransList
  };
}
export default connect(mapStateToProps)(IncentiveTable);
