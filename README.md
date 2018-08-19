// TODO
// create the screen to enter the recruiter to the LIST - not required
// create the screen to enter the Sales Person to the LIST- not required
// when adding a new row to the Incentive List we can select the Recruiter/salesperson from the drop down
// Add percentage efforts to Each Person
//

// Create a List of VISA Type - GC OPT Citizen, H1b
// Create a List of Employee Type - C2C, W2, NewW2
// Create a List of Role - Sales, Recruiter


// Create a screen to enter the Salesperson/Recruiter to the IncentiveDetails Screen with the below fields

// Employee Info

// employeeName
// firstName
// lastName
// employeeId
// employeeRole
// employeeIncentive,
// isTeamLead

 Transaction Info


// transactionId
// team
// salesPerName
// salesPerEmpID
// salesPerIncAmount
// salesPerPerctEfforts
// comSalesPerPerctEfforts
// comSalesPerEmpID
// comSalesPerEmpName
// salesPersonComments
// recName
// recEmpID
// recPerctEfforts
// compRecruitPerctEfforts
// compRecruitEmpID
// compRecruitEmpName
// recIncAmount
// recComments
// candidateName
// candidateEmpID
// candidateStDate
// billRate
// visaType
// payRate
// marginPerct
// margin
// incentiveTL
// totalEmpIncentive
// incentiveMonths :
// incentiveStMonth
// incentiveEndMonth
// createdDate
// createdBy
// modifiedDate
// modifiedBy
// commentsToSalesPerson
// comments
// commentsToRecruiter
// months:[]
// managerIncentive
<!-- salesPerInc : 0,
comSalesPerInc : 0,
recInc:0,
comRecInc:0 -->


// commit to GIT
git add .
git commit -m ""
git push -u origin rsrit-workforce-1

// Questions ?

// should we capture the employee details upfront
// should we capture the employee ID?
// does the incentive be repetitive monthly?
// does the sales person and recruiter be same person?
// can we have a list of employees with roles properly defined?
// can we get proper teams names list
// Can we show the total amount of the employee and the details in the same sheet

/*

h1b

{
  "billRate":100.00,// actualBillRate - billRateCostsDeduc
  "actualBillRate":100.00,
  "billRateCostsDeduc":8/100 * actualBillRate
  "payRate":"",// actualPayRate - payRateCostsDeduc
  "actualPayRate":"",
  "payRateCostsDeduc": 12/100 * actualPayRate,
  "margin":,// billRate - payRate
  "marginPercent":, //(margin * 100)/actualBillRate
  "recruitSalesIncentive":"",// Calculated from Sales Incentives Table
  "managerIncentive":""// calculated from T M Incentive Table
}


// Payrate Calculator
// how the payrate in calculated from salary ? salary/2080 -- what is 2080 just curious
// how do we get the salary ? -- entered by the user
{
  "salary":90000,// how do we get the salary ?
  "payrate":43.666,// salary/2080
  "billRate":"",// % basis ?
  "percentage":"",// % basis ?
  "payRatePerct":""// % basis ?
}

// what is the text at the bottom ---?
IncentiveSales Table

TMIncentives Table


*/


/*

OPT General
{
  "billRate":100.00,// actualBillRate - billRateCostsDeduc
  "actualBillRate":100.00,
  "billRateCostsDeduc":10/100 * actualBillRate
  "payRate":"",// actualPayRate - payRateCostsDeduc
  "actualPayRate":"",
  "payRateCostsDeduc": 8/100 * actualPayRate,
  "margin":,// billRate - payRate
  "marginPercent":, //(margin * 100)/actualBillRate
  "recruitSalesIncentive":"",// Calculated from Sales Incentives Table
  "managerIncentive":""// calculated from T M Incentive Table
}


OPT Guest House

{
  "billRate":100.00,// actualBillRate - billRateCostsDeduc
  "actualBillRate":100.00,
  "billRateCostsDeduc":7/100 * actualBillRate
  "payRate":"",// actualPayRate - payRateCostsDeduc
  "actualPayRate":"",
  "payRateCostsDeduc": 8/100 * actualPayRate,
  "margin":,// billRate - payRate
  "marginPercent":, //(margin * 100)/actualBillRate
  "recruitSalesIncentive":"",// Calculated from Sales Incentives Table
  "managerIncentive":""// calculated from T M Incentive Table
}
IncentiveSales Table

TMIncentives Table


// how the payrate in calculated from salary ? salary/2080 -- what is 2080 just curious
// how do we get the salary ? -- entered by the user
{
  "salary":90000,// how do we get the salary ?
  "payrate":43.666,// salary/2080
  "billRate":"",// % basis ?
  "percentage":"",// % basis ?
  "payRatePerct":""// % basis ?
}

*/

/*
GC

{
  "billRate":100.00,// actualBillRate - billRateCostsDeduc
  "actualBillRate":100.00,
  "billRateCostsDeduc":6/100 * actualBillRate
  "payRate":"",// actualPayRate - payRateCostsDeduc
  "actualPayRate":"",
  "payRateCostsDeduc": 12/100 * actualPayRate,
  "margin":,// billRate - payRate
  "marginPercent":, //(margin * 100)/actualBillRate
  "recruitSalesIncentive":"",// Calculated from Sales Incentives Table
  "managerIncentive":""// calculated from T M Incentive Table
}


// Payrate Calculator
// how the payrate in calculated from salary ? salary/2080 -- what is 2080 just curious
// how do we get the salary ? -- entered by the user
{
  "salary":90000,// how do we get the salary ?
  "payrate":43.666,// salary/2080
  "billRate":"",// % basis ?
  "percentage":"",// % basis ?
  "payRatePerct":""// % basis ?
}

// what is the text at the bottom ---?
IncentiveSales Table

TMIncentives Table


*/

/*
C2C -- why did we have separate sheet for c2c??

{
  "billRate":100.00,// actualBillRate - billRateCostsDeduc
  "actualBillRate":100.00,
  "billRateCostsDeduc":0,
  "payRate":"",// actualPayRate - payRateCostsDeduc
  "actualPayRate":"",
  "payRateCostsDeduc": 0,
  "margin":,// billRate - payRate
  "marginPercent":, //(margin * 100)/actualBillRate
  "recruitSalesIncentive":"",// Calculated from Sales Incentives Table
  "managerIncentive":""// calculated from T M Incentive Table
}




EXP GC USC

{
  "billRate":100.00,// actualBillRate - billRateCostsDeduc
  "actualBillRate":100.00,
  "billRateCostsDeduc":3/100 * actualBillRate
  "payRate":"",// actualPayRate - payRateCostsDeduc
  "actualPayRate":"",
  "payRateCostsDeduc": 12/100 * actualPayRate,
  "margin":,// billRate - payRate
  "marginPercent":, //(margin * 100)/actualBillRate
  "recruitSalesIncentive":"",// Calculated from Sales Incentives Table
  "managerIncentive":""// calculated from T M Incentive Table
}

C2C Incentive Table




Notes:

If margin is $10-15 more, commission will be paid for 6 instalments if consultant works for 300 hours or more
Margin of $15 consultant must bill for 500 hours






/*return (<form className={classes.container} noValidate="noValidate" autoComplete="off">
            {/* Candidate Info */}
              <Paper className={classes.rootPaper} elevation={4}>
              <Typography variant="headline" component="h4">
                Candidate
              </Typography>
              <div className={classes.parentFormControl}>
                <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                  <InputLabel htmlFor="name-helper">Candidate Name</InputLabel>
                  <Input id="name-helper" value={this.state.candidateName}
                    readOnly
                   name="candidateName"/>
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
          </form>);*/
