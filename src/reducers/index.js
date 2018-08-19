import { combineReducers } from 'redux';
import auth from './Auth';
import admin from './AdminIncentives';
import incentives from './Incentives';
import incCal from './IncentivesCalculator';

export default combineReducers({
  auth,
  admin,
  incentives,
  incCal
});
