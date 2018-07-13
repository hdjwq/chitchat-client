import {takeEvery} from 'redux-saga/effects'
import info from './info'
import {INFO} from '../actionTypes/action'
export default function *() {
    yield takeEvery(INFO,info);
}