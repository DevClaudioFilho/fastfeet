import {all,takeLatest, call , put} from 'redux-saga/effects';

import history from '../../../services/history';
import api from "../../../services/api"

import {singInSucess, singFailure} from './actions'

export function* singIn({payload}) {
  try{
    const {email, password} = payload;

    const response = yield call(api.post, "sessions", {
      email,
      password
    });

    const {token ,user} = response.data;

    yield put(singInSucess(token, user));

    history.push('/packages');
  }
  catch(err){
    yield put(singFailure())
  }
}

export default all([takeLatest('@auth/SING_IN_REQUEST', singIn)])
