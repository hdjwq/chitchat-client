import {createStore,applyMiddleware} from 'redux'
import reducer from "../reducer"
import createSagaMiddleware from 'redux-saga'

export default ()=>{
    const sageMiddleware=createSagaMiddleware();
    return {
        ...createStore(reducer,applyMiddleware(sageMiddleware)),
        run:sageMiddleware.run
    }
}