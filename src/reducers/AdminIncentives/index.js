import * as Types from "../../actions/types";


const initialUserObj = {
  payRollTypeList:[{id:"11", label:"C2C"},{id:"12", label:"W2"},{id:"13", label:"NewW2"}],
  employeeRolesList:[{id:"21", label:"Sales"},{id:"22", label:"Recruiter"}],
  visaTypeList:[{id:"31", label:"GCGuestHouse",notes:"" },{id:"32", label:"OPTGeneral",notes:"" },{id:"33", label:"Citizen",notes:"" },{id:"34", label:"H1B",notes:"" },{id:"35", label:"C2C",notes:"" }, {id:"36", label:"OPTGuestHouse",notes:"" }],
  teamsList : [{id:'41',label:'VS'},{id:'42',label:'DFZ'},{id:'43',label:'Faizan'},{id:'44',label:'Sandeep'},{id:'45',label:'SK'}],
  employeesList : [{employeeName : "Phani", firstName: "Phani", lastName: "", employeeId: "2001", employeeRole: "Sales",isActive:true, isTeamLead: "", comments:""},
                   {employeeName : "Bharathi", firstName: "Bharathi", lastName: "", employeeId: "2002", employeeRole: "Sales", isActive:true, isTeamLead: "", comments:""},
                   {employeeName : "Irfan", firstName: "Irfan", lastName: "", employeeId: "2003", employeeRole: "Sales",isActive:true, isTeamLead: "", comments:""},
                   {employeeName : "Uday", firstName: "Uday", lastName: "", employeeId: "2004", employeeRole: "Sales",isActive:true, isTeamLead: "", comments:""},
                   {employeeName : "Sudheer", firstName: "Sudheer", lastName: "", employeeId: "2005", employeeRole: "Recruiter",isActive:true, isTeamLead: "", comments:""},
                   {employeeName : "Ameet", firstName: "Ameet", lastName: "", employeeId: "2006", employeeRole: "Recruiter",isActive:true, isTeamLead: "", comments:""},
                   {employeeName : "Sundar", firstName: "Sundar", lastName: "", employeeId: "2007", employeeRole: "Recruiter",isActive:true, isTeamLead: "", comments:""}],
  salesPersonsList : [],
  recruitersList : []
}

export default (state = initialUserObj, action) => {
    switch(action.type){
      case Types.GET_VISA_TYPE_LIST :
           return { ...state};
      case Types.GET_PAYROLL_TYPE_LIST :
          return { ...state};
      case Types.GET_EMPLOYEE_ROLES_LIST :
           return { ...state};
      case Types.GET_TEAMS_LIST :
           return { ...state};
      case Types.GET_EMPLOYEES_LIST :
           return { ...state};
      case Types.GET_SALES_PERSONS_LIST :
           return { ...state};
      case Types.GET_RECRUITERS_LIST :
           return { ...state};
      case Types.GET_INITIAL_DATA_LIST :
           return { ...state};
      default :
           return state;
    }
}
