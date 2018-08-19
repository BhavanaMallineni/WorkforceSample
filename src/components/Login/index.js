import React from 'react';
/*class Login extends React.Component {
  constructor(props){
    super(props);
  }
  render() {

    return (<div>

        hellow login here
      </div>);
  }
}

export default Login;*/
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import TextField from 'material-ui/TextField';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';


import { loginUser }from "../../actions/Auth";

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username : '',
      password: ''
    }
    this.loginUser = this.loginUser.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
  }
  componentWillMount(){}
  componentDidMount(){}
  componentWillReceiveProps(nextProps){
      if(nextProps.user !== undefined){
         if(!nextProps.user.disabled && nextProps.user.emailVerified && nextProps.user.registered){
            this.props.push("/app/home");
          }
      }
  }

 loginUser = () => {
   if(this.state.password !== "" && this.state.username !== ""){
      this.props.dispatch(loginUser(this.state.username, this.state.password));
   }
 }
 cancelClicked = () => {
   this.setState({
     username : '',
     password: ''
   });
 }
  render() {
    const { classes, theme } = this.props;
    return (<div className={classes.root}>
                <AppBar position="static" color="default">
                  <Toolbar>
                    <Typography variant="title" color="inherit">
                      Login
                    </Typography>
                  </Toolbar>
                </AppBar>
                <form className={classes.container} noValidate autoComplete="off">
                      <Card className={classes.card}>
                        <CardContent className={classes.cardcontent}>
                        <FormControl fullWidth className={classes.formControl}>
                            <InputLabel htmlFor="username">Username</InputLabel>
                                    <Input
                                        id="username-input"
                                        name="username"
                                        label="Username"
                                        className={classes.textField}
                                        onChange={this.handleInputChange}
                                        value={this.state.username}
                                      />
                          </FormControl>
                            <FormControl fullWidth className={classes.formControl}>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                  id="password-input"
                                  label="Password"
                                  name="password"
                                  className={classes.textField}
                                  type="password"
                                  autoComplete="current-password"
                                  onChange={this.handleInputChange}
                                  value={this.state.password}
                                />
                            </FormControl>
                        </CardContent>
                        <CardActions className={classes.cardActions}>
                                <Button variant="raised" className={classes.button}>
                                    Cancel
                                </Button>
                                <Button variant="raised" color="primary" onClick={this.loginUser} className={classes.button}>
                                  Sign-In
                                </Button>
                        </CardActions>
                      </Card>
                </form>
            </div>);
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 150
  },
  cardcontent:{
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center'
  },
  cardActions:{
    justifyContent: 'flex-end'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  root: {
    flexGrow: 1,
  },
  card: {
    minWidth: 475,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
});
const mapStateToProps = (state) => {
  return {
      logged :state.Auth.logged,
      user : state.Auth.user
  };
}

export default connect(mapStateToProps)(withStyles(styles)(Login));
