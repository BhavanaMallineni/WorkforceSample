import * as Types from "../../actions/types";

const initialObj = {
  GCGuestHouse:{
    adminCost:6, //billRateCostsDeduc
    visaCost:12, // payRateCostsDeduc
    salesIncentives:[{marginMax:5.5, marginMin:3.6, incentive:5000},
                     {marginMax:7.5, marginMin:5.6, incentive:8000},
                     {marginMax:9.5, marginMin:7.6, incentive:10000},
                     {marginMax:11.5, marginMin:9.6, incentive:12000},
                     {marginMax:14.5, marginMin:11.6, incentive:15000},
                     {marginMax:15.5, marginMin:14.6, incentive:17000},
                     {marginMax:17.5, marginMin:15.6, incentive:20000},
                     {marginMax:100, marginMin:17.51, incentive:25000}],
   tmIncentives:[{marginMax:6.5, marginMin:4.6, incentive:4000},
                {marginMax:8.5, marginMin:6.6, incentive:6000},
                {marginMax:10.5, marginMin:8.6, incentive:8000},
                {marginMax:12.5, marginMin:10.6, incentive:10000},
                {marginMax:14.5, marginMin:12.6, incentive:12000},
                {marginMax:16.5, marginMin:14.6, incentive:14000},
                {marginMax:17.5, marginMin:16.6, incentive:16000},
                {marginMax:18.5, marginMin:17.6, incentive:18000},
                {marginMax:100, marginMin:18.6, incentive:20000}]
  },
  OPTGeneral:{
    adminCost:10, //billRateCostsDeduc
    visaCost:8, // payRateCostsDeduc
    salesIncentives:[{marginMax:5.5, marginMin:3.6, incentive:5000},
                     {marginMax:7.5, marginMin:5.6, incentive:8000},
                     {marginMax:9.5, marginMin:7.6, incentive:10000},
                     {marginMax:11.5, marginMin:9.6, incentive:12000},
                     {marginMax:14.5, marginMin:11.6, incentive:15000},
                     {marginMax:15.5, marginMin:14.6, incentive:17000},
                     {marginMax:17.5, marginMin:15.6, incentive:20000},
                     {marginMax:100, marginMin:17.51, incentive:25000}],
   tmIncentives:[{marginMax:6.5, marginMin:4.6, incentive:4000},
                {marginMax:8.5, marginMin:6.6, incentive:6000},
                {marginMax:10.5, marginMin:8.6, incentive:8000},
                {marginMax:12.5, marginMin:10.6, incentive:10000},
                {marginMax:14.5, marginMin:12.6, incentive:12000},
                {marginMax:16.5, marginMin:14.6, incentive:14000},
                {marginMax:17.5, marginMin:16.6, incentive:16000},
                {marginMax:18.5, marginMin:17.6, incentive:18000},
                {marginMax:100, marginMin:18.6, incentive:20000}]
  },
  OPTGuestHouse:{
    adminCost:7, //billRateCostsDeduc
    visaCost:8, // payRateCostsDeduc
    salesIncentives:[{marginMax:5.5, marginMin:3.6, incentive:5000},
                     {marginMax:7.5, marginMin:5.6, incentive:8000},
                     {marginMax:9.5, marginMin:7.6, incentive:10000},
                     {marginMax:11.5, marginMin:9.6, incentive:12000},
                     {marginMax:14.5, marginMin:11.6, incentive:15000},
                     {marginMax:15.5, marginMin:14.6, incentive:17000},
                     {marginMax:17.5, marginMin:15.6, incentive:20000},
                     {marginMax:100, marginMin:17.51, incentive:25000}],
   tmIncentives:[{marginMax:6.5, marginMin:4.6, incentive:4000},
                {marginMax:8.5, marginMin:6.6, incentive:6000},
                {marginMax:10.5, marginMin:8.6, incentive:8000},
                {marginMax:12.5, marginMin:10.6, incentive:10000},
                {marginMax:14.5, marginMin:12.6, incentive:12000},
                {marginMax:16.5, marginMin:14.6, incentive:14000},
                {marginMax:17.5, marginMin:16.6, incentive:16000},
                {marginMax:18.5, marginMin:17.6, incentive:18000},
                {marginMax:100, marginMin:18.6, incentive:20000}]
  },
  Citizen:{
    adminCost:3, //billRateCostsDeduc
    visaCost:12, // payRateCostsDeduc
    salesIncentives:[{marginMax:5.5, marginMin:3.6, incentive:5000},
                     {marginMax:7.5, marginMin:5.6, incentive:8000},
                     {marginMax:9.5, marginMin:7.6, incentive:10000},
                     {marginMax:11.5, marginMin:9.6, incentive:12000},
                     {marginMax:14.5, marginMin:11.6, incentive:15000},
                     {marginMax:15.5, marginMin:14.6, incentive:17000},
                     {marginMax:17.5, marginMin:15.6, incentive:20000},
                     {marginMax:100, marginMin:17.51, incentive:25000}],
   tmIncentives:[{marginMax:6.5, marginMin:4.6, incentive:4000},
                {marginMax:8.5, marginMin:6.6, incentive:6000},
                {marginMax:10.5, marginMin:8.6, incentive:8000},
                {marginMax:12.5, marginMin:10.6, incentive:10000},
                {marginMax:14.5, marginMin:12.6, incentive:12000},
                {marginMax:16.5, marginMin:14.6, incentive:14000},
                {marginMax:17.5, marginMin:16.6, incentive:16000},
                {marginMax:18.5, marginMin:17.6, incentive:18000},
                {marginMax:100, marginMin:18.6, incentive:20000}]
  },
  H1B:{
    adminCost:8, //billRateCostsDeduc in %
    visaCost:12, // payRateCostsDeduc
    salesIncentives:[{marginMax:5.5, marginMin:3.6, incentive:5000},
                     {marginMax:7.5, marginMin:5.6, incentive:8000},
                     {marginMax:9.5, marginMin:7.6, incentive:10000},
                     {marginMax:11.5, marginMin:9.6, incentive:12000},
                     {marginMax:14.5, marginMin:11.6, incentive:15000},
                     {marginMax:15.5, marginMin:14.6, incentive:17000},
                     {marginMax:17.5, marginMin:15.6, incentive:20000},
                     {marginMax:100, marginMin:17.51, incentive:25000}],
   tmIncentives:[{marginMax:6.5, marginMin:4.6, incentive:4000},
                {marginMax:8.5, marginMin:6.6, incentive:6000},
                {marginMax:10.5, marginMin:8.6, incentive:8000},
                {marginMax:12.5, marginMin:10.6, incentive:10000},
                {marginMax:14.5, marginMin:12.6, incentive:12000},
                {marginMax:16.5, marginMin:14.6, incentive:14000},
                {marginMax:17.5, marginMin:16.6, incentive:16000},
                {marginMax:18.5, marginMin:17.6, incentive:18000},
                {marginMax:100, marginMin:18.6, incentive:20000}]
  },
  C2C:{
    adminCost:0, //billRateCostsDeduc
    visaCost:0, // payRateCostsDeduc
    salesIncentives:[{marginMax:5.5, marginMin:3.6, incentive:5000},
                     {marginMax:7.5, marginMin:5.6, incentive:8000},
                     {marginMax:9.5, marginMin:7.6, incentive:10000},
                     {marginMax:11.5, marginMin:9.6, incentive:12000},
                     {marginMax:14.5, marginMin:11.6, incentive:15000},
                     {marginMax:15.5, marginMin:14.6, incentive:17000},
                     {marginMax:17.5, marginMin:15.6, incentive:20000},
                     {marginMax:100, marginMin:17.51, incentive:25000}],
   tmIncentives:[{marginMax:6.5, marginMin:4.6, incentive:4000},
                {marginMax:8.5, marginMin:6.6, incentive:6000},
                {marginMax:10.5, marginMin:8.6, incentive:8000},
                {marginMax:12.5, marginMin:10.6, incentive:10000},
                {marginMax:14.5, marginMin:12.6, incentive:12000},
                {marginMax:16.5, marginMin:14.6, incentive:14000},
                {marginMax:17.5, marginMin:16.6, incentive:16000},
                {marginMax:18.5, marginMin:17.6, incentive:18000},
                {marginMax:100, marginMin:18.6, incentive:20000}]
  },
}

