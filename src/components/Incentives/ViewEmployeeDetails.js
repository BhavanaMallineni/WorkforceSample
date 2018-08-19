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

class ViewEmployeeDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {classes, selectedRow, assignClosedBySelfSalesPer, assignClosedBySelfRec,
      monthsList, recComEfforts, recEfforts, salesPerComEfforts, showIncentives} = this.props;
    return (<form className={classes.container} noValidate="noValidate" autoComplete="off">
                {/* Candidate Info */}
                  <Paper className={classes.rootPaper} elevation={4}>
                  <Typography variant="headline" component="h4">
                    Candidate
                  </Typography>
                  <div className={classes.parentFormControl}>
                    <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                      <InputLabel shrink={true} htmlFor="name-helper" >Candidate Name</InputLabel>
                      <Input value={selectedRow.candidateName}
                        readOnly
                       name="candidateName"/>
                      <FormHelperText >Name of the Candidate assigned</FormHelperText>
                    </FormControl>
                    <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                      <InputLabel shrink={true} htmlFor="name-helper" >Visa Type</InputLabel>
                      <Input value={selectedRow.visaType} readOnly name="visaType" />
                      <FormHelperText >Some important helper text</FormHelperText>
                    </FormControl>
                    <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                      <InputLabel shrink={true} htmlFor="name-helper" >Pay Roll Type</InputLabel>
                      <Input value={selectedRow.payRollType} name="payRollType" readOnly />
                      <FormHelperText >Some important helper text</FormHelperText>
                    </FormControl>
                  </div>
                  <div className={classes.parentFormControl}>
                    <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                      <InputLabel shrink={true} htmlFor="name-helper" >Bill Rate</InputLabel>
                      <Input
                          value={selectedRow.actualBillRate}
                          name="actualBillRate"
                          startAdornment={<InputAdornment position = "start" > $</InputAdornment>}
                          type="number" readOnly/>
                      <FormHelperText >Actual Bill Rate</FormHelperText>
                    </FormControl>
                    <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                      <InputLabel shrink={true} htmlFor="name-helper"  >Pay Rate</InputLabel>
                      <Input value={selectedRow.actualPayRate}
                              name="actualPayRate"
                              readOnly
                              type="number"/>
                      <FormHelperText >Actual Pay Rate</FormHelperText>
                    </FormControl>
                    <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                      <TextField label="Start Date" type="date"
                      value={selectedRow.candidateStartDate} name="candidateStartDate"
                       className={classes.startDateField} />
                    </FormControl>
                    <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                      <InputLabel shrink={true} htmlFor="name-helper">Start Date</InputLabel>
                      <Input value={selectedRow.candidateStartDate}
                              name="candidateStartDate"
                              readOnly
                              type="number"/>
                      <FormHelperText >Actual Pay Rate</FormHelperText>
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
                        <InputLabel shrink={true} htmlFor="name-helper">Sales Person</InputLabel>
                        <Input value={selectedRow.salesPerName}
                                name="salesPerName"
                                readOnly
                                />
                        <FormHelperText >Enter Full Name</FormHelperText>
                      </FormControl>
                      <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                        <InputLabel shrink={true} htmlFor="name-helper">Employee ID</InputLabel>
                        <Input value={selectedRow.salesPerEmpID}
                                name="salesPerEmpID"
                                readOnly/>
                        <FormHelperText >Employee ID from the ADP
                        </FormHelperText>
                      </FormControl>
                      <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                        <InputLabel shrink={true} htmlFor="name-helper">Efforts</InputLabel>
                        <Input
                               value={selectedRow.salesPerEfforts}
                               name="salesPerEfforts"
                               readOnly
                               type="number"/>
                        <FormHelperText >Percentage efforts involved</FormHelperText>
                      </FormControl>
                    </div>
                    <Divider />
                    <div className={classes.parentFormControl}>
                      <FormControlLabel
                          control={
                            <Checkbox
                              checked={selectedRow.assignClosedBySelfSalesPer}
                              name="assignClosedBySelfSalesPer"
                              color="primary"
                            />
                          }
                          label="Closed By Sales"
                        />
                      <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                        <InputLabel shrink={true} htmlFor="name-helper">Comments</InputLabel>
                        <Input value={selectedRow.salesPersonComments}
                                name="salesPersonComments"
                                readOnly />
                        <FormHelperText >Enter Comments on Sales Person
                        </FormHelperText>
                      </FormControl>
                      <FormControl className={classes.formControl}>
                          <InputLabel shrink={true} htmlFor="select-multiple-checkbox">SalesPerMonth</InputLabel>
                          <Input value={selectedRow.salesPerMonth}
                                  name="salesPerMonth"
                                  readOnly />
                        </FormControl>
                    </div>
                    <Divider />
                    {/* Componsated Sales Person */}
                    { salesPerComEfforts && (<div className={classes.parentFormControl}>
                        <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                          <InputLabel shrink={true} htmlFor="name-helper">Name</InputLabel>
                          <Input value={selectedRow.comSalesPerName}
                                  name="comSalesPerName"
                                  readOnly />
                          <FormHelperText >Enter Full Name</FormHelperText>
                        </FormControl>
                        <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                          <InputLabel shrink={true} htmlFor="name-helper">Employee ID</InputLabel>
                          <Input value={selectedRow.comSalesPerEmpID} name="comSalesPerEmpID" />
                          <FormHelperText>Employee ID from the ADP</FormHelperText>
                        </FormControl>
                        <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                          <InputLabel shrink={true} htmlFor="name-helper">Efforts</InputLabel>
                          <Input  value={selectedRow.comSalesPerEfforts} name="comSalesPerEfforts"
                          startAdornment={<InputAdornment position = "start" >%< /InputAdornment>}
                          readOnly type="number"/>
                          <FormHelperText >Percentage efforts involved
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
                        <InputLabel shrink={true} htmlFor="name-helper">Recruiter
                        </InputLabel>
                        <Input value={selectedRow.recName} name="recName" readOnly />
                        <FormHelperText >Enter Full Name</FormHelperText>
                      </FormControl>
                      <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                        <InputLabel shrink={true} htmlFor="name-helper">Employee ID</InputLabel>
                        <Input value={selectedRow.recEmpID} name="recEmpID" readOnly />
                        <FormHelperText >Employee ID from the ADP
                        </FormHelperText>
                      </FormControl>
                      <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                        <InputLabel shrink={true} htmlFor="name-helper">Efforts</InputLabel>
                        <Input type="number"
                        name="recEfforts"
                        startAdornment={<InputAdornment position = "start" >%< /InputAdornment>}
                        readOnly
                        value={recEfforts}/>
                        <FormHelperText  >Percentage efforts involved
                        </FormHelperText>
                      </FormControl>
                    </div>
                    <Divider />
                    <div className={classes.parentFormControl}>
                      <FormControlLabel
                          control={
                            <Checkbox
                              checked={selectedRow.assignClosedBySelfRec}
                              name="assignClosedBySelfRec"
                              color="primary"
                            />
                          }
                          label="Closed By Recruiter"
                        />
                      <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                        <InputLabel shrink={true} htmlFor="name-helper">Comments</InputLabel>
                        <Input value={selectedRow.recComments}
                                name="recComments"
                                readOnly />
                        <FormHelperText >Enter Comments on Recruiter
                        </FormHelperText>
                      </FormControl>
                      <FormControl className={classes.formControl}>
                          <InputLabel shrink={true} htmlFor="select-multiple-checkbox"> Rec Month</InputLabel>
                          <Input value={selectedRow.recMonth}
                                  name="recMonth"
                                  readOnly />
                        </FormControl>
                    </div>
                    <Divider />
                    {recComEfforts && (<div className={classes.parentFormControl}>
                        <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                          <InputLabel shrink={true} htmlFor="name-helper">Recruiter
                          </InputLabel>
                          <Input  value={selectedRow.comRecName} name="comRecName" readOnly />
                          <FormHelperText >Enter Full Name</FormHelperText>
                        </FormControl>
                        <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                          <InputLabel shrink={true} htmlFor="name-helper">Employee ID</InputLabel>
                          <Input  value={selectedRow.comRecEmpID} name="comRecEmpID" readOnly />
                          <FormHelperText >Employee ID from the ADP
                          </FormHelperText>
                        </FormControl>
                        <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                          <InputLabel shrink={true} htmlFor="name-helper">Efforts</InputLabel>
                          <Input  value={selectedRow.comRecEfforts}
                           name="comRecEfforts"
                           startAdornment={<InputAdornment position = "start" >%< /InputAdornment>}
                           readOnly
                           type="number"/>
                          <FormHelperText >Percentage efforts involved
                          </FormHelperText>
                        </FormControl>
                        <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                          <InputLabel shrink={true} htmlFor="name-helper">Comments</InputLabel>
                          <Input  value={selectedRow.comRecComments}
                                  name="comRecComments"
                                  readOnly
                                  type="textarea"/>
                          <FormHelperText >Percentage efforts involved
                          </FormHelperText>
                        </FormControl>
                      </div>)}
                  </Paper>)}
                  {/*Calculated Incentives*/}
                 <Paper className={classes.rootPaper} elevation={4}>
                    <Typography  variant="headline" component="h4">
                      Incentives
                    </Typography>
                    <Divider />
                    <div className={classes.parentFormControl}>
                          <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                            <InputLabel shrink={true} htmlFor="name-helper">Actual Bill Rate</InputLabel>
                            <Input  value={selectedRow.actualBillRate}
                            name="actualBillRate"
                            startAdornment={<InputAdornment position = "start" > $</InputAdornment>}
                            readOnly
                             type="number"/>
                          </FormControl>
                          <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                            <InputLabel shrink={true} htmlFor="name-helper">Actual Pay Rate</InputLabel>
                            <Input   value={selectedRow.actualPayRate}
                                     name="actualPayRate"
                                     startAdornment={<InputAdornment position = "start" > $</InputAdornment>}
                                     readOnly
                                     type="number"/>
                          </FormControl>
                          <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                            <InputLabel shrink={true} htmlFor="name-helper">Bill Rate</InputLabel>
                            <Input  value={selectedRow.billRate} name="billRate"
                            startAdornment={<InputAdornment position = "start" > $</InputAdornment>}
                            readOnly
                             type="number"/>
                          </FormControl>
                          <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                            <InputLabel shrink={true} htmlFor="name-helper">Pay Rate</InputLabel>
                            <Input  value={selectedRow.payRate} name="payRate"
                            startAdornment={<InputAdornment position = "start" > $</InputAdornment>}
                            readOnly type="number"/>
                          </FormControl>
                          <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                            <InputLabel shrink={true} htmlFor="name-helper">Bill Rate Cost Deduc</InputLabel>
                            <Input  value={selectedRow.billRateCostsDeduc} name="billRateCostsDeduc"
                            startAdornment={<InputAdornment position = "start" > $</InputAdornment>}
                            readOnly type="number"/>
                          </FormControl>
                          <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                            <InputLabel shrink={true} htmlFor="name-helper">Pay Rate Cost Deduc</InputLabel>
                            <Input  value={selectedRow.payRateCostsDeduc} name="payRateCostsDeduc"
                            startAdornment={<InputAdornment position = "start" > $</InputAdornment>}
                            readOnly
                             type="number"/>
                          </FormControl>
                          <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                            <InputLabel shrink={true} htmlFor="name-helper">Margin</InputLabel>
                            <Input  value={selectedRow.margin} name="margin"
                            startAdornment={<InputAdornment position = "start" > $</InputAdornment>}
                            readOnly
                            type="number"/>
                          </FormControl>
                          <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                            <InputLabel shrink={true} htmlFor="name-helper">Margin Percent</InputLabel>
                            <Input  value={selectedRow.marginPercent} name="marginPercent"
                            startAdornment={<InputAdornment position = "start" > %</InputAdornment>}
                            readOnly
                             type="number"/>
                          </FormControl>
                          <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                            <InputLabel shrink={true} htmlFor="name-helper">Incentive</InputLabel>
                            <Input  value={selectedRow.recruitSalesIncentive}
                            name="recruitSalesIncentive" startAdornment={<InputAdornment position = "start" > $</InputAdornment>}
                            readOnly
                            type="number"/>
                          </FormControl>
                          <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                            <InputLabel shrink={true} htmlFor="name-helper">Manager Incentive</InputLabel>
                            <Input  value={selectedRow.managerIncentive} name="managerIncentive"
                             startAdornment={<InputAdornment position = "start" > $</InputAdornment>}
                             readOnly type="number"/>
                          </FormControl>
                    </div>
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

ViewEmployeeDetails.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ViewEmployeeDetails);
