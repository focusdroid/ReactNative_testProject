import React, {Component} from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import PopularPage from './PopularPage';
import TrendingPage from './TrendingPage';
import FavoritePage from './FavoritePage';
import MePage from './MePage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import NavigationUtil from '../navigator/NavigationUtil'

export default class HomePage extends Component {
  _tabNavigator () {
    return createAppContainer(createBottomTabNavigator({
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
    }))
  }
  render() {
    NavigationUtil.navigation = this.props.navigation;
    const Tab = this._tabNavigator()
    return <Tab/>;
  }
}
