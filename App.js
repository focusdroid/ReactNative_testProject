import React, { Component } from 'react'
import { Provider } from 'react-redux'
import AppNavigator from './src/navigator/AppNavigator';
import store from './src/store/index'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    )
  }
}
