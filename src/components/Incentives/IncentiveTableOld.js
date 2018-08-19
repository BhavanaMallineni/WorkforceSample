import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactDataGrid from 'react-data-grid';
import { getIncentiveTransactionList } from '../../actions/Incentives';


class IncentiveTable extends React.Component {
  constructor(props){
    super(props);
    this._columns = [
        {
          key: 'id',
          name: 'ID',
          width: 150,
          height: 28,
          //locked: true
        },
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
        },
        {
          key: 'comSalesPerName',
          name: 'comSalesPerName',
          width: 150,
          height: 28,
          sortable: true,
           editable: true
        },
        {
          key: 'comSalesPerEfforts',
          name: 'Com-SalesPerEfforts',
          width: 150,
          height: 28,
          sortable: true,
           editable: true
        },
        {
          key: 'comSalesPerInc',
          name: 'Com-SalPerIncAmount',
          width: 150,
          height: 28,
          sortable: true,
           editable: true
        },
        {
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
        },
        {
          key: 'comRecName',
          name: 'ComRecruiter',
          width: 150,
          height: 28,
          sortable: true
        },
        {
          key: 'comRecEfforts',
          name: 'ComRecEfforts',
          width: 150,
          height: 28,
          sortable: true
        },
        {
          key: 'comRecInc',
          name: 'ComRecIncAmount',
          width: 150,
          height: 28,
          sortable: true,
          editable: true
        },
        {
          key: 'candidateName',
          name: 'CandidateName',
          width: 150,
          height: 28,
          sortable: true,
          editable: true
        },
        {
          key: 'candidateStartDate',
          name: 'StartDate',
          width: 150,
          height: 28,
          sortable: true,
          editable: true
        },
        {
          key: 'visaType',
          name: 'Visa',
          width: 150,
          height: 28,
          sortable: true,
          editable: true
        },
        {
          key: 'payRollType',
          name: 'PayrollType',
          width: 150,
          height: 28,
          sortable: true,
          editable: true
        },
        {
          key: 'actualBillRate',
          name: 'ActualBillRate',
          width: 150,
          height: 28,
          sortable: true,
          editable: true
        },
        {
          key: 'billRateCostsDeduc',
          name: 'BillRateCostsDeduc',
          width: 150,
          height: 28,
          sortable: true,
          editable: true
        },
        {
          key: 'billRate',
          name: 'Bill Rate',
          width: 150,
          height: 28,
          sortable: true,
          editable: true
        },
        {
          key: 'actualPayRate',
          name: 'ActualPayRate',
          width: 150,
          height: 28,
          sortable: true,
          editable: true
        },
        {
          key: 'payRateCostsDeduc',
          name: 'PayRateCostsDeduc',
          width: 150,
          height: 28,
          sortable: true,
          editable: true
        },
        {
          key: 'payRate',
          name: 'PayRate',
          width: 150,
          height: 28,
          sortable: true,
          editable: true
        },
        {
          key: 'margin',
          name: 'Margin',
          width: 150,
          height: 28,
          sortable: true,
          editable: true
        },
        {
          key: 'marginPercent',
          name: 'MarginPercent',
          width: 150,
          height: 28,
          sortable: true,
          editable: true
        },
        {
          key: 'managerIncentive',
          name: 'Manager Incentive',
          width: 150,
          height: 28,
          sortable: true,
          editable: true
        },
        {
          key: 'recruitSalesIncentive',
          name: 'Rec Sales Incentive',
          width: 150,
          height: 28,
          sortable: true,
          editable: true
        },
        {
          key: 'salesPersonComments',
          name: 'SalesPersonComments',
          width: 150,
          height: 28,
          sortable: true,
           editable: true
        },
        {
          key: 'recComments',
          name: 'RecComments',
          width: 150,
          height: 28,
          sortable: true,
          editable: true
        }
      ];
      const _that = this;
    //let originalRows = this.createRows(1000);
    //let rows = originalRows.slice(0);
    this.state = { originalRows : [] , rows : [], value: 0 };
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

  handleChange = (event, value) => {
    this.setState({ value });
  };

  getRandomDate = (start, end) => {
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
    };

  createRows = () => {
      let rows = [];
      for (let i = 1; i < 1000; i++) {
        rows.push({
          id: i,
          task: 'Task ' + i,
          complete: Math.min(100, Math.round(Math.random() * 110)),
          priority: ['Critical', 'High', 'Medium', 'Low'][Math.floor((Math.random() * 3) + 1)],
          issueType: ['Bug', 'Improvement', 'Epic', 'Story'][Math.floor((Math.random() * 3) + 1)],
          startDate: this.getRandomDate(new Date(2015, 3, 1), new Date()),
          completeDate: this.getRandomDate(new Date(), new Date(2016, 0, 1))
        });
      }

      return rows;
    };

    handleGridSort = (sortColumn, sortDirection) => {
      const comparer = (a, b) => {
        if (sortDirection === 'ASC') {
          return (a[sortColumn] > b[sortColumn]) ? 1 : -1;
        } else if (sortDirection === 'DESC') {
          return (a[sortColumn] < b[sortColumn]) ? 1 : -1;
        }
      };

      const rows = sortDirection === 'NONE' ? this.state.originalRows.slice(0) : this.state.rows.sort(comparer);

      this.setState({ rows });
    };

    rowGetter = (i) => {
      return this.state.rows[i];
    };
    onRowsSelected = (rows) => {
      console.log(rows);
      this.props.onRowClicked(rows[0]);
      //this.setState({selectedIndexes: this.state.selectedIndexes.concat(rows.map(r => r.rowIdx))});
    };
  onRowSelect = (rows) => {
    this.props.onRowClicked(rows[0]);
    this.setState({ selectedRows: rows });
  };
  getCellActions = (column, row) => {
    if(column.name === "Team" && this.props.onRowClicked){
      this.props.onRowClicked(row);
    }
  }
  onRowsDeselected = (rows) => {
    console.log(rows);
    //let rowIndexes = rows.map(r => r.rowIdx);
    //this.setState({selectedIndexes: this.state.selectedIndexes.filter(i => rowIndexes.indexOf(i) === -1 )});
  };
  onCellSelected = ({ rowIdx, idx }) => {
    this.grid.openCellEditor(rowIdx, idx);
  };

  onCellDeSelected = ({ rowIdx, idx }) => {
    if (idx === 2) {
      alert('the editor for cell (' + rowIdx + ',' + idx + ') should have just closed');
    }
  };
//onRowClick={this.props.onRowClicked}
//getCellActions={this.getCellActions}
/*
<ReactDataGrid
    ref={ node => this.grid = node }
    rowKey="id"
    onGridSort={this.handleGridSort}
    columns={this._columns}
    rowGetter={this.rowGetter}
    enableRowSelect="true"
    onRowSelect={this.onRowsSelected}
    rowsCount={this.state.rows.length}
    minHeight={500} />*/
  render(){
    return(<div>


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

IncentiveTable.defaultProps = {
  incentivesList : [],

}

IncentiveTable.propTypes = {
  incentivesList : PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
      incentivesList : state.incentives.incTransList
  };
}

export default connect(mapStateToProps)(IncentiveTable);