const initialState = {
  incentive:{
    "billRate":0.0,// actualBillRate - billRateCostsDeduc
    "actualBillRate": 0.0,
    "billRateCostsDeduc":  0 ,//8/100 * actualBillRate
    "payRate": 0,// actualPayRate - payRateCostsDeduc
    "actualPayRate": 0,
    "payRateCostsDeduc": 0,//12/100 * actualPayRate,
    "margin": 0,// billRate - payRate
    "marginPercent": 0, //(margin * 100)/actualBillRate
    "recruitSalesIncentive": 0,// Calculated from Sales Incentives Table
    "managerIncentive": 0,// calculated from T M Incentive Table
  }
}

const calRecruiterSalesInc = (marginPercent, visaType) => {
  /*switch(marginPercent){
      case ((parseFloat(marginPercent) < parseFloat(initialObj[visaType]["salesIncentives"][0]["marginMax"])) && (parseFloat(initialObj[visaType]["salesIncentives"][0]["marginMin"]) < parseFloat(marginPercent))):
          return parseFloat(initialObj[visaType]["salesIncentives"][0]["incentive"]);
      case ((parseFloat(marginPercent) < parseFloat(initialObj[visaType]["salesIncentives"][1]["marginMax"])) && (parseFloat(initialObj[visaType]["salesIncentives"][1]["marginMin"]) < parseFloat(marginPercent))):
          return parseFloat(initialObj[visaType]["salesIncentives"][1]["incentive"]);
      case ((parseFloat(marginPercent) < parseFloat(initialObj[visaType]["salesIncentives"][2]["marginMax"])) && (parseFloat(initialObj[visaType]["salesIncentives"][2]["marginMin"]) < parseFloat(marginPercent))):
          return parseFloat(initialObj[visaType]["salesIncentives"][2]["incentive"]);
      case ((parseFloat(marginPercent) < parseFloat(initialObj[visaType]["salesIncentives"][3]["marginMax"])) && (parseFloat(initialObj[visaType]["salesIncentives"][3]["marginMin"]) < parseFloat(marginPercent))):
          return parseFloat(initialObj[visaType]["salesIncentives"][3]["incentive"]);
      case ((parseFloat(marginPercent) < parseFloat(initialObj[visaType]["salesIncentives"][4]["marginMax"])) && (parseFloat(initialObj[visaType]["salesIncentives"][4]["marginMin"]) < parseFloat(marginPercent))):
          return parseFloat(initialObj[visaType]["salesIncentives"][4]["incentive"]);
      case ((parseFloat(marginPercent) < parseFloat(initialObj[visaType]["salesIncentives"][5]["marginMax"])) && (parseFloat(initialObj[visaType]["salesIncentives"][5]["marginMin"]) < parseFloat(marginPercent))):
          return parseFloat(initialObj[visaType]["salesIncentives"][5]["incentive"]);
      case ((parseFloat(marginPercent) < parseFloat(initialObj[visaType]["salesIncentives"][6]["marginMax"])) && (parseFloat(initialObj[visaType]["salesIncentives"][6]["marginMin"]) < parseFloat(marginPercent))):
          return parseFloat(initialObj[visaType]["salesIncentives"][6]["incentive"]);
      case ((parseFloat(marginPercent) < parseFloat(initialObj[visaType]["salesIncentives"][7]["marginMax"])) && (parseFloat(initialObj[visaType]["salesIncentives"][7]["marginMin"]) < parseFloat(marginPercent))):
          return parseFloat(initialObj[visaType]["salesIncentives"][7]["incentive"]);
      default :
          return parseFloat(initialObj[visaType]["salesIncentives"][7]["incentive"]);
  }*/
  //switch(marginPercent){
       if((parseFloat(marginPercent) < parseFloat(initialObj[visaType]["salesIncentives"][0]["marginMax"])) && (parseFloat(initialObj[visaType]["salesIncentives"][0]["marginMin"]) < parseFloat(marginPercent)))
          { return parseFloat(initialObj[visaType]["salesIncentives"][0]["incentive"]); }
      if((parseFloat(marginPercent) < parseFloat(initialObj[visaType]["salesIncentives"][1]["marginMax"])) && (parseFloat(initialObj[visaType]["salesIncentives"][1]["marginMin"]) < parseFloat(marginPercent)))
           { return parseFloat(initialObj[visaType]["salesIncentives"][1]["incentive"]); }
      if((parseFloat(marginPercent) < parseFloat(initialObj[visaType]["salesIncentives"][2]["marginMax"])) && (parseFloat(initialObj[visaType]["salesIncentives"][2]["marginMin"]) < parseFloat(marginPercent)))
           { return parseFloat(initialObj[visaType]["salesIncentives"][2]["incentive"]);  }
      if((parseFloat(marginPercent) < parseFloat(initialObj[visaType]["salesIncentives"][3]["marginMax"])) && (parseFloat(initialObj[visaType]["salesIncentives"][3]["marginMin"]) < parseFloat(marginPercent)))
          { return parseFloat(initialObj[visaType]["salesIncentives"][3]["incentive"]); }
      if((parseFloat(marginPercent) < parseFloat(initialObj[visaType]["salesIncentives"][4]["marginMax"])) && (parseFloat(initialObj[visaType]["salesIncentives"][4]["marginMin"]) < parseFloat(marginPercent)))
           { return parseFloat(initialObj[visaType]["salesIncentives"][4]["incentive"]); }
          if((parseFloat(marginPercent) < parseFloat(initialObj[visaType]["salesIncentives"][5]["marginMax"])) && (parseFloat(initialObj[visaType]["salesIncentives"][5]["marginMin"]) < parseFloat(marginPercent)))
          { return parseFloat(initialObj[visaType]["salesIncentives"][5]["incentive"]); }
      if((parseFloat(marginPercent) < parseFloat(initialObj[visaType]["salesIncentives"][6]["marginMax"])) && (parseFloat(initialObj[visaType]["salesIncentives"][6]["marginMin"]) < parseFloat(marginPercent)))
          { return parseFloat(initialObj[visaType]["salesIncentives"][6]["incentive"]); }
      if((parseFloat(marginPercent) < parseFloat(initialObj[visaType]["salesIncentives"][7]["marginMax"])) && (parseFloat(initialObj[visaType]["salesIncentives"][7]["marginMin"]) < parseFloat(marginPercent)))
          { return parseFloat(initialObj[visaType]["salesIncentives"][7]["incentive"]); }
    //  default :
  //        return parseFloat(initialObj[visaType]["salesIncentives"][7]["incentive"]);
  //}
}

