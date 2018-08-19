import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import Menu, { MenuItem } from 'material-ui/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Switch from 'material-ui/Switch';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import Incentives from "../../components/Incentives";
import IncentiveTable from "../../components/Incentives/IncentiveTable";
import AddEmployee from '../../components/Incentives/AddEmployee';
import ViewEmployee from '../../components/Incentives/ViewEmployee';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import { getInitialDataList } from '../../actions/AdminIncentives';
import { getIncentiveTransactionList } from '../../actions/Incentives';
import { logoutUser } from '../../actions/Auth';

const drawerWidth = 240;

class Home extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        open: false,
        anchorEl: null,
        isOpenAddEmployee : false,
        isOpenViewEmployee : false,
        incentivesList : [],
        selectedRow:null
      };
  }
  componentDidMount(){
    this.props.dispatch(getInitialDataList());
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.props.dispatch(logoutUser(this.props.user._id));
    this.props.history.push("/app/login");
    this.setState({ anchorEl: null });
  };
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  componentWillReceiveProps(nextProps){
    // if(nextProps.incTransList !== undefined){
    //   this.setState({ incentivesList : nextProps.incTransList})
    // }
  }

  closeCreateEmployee = () => {
    this.setState((prevState, props) => {
        return { isOpenAddEmployee : false }
    });
  }

  closeViewEmployee = () => {
    this.setState((prevState, props) => {
        return { isOpenViewEmployee : false }
    });
  }

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  addEmployeeButtonClicked = () => {
    this.setState((prevState, props) => {
        return { isOpenAddEmployee : !prevState.isOpenAddEmployee }
    });
  }

  viewEmployeeButtonClicked = () => {
    this.setState((prevState, props) => {
        return { isOpenViewEmployee : !prevState.isOpenViewEmployee }
    });
  }

  onRowClicked = (item) => {
    if(item){
      this.setState((prevState, props) => {
          return { isOpenViewEmployee : true,
            selectedRow :item
          }
      });
    }
  }

  render() {
    const { classes, theme } = this.props;
    const { auth, anchorEl, isOpenAddEmployee, isOpenViewEmployee, selectedRow } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div className={classes.root}>
      <AppBar
        position="absolute"
        className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
        <Toolbar disableGutters={!this.state.open}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={this.handleDrawerOpen}
            className={classNames(classes.menuButton, this.state.open && classes.hide)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Executive Dashboard
          </Typography>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit">
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}>
                  <MenuItem onClick={this.handleClose}>Sign Out</MenuItem>
                </Menu>
        </Toolbar>
      </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}>
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>{mailFolderListItems}</List>
          <Divider />
          <List>{otherMailFolderListItems}</List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
              <Button variant="fab" color="primary" aria-label="add"
              className={classes.button}
              onClick={this.addEmployeeButtonClicked}>
                <AddIcon />
              </Button>

              <IncentiveTable {...this.props} onRowClicked={this.onRowClicked} />
              {isOpenAddEmployee && (<AddEmployee onClose={() => this.addEmployeeButtonClicked()}/>) }
              {isOpenViewEmployee && (<ViewEmployee selectedRow={selectedRow} onClose={() => this.viewEmployeeButtonClicked()}/>) }
        </main>
      </div>
    );
  }
}
//<Incentives {...this.props} onRowClicked={this.onRowClicked} />
//<Incentives {...this.props} onRowClicked={this.onRowClicked} />
Home.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
  return {
      logged :state.auth.logged,
      user : state.auth.user,
      incTransList : state.incentives.incTransList
  };
}
const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
 flex: {
   flex: 1,
 },
 menuButton: {
   marginLeft: -12,
   marginRight: 20,
 },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  button: {
   margin: theme.spacing.unit,
 },
});

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(Home));
