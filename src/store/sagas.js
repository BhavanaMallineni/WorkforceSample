import { takeEvery, call, put, select, take, fork } from 'redux-saga/effects';
import * as Types from '../actions/types';
import {getCreateIncTranSucResp, getUpdatedIncTranSucResp, getIncTranListSucResp}  from "../actions/Incentives";
import * as API from '../config';
import { eventChannel } from 'redux-saga';
import {loginUserSuccess, loginUserFailure} from '../actions/Auth';
//import { db, auth } from '../firebase';
import firebase from '../firebase';


const database = firebase.database();


const LoginUserServiceCall  = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}
function* fetchLoginUser(action){
  try {
    const response = yield call(LoginUserServiceCall, action.userName, action.password);
    yield put(loginUserSuccess(response));
  } catch (error) {
    yield put(loginUserFailure(error))
  }
}

const LogoutUserServiceCall  = (userId) => {
  return firebase.auth().signOut(userId);
}
function* fetchLogoutUser(action){
  try {
    const response = yield call(LogoutUserServiceCall, action.userId);
    const result = yield response.json();
    if (result.error) {
      yield put({ type: Types.LOGOUT_USER_SERVER_REPONSE_ERROR, error: result.error });
    } else {
      yield put({ type: Types.LOGOUT_USER_SERVER_RESPONSE_SUCCESS, result });
    }
  } catch (error) {
    yield put({ type: Types.SERVER_CALL_FAILED, error: error.message });
  }
}



function insert(item) {
    const newItemRef = database.ref('items').push();
    return newItemRef.set(item);
}
function createEventChannel() {
    const listener = eventChannel(
        emit => {
            database.ref('items')
            .on('child_added', data => emit(data.val()));
                return () => database.ref('items').off(listener);
        }
    );

    return listener;
};

function* updatedItemSaga() {
    const updateChannel = createEventChannel();
    while(true) {
        const item = yield take(updateChannel);
        yield put(getUpdatedIncTranSucResp(item));
    }
}

function* createItemSaga() {
    const action = yield take(Types.CREATE_NEW_INCENTIVE_TRANSACTION);
    try {
        const response = yield call(insert, action.request);
        yield put(getCreateIncTranSucResp(response));
    } catch (e) {
        // do something with the error, such as dispatching an error action with yield put
    }
}

function createEventChannelToGetData(){
  const listener = eventChannel(
      emit => {
          database.ref('items')
          .on('value', data => emit(data.val()));
              return () => database.ref('items').off(listener);
      }
  );
  return listener;
}

// Get Incentive Transaction List
function* getIncentiveList(){
  const getDataChannel = createEventChannelToGetData();
  while(true) {
      const item = yield take(getDataChannel);
      yield put(getIncTranListSucResp(item));
  }
}

export default function* rootSaga(params){
  yield takeEvery(Types.LOGIN_USER, fetchLoginUser);
  yield takeEvery(Types.LOGOUT_USER, fetchLogoutUser);
  yield takeEvery(Types.GET_INCENTIVE_TRANSACTIONS_LIST, getIncentiveList);
  yield fork(createItemSaga);
  yield fork(updatedItemSaga);
}
