import React from 'react';
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import { connect } from 'react-redux'
import { createReactNavigationReduxMiddleware, createReduxContainer } from 'react-navigation-redux-helpers'
export const rootCom = 'Init' // 设置根路由
import WelcomePage from '../pages/WelcomePage';
import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage'
import ResquestPage from '../pages/ResquestPage';
import AsyncStoragePage from '../pages/AsyncStoragePage';


/*配置欢迎页面，必须使用createSwitchNavigator，因为不能让这个页面在返回显示在屏幕上start*/
const InitNavigator = createStackNavigator({
  WelcomePage: {
    screen: WelcomePage,
    navigationOptions: {
      header: null, // 通过设置header设为null，来禁用StackNavigator的navigationBar
    }
  }
})
/*配置欢迎页面，必须使用createSwitchNavigator，因为不能让这个页面在返回显示在屏幕上end*/
/*创建使用页面*/
const MainNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      header: null
    }
  },
  DetailPage: {
    screen: DetailPage,
    navigationOptions: {
      // header: null,
    }
  },
  ResquestPage: {
    screen: ResquestPage,
    navigationOptions: {
      tabBarLabel: "fetch"
    }
  },
  AsyncStoragePage: {
    screen: AsyncStoragePage,
    navigationOptions: {
      tabBarLabel: '本地存储'
    }
  }
},{
  initialRouteName: "HomePage"
})

const NavInit = createSwitchNavigator({
  Init: InitNavigator,
  Main: MainNavigator,
}, {
  navigationOptions: {
    header: null
  }
})

export const RootNavigator =  createAppContainer(NavInit)

// 参数的顺序不能变
export const middleware = createReactNavigationReduxMiddleware(
  state => state.nav,
  'root'
)

// createReduxContainer 已经在最新的有变更
const AppWithNavigationState = createReduxContainer(RootNavigator, 'root')

const mapStateTpProps = state => ({
  state: state.nav
})

export default connect(mapStateTpProps)(AppWithNavigationState)
