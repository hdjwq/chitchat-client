import {takeEvery} from 'redux-saga/effects'
import info from './info'

export default function *() {
    yield takeEvery("test",info);
    yield takeEvery("uu",info)
}