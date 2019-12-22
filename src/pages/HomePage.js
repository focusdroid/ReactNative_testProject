import React, {Component} from 'react';
import NavigationUtil from '../navigator/NavigationUtil'
import DynamicTabNavigator from '../navigator/DynamicTabNavigator'
import { BackHandler } from 'react-native'
import { NavigationActions } from 'react-navigation'
import actions from '../action';
import {connect} from 'react-redux';

class HomePage extends Component {
  componentDidMount(): void {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }
  componentWillUnmount(): void {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }
  /*
  * 处理Android中物理返回键
  * https://reactnavigation.org/docs/en/redux-integration.html
  * @return {boolean}
  * */
  onBackPress = () => {
    const {dispatch, nav} = this.props
    if (nav.routes[1].index === 0) { // RootNavigator中的MainNavigator的index为0
      return false
    }
    dispatch(NavigationActions.back())
    return true
  }

  render() {
    NavigationUtil.navigation = this.props.navigation;
    return <DynamicTabNavigator />;
  }
}

const mapStateToProps = state => ({
  nav: state.nav
})

export default connect(mapStateToProps)(HomePage)
