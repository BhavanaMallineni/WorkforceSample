import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import Dialog, { DialogActions, DialogContent, DialogContentText,DialogTitle } from 'material-ui/Dialog';
import EmployeeDetails from './EmployeeDetails';

class AddEmployee extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      top: false,
      left: false,
      bottom: false,
      right: true,
    };
  }

  componentWillMount(){

  }

  componentDidMount(){

  }

  componentWillReceiveProps(){

  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  toggleDrawer = (side, open) => {
      this.setState({
        [side]: open,
      });
  };

  closeTheModal = () => {
      this.toggleDrawer('right', false);
      this.props.onClose();
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render(){
        return(<Drawer anchor="right" className="drawerWidth"  open={this.state.right} onClose={this.closeTheModal} >
                        <EmployeeDetails {...this.props} closeTheModal={this.closeTheModal}/>
                </Drawer>);
  }
}


AddEmployee.propTypes = {

};


export default AddEmployee;
