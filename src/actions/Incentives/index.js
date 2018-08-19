import * as Types from '../types';

export const getIncTranListSucResp = (response) => ({
  type:Types.GET_INCENTIVE_TRANSACTIONS_LIST_SUCCESS_RESPONSE,
  response
})

export const getIncentiveTransactionList = () => ({
  type:Types.GET_INCENTIVE_TRANSACTIONS_LIST
})

export const createNewIncentiveTransaction = (request) => ({
  type:Types.CREATE_NEW_INCENTIVE_TRANSACTION,
  request
})

export const updatedIncentiveTransaction = (request) => ({
  type:Types.UPDATE_INCENTIVE_TRANSACTION,
  request
})

export const getCreateIncTranSucResp = (response) => ({
  type:Types.CREATE_NEW_INCENTIVE_TRANSACTION_SUCCESS_RESPONSE,
  response
})

export const getUpdatedIncTranSucResp = (response) => ({
  type:Types.UPDATE_INCENTIVE_TRANSACTION_SUCCESS_RESPONSE,
  response
})