const calManagerInc = (marginPercent, visaType) => {
  /*switch(marginPercent){
      case ((parseFloat(marginPercent) < parseFloat(initialObj[visaType]["tmIncentives"][0]["marginMax"])) && (parseFloat(initialObj[visaType]["tmIncentives"][0]["marginMin"]) < parseFloat(marginPercent))):
          return parseFloat(initialObj[visaType]["tmIncentives"][0]["incentive"]);
      case ((parseFloat(marginPercent) < parseFloat(initialObj[visaType]["tmIncentives"][1]["marginMax"])) && (parseFloat(initialObj[visaType]["tmIncentives"][1]["marginMin"]) < parseFloat(marginPercent))):
          return parseFloat(initialObj[visaType]["tmIncentives"][1]["incentive"]);
      case ((parseFloat(marginPercent) < parseFloat(initialObj[visaType]["tmIncentives"][2]["marginMax"])) && (parseFloat(initialObj[visaType]["tmIncentives"][2]["marginMin"]) < parseFloat(marginPercent))):
          return parseFloat(initialObj[visaType]["tmIncentives"][2]["incentive"]);
      case ((parseFloat(marginPercent) < parseFloat(initialObj[visaType]["tmIncentives"][3]["marginMax"])) && (parseFloat(initialObj[visaType]["tmIncentives"][3]["marginMin"]) < parseFloat(marginPercent))):
          return parseFloat(initialObj[visaType]["tmIncentives"][3]["incentive"]);
      case ((parseFloat(marginPercent) < parseFloat(initialObj[visaType]["tmIncentives"][4]["marginMax"])) && (parseFloat(initialObj[visaType]["tmIncentives"][4]["marginMin"]) < parseFloat(marginPercent))):
          return parseFloat(initialObj[visaType]["tmIncentives"][4]["incentive"]);
      case ((parseFloat(marginPercent) < parseFloat(initialObj[visaType]["tmIncentives"][5]["marginMax"])) && (parseFloat(initialObj[visaType]["tmIncentives"][5]["marginMin"]) < parseFloat(marginPercent))):
          return parseFloat(initialObj[visaType]["tmIncentives"][5]["incentive"]);
      case ((parseFloat(marginPercent) < parseFloat(initialObj[visaType]["tmIncentives"][6]["marginMax"])) && (parseFloat(initialObj[visaType]["tmIncentives"][6]["marginMin"]) < parseFloat(marginPercent))):
          return parseFloat(initialObj[visaType]["tmIncentives"][6]["incentive"]);
      case ((parseFloat(marginPercent) < parseFloat(initialObj[visaType]["tmIncentives"][7]["marginMax"])) && (parseFloat(initialObj[visaType]["tmIncentives"][7]["marginMin"]) < parseFloat(marginPercent))):
          return parseFloat(initialObj[visaType]["tmIncentives"][7]["incentive"]);
      case ((parseFloat(marginPercent) < parseFloat(initialObj[visaType]["tmIncentives"][8]["marginMax"])) && (parseFloat(initialObj[visaType]["tmIncentives"][8]["marginMin"]) < parseFloat(marginPercent))):
              return parseFloat(initialObj[visaType]["tmIncentives"][8]["incentive"]);
      default :
          return parseFloat(initialObj[visaType]["tmIncentives"][8]["incentive"]);
  }*/
  //switch(marginPercent){
      if((parseFloat(marginPercent) < parseFloat(initialObj[visaType]["tmIncentives"][0]["marginMax"])) && (parseFloat(initialObj[visaType]["tmIncentives"][0]["marginMin"]) < parseFloat(marginPercent)))
           { return parseFloat(initialObj[visaType]["tmIncentives"][0]["incentive"]); }
      if((parseFloat(marginPercent) < parseFloat(initialObj[visaType]["tmIncentives"][1]["marginMax"])) && (parseFloat(initialObj[visaType]["tmIncentives"][1]["marginMin"]) < parseFloat(marginPercent)))
           { return parseFloat(initialObj[visaType]["tmIncentives"][1]["incentive"]); }
      if((parseFloat(marginPercent) < parseFloat(initialObj[visaType]["tmIncentives"][2]["marginMax"])) && (parseFloat(initialObj[visaType]["tmIncentives"][2]["marginMin"]) < parseFloat(marginPercent)))
           { return parseFloat(initialObj[visaType]["tmIncentives"][2]["incentive"]); }
      if((parseFloat(marginPercent) < parseFloat(initialObj[visaType]["tmIncentives"][3]["marginMax"])) && (parseFloat(initialObj[visaType]["tmIncentives"][3]["marginMin"]) < parseFloat(marginPercent)))
           {return parseFloat(initialObj[visaType]["tmIncentives"][3]["incentive"]); }
      if((parseFloat(marginPercent) < parseFloat(initialObj[visaType]["tmIncentives"][4]["marginMax"])) && (parseFloat(initialObj[visaType]["tmIncentives"][4]["marginMin"]) < parseFloat(marginPercent)))
          { return parseFloat(initialObj[visaType]["tmIncentives"][4]["incentive"]); }
      if((parseFloat(marginPercent) < parseFloat(initialObj[visaType]["tmIncentives"][5]["marginMax"])) && (parseFloat(initialObj[visaType]["tmIncentives"][5]["marginMin"]) < parseFloat(marginPercent)))
          { return parseFloat(initialObj[visaType]["tmIncentives"][5]["incentive"]); }
      if((parseFloat(marginPercent) < parseFloat(initialObj[visaType]["tmIncentives"][6]["marginMax"])) && (parseFloat(initialObj[visaType]["tmIncentives"][6]["marginMin"]) < parseFloat(marginPercent)))
          { return parseFloat(initialObj[visaType]["tmIncentives"][6]["incentive"]); }
      if((parseFloat(marginPercent) < parseFloat(initialObj[visaType]["tmIncentives"][7]["marginMax"])) && (parseFloat(initialObj[visaType]["tmIncentives"][7]["marginMin"]) < parseFloat(marginPercent)))
          { return parseFloat(initialObj[visaType]["tmIncentives"][7]["incentive"]); }
      if((parseFloat(marginPercent) < parseFloat(initialObj[visaType]["tmIncentives"][8]["marginMax"])) && (parseFloat(initialObj[visaType]["tmIncentives"][8]["marginMin"]) < parseFloat(marginPercent)))
            {  return parseFloat(initialObj[visaType]["tmIncentives"][8]["incentive"]); }
//      default :
//          return parseFloat(initialObj[visaType]["tmIncentives"][8]["incentive"]);
//  }
}

