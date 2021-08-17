import { applyMiddleware,createStore } from 'redux'
import todoReducer from '../reducer/todolist'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  todoReducer, 
  applyMiddleware(sagaMiddleware,logger),
  )

sagaMiddleware.run(rootSaga);

export default store