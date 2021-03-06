import React, {Component} from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { connect } from 'react-redux'

import PopularPage from '../pages/PopularPage';
import TrendingPage from '../pages/TrendingPage';
import FavoritePage from '../pages/FavoritePage';
import MePage from '../pages/MePage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import NavigationUtil from '../navigator/NavigationUtil'
import { BottomTabBar } from 'react-navigation-tabs'

const TABS = {
    PopularPage: {
      screen: PopularPage,
      navigationOptions: {
        tabBarLabel: '最热',
        tabBarIcon: ({tintColor, focused}) => (
          <MaterialIcons
            name={'whatshot'}
            size={26}
            style={{color: tintColor}}
          />
        )
      }
    },
    TrendingPage: {
      screen: TrendingPage,
      navigationOptions: {
        tabBarLabel: '趋势',
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons
            name={'md-trending-up'}
            size={26}
            style={{color: tintColor}}
          />
        )
      }
    },
    FavoritePage: {
      screen: FavoritePage,
      navigationOptions: {
        tabBarLabel: '收藏',
        tabBarIcon: ({tintColor, focused}) => (
          <MaterialIcons
            name={'favorite'}
            size={26}
            style={{color: tintColor}}
          />
        )
      }
    },
    MePage: {
      screen: MePage,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: ({tintColor, focused}) => ( // 这里是小括号
          <Entypo
            name={'user'}
            size={26}
            style={{color: tintColor}}
          />
        )
      }
    }
}

class DynamicTabNavigator extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true // 禁止显示底部的warnning
  }
  _tabNavigator () { // 动态配置底部切换栏
    if (this.Tabs) {
      return this.Tabs
    }
    const {PopularPage, TrendingPage, FavoritePage, MePage} = TABS;
    const tabs = {PopularPage, TrendingPage, FavoritePage, MePage}
    PopularPage.navigationOptions.tabBarLabel = '最火' // 动态配置文字和图表
    PopularPage.navigationOptions.tabBarIcon = ({tintColor, focused}) => (
      <Entypo
        name={'user'}
        size={26}
        style={{color: tintColor}}
      />
    )
    return this.Tabs = createAppContainer(createBottomTabNavigator(tabs, {
      tabBarComponent: props => {
        return <TabBarComponent theme={this.props.theme} {...props}/>
      }
    }))
  }
  render() {
    const Tab = this._tabNavigator()
    return <Tab/>;
  }
}
class TabBarComponent extends Component{
  constructor(props) {
    super(props)
    this.theme = {
      tintColor: props.activeTintColor,
      updateTime: new Date().getTime(),
    }
  }
  render() {
    return <BottomTabBar
      {...this.props}
      activeTintColor={this.props.theme}
    />
  }
}

const mapStateToProps = state => ({
  theme: state.theme.theme
})

const mapDispatchToProps = dispatch => ({
})


export default connect(mapStateToProps, mapDispatchToProps)(DynamicTabNavigator)
