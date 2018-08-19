import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Input, {InputLabel, InputAdornment} from 'material-ui/Input';
import {FormControl, FormHelperText, FormControlLabel} from 'material-ui/Form';
import {MenuItem} from 'material-ui/Menu';
import {ListItemText} from 'material-ui/List';
import Select from 'material-ui/Select';
import Checkbox from 'material-ui/Checkbox';
import Chip from 'material-ui/Chip';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import {getIncentivesForVisaTypeFromBillPayRate} from "../../actions/IncentiveCalculator";
import {createNewIncentiveTransaction, updatedIncentiveTransaction}  from "../../actions/Incentives";

class EmployeeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      incentive:null,
      salesPerName: '',
      salesPerEmpID: '',
      salesPerMonth:[],
      salesPerEfforts: 100,
      assignClosedBySelfSalesPer: false,
      salesPerComEfforts: false,
      comSalesPerEfforts: '',
      comSalesPerEmpID: '',
      comSalesPerName: '',
      comSalesPerMonth:[],
      comSalesPerIncAmount: '',
      salesPersonComments: '',
      comSalesPersonComments: '',
      visaType: '',
      payRollType: '',
      actualPayRate: '',
      actualBillRate: '',
      candidateName: '',
      candidateStartDate: '',
      recName: '',
      recEmpID: '',
      recEfforts: 100,
      recComments: '',
      recMonth:[],
      assignClosedBySelfRec: false,
      recComEfforts: false,
      comRecName: '',
      comRecEmpID: '',
      comRecEfforts: '',
      comRecComments: '',
      comRecIncAmount: '',
      comRecMonth:[],
      team: '',
      salesPerInc : 0,
      comSalesPerInc : 0,
      recInc:0,
      comRecInc:0,
      billRate :0.0,
      actualBillRate : 0.0,
      billRateCostsDeduc :  0 ,
      payRate : 0,
      actualPayRate : 0,
      payRateCostsDeduc : 0,
      margin : 0,
      marginPercent : 0,
      recruitSalesIncentive : 0,
      managerIncentive : 0,
      showIncentives:false,
      candidateNameValid: true,
      visaTypeValid: true,
      payRollTyepValid:true,
      billRateValid: true,
      payRateValid: true,
      startDateValid:true,
      salesPerNameValid: true,
      salesEmpIDValid:true,
      salPerEfforts: true,
      closedBySalesOnlyValid:true,
      recNameValid : true,
      recEmpIDValid:true,
      recEfforts: true,
      closedByRecOnlyValid:true,
      monthsList:["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct", "Nov", "Dec"]
    };
  }

  componentDidMount() {}

  handleGenerateIncentives = () => {
    if (this.state.visaType !== "" && this.state.actualPayRate  !== "" && this.state.actualBillRate !== "") {
      this.props.dispatch(getIncentivesForVisaTypeFromBillPayRate(this.state.actualBillRate, this.state.actualPayRate, this.state.visaType));
    }
  }

  handleSubmitIncentives = () => {
    if(this.state.visaType !== "" && this.state.actualPayRate  !== "" && this.state.actualBillRate !== ""){
      this.props.dispatch(createNewIncentiveTransaction({
        salesPerName: this.state.salesPerName,
        incentive : this.state.incentive,
        billRate: this.state.billRate,
        actualBillRate : this.state.actualBillRate,
        billRateCostsDeduc :  this.state.billRateCostsDeduc ,
        payRate : this.state.payRate,
        actualPayRate : this.state.actualPayRate,
        payRateCostsDeduc : this.state.payRateCostsDeduc,
        margin : this.state.margin,
        marginPercent : this.state.marginPercent,
        recruitSalesIncentive : this.state.recruitSalesIncentive,
        managerIncentive : this.state.managerIncentive,
        salesPerEmpID: this.state.salesPerEmpID,
        salesPerEfforts : this.state.salesPerEfforts,
        comSalesPerEfforts: this.state.comSalesPerEfforts,
        comSalesPerEmpID: this.state.comSalesPerEmpID,
        comSalesPerName: this.state.comSalesPerName,
        comSalesPerIncAmount: this.state.comSalesPerIncAmount,
        salesPersonComments: this.state.salesPersonComments,
        candidateName: this.state.candidateName,
        candidateStartDate: this.state.candidateStartDate,
        recName: this.state.recName,
        recEmpID: this.state.recEmpID,
        recEfforts: this.state.recEfforts,
        recComments: this.state.recComments,
        assignClosedBySelfRec: this.state.assignClosedBySelfRec,
        recComEfforts: this.state.recComEfforts,
        comRecName: this.state.comRecName,
        comRecEmpID: this.state.comRecEmpID,
        comRecEfforts: this.state.comRecEfforts,
        comRecComments: this.state.comRecComments,
        comRecIncAmount: this.state.comRecIncAmount,
        team: this.state.team,
        salesPerInc : this.state.salesPerInc,
        comSalesPerInc : this.state.comSalesPerInc,
        recInc: this.state.recInc,
        comRecInc: this.state.comRecInc,
        visaType : this.state.visaType,
        payRollType : this.state.payRollType,
        salesPerMonth : this.state.salesPerMonth.join(','),
        recMonth : this.state.recMonth.join(','),
        comSalesPerMonth : this.state.comSalesPerMonth.join(','),
        comRecMonth : this.state.comRecMonth.join(','),
        comSalesPersonComments : this.state.comSalesPersonComments
      }));
      this.props.closeTheModal();
    }
  }

  handleChange = event => {
    if (event.target.name === "assignClosedBySelfRec" || event.target.name === "assignClosedBySelfSalesPer") {
      const name = event.target.name;
      this.setState((prevState, props) => {
        return {
          [name]: !prevState[name]
        }
      });
    } else if (event.target.name === "recEfforts") {
      const recEfforts = parseInt(event.target.value);
      const recComEffortsValue = (
        recEfforts < 100
        ? true
        : false);
      this.setState({["recEfforts"]: recEfforts, recComEfforts: recComEffortsValue});
    } else if (event.target.name === "salesPerEfforts") {
      const salesPerEfforts = parseInt(event.target.value);
      const salesPerComEffortsValue = (
        salesPerEfforts < 100
        ? true
        : false);
      this.setState({["salesPerEfforts"]: salesPerEfforts, salesPerComEfforts: salesPerComEffortsValue});
    } else {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
    // else if(event.target.name === "salesPerMonth" || event.target.name === "recMonth"){
    //   cons
    // }
  };

  componentWillReceiveProps(nextProps){
      if(nextProps.incentive !== undefined){
        this.setState({incentive : nextProps.incentive,
          "billRate":nextProps.incentive.billRate,
          "actualBillRate": nextProps.incentive.actualBillRate,
          "billRateCostsDeduc":  nextProps.incentive.billRateCostsDeduc ,
          "payRate": nextProps.incentive.payRate,
          "actualPayRate": nextProps.incentive.actualPayRate,
          "payRateCostsDeduc": nextProps.incentive.payRateCostsDeduc,
          "margin": nextProps.incentive.margin,
          "marginPercent": nextProps.incentive.marginPercent,
          "recruitSalesIncentive": nextProps.incentive.recruitSalesIncentive,
          "managerIncentive": nextProps.incentive.managerIncentive,
        showIncentives :true });
      }
  }

  render() {
    const {assignClosedBySelfSalesPer, assignClosedBySelfRec, monthsList, recComEfforts, recEfforts, salesPerComEfforts, showIncentives} = this.state;
    const {classes, visaTypeList, payRollTypeList, teamsList} = this.props;
    return (<form className={classes.container} noValidate="noValidate" autoComplete="off">
                {/* Candidate Info */}
                  <Paper className={classes.rootPaper} elevation={4}>
                  <Typography variant="headline" component="h4">
                    Candidate
                  </Typography>
                  <div className={classes.parentFormControl}>
                    <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                      <InputLabel htmlFor="name-helper">Candidate Name</InputLabel>
                      <Input id="name-helper" value={this.state.candidateName}
                        error
                       name="candidateName"
                       onChange={this.handleChange}/>
                      <FormHelperText id="name-helper-text">Name of the Candidate assigned</FormHelperText>
                    </FormControl>
                    <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                      <InputLabel htmlFor="name-helper">Visa Type</InputLabel>
                      <Select value={this.state.visaType} name="visaType" onChange={this.handleChange} input={<Input id = "select-multiple-checkbox" />} renderValue={selected => selected} MenuProps={MenuProps}>
                        {
                          visaTypeList.map((item, index) => (<MenuItem key={index} value={item.label} name="visaType">
                            <Checkbox checked={this.state.visaType.indexOf(item.label) > -1}/>
                            <ListItemText primary={item.label}/>
                          </MenuItem>))
                        }
                      </Select>
                      <FormHelperText id="name-helper-text">Some important helper text</FormHelperText>
                    </FormControl>
                    <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                      <InputLabel htmlFor="name-helper">Pay Roll Type</InputLabel>
                      <Select value={this.state.payRollType} name="payRollType" onChange={this.handleChange} input={<Input id = "select-multiple-checkbox" />} renderValue={selected => selected} MenuProps={MenuProps}>
                        {
                          payRollTypeList.map((item, index) => (<MenuItem key={index} value={item.label} name="visaType">
                            <Checkbox checked={this.state.payRollType.indexOf(item.label) > -1}/>
                            <ListItemText primary={item.label}/>
                          </MenuItem>))
                        }
                      </Select>
                      <FormHelperText id="name-helper-text">Some important helper text</FormHelperText>
                    </FormControl>
                  </div>
                  <div className={classes.parentFormControl}>
                    <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                      <InputLabel htmlFor="name-helper">Bill Rate</InputLabel>
                      <Input id="name-helper"
                          error
                          value={this.state.actualBillRate}
                          name="actualBillRate"
                          startAdornment={<InputAdornment position = "start" > $</InputAdornment>}
                          onChange={this.handleChange}
                          type="number"/>
                      <FormHelperText id="name-helper-text">Actual Bill Rate</FormHelperText>
                    </FormControl>
                    <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                      <InputLabel htmlFor="name-helper">Pay Rate</InputLabel>
                      <Input id="name-helper"
                              error
                              value={this.state.actualPayRate}
                              name="actualPayRate"
                              startAdornment={<InputAdornment position = "start" > $</InputAdornment>}
                              onChange={this.handleChange}
                              type="number"/>
                      <FormHelperText id="name-helper-text">Actual Pay Rate</FormHelperText>
                    </FormControl>
                    <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                      <TextField id="date" label="Start Date" type="date" value={this.state.candidateStartDate} name="candidateStartDate" onChange={this.handleChange} className={classes.startDateField} InputLabelProps={{
                          shrink: true
                        }}/>
                    </FormControl>
                  </div>
                  </Paper>
                {/* Sales Person */}
                    {!assignClosedBySelfRec && (<Paper className={classes.rootPaper} elevation={4}>
                    <Typography  variant="headline" component="h4">
                      Sales
                    </Typography>
                    <Divider />
                    <div className={classes.parentFormControl}>
                      <FormControl className={classes.formControl}  error aria-describedby="name-helper-text">
                        <InputLabel htmlFor="name-helper">Sales Person</InputLabel>
                        <Input id="name-helper"
                                error
                                value={this.state.salesPerName}
                                name="salesPerName"
                                onChange={this.handleChange}/>
                        <FormHelperText id="name-helper-text">Enter Full Name</FormHelperText>
                      </FormControl>
                      <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                        <InputLabel htmlFor="name-helper">Employee ID</InputLabel>
                        <Input id="name-helper"
                                value={this.state.salesPerEmpID}
                                name="salesPerEmpID"
                                onChange={this.handleChange}/>
                        <FormHelperText id="name-helper-text">Employee ID from the ADP
                        </FormHelperText>
                      </FormControl>
                      <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                        <InputLabel htmlFor="name-helper">Efforts</InputLabel>
                        <Input id="name-helper"
                               value={this.state.salesPerEfforts}
                               name="salesPerEfforts"
                               startAdornment={<InputAdornment position = "start" >%< /InputAdornment>}
                               onChange={this.handleChange}
                               type="number"/>
                        <FormHelperText id="name-helper-text">Percentage efforts involved</FormHelperText>
                      </FormControl>
                    </div>
                    <Divider />
                    <div className={classes.parentFormControl}>
                      <FormControlLabel
                          control={
                            <Checkbox
                              checked={this.state.assignClosedBySelfSalesPer}
                              onChange={this.handleChange}
                              name="assignClosedBySelfSalesPer"
                              color="primary"
                            />
                          }
                          label="Closed By Sales"
                        />
                      <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                        <InputLabel htmlFor="name-helper">Comments</InputLabel>
                        <Input id="name-helper"
                                value={this.state.salesPersonComments}
                                name="salesPersonComments"
                                onChange={this.handleChange}/>
                        <FormHelperText id="name-helper-text">Enter Comments on Sales Person
                        </FormHelperText>
                      </FormControl>
                      <FormControl className={classes.formControl}>
                          <InputLabel htmlFor="select-multiple-checkbox">SalesPerMonth</InputLabel>
                          <Select
                            multiple
                            value={this.state.salesPerMonth}
                            onChange={this.handleChange}
                            name="salesPerMonth"
                            input={<Input id="select-multiple-checkbox" />}
                            renderValue={selected => selected.join(', ')}
                            MenuProps={MenuProps}>
                            {monthsList.map(name => (
                              <MenuItem key={name} value={name}>
                                <Checkbox checked={this.state.salesPerMonth.indexOf(name) > -1} />
                                <ListItemText primary={name} />
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                    </div>
                    <Divider />
                    {/* Componsated Sales Person */}
                    { salesPerComEfforts && (<div className={classes.parentFormControl}>
                        <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                          <InputLabel htmlFor="name-helper">Name</InputLabel>
                          <Input id="name-helper"
                                  value={this.state.comSalesPerName}
                                  name="comSalesPerName"
                                  onChange={this.handleChange}/>
                          <FormHelperText id="name-helper-text">Enter Full Name</FormHelperText>
                        </FormControl>
                        <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                          <InputLabel htmlFor="name-helper">Employee ID</InputLabel>
                          <Input id="name-helper" value={this.state.comSalesPerEmpID} name="comSalesPerEmpID" onChange={this.handleChange}/>
                          <FormHelperText id="name-helper-text">Employee ID from the ADP
                          </FormHelperText>
                        </FormControl>
                        <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                          <InputLabel htmlFor="name-helper">Efforts</InputLabel>
                          <Input id="name-helper" value={this.state.comSalesPerEfforts} name="comSalesPerEfforts" startAdornment={<InputAdornment position = "start" >%< /InputAdornment>} onChange={this.handleChange} type="number"/>
                          <FormHelperText id="name-helper-text">Percentage efforts involved
                          </FormHelperText>
                        </FormControl>
                      </div>)
                    }
                  </Paper>)
                }
                {/* Recruiter Person */}
                  {!assignClosedBySelfSalesPer && (<Paper className={classes.rootPaper} elevation={4}>
                    <Typography variant="headline" component="h4">
                      Recruiter
                    </Typography>
                    <Divider />
                    <div className={classes.parentFormControl}>
                      <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                        <InputLabel htmlFor="name-helper">Recruiter
                        </InputLabel>
                        <Input id="name-helper" value={this.state.recName} name="recName" onChange={this.handleChange}/>
                        <FormHelperText id="name-helper-text">Enter Full Name</FormHelperText>
                      </FormControl>
                      <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                        <InputLabel htmlFor="name-helper">Employee ID</InputLabel>
                        <Input id="name-helper" value={this.state.recEmpID} name="recEmpID" onChange={this.handleChange}/>
                        <FormHelperText id="name-helper-text">Employee ID from the ADP
                        </FormHelperText>
                      </FormControl>
                      <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                        <InputLabel htmlFor="name-helper">Efforts</InputLabel>
                        <Input id="name-helper"
                        type="number"
                        name="recEfforts"
                        startAdornment={<InputAdornment position = "start" >%< /InputAdornment>}
                        onChange={this.handleChange}
                        value={recEfforts}/>
                        <FormHelperText id="name-helper-text">Percentage efforts involved
                        </FormHelperText>
                      </FormControl>
                    </div>
                    <Divider />
                    <div className={classes.parentFormControl}>
                      <FormControlLabel
                          control={
                            <Checkbox
                              checked={this.state.assignClosedBySelfRec}
                              onChange={this.handleChange}
                              name="assignClosedBySelfRec"
                              color="primary"
                            />
                          }
                          label="Closed By Recruiter"
                        />
                      <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                        <InputLabel htmlFor="name-helper">Comments</InputLabel>
                        <Input id="name-helper"
                                value={this.state.recComments}
                                name="recComments"
                                onChange={this.handleChange}/>
                        <FormHelperText id="name-helper-text">Enter Comments on Recruiter
                        </FormHelperText>
                      </FormControl>
                      <FormControl className={classes.formControl}>
                          <InputLabel htmlFor="select-multiple-checkbox"> Rec Month</InputLabel>
                          <Select
                            multiple
                            value={this.state.recMonth}
                            onChange={this.handleChange}
                            name="recMonth"
                            input={<Input id="select-multiple-checkbox" />}
                            renderValue={selected => selected.join(', ')}
                            MenuProps={MenuProps}>
                            {monthsList.map(name => (
                              <MenuItem key={name} value={name}>
                                <Checkbox checked={this.state.recMonth.indexOf(name) > -1} />
                                <ListItemText primary={name} />
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                    </div>
                    <Divider />
                    {recComEfforts && (<div className={classes.parentFormControl}>
                        <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                          <InputLabel htmlFor="name-helper">Recruiter
                          </InputLabel>
                          <Input id="name-helper" value={this.state.comRecName} name="comRecName" onChange={this.handleChange}/>
                          <FormHelperText id="name-helper-text">Enter Full Name</FormHelperText>
                        </FormControl>
                        <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                          <InputLabel htmlFor="name-helper">Employee ID</InputLabel>
                          <Input id="name-helper" value={this.state.comRecEmpID} name="comRecEmpID" onChange={this.handleChange}/>
                          <FormHelperText id="name-helper-text">Employee ID from the ADP
                          </FormHelperText>
                        </FormControl>
                        <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                          <InputLabel htmlFor="name-helper">Efforts</InputLabel>
                          <Input id="name-helper" value={this.state.comRecEfforts} name="comRecEfforts" startAdornment={<InputAdornment position = "start" >%< /InputAdornment>} onChange={this.handleChange} type="number"/>
                          <FormHelperText id="name-helper-text">Percentage efforts involved
                          </FormHelperText>
                        </FormControl>
                        <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                          <InputLabel htmlFor="name-helper">Comments</InputLabel>
                          <Input id="name-helper" value={this.state.comRecComments} name="comRecComments" onChange={this.handleChange} type="textarea"/>
                          <FormHelperText id="name-helper-text">Percentage efforts involved
                          </FormHelperText>
                        </FormControl>
                      </div>)}
                  </Paper>)}
                  {/*Calculated Incentives*/}
                {showIncentives &&  (<Paper className={classes.rootPaper} elevation={4}>
                    <Typography  variant="headline" component="h4">
                      Incentives
                    </Typography>
                    <Divider />
                    <div className={classes.parentFormControl}>
                          <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                            <InputLabel htmlFor="name-helper">Actual Bill Rate</InputLabel>
                            <Input id="name-helper" value={this.state.actualBillRate} name="actualBillRate" startAdornment={<InputAdornment position = "start" > $</InputAdornment>} onChange={this.handleChange} type="number"/>
                          </FormControl>
                          <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                            <InputLabel htmlFor="name-helper">Actual Pay Rate</InputLabel>
                            <Input id="name-helper" value={this.state.actualPayRate} name="actualPayRate" startAdornment={<InputAdornment position = "start" > $</InputAdornment>} onChange={this.handleChange} type="number"/>
                          </FormControl>
                          <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                            <InputLabel htmlFor="name-helper">Bill Rate</InputLabel>
                            <Input id="name-helper" value={this.state.billRate} name="billRate" startAdornment={<InputAdornment position = "start" > $</InputAdornment>} onChange={this.handleChange} type="number"/>
                          </FormControl>
                          <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                            <InputLabel htmlFor="name-helper">Pay Rate</InputLabel>
                            <Input id="name-helper" value={this.state.payRate} name="payRate" startAdornment={<InputAdornment position = "start" > $</InputAdornment>} onChange={this.handleChange} type="number"/>
                          </FormControl>
                          <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                            <InputLabel htmlFor="name-helper">Bill Rate Cost Deduc</InputLabel>
                            <Input id="name-helper" value={this.state.billRateCostsDeduc} name="billRateCostsDeduc" startAdornment={<InputAdornment position = "start" > $</InputAdornment>} onChange={this.handleChange} type="number"/>
                          </FormControl>
                          <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                            <InputLabel htmlFor="name-helper">Pay Rate Cost Deduc</InputLabel>
                            <Input id="name-helper" value={this.state.payRateCostsDeduc} name="payRateCostsDeduc" startAdornment={<InputAdornment position = "start" > $</InputAdornment>} onChange={this.handleChange} type="number"/>
                          </FormControl>
                          <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                            <InputLabel htmlFor="name-helper">margin</InputLabel>
                            <Input id="name-helper" value={this.state.margin} name="margin" startAdornment={<InputAdornment position = "start" > $</InputAdornment>} onChange={this.handleChange} type="number"/>
                          </FormControl>
                          <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                            <InputLabel htmlFor="name-helper">Margin Percent</InputLabel>
                            <Input id="name-helper" value={this.state.marginPercent} name="marginPercent" startAdornment={<InputAdornment position = "start" > %</InputAdornment>} onChange={this.handleChange} type="number"/>
                          </FormControl>
                          <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                            <InputLabel htmlFor="name-helper">Incentive</InputLabel>
                            <Input id="name-helper" value={this.state.recruitSalesIncentive} name="recruitSalesIncentive" startAdornment={<InputAdornment position = "start" > $</InputAdornment>} onChange={this.handleChange} type="number"/>
                          </FormControl>
                          <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                            <InputLabel htmlFor="name-helper">Manager Incentive</InputLabel>
                            <Input id="name-helper" value={this.state.managerIncentive} name="managerIncentive" startAdornment={<InputAdornment position = "start" > $</InputAdornment>} onChange={this.handleChange} type="number"/>
                          </FormControl>
                    </div>
                  </Paper>)}
                {/*Submit Buttons*/}
                    <Paper className={classes.rootPaper} elevation={4}>
                  <Button variant="raised" className={classes.button} onClick={this.props.closeTheModal}>
                    Cancel
                  </Button>
                  <Button variant="raised" className={classes.button} onClick={this.handleGenerateIncentives}>
                    Generate Incentives
                  </Button>
                  <Button variant="raised" color="primary" className={classes.button} onClick={this.handleSubmitIncentives}>
                    Submit
                  </Button>
                    </Paper>
              </form>);
  }
}

const styles = theme => ({
  rootPaper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  }),
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  formControl: {
    margin: theme.spacing.unit
  },
  parentFormControl: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  startDateField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  }
});
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

EmployeeDetails.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = (state) => {
  return {visaTypeList : state.admin.visaTypeList,
          teamsList : state.admin.teamsList,
          incentive : state.incCal.incentive,
          payRollTypeList: state.admin.payRollTypeList,
          employeeRolesList: state.admin.employeeRolesList};
}
export default connect(mapStateToProps)(withStyles(styles)(EmployeeDetails));
