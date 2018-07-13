import {put,call} from 'redux-saga/effects'
import {INFO_START,INFO_END} from '../actionTypes/action'
import {info as infoFetch} from '../fetch'
export default function *info(action) {
       const {key,params}=action;
       put({INFO_START,key});
       const req= yield call(infoFetch[key],params);
       put({INFO_END,key})
}