import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducer'
import { middleware } from '../navigator/AppNavigator'

const logger = store =>next=>action=>{ // 自定义修改主题色中间件
  if (typeof action === 'function') {
    console.log('dispatchching a function')
  } else {
    console.log('dispatchching', action)
  }
  const result = next(action)
  console.log('nextState', store.getState())
}


const middlewares = [
  middleware,
  logger,
  thunk
]

// 创建store
export default createStore(reducers, applyMiddleware(...middlewares))
