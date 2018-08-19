import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import Dialog, { DialogActions, DialogContent, DialogContentText,DialogTitle } from 'material-ui/Dialog';
import ViewEmployeeDetails from './ViewEmployeeDetails';

class ViewEmployee extends React.Component {
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
    const { selectedRow } = this.props;
        return(<Drawer anchor="right" className="drawerWidth"  open={this.state.right} onClose={this.closeTheModal} >
                        <ViewEmployeeDetails {...this.props} selectedRow={selectedRow} closeTheModal={this.closeTheModal}/>
                </Drawer>);
  }
}


ViewEmployee.propTypes = {

};


export default ViewEmployee;
