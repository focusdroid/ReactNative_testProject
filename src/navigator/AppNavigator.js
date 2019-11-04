import React from 'react';
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';

import WelcomePage from '../pages/WelcomePage';
import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage'

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
  }

},{
  initialRouteName: "HomePage"
})

export default createAppContainer(createSwitchNavigator({
  Init: InitNavigator,
  Main: MainNavigator,
}, {
  navigationOptions: {
    header: null
  }
}))
