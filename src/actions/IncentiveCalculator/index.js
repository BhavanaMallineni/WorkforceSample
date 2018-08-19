import * as Types from '../types';

export const getIncentivesForVisaTypeFromBillPayRate = (billRate,payRate,visaType) => ({
  type:Types.GET_INCENTIVE_FOR_VISA_TYPE_FROM_BILL_PAY_RATE,
  payRate,
  billRate,
  visaType
})