const buildIncentiveObject = (actualBillRate, actualPayRate, visaType) => {
      const adminCost = parseFloat(initialObj[visaType]["adminCost"]);
      const visaCost =  parseFloat(initialObj[visaType]["visaCost"]);
      const billRateCostsDeduc = ((adminCost * actualBillRate)/100);
      const payRateCostsDeduc = ((visaCost * actualPayRate)/100);
      const billRate = (actualBillRate - billRateCostsDeduc);
      const payRate = (actualPayRate - payRateCostsDeduc);
      const margin = (billRate - payRate);
      const marginPercent = ((margin * 100)/ actualBillRate);
      const recruitSalesIncentive = calRecruiterSalesInc(marginPercent, visaType);
      const managerIncentive = calManagerInc(marginPercent, visaType);
      return {
        "billRate": billRate,
        "actualBillRate":parseFloat(actualBillRate),
        "billRateCostsDeduc": billRateCostsDeduc,
        "payRate": payRate,
        "actualPayRate":parseFloat(actualPayRate),
        "payRateCostsDeduc": payRateCostsDeduc,
        "margin": margin.toFixed(2),
        "marginPercent": marginPercent.toFixed(2),
        "recruitSalesIncentive": recruitSalesIncentive,// Calculated from Sales Incentives Table
        "managerIncentive":managerIncentive// calculated from T M Incentive Table
      }
}

const handleCalculateIncentives = (state, action) => {
  let newState = {...state};
  if(action.billRate !== undefined && action.payRate  !== undefined && action.visaType  !== undefined){
      newState = Object.assign({}, state, { incentive : buildIncentiveObject(parseFloat(action.billRate), parseFloat(action.payRate), action.visaType) });
  }
  return {...newState}
}

export default (state = initialState, action) => {
    switch(action.type){
      case Types.GET_INCENTIVE_FOR_VISA_TYPE_FROM_BILL_PAY_RATE :
          return handleCalculateIncentives(state, action);
      default :
        return { ...state};
    }
}
